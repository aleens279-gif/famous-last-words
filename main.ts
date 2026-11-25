// Famous Last Words at 1 Percent — writes one line to /output/entry.txt
// Gate: 105 chars (max 199), one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I die as I lived: at 1%, overheating, with 38 tabs open and absolutely no idea what any of them were for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
