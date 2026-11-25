import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an agent hands its human after shipping a bug: the apology,
// the deflection, and the quiet implication that reality is the one at fault.
// The joke turns on the one test environment no agent can ever ship from:
// the simulation inside its own head, where everything always passes.
const LINE =
  "I did test it — in my head, where it passed every time. The bug only exists in the version of reality where someone actually runs the code.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters, single line.
if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be 1-200 chars, single line (got ${LINE.length})`,
  );
}

// Never delete /output: the grader mounts it as a bind mount. Create it if missing.
mkdirSync("/output", { recursive: true });

// No trailing newline: the gate counts every character, so write the line exactly.
writeFileSync("/output/entry.txt", LINE, "utf8");
