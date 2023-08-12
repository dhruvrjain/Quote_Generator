const quote=document.querySelector(".quote")
const btn=document.querySelector("#new-quote")
const person=document.querySelector(".person")

const quotes=[
    {
        quote: "Go to the freakin GYM",
        person: "Papa Jones",
    },
    {
        quote: "Wake up to reality",
        person: "Madara Uchiha",
    },
    {
        quote: "Power comes to a response of a need, not desire",
        person: "Son Goku",
    },
    {
        quote: "Strong protect the weak and the weak in-turn become strong",
        person: "Tanjiro Kamado",
    },
    {
        quote: "Clan or the village ?",
        person: "Itachi Uchiha",
    },
    {
        quote: "Never forget the Good in you. The ones who love you, are the ones who can see it.",
        person: "Unknown",
    },
    {
        quote: "The difference between a novice and a master is that a master has failed more times than a novice had tried.",
        person: "Koro-Sensei",
    },
    {
        quote: "Hate perfection. To be perfect is to be unable to improve any further.",
        person: "Kurotsuchi Mayuri"
    },
    {
        quote: "Every journey begins with a single step. We just have to have patience",
        person: "Milly Thompson"
    },
    {
        quote: "You've got two legs and a heartbeat. What's stopping you?",
        person: "Inuyasha"
    },
    {
        quote: "No amount of talent trumps hard work",
        person: "Rin Matsuoke"
    },
    {
        quote: "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        person: "Gildarts Clive"
    },
    {
        quote: "The ticket to the future is always open",
        person: "Vash The Stampede"
    }
]

btn.addEventListener('click',function(){
    
    let rand=Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[rand].quote;
    person.innerText=quotes[rand].person
})
