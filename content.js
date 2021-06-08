// Indicate that Sylvester is running
console.log("😾 Sylvester is running...");

// Controller if timeline exists.
// Function changes false to true once the timelineWrapper is loaded.
let timelineWrapperExists = false;

// Select the Twitter body
const body = document.querySelector('body');

// Select the Twitter Logo
// <div dir="auto" class="css-901oao r-1awozwy r-13gxpu9 r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-b88u0q r-1777fci r-rjixqe r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0"><span style="font-size: 2rem;">😾</span></div>
// const twitterLogo = document.querySelector('div.css-1dbjc4n.r-dnmrzs.r-1vvnge1 > h1 > a > div');
// twitterLogo.innerHTML = '<span style="font-size: 2rem;">😾</span>';

// Select the React Root
const reactRoot = document.querySelector('#react-root')

// Select the Twitter Timeline wrapper
const timeline = document.querySelector('[aria-label="Timeline: Your Home Timeline"] > div');

const focusedTimeline = document.querySelector('[aria-labelledby="accessible-list-9"]');
console.log(focusedTimeline);


// Set mutationobserver options for observeBody
// OBSERVE THE CHANGES IN BODY
// Greate guide: https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/
const observerOptions = {
  childList: true,
  attributes: false,
  subtree: true,
}

const observeBody = (mutationList, observer) => {
  for (const {addedNodes} of mutationList) {

    for (const node of addedNodes) {
      
      if (!node.tagName) continue;
      console.log(node);

      // if (addedNode.getAttributes('aria-label') === "Timeline: Your Home Timeline") {
      //   console.log(`TIMELINE IS LOADED ///////`);
      // };

      // if (addedNode.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild) {
      //           console.log(`The tweet is a social context Tweet.`);
      // } else {
      //   console.log(`The tweet is NOT a social context Tweet.`);
      // }
    }
  }
}


const observer = new MutationObserver(observeBody);
observer.observe(reactRoot, observerOptions);

// attach mutationobserver to:
// '[aria-label="Timeline: Your Home Timeline"]' > div

// function init() {
//   const executeThings = (mutationList, observer) => {
//     console.log(`Mutation Observer is mounted...`);
//     mutationList.forEach( (mutation) => {
//       if (mutation.type === 'childList') {
//         console.log(`Mutation Observer is working...`);
//       }
//     });
//   }

//   const observer = new MutationObserver(executeThings);
//   observer.observe(timeline, observerOptions);
// }

// Change "Follower count" on profile with 😾
const changeFollowerCount = () => {
  let followerCount = document.querySelector('[href$="/followers"] > span:nth-child(1) > span');
  followerCount.innerHTML = '😾';
}

// Hide "Who to follow" Window


// Hide "Topics to follow" Window

//
// Social Context Manipulations
//

// Use MutationObserver for ongoing changes
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

// Remove "Britney Spears and Spice Girls follow" 
const removeXFollow = () => {
  let xFollow = document.querySelectorAll('[d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"]');

  xFollow.forEach(follow => {
    // follow.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();

    follow.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  })
}

// Remove "Britney Spears liked"
const removeXLiked = () => {
  let xLiked = document.querySelectorAll('[d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"]');

  xLiked.forEach(liked => {
    // liked.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    liked.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  })
}

