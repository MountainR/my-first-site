// Ramdom messages list
const messages = [
    "You will have a great day!",
    "Be careful today.",
    "Something unexpected will happen.",
    "Now is a good time to start something new."
];

// function
function showRandomMessage() {
    // get a ramdom index
    const randomIndex = Math.floor(Math.random() * messages.length);
    // show it as a pop-up
    alert(messages[randomIndex])
};