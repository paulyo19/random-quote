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
        year: 1976
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
        citation: 'Speech'
    },
    {
        quote: 'Life is really simple, but we insist on making it complicated.',
        source: '-Confucius'   
    },
];


function getRandomQuote() {
    for (let i = 0; i < quotes.length; i++) {
        return quotes[Math.floor(Math.random()*quotes.length)]
    }
}

function printQuote() {
    var print = getRandomQuote();
    var display = '';
    display += '<p class = "quote">' + print.quote + '</p>' 
    display += '<p class = "source">' + print.source;

    if (print.citation) {
        display += '<span class="citation">' + print.citation + '</span>'
    }

    if (print.year) {
        display += '<span class="year">' + print.year + '</span>'
    }
    display += '</p>'
    return document.getElementById('quote-box').innerHTML = display
}

console.log(printQuote())


