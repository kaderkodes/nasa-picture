
document.querySelector('button').addEventListener('click', getMedia)

function getMedia() {
  document.querySelector('.intro').classList.add("hidden")
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=rshGIJYPPcoBJqH8sR65sKLfJxwMV3ZmHr1s5sB7&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      // The two lines below reset the class="hidden" everytime the API is run. This is necessary for the toggle method to work
      document.querySelector('img').classList.add("hidden")
      document.querySelector('iframe').classList.add("hidden")


      if (data.media_type === "image") {
        document.querySelector('img').src = data.hdurl

        // Toggle switches between true and false. If hidden is on it turns it off, and vice versa
        document.querySelector('img').classList.toggle("hidden")
        document.querySelector('iframe').classList.add("hidden")

      } else if (data.media_type === "video") {
        document.querySelector('iframe').src = data.url

        document.querySelector('iframe').classList.toggle("hidden")
        document.querySelector('img').classList.add("hidden")
      }

      document.querySelector('h2').innerText = data.title
      document.querySelector('h4').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}


