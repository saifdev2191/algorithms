const compareElements = (arr, el) => {
    
}

const insertionSort = (arr) => {
    for (let i=1; i < arr.length; i++){
        const currentEl = arr[i]
        for(var j = i-1; arr[j] > currentEl && j > -1; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentEl
    }
    return arr
}


const sortedArr = insertionSort([8,5,7,3,2])
console.log("sortedArr",sortedArr)