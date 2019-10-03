Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn bench-as
yarn bench-rs
```

`yarn bench-as` build unoptimized `wasm` file from 400,000 lines of typescripty code
`yarn bench-rs` compile to native binary file from 400,000 lines of rust code

### Results (AssemblyScript) (2019-10-03)

MacBook 2013 (2,3 GHz Intel Core i7)

```
I/O Read  : 13.512 ms
I/O Write : 6.018 ms
Parse     : 2390.248 ms
Compile   : 1179.679 ms
Emit      : 316.824 ms
Validate  : N/A
Optimize  : N/A

real  0m5.204s
user  0m7.510s
sys   0m1.192s
✨  Done in 5.26s.
```

### Results (Rust) (rustc 1.40.0-nightly (37538aa13 2019-09-25))

* Fixed version which avoid `println!` macro in every line

```
real  6m45.448s
user  2m30.712s
sys   2m32.658s
```
