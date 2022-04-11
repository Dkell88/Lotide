# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Dkell88/lotide`

**Require it:**

`const _ = require('@Dkell88/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...Array)`: The head function takes an array as an argument. The function returns the first element of the array. head([1,2,3,4]) => [1]
* `middle(...Array)`: The middle function takes an array as an argument. The function returns the middle element(s) of the array excluding. If the array is even then two arguments will be returned, less one argument will be returned. middle([1,2,3,4]) => [2,3]
* `tail(..Array)`: The tail function takes an array as an argument. The function returns every element of the array excluding the first. element. tail([1,2,3,4]) => [2,3,4]

