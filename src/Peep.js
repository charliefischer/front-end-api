class Peep {
  constructor(id = 1, body = "", createdAt, user){
    this.id = id
    this.body = body
    this.createdAt = createdAt
    this.user = user 
  }
}

module.exports = Peep