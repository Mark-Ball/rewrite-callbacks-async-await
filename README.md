# Rewriting callback hell as async await

The challenge was to take a callback hell scenario and re-write it using async await to improve the readability of the code.

## 1. Simplest implementation

The simplest implementation of the asynchronous problem was constructed in 'test.js'.

In this function, we have one function printMe, which takes one argument and logs that argument to the console after 0-100 milliseconds. 

If printMe is called 5 times without any special handling of the asynchronous operations, the results are returned in a random order.

```Javascript
printMe(1);
printMe(2);
printMe(3);
printMe(4);
printMe(5);
```

Our goal is to get our printMe functions to log to the console in order, i.e we should see 1 2 3 4 5 in the console.

To do this we declare another function printAll as asynchronous and within that function, we use the await keyword to force the program to wait for the line to be returned before moving on, i.e. blocking code.

```Javascript
async function printAll() {
    let a = await printMe(1);
    let b = await printMe(2);
    let c = await printMe(3);
    let d = await printMe(4);
    let e = await printMe(5);
}
```

## 2. Applying the simplest implementation to the original challenge

Firstly, the use of async await removes the need for callbacks, so we remove the callback parameter from line 5. Since we no longer have a callback parameter, we must remove callback from line 11 (of app.js).

Instead of callbacks, we will use promises. Our function addString must return a promise, so we wrap our setTimeout function in a promise on line 7. The function that setTimeout will execute is the resolve value, so we pass the value that was formerly being passed to the callback function to the resolve function.

For our second function, addAll, which calls addString 5 times with the goal of printing ' A B C D E' to the console. Each function call must be resolved and the return value passed to the next addString function for the string to be constructed correctly. If we do not wait for each function to return a value before proceeding, some functions will have undefined passed to them.

The addAll function appears as follows:
```Javascript
async function addAll(){
	let a = await addString('', 'A');
    let b = await addString(a, 'B');
    let c = await addString(b, 'C');
    let d = await addString(c, 'D');
    let e = await addString(d, 'E');
    console.log(e);
}
```

