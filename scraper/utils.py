def genre_id_from_href(href: str) -> int:
    """
    Extract a genre_id from an AOTY href. For example, input of '/genre/38-synthpop/'
    produces 38.
    """

    genre = href.lstrip('/genre/').rstrip('/')
    genre_id = genre.split('-')[0]
    return genre_id

def album_id_from_href(href: str) -> int:
    """
    Extract an album_id from an AOTY href. For example, input of '/album/1012480-magdalena-bay-imaginal-disk.php'
    produces 1012480.
    """

    album_id = int(href.lstrip('/album/').split('-')[0])
    return album_id