import * as fs from "fs";
import * as path from "path";

// 🎄 🎅 Advent of Code 2015 Day 2 🎅 🎄

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.split("\n")
	.map((line) => line.split("x"));

// 🍬 🍭 Part 1 🍭 🍬

let totalFeetOfWrappingPaper = 0;

input.forEach((dimensions) => {
	const [length, width, height] = dimensions.map((dimension) => +dimension);

	const result =
		2 * length * width +
		2 * width * height +
		2 * height * length +
		Math.min(length * width, width * height, height * length);

	totalFeetOfWrappingPaper += result;
});

console.log(
	`The elves need ${totalFeetOfWrappingPaper} feet of wrapping paper! 🎁`
);

// 🍬 🍭 Part 2 🍭 🍬

let totalFeetOfRibbon = 0;

input.forEach((dimensions) => {
	const [length, width, height] = dimensions.map((dimension) => +dimension);

	let presentWrap = Math.min(
		length * 2 + width * 2,
		width * 2 + height * 2,
		height * 2 + length * 2
	);
	let presentBow = length * width * height;

	totalFeetOfRibbon += presentWrap + presentBow;
});

console.log(`The elves need ${totalFeetOfRibbon} feet of ribbon! 🎀`);
