var display = document.getElementById("display");
var quoteText = document.getElementById("quoteText");
var quoteAuthor = document.getElementById("quoteAuthor");
var authorImg = document.getElementById("authorImg");
display.addEventListener("click", displayQuotes);

var quotes = [
  {
    text: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
    img: "./images/Oscar Wilde.jpg",
  },
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
    img: "./images/Albert Einstein.jpg",
  },
  {
    text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
    img: "./images/Bernard M. Baruch.jpg",
  },
  {
    text: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
    img: "./images/Mae West.jpg",
  },
  {
    text: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
    img: "./images/Robert Frost.jpg",
  },
  {
    text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "― J.K. Rowling",
    img: "./images/J.K. Rowling.jpg",
  },
  {
    text: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
    img: "./images/Mark Twain.jpg",
  },
  {
    text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author: "― Maya Angelou",
    img: "./images/Maya Angelou.jpg",
  },
  {
    text: "“A friend is someone who knows all about you and still loves you”",
    author: "― Elbert Hubbard",
    img: "./images/Elbert Hubbard.jpg",
  },
  {
    text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "― Martin Luther King Jr",
    img: "./images/Martin Luther King Jr.jpg",
  },
  {
    text: "“It is better to be hated for what you are than to be loved for what you are not.”",
    author: "― Andre Gide",
    img: "./images/Andre Gide.jpg",
  },
  {
    text: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
    img: "./images/Ralph Waldo Emerson.jpg",
  },
  {
    text: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
    img: "./images/Mahatma Gandhi.jpg",
  },
];

function contentOnPage(index) {
  authorImg.innerHTML = `<img src="${quotes[index].img}" alt="${quotes[index].author}-img" class="rounded-circle"></img>`;
  quoteText.innerHTML = quotes[index].text;
  quoteAuthor.innerHTML = quotes[index].author;
}

var index = 0;
function displayQuotes() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  while (index === randomIndex)
    randomIndex = Math.floor(Math.random() * quotes.length);
  index = randomIndex;
  contentOnPage(randomIndex);
}
