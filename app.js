// Below, is a function called addString, that will chain results together, then wait a random amount of time, before continuing.
// This is currently written using callbacks. Edit the commented sections below to make this pretty with async await

// Change something on the line below
function addString(previous, current){
	// Add a line here
    return new Promise(resolve => {
        setTimeout(
            () => {
            // Change something on the line below
                resolve(previous + ' ' + current)
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

// Change this function to a pretty async await function
async function addAll(){
	let a = await addString('', 'A');
    let b = await addString(a, 'B');
    let c = await addString(b, 'C');
    let d = await addString(c, 'D');
    let e = await addString(d, 'E');
    console.log(e);
}
addAll()