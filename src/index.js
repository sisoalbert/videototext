import "./styles.css";
import data from "./data.json";
// console.log("videoText", data.videoText);
const textFile = `${data.videoText}`;

function splitIntoParagraphs(textFile) {
  // Split the text into an array of words
  const words = textFile.split(" ");

  // Initialize an empty array to store the paragraphs
  const paragraphs = [];

  // Initialize a variable to keep track of the current paragraph
  let currentParagraph = [];

  // Go through each word in the array
  for (const word of words) {
    // Add the word to the current paragraph
    currentParagraph.push(word);

    // If the current paragraph has more than 100 words, push it to the paragraphs array and start a new paragraph
    if (currentParagraph.length > 500) {
      paragraphs.push(currentParagraph);
      currentParagraph = [];
    }
  }

  // If there are any remaining words in the current paragraph, push it to the paragraphs array
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph);
  }

  // Return the array of paragraphs
  return paragraphs;
}

console.log(splitIntoParagraphs(textFile));

function displayParagraphs(paragraphs) {
  // Get the app element
  const appElement = document.getElementById("app");

  // Set the app element's inner HTML to an h1 element followed by a div element
  appElement.innerHTML = `
    <h1>New Paragraphs!</h1>
    <div></div>
  `;

  // Get the div element
  const divElement = appElement.querySelector("div");

  // Go through each paragraph in the array
  for (const paragraph of paragraphs) {
    // Create a new p element and set its text content to the paragraph
    const pElement = document.createElement("p");
    pElement.textContent = paragraph.join(" ");

    // Append the p element to the div element
    divElement.appendChild(pElement);
  }
}
const paragraphs = splitIntoParagraphs(textFile);
console.log("paragraphs", paragraphs.length);

displayParagraphs(paragraphs);
