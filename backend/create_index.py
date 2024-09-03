from bs4 import BeautifulSoup
import json
import requests
from typing import Dict
import utils

def get_genres(genre_dict: Dict):
    page = requests.get("https://www.albumoftheyear.org/genre.php", headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    main_genres = soup.find_all('div', {'style': "margin-bottom:3px; font-size:12px;"})

    for main_genre in main_genres:
        a = main_genre.find('a')
        href = a.get('href')

        genre_id = utils.genre_id_from_href(href)
        name = a.text
        best_albums_page = f"https://www.albumoftheyear.org/ratings/user-highest-rated/all/{utils.genre_name_from_href(href)}/"

        if genre_id not in genre_dict:
            print(name, genre_id)
            genre_dict[genre_id] = {'name': name, 'best_albums_page': best_albums_page}
            get_subgenres(genre_dict, href)

def get_subgenres(genre_dict: Dict, href: str):
    url = f"https://www.albumoftheyear.org{href}"
    page = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    sub_genres = soup.find_all('div', class_='listItem')

    for sub_genre in sub_genres:
        a = sub_genre.find('a')
        sub_href = a.get('href')

        genre_id = utils.genre_id_from_href(sub_href)
        name = a.text
        best_albums_page = f"https://www.albumoftheyear.org/ratings/user-highest-rated/all/{utils.genre_name_from_href(sub_href)}/"

        if genre_id not in genre_dict:
            print(name, genre_id)
            genre_dict[genre_id] = {'name': name, 'best_albums_page': best_albums_page}
            get_subgenres(genre_dict, sub_href)

if __name__ == "__main__":
    genre_dict = {}
    get_genres(genre_dict)

    with open(utils.INDEX_SRC, 'w') as f:
        json.dump(genre_dict, f, sort_keys=True, indent=4)
    