import randomSleep as randSleep
from ScrapeGameData import scrapeGameData
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup

baseUrl = 'https://www.metacritic.com'

# random-based sleeper, i.e thread pause. It aims to reduce number of requests on a period of time
randSleep_obj = randSleep.randSleep(3, 5, 12, 15)

def titleNavigator(currentPageUrl, platform):
        
    req = Request(currentPageUrl , headers={'User-Agent': 'Mozilla/5.0'})
    gameWebpage = urlopen(req).read()
    pageSoup = soup(gameWebpage, "html.parser")
    
    titleNumbers = len(pageSoup.findAll("a", "title"))
        
    for x in range(titleNumbers):
        containers = pageSoup.findAll("a", "title")[x] #finds all hyperlinks with a title, takes title numbers from 0 - (titleNumbers-1)
        gameLink = containers['href']
        gameUrl = baseUrl + gameLink
        
        scrapeGameData(gameUrl, platform) 
        # randomly, pause processing in between requests
        randSleep_obj.fireRandomSleep()
       