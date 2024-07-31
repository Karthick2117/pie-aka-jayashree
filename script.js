const compliments = [
    "You're like a dictionary; you add meaning to my life!",
    "Do you have a map? I keep getting lost in your eyes.",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you a magician? Because whenever I look at you, everyone else disappears."
];

function generateCompliment() {
    const complimentElement = document.getElementById('compliment');
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentElement.textContent = randomCompliment;
}
