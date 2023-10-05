const users = []
let bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
      bcrypt.compareSync(password,users[i].password)

        if (users[i].username === username && bcrypt.compareSync(password,users[i].password)) {
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      let hashedPassword = bcrypt.hashSync(req.body.password, 10)
      let bodyObj = req.body

      bodyObj.password = hashedPassword
      users.push(req.body)



        console.log('Registering User')
        // console.log(req.body)
        // console.log(req.body.password)
        // console.log(hashedPassword)
        // users.push(req.body)
        res.status(200).send(req.body)
    }
}