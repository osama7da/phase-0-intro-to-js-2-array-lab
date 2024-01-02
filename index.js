const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat (name){
    cats.push(name);
}

function destructivelyPrependCat (name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
    const newArr = [...cats]
    newArr.push(name)
    return newArr
}
 
function prependCat(name){
    const newArr = [...cats]
    newArr.unshift(name)
    return newArr
}

function removeLastCat(name){
    const newArr = [...cats]
    newArr.pop(name)
    return newArr
}

function removeFirstCat(name){
    const newArr = [...cats]
    newArr.shift(name)
    return newArr
}



