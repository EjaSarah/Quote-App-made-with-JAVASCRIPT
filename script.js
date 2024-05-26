let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The greatest gift you can give someone is your time, your attention, and your love. Nurture your relationships and watch them bloom into something beautiful.",
        person: 'Mary Abu'

    },

    {
        quote: "We are nothing but pencils in the hand of the creator",
        person: 'Wale Adenuga Production'
    },

    {
        quote: "Life is good",
        person: 'LG'
    },

    {
        quote: "Take it easy, The world is not yours",
        person: 'Eja Fidelis'
    },

    {
        quote: "Life is not a bed of roses, Work hard to acheive your dreams",
        person: 'Annonymous'
    },

    {
        quote: "In the end, it's not about the time you spend together, but the love and understanding you share that truly define a relationship.",
        person: 'Carful thoughts'

    },

    {
        quote: "No one can love like your mother",
        person: 'African sayings'
    },

    {
        quote: "Wetin old man siddon see, even if small pikin climb on top tree, e no go see nothing",
        person: 'Africans'

    },

    {
        quote: "Blood isn't always about family",
        person: 'person wey don see premuim shege'
    },


    {
        quote: "Whether you choose to go on or quit, they both take the same effort.",
        person: 'Hush c. W.'
    },
];


btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})