const os = require('os')
const axios = require('axios')

//根据主机名获取baseURL
const getBaseURL = () => {
  const port = 81
  const hostname = os.hostname()
  const host = {
    'LAPTOP-4KDIA4A3': 'http://localhost',
    iZ6ilh61jzkvrhZ: 'http://39.97.238.175',
  }[hostname]
  const baseURL = `${host}:${port}`
  return baseURL
}

//获取可用端口号
const getPort = async () => {
  let port = process.env.PORT
  console.log(process.env.branch)
  if (process.env.branch) {
    const data = await axios
      .post(`${getBaseURL()}/api/jenkins/getPort`, {
        gitRepositorieName: process.env.gitRepositorieName,
        branch: process.env.branch,
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
  console.log('port:', port)
  return port
}

module.exports = {
  //根据主机名获取baseURL
  getBaseURL,
  //获取可用端口号
  getPort,
}
