//remove blanks

function removeBlanks(str) {
    var tempString1="";
    for(var i=0;i<str.length;i++) {
        if(str[i]!==" ") {
            tempString1+=str[i];
        }
    }
    return tempString1;
}
console.log(removeBlanks("Hello World! My name is Mairen!"));


//get digits 

function getDigits(str) {
    var tempInt="";
    for(var i=0;i<str.length;i++) {
        if(!isNaN(str[i])) {
            tempInt+=str[i];
        }
    }
    console.log(tempInt);
    console.log(Number(tempInt));
    return Number(tempInt);
}

getDigits("asd8f9728491nfdjsf72j1m");

//acronyms

function acronyms(str) {
    var tempString="";""
    for(var i=0;i<str.length;i++) {
        if(str[i-1]===" " || i===0) {
            tempString+=str[i].toUpperCase();
        }
    }
    return tempString;
}

console.log(acronyms("The heat is on!"));

//count non-spaces

function countNonSpaces(str) {
    var count=0;
    for(var i=0; i<str.length;i++) {
        if(str[i]!==" ") {
            count ++;
        }
    }
    return count;
}

console.log(countNonSpaces("The heat is on!"));

// remove shorter strings 

function removeAt(arr,i) {
    var tempArr1=[];
    for(var j=0;j<i;j++) {
        tempArr1.push(arr[j]);
    }
    for (var j=i+1;j<arr.length;j++) {
        tempArr1.push(arr[j]);
    }
    arr=tempArr1;
    return arr;
}

function removeShorterStrings(arr,x) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i].length<x) {
            arr=removeAt(arr,i);
            i--;
        }
    }
    return arr;

}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));