import express from 'express'
const app = express()

app.use(express.static('/temp'))

//重定向
app.get('/', function (req, res) {
  res.redirect('/test/air/origin/master/#/air/light/extra/home')
})

app.listen(88, () => {
  console.log(88)
})
