Benchmarks inspired by ["V" language](https://github.com/vlang-io/V/blob/master/website/compilation_speed_test_gen.v)

### Build / Run bench

```
yarn build
```

which build unoptimized `index.ts` file with 400,000 lines of code

### Results

MacBook 2013 (2,3 GHz Intel Core i7)

```
I/O Read  : 6.131 ms
I/O Write : 4.987 ms
Parse     : 1837.052 ms
Compile   : 812.800 ms
Emit      : 195.063 ms
Validate  : N/A
Optimize  : N/A
✨  Done in 3.82s.
```
