
let arr = [1, 2, 3, 4, 'hfhd', ['fhdfhdj', 45], {}]

let filterList = (a) => {
    const arr2 = a.filter(item => typeof item !== "string")
    console.log(arr2)
}

filterList(arr)







