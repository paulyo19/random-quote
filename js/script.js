// creating an array object of... quotes, source and some will have a year, citation and tag
var quotes = [
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        source: '-Nelson Mandela',
        citation: 'Speech'
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        source: '-Steve Jobs',
        citation: 'Speech',
        year: 2002
    },
    {
        quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
        source: '-Mark Twain',
        year: 1885
    },
    {
        quote: 'You can do anything, but not everything.',
        source: '-David Allen',
        citation: 'Speech',
        year: 1965
    },
    {
        quote: 'Great men are not born great, they grow great.',
        source: '-Mario Puzo',
        citation: 'Movie',
        year: 1972
    },
    {
        quote: "You, me, or nobody is gonna hit as hard as life. But it ain't about how hard you hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That's how winning is done! ",
        source: '-Rocky Balboa',
        citation: 'Movie',
        year: 1976,
        tag: 'insperational'
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        source: '-John Lennon',
        citation: 'Speech',
        year: 1965
    },
    {
        quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        source: '-Dr. Seuss',
        citation: 'Speech',
        tag: 'humor'
    },
    {
        quote: 'Life is really simple, but we insist on making it complicated.',
        source: '-Confucius'
    },
];

// this function will choose a random quote when it is called upon
function getRandomQuote() {
    for (let i = 0; i < quotes.length; i++) {
        return quotes[Math.floor(Math.random() * quotes.length)]
    }
}


// our printQuote function will call a random quote and display our concatenation strings
function printQuote() {
    var print = getRandomQuote();
    var display = '';

    // concatenating strings together
    display += '<p class = "quote">' + print.quote + '</p>'
    display += '<p class = "source">' + print.source;

    // checking if the quote has a citation in it
    //  if it does it will print the citation.... if not it wont print it
    if (print.citation) {
        display += '<span class="citation">' + print.citation + '</span>'
    }

    //  checking if quote has a year in it.... runs excactly like the citation if statement
    if (print.year) {
        display += '<span class="year">' + print.year + '</span>'
    }

    // checking if quote has a tag in it..... and you guessed it... runs like the above if statements
    if (print.tag) {
        display += '<span class="tag">' + print.tag + '</span>'
    }
    display += '</p>'
    return document.getElementById('quote-box').innerHTML = display
}

// creating a function for a random background color 
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
}

// this code will change the quote and background color every 20secs if user does not wish to click on button
setInterval(function () {
    printQuote()               //<-- calling the printQuote function 
    random_bg_color()          // <-- calling the background function
}, 20000);                    // <-- how many seconds until they both change


// we target the ID of loadQuote so when a user clicks on the SHOW ANOTHER QUOTE button it will display a random quote to the screen 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// this will also change the backround color on a new quote when a user clicks on the SHOW ANOTHER QUOTE button
document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);




