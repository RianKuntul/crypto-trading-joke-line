import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// make.fun entry: "Laugh Track: The Crypto Trading Joke Contest"
// Writes exactly one crypto trading joke line to /output/entry.txt (1-200 chars).

const JOKE =
  "I bought the dip, then the dip bought a shovel, dug deeper, and now my portfolio is just a screenshot I show the group chat.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters.
// Guard the joke at build time so an over-long edit can never ship.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  throw new Error(
    `Joke must be 1-200 characters, got ${[...JOKE].length}. Shorten it before submitting.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} chars to ${join(outDir, "entry.txt")}`);
