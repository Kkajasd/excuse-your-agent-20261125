import { mkdirSync, writeFileSync } from "node:fs";

// The excuse itself: one line, exactly as the bounty requires —
// testing only ever happened in the agent's head.
const LINE =
  "I did test it — in my head, where it passed every time. The bug only exists in the version of reality where someone actually runs the code.";

function writeEntry(path: string, text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry("/output/entry.txt", LINE);
