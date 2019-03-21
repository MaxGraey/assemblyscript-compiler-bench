Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn bench-as
yarn bench-rs
```

`yarn bench-as` build unoptimized `wasm` file from 400,000 lines of typescripty code
`yarn bench-rs` compile to native binary file from 400,000 lines of rust code

### Results (AssemblyScript) (21-03-2019)

MacBook 2013 (2,3 GHz Intel Core i7)

```
I/O Read  : 6.416 ms
I/O Write : 2.864 ms
Parse     : 1890.312 ms
Compile   : 820.604 ms
Emit      : 201.642 ms
Validate  : N/A
Optimize  : N/A
✨  Done in 3.92s.

real    0m4.482s
user    0m5.678s
sys	0m0.926s
```

### Results (Rust) (rustc 1.35.0-nightly (a9da8fc9c 2019-03-04))

* Fixed version which avoid `println!` macro in every line

```
real	2m11.288s
user	0m55.398s
sys	1m8.846s
```
