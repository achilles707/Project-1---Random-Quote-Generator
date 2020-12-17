/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// To-Do List:
    // Need to add own comments about project (Look at project information to see what is needed)
    // Fix color changing
    // add extra properties to a couple of the quotes, tags?, context?, genre?, etc.

// My solution starts at 203, sorry got a little carried away with the quotes.

/*** 
 * `quotes` array 
***/

const quotes = [

    {
        quote: "An adversary is more hurt by desertion than by slaughter.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C."
    },
    
    {
        quote: "Few men are born brave, many become so through training and force of discipline.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C."
    },
    
    {
        quote: "Let him who desires peace prepare for war.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C."
    },
    
    {
        quote: "Men grow tired of sleep, love, singing and dancing sooner than war.",
        source: "Homer",
        citation: "The Illiad"
    },
  
    {
        quote: "To those that flee comes neither power nor glory.",
        source: "Homer",
        citation: "The Illiad"
    },
  
    {
        quote: "A glorious death is his who for his country falls.",
        source: "Homer",
        citation: "The Illiad"
    },
  
    {
        quote: "The valiant profit more their country than the finest, cleverest speakers.",
        source: "Plautus",
        citation: "Truculentus, Act II, scene ii Pluris"
    },
  
    {
        quote: "It is the brave man's part to live with glory, or with glory die.",
        source: "Sophacles"
    },
  
    {
        quote: "The outcome corresponds less to expectations in war than in any other case whatsoever.",
        source: "Livy",
        citation: "History of Rome",
        year: "29 B.C."
    },
  
    {
        quote: "To a good general luck is important.",
        source: "Livy",
        citation: "History of Rome"
    },
  
    {
        quote: "All warfare is based on deception.",
        source: "Sun Tzu",
        citation: "The Art of War"
    },
  
    {
        quote: "He who knows when he can fight and when he cannot will be victorious.",
        source: "Sun Tzu",
        citation: "The Art of War"
    },
  
    {
        quote: "In war, numbers alone confer no advantage. Do not advance relying on sheer military power.",
        source: "Sun Tzu",
        citation: "The Art of War"
    },
  
    {
        quote: "In peace, sons bury their fathers, in war, fathers bury their sons.",
        source: "Herodotus",
        citation: "The Histories, Book 1"
    },
  
    {
        quote: "Far better is to have a stout heart always and suffer one's share of evils, than to be ever fearing what may happen.",
        source: "Herodotus",
        citation: "The Histories, Book 7"
    },
  
    {
        quote: "The proper arts of a general are judgement and prudence.",
        source: "Tacitus",
        citation: "The Histories"
    },
  
    {
        quote: "A bad peace is even worse than a war.",
        source: "Tacitus",
        citation: "The Histories"
    },
  
    {
        quote: "The desire for safety stands against every great and noble enterprise.",
        source: "Tacitus",
        citation: "The Histories"
    },
  
    {
        quote: "A wise man in times of peace prepares for war.",
        source: "Horace",
        citation: "Satires",
        year: "35 B.C."
    },
  
    {
        quote: "The strong did what they could, and the weak suffered what they must.",
        source: "Thucydides",
        citation: "History of the Peloponnesian War"
    },
  
    {
        quote: "Self-control is the chief element in self respect, and self-respect is the chief element in courage.",
        source: "Thucydides",
        citation: "History of the Peloponessian War"
    },
  
    {
        quote: "Nobody is driven in to war by ignorance, and no one who thinks he will gain anything from it is deterred by fear.",
        source: "Hermocrates",
        citation: "History of the Peloponessian War"
    }, 
  
    {
        quote: "War gives the right of the conquerors to impose any conditions they please upon the vanquished.",
        source: "Gaius Julius Caesar",
        citation: "The Tragedy of Julius Caesar"
    },
  
    {
        quote: "In war important events result from trivial causes.",
        source: "Gaius Julius Caesar"
    },
  
    {
        quote: "The fortunes of war are always doubtful.",
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
        quote: "A disorderly mob is no more an army than a heap of building materials is a house.",
        source: "Socrates"
    },
 
    {
        quote: "Soldiers do not like being under the command of one who is not of noble birth.",
        source: "Onosander"
    }
  
];

/***
 * `getRandomColor` function
***/

function changeBackgroundColor()    // assigns random color to background-color property of the body
{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let quoteContainer = document.getElementById("body");

    quoteContainer.style.backgroundColor = ` rgb(${r}, ${g}, ${b})`;  
    return quoteContainer.style.backgroundColor;
}
  
/***
* `getRandomQuote` function
***/
  
function getRandomQuote()    // Gets a random uqote from the quote array
{
    let random = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[random];
  
    return randomQuote;   
}
  
/***
* `printQuote` function
***/
  
function printQuote()    // Prints the quote and all relevent info to the web page
{
    let randQuote = getRandomQuote(quotes);
    
    let html = `<p class="quote">${randQuote.quote}</p>
        <p class="source">${randQuote.source}`;

    if(randQuote.citation)
    {
        html += `<span class="citation">${randQuote.citation}</span>`
    }

    if(randQuote.year)
    {
        html += `<span class="year">${randQuote.year}</span>`
    }

    document.getElementById("quote-box").innerHTML = html;
    
}

// timer, calls the printQuote and changes background-color every 8 sec

let quoteTimer = setInterval(printQuote, 8000, quotes);
let colorTimer = setInterval(changeBackgroundColor, 8000);
  
/***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/
  
document.getElementById('load-quote').addEventListener("click", printQuote, false);