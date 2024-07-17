let num = ["12", "5", "23", "18", "4", "45", "32"]


for (let i = 0; i < num.length; i++){
    return num[i]
}

console.log(num.sort((a, b) => a - b))