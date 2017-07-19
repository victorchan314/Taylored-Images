# Taylored Images

This extension replaces all images on a webpage with pictures of Taylor Swift.

The extension will run every time you travel to a new page or click the browser action. However, if you simply run some javascript on a page (such as searching on Google without refreshing or clicking a button that performs an action) that reveals new images that previously had not been shown, the extension will not detect those changes.

The extension is based on Google's Custom Search API. It finds every `img` node on a page and replaces the source of that node with a search result from the Custom Search API, correctly scaling and cropping the images so that no other elements on the page are affected.

In order to download and use this extension, you will have to follow these steps:
1. Login to your preferred Google account (or create one if you do not already have one)
2. Go to [Google Custom Search](https://cse.google.com/cse/all)
3. Click "New search engine" and create a new search engine
    - In "Sites to search" type "www.google.com"
    - Name the engine whatever you want
4. Go to "Edit search engine" and click your newly created engine
    - Turn "Image search" to ON and "Speech Input" to OFF
    - Under "Sites to search" delete Google
    - Next to "Sites to search" click the dropdown box and select "Search the entire web but emphasize included sites"
    - Click "Search engine ID" and save the ID somewhere--you will need this later
5. Go to [Google Credentials](https://console.developers.google.com/apis/credentials)
6. Click "Create credentials" and select API key
7. Copy your API key--you will need this later
8. Create a file called `keys.js` inside your Chrome Extension repository
9. Inside the file, create an object called `keys`
10. Inside the keys object, add your Custom Search Engine ID as `SEARCH_ENGINE_ID` and your API key as `API_KEY`

Your `keys.js` file should look like this:

var keys = {
    SEARCH_ENGINE_ID : "my_search_engine_id";
    API_KEY : "my_api_key";
}

Note: If you use the free edition of Google Custom Search, you will only be able to replace 100 images per day. That means that if you have a webpage with 50 images and you refresh it twice, you are out of luck! You will no longer be able to bask in the glory of Taylor Swift. Check out the [Custom Search Engine pricing](https://developers.google.com/custom-search/json-api/v1/overview#pricing).

Otherwise, you are good to go! Enable the extension, agree to the permissions, and enjoy the beauty of Taylor Swift!
