let totalCash = parseInt(prompt('enter your cash'))
let watchesCount = parseInt(prompt('enter your watches'))
let earringsCount = parseInt(prompt('enter your bryuliks'))
let watchesSum = parseInt(prompt('enter price of watches')) * watchesCount
let earringsSum = parseInt(prompt('enter price of bryuliks')) * earringsCount
let priceCommon = watchesSum + earringsSum
document.body.innerHTML = (totalCash >= priceCommon)