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

  const $newTweet = $('#new-tweet');
  $newTweet.submit('click', function(event) {
      event.preventDefault();
      let tweetText = $('#tweet-text').serialize();
      if (($('textarea').val().length > 0) && ($('textarea').val().length <= 140)) {
        $.ajax({ method: 'POST', url: '/tweets', data: tweetText })
        .then(()=> {
          $.ajax({ method: 'GET', url: '/tweets'}).then((res) => {
            $('#tweet-container').empty()
            renderTweets(res);
          }) 
        })
      } else if ($('textarea').val().length === 0) {
           alert('Nothing to Tweet!')
      } else {
           alert('Tweet too big!');
      }
  })
});


