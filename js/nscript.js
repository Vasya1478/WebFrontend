let arr1 = document.getElementById('array1')

let getArr1 = ["String1", 45, 97, true, "String2", "false"]


function res(){
    let res1 = []
for(let i = 0; i < getArr1.length; i++) {
    res1[i] = getArr1[i] 
}
return res1
}

console.log(res())


arr1.innerHTML = res()