
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const createTweetElement = function(tweetData) {
    const escape =  function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    const $tweet = `<article>
    <header class="tweet-header">
      <div class="left-header">
      <img src='${escape(tweetData.user.avatars)}'>
      <h4 class="username">${escape(tweetData.user.name)}</h4>
      </div>
      <h4 class="right-header">${escape(tweetData.user.handle)}</h4>
    </header>
      <p>${escape(tweetData.content.text)}</p>
    <footer class="footer-btm">
     <output name="date" class="date" for="tweet-container">${escape(tweetData.created_at)}</output>
      <output  class="icons">🏴🔁🖤</output>
    </footer>
  </article>`;
    $('#tweet-container').prepend($tweet);
  };

  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      createTweetElement(tweet); 
    });
  };

  const $newTweet = $('#new-tweet');
  $newTweet.submit('click', function(event) {
     event.preventDefault();
    let tweetText = $('#tweet-text').serialize();
    if (($('textarea').val().length > 0) && ($('textarea').val().length <= 140)) {
      $.ajax({ method: 'POST', url: '/tweets', data: tweetText })
      .then((res) => {
        $.ajax({ method: 'GET', url: '/tweets'})
          .then((res) => {
            $('#tweet-text').val('')
            $('.counter').val('140')
            renderTweets(res)
      }) 
    })
    } else if ($('textarea').val().length === 0) {
      $('.c-no-text').slideDown("slow").delay(1500).slideUp("slow");
    } else {
      $('.c-error').slideDown("slow").delay(1500).slideUp("slow");
    }
  });
});


