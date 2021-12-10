import express from 'express'
import { getPort } from './utils/tools.js'
const history = require('connect-history-api-fallback')

//初始化
const init = async () => {
  const app = express()

  //前端路由history模式
  app.use(history())

  const port = await getPort()
  app.use(express.static(`/temp/${port}`))
  //日志
  app.use(express.static('log'))

  //重定向
  // app.get('/', function (req, res) {
  //   res.redirect('/test/air/origin/master/#/air/light/extra/home')
  // })

  app.listen(port, () => {
    console.log(port)
  })
}
init()
