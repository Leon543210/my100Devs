//API Example

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) //parse response to JSON
    .then(data => {
        console.log(data.message)
        document.querySelector('img').src = data.message
    })
    .catch(err => {
        console.log(`error ${err}`) // If you get this error, make sure your html file has an image tag
    })