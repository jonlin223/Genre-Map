import itertools
import json
import os
from typing import List

from my_types import AlbumGenre
import utils

# For each album
    # For each main genre, create a link with all other genres
        # Link with another main genre worth 1
        # Link with a subgenre worth 0.5
    # For each subgenre, create a link with all other subgenres (since links with main genres already handled above)
        # Link with anoter subgenre worth 0.25
    # TODO devise a format where there is a weight scaled off proportion of albums with a particular genre
        # right now not dealing with proportions

# Output format
    # {(genre_id_1, genre_id_2): weight} -> List of {source: id1, target: id2, id: 'id1-id2', size} -> EDGES
    # {id: label} -> List of {id, label}

def get_nodes(data_src: str):
    nodes = {}
    
    if not os.path.exists(data_src):
        raise Exception(f"Path {data_src} does not exist.")
    
    with open(data_src) as f:
        album_genres: List[AlbumGenre] = json.load(f)
    with open(utils.INDEX_SRC) as f:
        index = json.load(f)

    for album_genre in album_genres:
        for genre_id in album_genre['main_genres']:
            if genre_id not in nodes:
                nodes[genre_id] = index[str(genre_id)]['name']
        for genre_id in album_genre['sub_genres']:
            if genre_id not in nodes:
                nodes[genre_id] = index[str(genre_id)]['name']
        
    return [{'id': id, 'label': label} for (id, label) in nodes.items()]

def get_edges(data_src: str):
    edges = {}

    if not os.path.exists(data_src):
        raise Exception(f"Path {data_src} does not exist.")
    
    with open(data_src) as f:
        album_genres: List[AlbumGenre] = json.load(f)
    
    for album_genre in album_genres:
        main_genres_sorted = sorted(album_genre['main_genres'])
        sub_genres_sorted = sorted(album_genre['sub_genres'])

        main_main = itertools.combinations(main_genres_sorted, 2)
        for key in main_main:
            edges[key] = edges.get(key, 0) + 1

        main_sub = itertools.product(main_genres_sorted, sub_genres_sorted)
        for key in main_sub:
            edges[key] = edges.get(key, 0) + 0.5
        
        # TODO think about weights, what sort of combinations we should allow
        # For now, skipping subgenre to subgenre combinations
        """ sub_sub = itertools.combinations(sub_genres_sorted, 2)
        for key in sub_sub:
            edges[key] = edges.get(key, 0) + 0.25 """
    
    return [{'source': id1, 'target': id2, 'id': f"{id1}-{id2}", 'size': weight} for ((id1, id2), weight) in edges.items()]


if __name__ == "__main__":
    nodes = get_nodes("./data/basic.json")
    with open("./data/nodes.json", "w") as f:
        json.dump(nodes, f, indent=2)

    edges = get_edges("./data/basic.json")
    with open("./data/edges.json", "w") as f:
        json.dump(edges, f, indent=2)
    