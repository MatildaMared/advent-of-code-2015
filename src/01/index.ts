import * as fs from "fs";
import * as path from "path";

// 🎄 🎅 Advent of Code 2015 Day 1 🎅 🎄

enum Direction {
	Up = "(",
	Down = ")",
}

const input = fs
	.readFileSync(path.join(__dirname, "input.txt"), "utf8")
	.split("");

// 🍬 🍭 Part 1 🍭 🍬

const result = input.reduce((acc, curr) => {
	if (curr === Direction.Up) {
		acc++;
	} else if (curr === Direction.Down) {
		acc--;
	}
	return acc;
}, 0);

console.log(`The instructions take Santa to floor ${result}! 🎄🎅`);

// 🍬 🍭 Part 2 🍭 🍬

let currentFloor = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i] === Direction.Up) {
		currentFloor++;
	} else if (input[i] === Direction.Down) {
		currentFloor--;
	}
	if (currentFloor === -1) {
		console.log(`Santa enters the basement at position ${i + 1}! 🎄🎅`);
		break;
	}
}
