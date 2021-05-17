import psycopg2
from config import config
from MetacriticScraper.FileHandler import fileWriterRatingsCSV

def get_recommendation():
    conn = None
    try:
        params = config()
        conn = psycopg2.connect(**params)
        cur = conn.cursor()
        cur.execute("SELECT uuid, ugid,rating FROM user_game_recomendations ORDER BY ugid")
        row = cur.fetchone()

        while row is not None:
            print(row)
            uuid = row[0] 
            ugid = row[1]
            rating = row[2]
            fileWriterRatingsCSV( uuid, ugid, rating)
            row = cur.fetchone()

        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            