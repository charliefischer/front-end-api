let feed = document.querySelector('.feed')
const api = "https://chitter-backend-api-v2.herokuapp.com/peeps"
let peeps = []
let allPeeps = ""

fetchData = (api = "https://chitter-backend-api-v2.herokuapp.com/peeps") => {
  fetch(api).then(response => {
    response.json()
    .then( peepsData => {
      for(let i = 0; i < peepsData.length; i++){
        let newPeep = new Peep(
            peepsData[i].id, 
            peepsData[i].body, 
            peepsData[i].created_at, 
            peepsData[i].user
          )
        peeps.push(newPeep)
      }
      updateFeed()
    })
  }).catch(() => console.log('fail to get api'))
}

fetchData(api)

updateFeed = () => {
  for(let i = 0; i < peeps.length; i++){
    allPeeps = allPeeps + 
      `<div class="feed-peep">
        <a class='peep-body'>` + peeps[i].body + `</a>
        <a class='peep-user'>` + peeps[i].user.handle + `</a>
      </div>`
  }
  document.querySelector('.feed').innerHTML = allPeeps
}

module.exports = fetchData