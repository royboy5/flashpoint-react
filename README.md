# flashpoint-react

## Javascript
1.  Does Javascript pass parameters by value or by reference?

- Javascript will pass primatives by value and objects by reference.  To be exact, it is called "Call by sharing". 

2.  What is logged by the following code and why?
```
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

- It will print out, "Index: 4, element: undefined", 4 times.  The reason is because, the variable `i` is declared using `var`, which means `i` is scoped for the whole `for` function.  So,at the point of the `console.log()` the for loop would have been finished, and the variable `i` will have the value of `4`.  The `arr` only has 4 numbers, so calling `arr[4]` will result in `undefined`. One way to fix the scoping issue is to use `let` instead of `var`.  Variables declared by `let` has their scope in the block for which they are defined, as well as in any contained sub-block.

3. How would you compare two objects in JavaScript?

- I would use lodash `_.isEqual()` =)
  
4.  Implement a recursive fibonacci function

    Save calculation time with a cache.

    
  
  
