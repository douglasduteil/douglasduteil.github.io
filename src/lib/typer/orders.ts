import arrayShuffle from "array-shuffle";

//

export function shuffledTyperOrder(words: string[]) {
  if (!shuffledTyperOrder._shuffledWords.length) {
    shuffledTyperOrder._shuffledWords = arrayShuffle(words);
  }
  return shuffledTyperOrder._shuffledWords.pop();
}
shuffledTyperOrder._shuffledWords = [] as string[];

//

export function randomTyperOrder(words: string[]) {
  return words[Math.floor(Math.random() * words.length)];
}
