//APIs example
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })