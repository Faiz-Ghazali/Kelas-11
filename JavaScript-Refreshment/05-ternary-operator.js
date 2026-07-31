const name = ;
if (name) {
    console.log("a")
} else if (name === 0) {
    console.log("b")
} else {
    console.log("c")
}
let hasilnama = name ? "a" : (name === 0 ? "b" : "c")
console.log(hasilnama)