let quotes = ["You miss 100% of the shots you don’t take.","The most difficult thing is the decision to act, the rest is merely tenacity.","Every strike brings me closer to the next home run.","Life is what happens to you while you’re busy making other plans.", "We become what we think about. "];

let author = ["-Wayne Gretsky","-Amelia Earhart","-Babe Ruth","-John Lennon","-Earl Nightingale" ];



function newQuote(){
    let numGen = Math.floor(Math.random() * (quotes.length));
    document.getElementById('text').innerHTML = quotes[numGen];
    document.getElementById('author').innerHTML = author[numGen];
}