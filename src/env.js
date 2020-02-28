let baseURL
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    console.log('11')
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    console.log('22')
    break;
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    console.log('33')
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    console.log('44')
    break;
}


export default {
  baseURL
}

