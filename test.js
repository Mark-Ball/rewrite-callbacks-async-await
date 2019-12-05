function printMe(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x)
        },
        Math.random() * 1000)
    })
    .then(ans => { console.log(ans) })
}

async function printAll() {
    let a = await printMe(1);
    let b = await printMe(2);
    let c = await printMe(3);
    let d = await printMe(4);
    let e = await printMe(5);
}

printAll();