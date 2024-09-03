from typing import TypedDict, List

class AlbumGenre(TypedDict):
    main_genres: List[int]
    sub_genres: List[int]