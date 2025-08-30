const morning = 7;
const evening = 14;
const night = 20;

function wordUrl(letter) {
    return "https://random-word-api.vercel.app/api?words=1&letter=" + letter;
}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function generateGreeting() {
	let current_time = new Date();
    let hour = current_time.getHours();
    let letter
    if (hour >= morning & hour < evening) {
        letter = "m";
    } else if (hour >= evening & hour < night) {
        letter = "e";
    } else if (hour < morning | hour >= night) {
        letter = "n";
    }

	let word_1 = await fetchAsync(wordUrl("g"));
	let word_2 = await fetchAsync(wordUrl(letter));

	return `${word_1} ${word_2}`;
}

async function displayGreeting() {
    let greeting = await generateGreeting();
    document.getElementById("greeting").textContent = greeting;
}