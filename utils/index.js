// Higher-order function for async/await error handling
export const catchErrors = (fn) =>
  function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };

export const IGData = [
  {
    id: "1",
    name: "John",
    storyUrl: "default1",
    postUrl: "post1",
    location: "Atlanta, Georgia",
    caption: "Some days start better than others.",
    comment: "This is a great pic!",
  },
  {
    id: "2",
    name: "Mike",
    storyUrl: "default2",
    postUrl: "post2",
    location: "Houston, Texas",
    caption: "Today I will be as useless as the ‘g’ in lasagna.",
    comment: "You are thriving!",
  },
  {
    id: "3",
    name: "Bill",
    storyUrl: "default3",
    postUrl: "post3",
    location: "Fort Worth, Texas",
    caption:
      "Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste.",
    comment: "The goat is here",
  },
  {
    id: "4",
    name: "Matt",
    storyUrl: "default4",
    postUrl: "post4",
    location: "Marrietta, Georgia",
    caption:
      "There is no such thing as a perfect person, but someone’s heart can have a perfect intention.",
    comment: "Literally the best",
  },
  {
    id: "5",
    name: "Sara",
    storyUrl: "default5",
    postUrl: "post5",
    location: "Johns Creek, Georgia",
    caption: "Throw sass around like confetti.",
    comment: "So fun!",
  },
  {
    id: "6",
    name: "Lisa",
    storyUrl: "default6",
    postUrl: "post6",
    location: "Austin, Texas",
    caption: "Hella heart eyes for you.",
    comment: "You are amazing!",
  },
  {
    id: "7",
    name: "Sue",
    storyUrl: "default7",
    postUrl: "post7",
    location: "San Antonio, Texas",
    caption: "Decluttering my life like Marie Kondo.",
    comment: "Wow! So cool!",
  },
  {
    id: "8",
    name: "Lee",
    storyUrl: "default8",
    postUrl: "post8",
    location: "Arlington, Texas",
    caption: "Life is simple. It’s just not easy",
    comment: "Howdy!!",
  },
  {
    id: "9",
    name: "Amy",
    storyUrl: "default9",
    postUrl: "post9",
    location: "New York, New York",
    caption: "You can’t live a full life on an empty stomach.",
    comment: "You're the best!!!",
  },
];
