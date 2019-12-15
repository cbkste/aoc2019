const target = 19690720
let intCode = []

const reset = () => {
    return [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,5,19,23,2,10,23,27,1,27,5,31,2,9,31,35,1,35,5,39,2,6,39,43,1,43,5,47,2,47,10,51,2,51,6,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,1,71,5,75,1,13,75,79,1,6,79,83,2,83,13,87,1,87,6,91,1,10,91,95,1,95,9,99,2,99,13,103,1,103,6,107,2,107,6,111,1,111,2,115,1,115,13,0,99,2,0,14,0]
}

//100 * noun + verb
let found = false

const process = (i, j)=> {
    intCode[1] = i
    intCode[2] = j
    for (let k = 0; k < intCode.length && !found; k += 4) {
        const a = intCode[k]
        const b = intCode[intCode[k + 1]]
        const c = intCode[intCode[k + 2]]
        
        if(a !== 1 && a !== 2){
            break;
        }
        intCode[intCode[k + 3]] = a === 1 ? (b + c) : (b * c);
    }

    if(intCode[0] === target){
        console.log(`100 * ${i} + ${j} = ${target}`)
        found = true
    }
    intCode = reset()
}

while(!found){
    intCode = reset()
    for (let i = 0; i < 100 && !found; i++) {
        for (let j = 0; j < 100; j++) {
            process(i, j)
        }
    }
}