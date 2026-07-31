function hitung(a, b, c, d, ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(rest);
}

hitung(1, 2, 3, 4, 5, 6, 7, 8, 9,); 
//* spread operator
const ang = [1, 2, 3, 4, 5];
const ang2 = [6, 7, 8, 9, 10];
const obj = {...ang}
console.log(obj);
const arrays = [...ang, ...ang2];
const arrays2 = [ang, ang2];
console.log(arrays);
console.log(arrays2);