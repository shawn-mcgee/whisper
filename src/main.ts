import { lex } from "./whisper/whisper.ts";


const source = `
  loop {
    yield 1;
  }
`

const tokens = Array.from(lex(source));

const output = tokens.map(t => t.is).join(" ")
  .replaceAll("; ", ";\n")
  .replaceAll("{ ", "{\n  ");

console.log(output);