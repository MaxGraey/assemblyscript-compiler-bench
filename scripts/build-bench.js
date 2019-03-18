const fs   = require('fs');
const path = require('path');

const N = 200;
let pre = 'declare function log(v: i32): void;\n';
    pre += 'var a = 0;\n';

for (let i = 0; i < N * 1000; i++) {
  pre += `a = ${i}; log(a);\n`;
}

fs.writeFileSync(path.resolve(__dirname, '..', 'assembly', 'index.ts'), pre);
console.log('test file created!');
