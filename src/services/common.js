import request from './request'

export const getCookie=()=>{

  return request({
    url:'/register/anonimous'
  })
}