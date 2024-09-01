from bs4 import BeautifulSoup
import requests
from typing import Dict, List, Set
import utils

def scrape_album(album_id: int) -> Dict[str, List[int]]:
    """
    Scrape genres and sub-genres from an album's AOTY page. Album page should be inputted as its AOTY album_id. For example, 
    https://www.albumoftheyear.org/album/1012480-magdalena-bay-imaginal-disk.php has the id 1012480.

    Output is formatted as a dictionary with the format: {'main_genres': [int], 'sub_genres': [int]}
    """

    # TODO typing of return value

    page = requests.get(f"https://www.albumoftheyear.org/album/{album_id}", headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find_all('a', {'itemprop': 'genre'})

    main_genres = []
    sub_genres = []

    for result in results:
        secondary = result.find('div')
        href = result.get('href')

        if secondary:
            # print(f"{result.get('href')} is a subgenre")
            sub_genres.append(utils.genre_id_from_href(href))
        else:
            # print(f"{result.get('href')} is a genre")
            main_genres.append(utils.genre_id_from_href(href))
    
    return {'main_genres': main_genres, 'sub_genres': sub_genres}

def scrape_albums(album_set: Set, url: str):
    """
    Scrape albums from AOTY page for best {genre} albums of all time by user score.
    Does not scrape albums whose id are already in the album_set. album_set is updated as this function runs.
    
    Returns a list of {TODO}
    """

    # TODO typing of return value

    page = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    results = soup.find_all('a', {'itemprop': 'url'})

    albums = []

    for result in results:
        href = result.get('href')
        album_id = utils.album_id_from_href(href)

        if album_id not in album_set:
            album = scrape_album(album_id)
            albums.append(album)
            album_set.add(album_id)
    
    return albums

if __name__ == "__main__":
    album_set = set()

    print(scrape_albums(album_set, "https://www.albumoftheyear.org/ratings/user-highest-rated/all/synthpop/1/"))
    print(album_set)
    # print(scrape_album(1012480))