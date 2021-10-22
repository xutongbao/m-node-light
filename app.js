import express from 'express'
import axios from 'axios'

const port = 81
const host = {
  'LAPTOP-4KDIA4A3': 'http://localhost',
  iZ6ilh61jzkvrhZ: 'http://39.97.238.175',
}['LAPTOP-4KDIA4A3']
const baseURL = `${host}:${port}`


//初始化
const init = async () => {
  const app = express()

  app.use(express.static('/temp'))

  //重定向
  app.get('/', function (req, res) {
    res.redirect('/test/air/origin/master/#/air/light/extra/home')
  })

  let port = process.env.PORT
  console.log(process.env.branch)
  if (process.env.branch) {
    const data = await axios
      .post(`${baseURL}/api/jenkins/getPort`, {
        gitRepositorieName: 'm-node-light',
        branch: 'origin/master',
        port,
      })
      .then((res) => {
        if (res.data.state === 1) {
          console.log('Start successful!')
          return res.data.data
        }
      })
      .catch((error) => {
        console.error(error)
      })

    console.log(data)
    port = data.port
  }

  app.listen(port, () => {
    console.log(port)
  })
}
init()
