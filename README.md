# Uber-Eats-react-native 

Learning react native by trying to mimic the Uber eats app. App features search functionality to filter restaurants either by delivery or pickup. A Google places powered searchbar lets the user select a city as well.

To run the app, you would need the API keys for Google Places API and Yelp. To create/fetch them, navigate to [Google console](https://console.cloud.google.com/) and the [YELP console](https://www.yelp.com/developers/documentation/v3). Once you have the values handy, you can plug them into Searchbar.js and Home.js file. 

To download all the dependencies, run

```
yarn install
```

App also has a local json server that can be used for testing. For run the local server, run
```
json-server db.json
```

followed by 
```
yarn ios
```
