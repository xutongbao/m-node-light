import express from 'express'
import { getPort } from './utils/tools.js'

//初始化
const init = async () => {
  const app = express()

  app.use(express.static('/temp'))
  //日志
  app.use(express.static('log'))

  //重定向
  app.get('/', function (req, res) {
    res.redirect('/test/air/origin/master/#/air/light/extra/home')
  })

  const port = await getPort()
  app.listen(port, () => {
    console.log(port)
  })
}
init()
