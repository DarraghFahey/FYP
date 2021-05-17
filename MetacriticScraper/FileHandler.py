import csv

def fileWriterMetacriticGameDataCSV(title, platform, alsoOn, released, developer, 
                                    publisher, genre, metascore, userScore, ageRating):
    
    fileName = platform + "Data.csv"
    fieldNames = ['Title', 'Platform', 'Also On', 'Released', 'Developer',
                  'Publisher', 'Genre(s)', 'Metascore', 'User Score', 'Age Rating']
    with open(fileName, 'a', newline = '') as file:
        
        writer = csv.DictWriter(file, fieldnames=fieldNames)
        writer.writerow({'Title': title, 'Platform': platform, 'Also On': alsoOn, 'Released': released, 
                         'Developer': developer,'Publisher': publisher, 'Genre(s)': genre, 
                         'Metascore': metascore, 'User Score': userScore, 'Age Rating':ageRating})
        
def fileWriterRatingsCSV(uuid, ugid, rating):
    from datetime import date
    date = date.today()
    fileName = str(date) + '-ratings.csv'
    fieldNames = ['uuid', 'ugid', 'rating']
    with open(fileName, 'a', newline = '') as file:
        
        writer = csv.DictWriter(file, fieldnames=fieldNames)
        writer.writerow({'uuid': uuid, 'ugid': ugid, 'rating': rating})
        

def fileWriterPredicitonsCSV(uuid, ugid, prediciton):
    from datetime import date
    date = date.today()
    fileName = str(date) + '-predicitons.csv'
    fieldNames = ['uuid', 'ugid', 'prediciton']
    with open(fileName, 'a', newline = '') as file:
        
        writer = csv.DictWriter(file, fieldnames=fieldNames)
        writer.writerow({'uuid': uuid, 'ugid': ugid, 'prediciton': prediciton})