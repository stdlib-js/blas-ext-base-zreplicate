<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zreplicate

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replicate each element in a double-precision complex floating-point strided array a specified number of times.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zreplicate
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zreplicate = require( '@stdlib/blas-ext-base-zreplicate' );
```

#### zreplicate( N, k, x, strideX, out, strideOut )

Replicates each element in a double-precision complex floating-point strided array a specified number of times.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = new Complex128Array( 4 );

zreplicate( x.length, 2, x, 1, out, 1 );
// out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: number of times to replicate each element.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **out**: output [`Complex128Array`][@stdlib/array/complex128].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to replicate every other element:

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Complex128Array( 4 );

zreplicate( 2, 2, x, 2, out, 1 );
// out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 5.0, 6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out0 = new Complex128Array( 3 );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Complex128Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

zreplicate( 1, 2, x1, 2, out1, 1 );
// out0 => <Complex128Array>[ 0.0, 0.0, 3.0, 4.0, 3.0, 4.0 ]
```

#### zreplicate.ndarray( N, k, x, strideX, offsetX, out, strideOut, offsetOut )

Replicates each element in a double-precision complex floating-point strided array a specified number of times using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = new Complex128Array( 4 );

zreplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
// out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example, to replicate every element starting from the second element and to store in the last `N*k` elements of the output array starting from the last element:

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = new Complex128Array( 2 );

zreplicate.ndarray( 1, 2, x, 1, 1, out, 1, 0 );
// out => <Complex128Array>[ 3.0, 4.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `k <= 0`, both functions return `out` unchanged.
-   Both functions assume that the output array supports `N*k` indexed elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Complex128Array = require( '@stdlib/array-complex128' );
var zreplicate = require( '@stdlib/blas-ext-base-zreplicate' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
console.log( x );

var out = new Complex128Array( x.length * 5 );
console.log( out );

zreplicate( x.length, 5, x, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zreplicate.h"
```

#### stdlib_strided_zreplicate( N, k, \*X, strideX, \*Out, strideOut )

Replicates each element in a double-precision complex floating-point strided array a specified number of times.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0 };
double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zreplicate( 2, 2, (stdlib_complex128_t *)x, 1, (stdlib_complex128_t *)out, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to replicate each element.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Out**: `[out] stdlib_complex128_t*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.

```c
void stdlib_strided_zreplicate( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *X, const CBLAS_INT strideX, stdlib_complex128_t *Out, const CBLAS_INT strideOut );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zreplicate_ndarray( N, k, \*X, strideX, offsetX, \*Out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Replicates each element in a double-precision complex floating-point strided array a specified number of times using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };
double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_zreplicate_ndarray( 2, 2, (stdlib_complex128_t *)x, 1, 0, (stdlib_complex128_t *)out, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to replicate each element.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Out**: `[out] stdlib_complex128_t*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.

```c
void stdlib_strided_zreplicate_ndarray( const CBLAS_INT N, const CBLAS_INT k, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, stdlib_complex128_t *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zreplicate.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0 };
    double out[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of indexed elements:
    const int N = 2;

    // Specify the number of times to replicate each element:
    const int k = 2;

    // Specify strides:
    const int strideX = 1;
    const int strideOut = 1;

    // Replicate each element:
    stdlib_strided_zreplicate( N, k, (stdlib_complex128_t *)x, strideX, (stdlib_complex128_t *)out, strideOut );

    // Print the results:
    for ( int i = 0; i < 8; i++ ) {
        printf( "out[ %i ] = %lf\n", i, out[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zreplicate.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zreplicate

[test-image]: https://github.com/stdlib-js/blas-ext-base-zreplicate/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zreplicate/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zreplicate/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zreplicate?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zreplicate.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zreplicate/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zreplicate/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zreplicate/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zreplicate/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zreplicate/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zreplicate/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zreplicate/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zreplicate/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zreplicate/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
