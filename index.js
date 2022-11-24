const clientsEstimations = []

const filterClientEstimations = function (clientsEstimations){
    let notGoodEstimations = clientsEstimations.filter((item) => item < 5)
    let goodEstimations = clientsEstimations.filter((item) => item >=5)
return {good: goodEstimations, notgood: notGoodEstimations}
}

function askClientToGiveEstimation(){
const answer = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    if (!isNaN(answer) && answer>=1 && answer<11) {
        clientsEstimations.push(answer)
    } }

for (let i = 1; i <6; i++) {
    askClientToGiveEstimation()
}

let estimationInfo = filterClientEstimations(clientsEstimations)
console.log('good:',estimationInfo.good,'notgood ( :',estimationInfo.notgood)

alert(`Всего положительных оценок: ${estimationInfo.good.length}. Всего отрицательных оценок: ${estimationInfo.notgood.length}.`)