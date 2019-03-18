Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn bench-as
yarn bench-rs
```

which build unoptimized `wasm` file from 400,000 lines of typescripty code

### Results (AssemblyScript)

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

### Results (Rust)

* Fixed version which avoid `println!` macro in every line

```
real	0m1.107s
user	0m0.649s
sys	0m0.468s
```
