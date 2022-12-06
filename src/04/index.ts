import * as fs from "fs";
import * as path from "path";
import * as crypto from "crypto";

// 🎄 🎅 Advent of Code 2015 Day 4 🎅 🎄

const secretKey = "ckczppom";

// 🍬 🍭 Part 1 🍭 🍬

let i = 0;
let hash = "";

while (!hash.startsWith("00000")) {
	i++;
	hash = crypto
		.createHash("md5")
		.update(secretKey + i)
		.digest("hex");
}

console.log(`The lowest number is ${i}! 🎁`);

// 🍬 🍭 Part 2 🍭 🍬

i = 0;
hash = "";

while (!hash.startsWith("000000")) {
	i++;
	hash = crypto
		.createHash("md5")
		.update(secretKey + i)
		.digest("hex");
}

console.log(`The lowest number is ${i}! 🎁`);
