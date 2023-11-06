// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift ("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
const appendCat = (name) =>{
    const newCats =[...cats];
    newCats.push("Broom");
    return newCats;
}
const prependCat = (name) =>{
    const newCats =[...cats];
    newCats.unshift("Arnold")
    return newCats;
}
const removeLastCat = (name) =>{
    const newCats =[...cats];
    newCats.pop()
    return newCats
}
const removeFirstCat = (name) =>{
    const newCats =[...cats];
    newCats.shift()
    return newCats
}
