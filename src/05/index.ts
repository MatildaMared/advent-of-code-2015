import * as fs from "fs";
import * as path from "path";

// 🎄 🎅 Advent of Code 2015 Day 5 🎅 🎄

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.split("\n")
	.map((line) => line.split(""));

// 🍬 🍭 Part 1 🍭 🍬

function containsAtLeastThreeVowels(word: string[]) {
	const vowels = ["a", "e", "i", "o", "u"];
	let numberOfVowels = 0;
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i])) {
			numberOfVowels++;
		}
	}
	return numberOfVowels >= 3;
}

function containsAtLeastOneLetterTwiceInARow(word: string[]) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i + 1]) {
			return true;
		}
	}
	return false;
}

function doesNotContainForbiddenStrings(word: string[]) {
	const forbiddenStrings = ["ab", "cd", "pq", "xy"];
	for (let i = 0; i < word.length; i++) {
		if (forbiddenStrings.includes(word[i] + word[i + 1])) {
			return false;
		}
	}
	return true;
}

let numberOfNiceStrings = 0;

input.forEach((word) => {
	if (
		containsAtLeastThreeVowels(word) &&
		containsAtLeastOneLetterTwiceInARow(word) &&
		doesNotContainForbiddenStrings(word)
	) {
		numberOfNiceStrings++;
	}
});

console.log(`There are ${numberOfNiceStrings} nice strings! 🎁`);

// 🍬 🍭 Part 2 🍭 🍬

function containsAtLeastOnePairOfLettersThatAppearsTwice(word: string[]) {
	for (let i = 0; i < word.length; i++) {
		const pair = word[i] + word[i + 1];
		if (
			word
				.slice(i + 2)
				.join("")
				.includes(pair)
		) {
			return true;
		}
	}
	return false;
}

function containsAtLeastOneLetterWhichRepeatsWithExactlyOneLetterBetweenThem(
	word: string[]
) {
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i + 2] && word[i] !== word[i + 1]) {
			return true;
		}
	}
	return false;
}

let numberOfNiceStrings2 = 0;

input.forEach((word) => {
	if (
		containsAtLeastOnePairOfLettersThatAppearsTwice(word) &&
		containsAtLeastOneLetterWhichRepeatsWithExactlyOneLetterBetweenThem(word)
	) {
		numberOfNiceStrings2++;
	}
});

console.log(
	`There are ${numberOfNiceStrings2} nice strings with the new rules! 🎁`
);
