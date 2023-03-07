import { randomNumber } from "./random";
import Sfc32 from "./sfc32";

const classes = ['border-green-400', 'border-red-400', 'border-blue-400', 'border-amber-300', 'border-lime-300', 'border-pink-600'];

export function seededBorderColor(songName: string) {
	const random = new Sfc32(songName);

	return classes[randomNumber(random, 0, classes.length)]
}
