Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn bench-as
yarn bench-rs
```

`yarn bench-as` build unoptimized `wasm` file from 400,000 lines of typescripty code
`yarn bench-rs` compile to native binary file from 400,000 lines of rust code

### Results (AssemblyScript) (2019-03-21)

MacBook 2013 (2,3 GHz Intel Core i7)

```
I/O Read  : 7.225 ms
I/O Write : 4.450 ms
Parse     : 1747.119 ms
Compile   : 802.157 ms
Emit      : 187.787 ms
Validate  : N/A
Optimize  : N/A

real	0m4.192s
user	0m5.299s
sys	0m0.859s
✨  Done in 4.25s.
```

### Results (Rust) (rustc 1.35.0-nightly (a9da8fc9c 2019-03-04))

* Fixed version which avoid `println!` macro in every line

```
real	2m11.288s
user	0m55.398s
sys	1m8.846s
```
