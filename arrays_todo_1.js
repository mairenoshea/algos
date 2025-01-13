//push front
//Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!//


function pushFront(arr,x) {
    var tempArr=[x];
    tempArr.push[arr];
    return tempArr;
}

// pop front 

function popFront(arr) {
    var front=arr[0];
    var tempArr=[];
    for(var i=1;i<arr.length;i++) {
        tempArr.push(arr[i]);
    }
    console.log(tempArr);
    return front;
}

//insert at 

function insertAt(arr,i, x) {
    var tempArr1=[];
    for(var j=0;j<ij++) {
        tempArr1.push(arr[j]);
    }
    var tempArr2=[];
    for(var j=i;j<arr.length;j++) {
        tempArr2.push(arr[j]);
    }
    arr=tempArr1.concat(x,tempArr2);
    return arr;
}

//remove at 

function removeAt(arr,i) {
    var tempArr1=[];
    for(var j=0;j<i;j++) {
        tempArr1.push(arr[j]);
    }
    for (var j=i+1;j<arr.length;j++) {
        tempArr1.push(arr[j]);
    }
    return tempArr1;
}

//remove duplicates from sorted array 

function removeDuplicates(arr) {
    for(var i=0;i<arr.length;i++) {
        if(arr[i+1]==arr[i]) {
            removeAt(arr,i);
            i--;
        }
    }
    return arr;
}