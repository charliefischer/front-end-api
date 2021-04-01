let feed = document.querySelector('.feed')
const api = "https://chitter-backend-api-v2.herokuapp.com/peeps"
let peeps = []
let allPeeps = ""

fetchData = (api) => {
  $.get(api, (peepsData, status) => {
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
}

fetchData(api)

updateFeed = () => {
  for(let i = 0; i < peeps.length; i++){
    allPeeps = allPeeps + 
      `<div class="feed-peep">
        <a class='peep-body'>` + peeps[i].body + `</a>
        <a class='peep-user'>` + peeps[i].user.handle + `</a>
        <a class='peep-created-at'>Created at ` + peeps[i].createdAt + `</a>
      </div>`
  }
  document.querySelector('.feed').innerHTML = allPeeps
}

module.exports = fetchData