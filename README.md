Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn bench-as
yarn bench-rs
```

`yarn bench-as` build unoptimized `wasm` file from 400,000 lines of typescripty code
`yarn bench-rs` compile to native binary file from 400,000 lines of rust code

### Results (AssemblyScript) (2020-02-10)

15-inch MacBook 2019 (2,3 GHz Intel Core i9)

```
I/O Read  : 9.171 ms
I/O Write : 2.355 ms
Parse     : 1848.703 ms
Compile   : 923.112 ms
Emit      : 411.798 ms
Validate  : N/A
Optimize  : 0.990 ms

real  0m4.259s
user  0m6.092s
sys	  0m0.854s
✨  Done in 4.29s.
```

### Results (Rust) (rustc 1.42.0-nightly (3a3f4a7cb 2019-12-28))

* Fixed version which avoid `println!` macro in every line

```
real  4m23.162s
user  2m8.211s
sys	  1m46.835s

```
