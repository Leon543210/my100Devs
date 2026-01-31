//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
let curDate = new Date();

let y = curDate.getFullYear()
let m = curDate.getMonth()
let d = curDate.getDay()

console.log(`Year: ${y}; Month: ${m}; Day: ${d}`)
let strDate = `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`
console.log('date: ', strDate)

fetch('https://api.nasa.gov/planetary/apod?api_key=ZQCoAPbwdodFQNVhLdqjYnDWb5Tcuhgdv61NtzcM')
.then(res => res.json())
.then(data => {
    document.querySelector('h2').innerText = data.title
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    console.log(data)
})

.catch(err => {
    console.log(`error: ${err}`)
})

/*
fetch(`https://api.nasa.gov/planetary/apod?api_key=ZQCoAPbwdodFQNVhLdqjYnDWb5Tcuhgdv61NtzcM&date=${strDate}`)
.then(res => res.json())
.then(data => {
    document.querySelector('h2').innerText = data.title
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    console.log(data)
})

.catch(err => {
    console.log(`error: ${err}`)
})
*/