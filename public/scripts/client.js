/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweetData) {
    const $tweet = `<article>
    <header class="tweet-header">
      <div class="left-header">
      <img src='${tweetData.user.avatars}'>
      <h4 class="username">${tweetData.user.name}</h4>
      </div>
      <h4 class="right-header">${tweetData.user.handle}</h4>
    </header>
      <p>${tweetData.content.text}</p>
    <footer class="footer-btm">
     <output name="date" class="date" for="tweet-container">${tweetData.created_at}</output>
      <output  class="icons">🏴🔁🖤</output>
    </footer>
  </article>`;
    $('#tweet-container').append($tweet);
 
  }

  const renderTweets = function(tweets) {
      tweets.forEach(tweet => {
        createTweetElement(tweet)
      }) 
  }

  const $submit = $('.submit');
  $submit.on('click', function() {
    event.preventDefault();
    let tweetText = $('#tweet-text').serialize();
    $.ajax(tweetText, { method: POST })
    .then(()=> {
      return $.ajax(tweetText);
    })
    
  })

    const tweetData = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
        },
      "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
      "created_at": 1461116232227
   }
  
   const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data);
    // createTweetElement(tweetData)
});


