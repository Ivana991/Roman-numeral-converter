function convertToRoman(num) {
 let romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
 };
 let str = "";

 for (var i of Object.keys(romanNum)) {
   var q = Math.floor(num/romanNum[i]);
   num -=q * romanNum[i];
   str += i.repeat(q);

 }
 return str;
}

function toNumber(strin) {
    let romanNumbers = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let numb = 0;
    let str= strin.toUpperCase();
    for (let j = 0; j < str.length; j++) {
        if (str[j] === "I" && str[j + 1] === "V") {
            numb += 4;
            j++;
        } else if (str[j] === "I" && str[j + 1] === "X") {
            numb += 9;
            j++
        } else if (str[j] === "X" && str[j + 1] === "L") {
            numb += 40; 
            j++;
        } else if (str[j] === "X" && str[j + 1] === "C") {
            numb += 90;
            j++;
        } else if (str[j] === "C" && str[j + 1] === "D") {
            numb += 400;
            j++;
        } else if (str[j] === "C" && str[j + 1] === "M") {
            numb += 900;
            j++;
        } else {
            numb += romanNumbers[str[j]];
        }
    }
    return numb;
}