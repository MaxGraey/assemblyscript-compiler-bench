Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```sh
yarn bench-as  # or `npm run bench-as`
yarn bench-rs  # or `npm run bench-rs`
```

`yarn bench-as` build unoptimized `wasm` file from 400,000 lines of typescripty code
`yarn bench-rs` compile to native binary file from 400,000 lines of rust code

### Results (AssemblyScript) (2020-02-10)

15-inch MacBook 2019 (2,3 GHz Intel Core i9)

```
I/O Read  : 8.950 ms
I/O Write : 2.959 ms
Parse     : 1794.794 ms
Compile   : 930.801 ms
Emit      : 414.083 ms
Validate  : N/A
Optimize  : 0.805 ms

real  0m4.195s
user  0m6.039s
sys   0m0.861s
✨  Done in 4.23s.
```

### Results (Rust) (rustc 1.43.0-nightly (75cf41afb 2020-03-04))

* Fixed version which avoid `println!` macro in every line

```
real  4m28.044s
user  2m10.426s
sys   1m47.404s
```
