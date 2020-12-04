/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// My solution starts at 191, sorry got a little carried away with the quotes.

/*** 
 * `quotes` array 
***/

var quotes = [

  {
      quote: "An adversary is more hurt by desertion than by slaughter.",
      source: "Vegetius"
  },
  
  {
      quote: "Few men are born brave, many become so through training and force of discipline.",
      source: "Vegetius"
  },
  
  {
      quote: "Let him who desires peace prepare for war",
      source: "Vegetius"
  },
  
  {
      quote: "Men grow tired of sleep, love, singing and dancing sooner than war.",
      source: "Homer"
  },

  {
      quote: "To those that flee comes neither power nor glory",
      source: "Homer"
  },

  {
      quote: "A glorious death is his who for his country falls.",
      source: "Homer"
  },

  {
      quote: "The valiant profit more their country than the finest, cleverest speakers",
      source: "Plautus"
  },

  {
      quote: "It is the brave man's part to live with glory, or with glory die.",
      source: "Sophacles"
  },

  {
      quote: "The outcome corresponds less to expectations in war than in any other case whatsoever.",
      source: "Livy"
  },

  {
      quote: "To a good general luck is important.",
      source: "Livy"
  },

  {
      quote: "All warfare is based on deception.",
      source: "Sun Tzu"
  },

  {
      quote: "He who knows when he can fight and when he cannot will be victorious.",
      source: "Sun Tzu"
  },

  {
      quote: "In war, numbers alone confer no advantage. Do not advance relying on sheer military power.",
      source: "Sun Tzu"
  },

  {
      quote: "In peace, sons bury their fathers, in war, fathers bury their sons.",
      source: "Herodotus"
  },

  {
      quote: "Far better is to have a stout heart always and suffer one's share of evils, than to be ever fearing what may happen.",
      source: "Herodotus"
  },

  {
      quote: "The proper arts of a general are judgement and prudence.",
      source: "Tacitus"
  },

  {
      quote: "A bad peace is even worse than a war",
      source: "Tacitus"
  },

  {
      quote: "The desire for safety stands against every great and noble enterprise.",
      source: "Tacitus"
  },

  {
      quote: "Only the dead have seen the end of the war",
      source: "Plato"
  },

  {
      quote: "In war we must always leave room for strokes of fortune, and accidents that cannot be foreseen.",
      source: "Polybios"
  },

  {
      quote: "A good general not only sees the way to victory, he also knows when victory is impossible.",
      source: "Polybios"
  },

  {
      quote: "A wise man in times of peace prepares for war.",
      source: "Horace"
  },

  {
      quote: "The strong did what they could, and the weak suffered what they must.",
      source: "Thucydides"
  },

  {
      quote: "Self-control is the chief element in self respect, and self-respect is the chief element in courage.",
      source: "Thucydides"
  },

  {
      quote: "Nobody is driven in to war by ignorance, and no one who thinks he will gain anything from it is deterred by fear.",
      source: "Hermocrates"
  },

  {
      quote: "War gives the right of the conquerors to impose any conditions they please upon the vanquished.",
      source: "Gaius Julius Caesar"
  },

  {
      quote: "In war important events result from trivial causes.",
      source: "Gaius Julius Caesar"
  },

  {
      quote: "The fortunes of war are always doubtful",
      source: "Seneca"
  },

  {
      quote: "Constant exposure to dangers will breed contempt for them.",
      source: "Seneca"
  },

  {
      quote: "Brave men are a city's strongest tower of defence.",
      source: "Alcaeus"
  },

  {
      quote: "A dead enemy always smells good.",
      source: "Aulus Vitellius"
  },

  {
      quote: "I am more afraid of our own mistakes than of our enemies' designs.",
      source: "Perseus"
  },

  {
      quote: "A disorderly mob is no more an army than a heap of building materials is a house",
      source: "Socrates"
  },

  {
      quote: "Soldiers do not like being under the command of one who is not of noble birth.",
      source: "Onosander"
  }

];

/***
 * `getRandomQuote` function
***/

function getRandomQuote()
{
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random].quote;

  console.log(quotes[random].quote);
  console.log(random);

  return randomQuote;
}

getRandomQuote(quotes);

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);