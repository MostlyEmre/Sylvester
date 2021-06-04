// Indicate that Sylvester is running
console.log("😾 Sylvester is running...");

// Hide "Trends for you" Window
let trendWindow = document.querySelector('[aria-label="Timeline: Trending now"]');
trendWindow.style.display = 'none';

// Hide "Who to follow" Window


// Hide "Topics to follow" Window

//
// Hide Tweet "Like" Counts
// > Get a list of Like counts
let tweetLikeCounts = document.querySelectorAll('[data-testid="like"] > div > div:nth-child(2)');

// > Hide each Like count
tweetLikeCounts.forEach(likeCount => {
  likeCount.style.display = 'none';
})
