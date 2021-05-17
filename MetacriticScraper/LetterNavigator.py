
import randomSleep as randSleep
from TitleNavigator import titleNavigator
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup

# random-based sleeper, i.e thread pause. It aims to reduce number of requests on a period of time
randSleep_obj = randSleep.randSleep(3, 5, 12, 15)

def letterNavigator(subUrl, platform):
    
    baseUrl = 'https://www.metacritic.com'
    url = baseUrl + subUrl
    pageLetters = ["", "/a", "/b", "/c", "/d", "/e", "/f", "/g", "/h", "/i", "/j", "/k", "/l", "/m",
                   "/n", "/o", "/p", "/q", "/r", "/s", "/t", "/u", "/v", "/w", "/x", "/y", "/z"]
    
    
    for i in range(len(pageLetters)):
        currentLetterUrl = url + pageLetters[i] + "?view=detailed"
        req = Request(currentLetterUrl , headers={'User-Agent': 'Mozilla/5.0'})
    
        webpage = urlopen(req).read()
        page_soup = soup(webpage, "html.parser")
        
        pageNumbers = len(page_soup.findAll("li", "page")) # gets the amount of pages under that letter
        print(pageLetters[i])
        
        if (pageNumbers == 0):
            currentPageUrl = currentLetterUrl
            
            titleNavigator(currentPageUrl, platform)
            randSleep_obj.fireRandomSleep()
            
        else :
            for j in range(pageNumbers):
                currentPageUrl = currentLetterUrl + "&page=" + str(j)
                
                titleNavigator(currentPageUrl, platform)
                randSleep_obj.fireRandomSleep()
                
                                