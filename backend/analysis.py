from collections import Counter
import itertools
import json
import os
from typing import List, Dict

from my_types import AlbumGenre
import utils

# For each album
    # For each main genre, create a link with all other genres
        # Link with another main genre worth 1
        # Link with a subgenre worth 0.5
    # For each subgenre, create a link with all other subgenres (since links with main genres already handled above)
        # Link with anoter subgenre worth 0.25

# Output format
    # {(genre_id_1, genre_id_2): weight} -> List of {source: id1, target: id2, id: 'id1-id2', size} -> EDGES
    # {id: label} -> List of {id, label}

# A potential algorithm
    # Number of albums where both genres appear
        # we already have a form of this that takes subgenre into account
    # Number of albums that each genre appears in
    # Number of albums total
    # algo : weight = (A and B) / (A or B)
        # A or B = A + B - (A and B)
    # TODO consider ISSUE
        # Weight scales off popularity
        # e.g. Even if genre B is very similar to genre A, if Genre B is very unpopular compared to A, weight will be lowered

MAIN_GENRE_VAL = 1
SUB_GENRE_VAL = 0.5

def get_album_counts(data_src: str) -> Dict[int, int]:

    if not os.path.exists(data_src):
        raise Exception(f"Path {data_src} does not exist.")
    
    with open(data_src) as f:
        album_genres: List[AlbumGenre] = json.load(f)
    
    main_count = Counter()
    sub_count = Counter()
    for album_genre in album_genres:
        main_count.update(album_genre['main_genres'])
        sub_count.update(album_genre['sub_genres'])
    
    counts = dict(main_count)
    for (id, num) in sub_count.items():
        counts[id] = counts.get(id, 0) + (SUB_GENRE_VAL * num)
    
    return counts

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
        
    return [{'id': str(id), 'label': label} for (id, label) in nodes.items()]

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
        
        # For now, skipping subgenre to subgenre combinations
        # TODO think about this further
        """ sub_sub = itertools.combinations(sub_genres_sorted, 2)
        for key in sub_sub:
            edges[key] = edges.get(key, 0) + 0.25 """
    
    album_counts = get_album_counts(data_src)

    def calc_weight(num_a: int, num_b: int, num_ab: int):
        return  10 * num_ab / (num_a + num_b - num_ab)

    return [{'source': str(id1), 'target': str(id2), 'id': f"{id1}-{id2}", 'size': calc_weight(album_counts[id1], album_counts[id2], weight)} for ((id1, id2), weight) in edges.items()]


if __name__ == "__main__":
    nodes = get_nodes("./data/intermediate.json")
    with open("./data/nodes.json", "w") as f:
        json.dump(nodes, f)

    edges = get_edges("./data/intermediate.json")
    with open("./data/edges.json", "w") as f:
        json.dump(edges, f)
    