import axios from 'axios'
import { getBaseURL } from '../jenkins/util/tools'

//获取可用端口号
const getPort = async () => {
  let port = process.env.PORT
  console.log(process.env.branch)
  if (process.env.branch) {
    const data = await axios
      .post(`${getBaseURL().baseURL}/api/jenkins/getPort`, {
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

export {
  //获取可用端口号
  getPort,
}
