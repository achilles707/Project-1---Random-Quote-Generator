/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// My solution starts at 203, sorry got a little carried away with the quotes.

/*** 
 * `quotes` array 
***/

const quotes = [

    {
        quote: "An adversary is more hurt by desertion than by slaughter.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C.",
        tag: "Strategy"
    },
    
    {
        quote: "Few men are born brave, many become so through training and force of discipline.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C.",
        tag: "Character"
    },
    
    {
        quote: "Let him who desires peace prepare for war.",
        source: "Vegetius",
        citation: "Epitoma rei militaris",
        year: "4th Cent. B.C.",
        tag: "Strategy"
    },
    
    {
        quote: "Men grow tired of sleep, love, singing and dancing sooner than war.",
        source: "Homer",
        citation: "The Illiad",
        tag: "Character"
    },
  
    {
        quote: "To those that flee comes neither power nor glory.",
        source: "Homer",
        citation: "The Illiad",
        tag: "Character"
    },
  
    {
        quote: "A glorious death is his who for his country falls.",
        source: "Homer",
        citation: "The Illiad",
        tag: "Character"
    },
  
    {
        quote: "The valiant profit more their country than the finest, cleverest speakers.",
        source: "Plautus",
        citation: "Truculentus, Act II, scene ii Pluris",
        tag: "Character"
    },
  
    {
        quote: "It is the brave man's part to live with glory, or with glory die.",
        source: "Sophacles",
        tag: "Character"
    },
  
    {
        quote: "The outcome corresponds less to expectations in war than in any other case whatsoever.",
        source: "Livy",
        citation: "History of Rome",
        year: "29 B.C.",
        tag: "Strategy"
    },
  
    {
        quote: "To a good general luck is important.",
        source: "Livy",
        citation: "History of Rome",
        tag: "Strategy"
    },
  
    {
        quote: "All warfare is based on deception.",
        source: "Sun Tzu",
        citation: "The Art of War",
        tag: "Strategy"
    },
  
    {
        quote: "He who knows when he can fight and when he cannot will be victorious.",
        source: "Sun Tzu",
        citation: "The Art of War",
        tag: "Strategy"
    },
  
    {
        quote: "In war, numbers alone confer no advantage. Do not advance relying on sheer military power.",
        source: "Sun Tzu",
        citation: "The Art of War",
        tag: "Strategy"
    },
  
    {
        quote: "In peace, sons bury their fathers, in war, fathers bury their sons.",
        source: "Herodotus",
        citation: "The Histories, Book 1",
        tag: "Character"
    },
  
    {
        quote: "Far better is to have a stout heart always and suffer one's share of evils, than to be ever fearing what may happen.",
        source: "Herodotus",
        citation: "The Histories, Book 7",
        tag: "Character"
    },
  
    {
        quote: "The proper arts of a general are judgement and prudence.",
        source: "Tacitus",
        citation: "The Histories",
        tag: "Character"
    },
  
    {
        quote: "A bad peace is even worse than a war.",
        source: "Tacitus",
        citation: "The Histories",
        tag: "Philosophy"
    },
  
    {
        quote: "The desire for safety stands against every great and noble enterprise.",
        source: "Tacitus",
        citation: "The Histories",
        tag: "Character"
    },
  
    {
        quote: "A wise man in times of peace prepares for war.",
        source: "Horace",
        citation: "Satires",
        year: "35 B.C.",
        tag: "Philosophy"
    },
  
    {
        quote: "The strong did what they could, and the weak suffered what they must.",
        source: "Thucydides",
        citation: "History of the Peloponnesian War",
        tag: "Philosophy"
    },
  
    {
        quote: "Self-control is the chief element in self respect, and self-respect is the chief element in courage.",
        source: "Thucydides",
        citation: "History of the Peloponessian War",
        tag: "Character"
    },
  
    {
        quote: "Nobody is driven in to war by ignorance, and no one who thinks he will gain anything from it is deterred by fear.",
        source: "Hermocrates",
        citation: "History of the Peloponessian War",
        tag: "Philosophy"
    }, 
  
    {
        quote: "War gives the right of the conquerors to impose any conditions they please upon the vanquished.",
        source: "Gaius Julius Caesar",
        citation: "The Tragedy of Julius Caesar",
        tag: "Philosophy"
    },
  
    {
        quote: "In war important events result from trivial causes.",
        source: "Gaius Julius Caesar",
        tag: "Strategy"
    },
  
    {
        quote: "The fortunes of war are always doubtful.",
        source: "Seneca",
        tag: "Philosophy"
    },
  
    {
        quote: "Constant exposure to dangers will breed contempt for them.",
        source: "Seneca",
        tag: "Character"
    },
  
    {
        quote: "Brave men are a city's strongest tower of defence.",
        source: "Alcaeus",
        tag: "Character"
    },
  
    {
        quote: "I am more afraid of our own mistakes than of our enemies' designs.",
        source: "Perseus",
        tag: "Strategy"
    },
  
    {
        quote: "A disorderly mob is no more an army than a heap of building materials is a house.",
        source: "Socrates",
        tag: "Character"
    },
 
    {
        quote: "Soldiers do not like being under the command of one who is not of noble birth.",
        source: "Onosander",
        tag: "Character"
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
    let quoteContainer = document.querySelector("body");
    quoteContainer.style.backgroundColor = ` rgb(${r}, ${g}, ${b})`;  
    return quoteContainer.style.backgroundColor;
}
  
/***
* `getRandomQuote` function
***/
  
function getRandomQuote()    // Gets a random quote from the quote array
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

    if(randQuote.tag)
    {
        html += `<span class="tag">${randQuote.tag}</span>`
    }

    html += `</p>`

    document.getElementById("quote-box").innerHTML = html;
    changeBackgroundColor();

    // reset timer when button is pushed
    clearInterval(quoteTimer);

}

// timer, calls the printQuote and changes background-color every 8 sec

let quoteTimer = setInterval(printQuote, 8000, quotes);

/***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/
  
document.getElementById('load-quote').addEventListener("click", printQuote, false);
