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

# Output format
    # {(genre_id_1, genre_id_2): weight} -> List of {source: id1, target: id2, id: 'id1-id2'} -> EDGES
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

# def get_edges(data_src: str):
    

if __name__ == "__main__":
    print(get_nodes("./data/basic.json"))