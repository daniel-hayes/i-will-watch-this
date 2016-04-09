# I Will Watch This

![Demo](http://i.imgur.com/vDFYLdm.gif)

This project was mostly an experiment to gain a better understanding of React. It uses [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to search for new movies to add to your list, and stores your saved movies in [Firebase](https://www.firebase.com/) Database. You can easily make your own version of this app by adding a config file to your project that will store your API keys.

My current `config.js` file is located at the root of my project and is set up like this:
```js
const globalConfig = {
  apiKey: 'TMDb API KEY',
  posterPath: 'https://image.tmdb.org/t/p/w185', // movie poster url
  firebaseUrl: 'https://YOUR-PROJECT-URL.firebaseio.com'
};

export default globalConfig;
```
I am using Tyler McGinnis' [re-base](https://github.com/tylermcginnis/re-base) to communicate with Firebase because ES6 classes do not support mixins.
