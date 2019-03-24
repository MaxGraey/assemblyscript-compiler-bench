const fs   = require('fs');
const path = require('path');

const N = 200;

function buildAssemblyScript() {
  let builder  = 'declare function print_i32(i: i32): void;\n';
      builder += 'var a: i32;\n';

  for (let i = 0; i < N * 1000; i++) {
    builder += `a = ${i}; print_i32(a);\n`;
  }

  fs.writeFileSync(path.resolve(__dirname, '..', 'assembly', 'index.ts'), builder);
}

function buildRust() {
  let builder  = 'fn print_i32(i: i32) { println!("{}", i) }\n';
      builder += 'fn main() { let mut a;\n';

  for (let i = 0; i < N * 1000; i++) {
    builder += `a = ${i}; print_i32(a);\n`;
  }
  builder += '}';

  fs.writeFileSync(path.resolve(__dirname, '..', 'rust', 'main.rs'), builder);
}


buildAssemblyScript();
buildRust();

console.log('test files created!');
