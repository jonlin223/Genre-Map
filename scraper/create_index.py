from bs4 import BeautifulSoup
import requests
from typing import Set
import utils

# TODO implement genre set stuff
# TODO Finish

def get_genres(genre_set: Set):
    page = requests.get("https://www.albumoftheyear.org/genre.php", headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    main_genres = soup.find_all('div', {'style': "margin-bottom:3px; font-size:12px;"})

    for main_genre in main_genres:
        a = main_genre.find('a')
        href = a.get('href')
        genre_id = utils.genre_id_from_href(href)

        name = a.text

        get_subgenres(genre_set, href)
        # print(name, genre_id)

def get_subgenres(genre_set: Set, href: str):
    url = f"https://www.albumoftheyear.org{href}"
    page = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(page.content, "html.parser")
    sub_genres = soup.find_all('div', class_='listItem')

    for sub_genre in sub_genres:
        a = sub_genre.find('a')
        href = a.get('href')
        genre_id = utils.genre_id_from_href(href)

        name = a.text

        print(name, genre_id)
        get_subgenres(href)

if __name__ == "__main__":
    genre_set = Set()
    get_subgenres("/genre/7-rock/")