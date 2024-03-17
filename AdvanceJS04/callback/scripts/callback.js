
function MyMap(arr, callBack) {
    let result = [];
    for (const ele of arr) {
        result.push(callBack(ele))
    }

    return result;

}

let myArr = [2, 4, 6];



const double = MyMap(myArr, (ele) => ele * 2);
console.log(double);