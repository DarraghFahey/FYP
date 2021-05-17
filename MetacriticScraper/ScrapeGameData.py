from FileHandler import fileWriterMetacriticGameDataCSV
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup

positiveUserScore = "metascore_w user large game positive"
mixedUserScore = "metascore_w user large game mixed"
negativeUserScore = "metascore_w user large game negative"
noUserScore =  "metascore_w user large game tbd"

def scrapeGameData(gameUrl, platform):
    
    req = Request(gameUrl , headers={'User-Agent': 'Mozilla/5.0'})
    gameWebpage = urlopen(req).read()
    gameSoup = soup(gameWebpage, "html.parser")

    titleDetails = gameSoup.find("h1") #finds title
    title = str(titleDetails).replace("<h1>", "").replace("</h1>", "").replace("amp;", "") #cleans the header file to just be the name and converts to a string

    platform = platform

    alsoOn = gameSoup.find("li", "summary_detail product_platforms")
    if (alsoOn != None):
        alsoOn = alsoOn.findAll("a", "hover_none")   
        for j in alsoOn :
            alsoOn_hrefLink = str(j['href'])
            alsoOn = str(alsoOn).replace(alsoOn_hrefLink, "")
        alsoOn = alsoOn.replace("<a class=\"hover_none\" href=\"\">", "").replace("</a>", "").replace("[", "").replace("]", "")
    else :
        alsoOn = "Exclusive"
    
    
    releaseDate = gameSoup.find("li", "summary_detail release_data")
    if (releaseDate != None):
        releaseDate = releaseDate.find("span", "data")
        releaseDate = str(releaseDate).replace("<span class=\"data\">", "").replace("</span>", "")
    
    developer = gameSoup.find("li", "summary_detail developer")
    if (developer != None):
        developer = developer.find("a", "button")
        developer_hrefLink = str(developer['href'])
        developer = str(developer).replace("<a class=\"button\" href=\"", "").replace(developer_hrefLink, "").replace("</a>", "").replace("\">", "")
    
    publisher = gameSoup.find("li", "summary_detail publisher")
    if (publisher != None):
        publisher = publisher.find("a")
        publisher_hrefLink = str(publisher['href'])
        publisher = str(publisher).replace("<a href=\"", "").replace(publisher_hrefLink, "").replace("</a>", "").replace("\">", "").replace("\n", "").strip(" ")
        
    genre = gameSoup.find("li", "summary_detail product_genre")
    if (genre != None):
        genre = genre.findAll("span", "data")
        genre = str(genre).replace("<span class=\"data\">", "").replace("</span>", "").replace("[", "").replace("]", "")
        
    metascore = gameSoup.find("div", "metascore_wrap highlight_metascore")
    if (metascore != None):
        metascore = metascore.findAll("span")[0]
        metascore = str(metascore).replace("<span>", "").replace("</span>", "").replace("<span class=\"desc\">", "").replace("\n", "").strip(" ")
        
    userScore = gameSoup.find("div", "userscore_wrap feature_userscore")
    if (userScore != None):
        userScore = userScore.find("a").find("div")
        userScore = str(userScore).replace("<div class=\"", "").replace("</div>", "").replace(positiveUserScore, "").replace(mixedUserScore, "").replace(negativeUserScore, "").replace(noUserScore, "").replace("\">", "")
        
    ageRating = gameSoup.find("li", "summary_detail product_rating")
    if (ageRating != None):
        ageRating = ageRating.find("span", "data")
        ageRating = str(ageRating).replace("<span class=\"data\">", "").replace("</span>", "").replace("[", "").replace("]", "")
        
    print("Current Game", title)
    fileWriterMetacriticGameDataCSV(title, platform, alsoOn, releaseDate, developer, publisher, genre, metascore, userScore, ageRating)
    
    #time.sleep(1)
    
    