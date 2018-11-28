import KJUR from 'jsrsasign'
import axios from 'axios'
import http from 'http'
import https from 'https'
import md5 from 'md5'
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.baseURL = '/api/'

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

function getToken () {
 
}

function sign (content) {
  
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params, {
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true })
    })
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}


export function getCookie (name) {
  return window.localStorage.getItem(name)
}

export function addCookie (name, val, expire) {
  window.localStorage.setItem(name, val)
}
