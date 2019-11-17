// Assignment 1: Function and Array
function max(...numbers) {
    if (numbers.lenght === 0) {
        return
    }

    let max = numbers[0]

    for(num of numbers) {
        if(num > max) {
            max = num
        }
    }

    return max
}

// Assignment 2: Object

//  way 1
let args1 = new Object()
args1.op = '+'
args1.n1 = 1
args1.n2 = 1

//  way 2
let args2 = {
    op: '+',
    n1: 1,
    n2: 1
}

// Assignment 3: Avg
function avg(data) {
    const { products } = data
    
    if (products.lenght === 0) {
        return 
    }

    let sum = 0

    for (product of products) {
        sum += product.price
    }

    return sum / data.size
}

// Assigment 4 - Request 1

const headDom = document.querySelector('.head')
headDom.addEventListener('click', () => {
    headDom.innerHTML = 'Have a Good Time!'
})

// Assigment 4 - Request 2
const CallmenuDOM = document.querySelector('#burger')
CallmenuDOM.addEventListener('click', () => {
    document.querySelector('.slider').classList.remove('hidden')
})

const ClosemenuDOM = document.querySelector('.close')
ClosemenuDOM.addEventListener('click', () => {
    document.querySelector('.slider').classList.add('hidden')
})


// Assigment 4 - Request 3
const ActionDom = document.querySelector('.button')
ActionDom.addEventListener('click', () => {
    document.querySelector('#more').classList.remove('hidden')
})
