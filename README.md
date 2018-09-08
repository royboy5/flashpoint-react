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
- Otherwise, I would need to create a function that will compare every property and see if they are equal.  Also, if a property is also an object, there needs to be a deeper check for each property that is an object.  
  
4.  Implement a recursive fibonacci function

    Save calculation time with a cache.

- Normal fibonacci without caching
```
const fib = n => (n < 2) ? n : fib(n - 1) + fib(n - 2)
```

- fibonacci with memoization
```
const fibMemoize = (() => {
    
    const cache = {}
    
    const f = n => {
        
        const value = (n in cache)
            ? cache[n]
            : (n < 2) ? n : f(n - 1) + f(n - 2)
        
        if (!(n in cache)) cache[n] = value
        
        return value
        
    }
    
    return f
    
})()
```

## React

1.  List the phases of the React component lifecycle
    
    Describe each phase in 1-2 sentences in your own words.

- A react component will go throught the following phases:

    - Mounting
        - During the mounting phase, the following methods are called in order,
            - the constructor()
            - then the static getDerivedStateFromProps()
            - then the render()
            - componentDidMount()
    - Updating (When there are changes to props or state)
        - The following methods are called in order,
            - static getDerivedStateFromProps()
            - shouldComponentUpdate()
            - render()
            - getSnapshotBeforeUpdate()
            - componentDidUpdate()
    - Unmounting
        - This method is called when a component is being removed from the DOM,
            - componentWillUnmount()

2. What is the role of the reducer in Redux?

- In redux, the reducer specifies how the application state changes in response to the actions sent to the redux store.

3. Show how you would embed 2+ components into one in React

- I am not completely sure what is expected with this question, however, you can have the following 2 files,
    - Foo.jsx
    ```
    import React from 'react';

    const Foo = () => <div>Foo</div>;

    export default Foo;
    ```

    - Bar.jsx
    ```
    import React from 'react';
    import Foo from './Foo';

    const Bar = () => {
        return (
            <div>
                <h1>Title</h1>
                <Foo />
                <Foo />
                ...
                <Foo />
            </div>
        );
    }

    export default Bar;
    ```

    # Demo Site
    
    https://royboy-flashpoint.herokuapp.com/



