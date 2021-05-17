from MetacriticScraper.FileHandler import fileWriterPredicitonsCSV
from surprise import SVD, Dataset, Reader


def prediction():
    
    
    file_path = ('C:/Users/darra/OneDrive - GMIT/College/4th Year/Project/Project/postgres/' + '2021-04-05-ratings.csv')
    
    reader = Reader(line_format='user item rating', sep=',', rating_scale=(1, 10))
    data = Dataset.load_from_file(file_path, reader=reader)
    
    algo = SVD()
    trainset = data.build_full_trainset()
    print('Training Model')
    algo.fit(trainset)
    print('Done')
    
    print('Creating predictions for each user...')
    print('Number of users:', trainset.n_users)
    print('Number of items:', trainset.n_items)
    percent_complete = 0
    for user_index in range(trainset.n_users):
        # All items this user HAS rated
        user_items = set([j for (j, _) in trainset.ur[user_index]])
    
        # All items this user has NOT rated
        items_user_has_not_rated = [trainset.to_raw_iid(
            i) for i in trainset.all_items() if i not in user_items]
    
        # Get the actual user_id from index
        user_id = trainset.to_raw_uid(user_index)
    
        # Make predictions for all items this user has NOT rated
        predictions_for_items_not_rated_by_user = []
        for iid in items_user_has_not_rated:
            pred = algo.predict(user_id, iid)
    
            predictions_for_items_not_rated_by_user.append([pred.iid, pred.est])
            fileWriterPredicitonsCSV(user_id, iid, pred.est)
    
    
        # Print percent complete so its easier to track execution of algorithm in logs
        if user_index % int(trainset.n_users / 20) == 0:
            print('Percent complete: ', percent_complete, '%')
            percent_complete += 5
    
                