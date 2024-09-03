import json
import os

from my_types import AlbumGenre

# For each album
    # For each main genre, create a link with all other genres
        # Link with another main genre worth 1
        # Link with a subgenre worth 0.5
    # For each subgenre, create a link with all other subgenres (since links with main genres already handled above)
        # Link with anoter subgenre worth 0.25

# Output format
    # {(genre_id_1, genre_id_2): weight} -> List of {source: id1, target: id2, id: 'id1-id2'} -> EDGES
    # {id: label} -> NODES

def get_nodes(data_src: str):
    nodes = {}
    
    if not os.path.exists(data_src):
        raise Exception(f"Path {data_src} does not exist.")
    
    with open(data_src) as f:
        album_genres: AlbumGenre = json.load(f)
        print(album_genres)

if __name__ == "__main__":
    get_nodes("./data/basic.json")