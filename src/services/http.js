import axios from 'axios'
// import store from 'store'

export const  BASEURL = 'http://pretest-qa.dcidev.id/api/v1/'

const Http = {
    request(method,url,data,headers={}){
        console.log(data,'database')
        return axios({
            url:url,
            data:data,
            method:method,
            headers:Object.assign({
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin':'*'
            },headers),
            
        })
    },

    register(url,data,headers={}){
        return this.request('post',`${BASEURL}${url}`,data,headers)
    },

    init(){
        axios.defaults.baseURL=BASEURL

        axios.interceptors.request.use(function(config){
            return config
        }),function(error){
            return Promise.reject(error)
        }

        axios.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
              return response
            }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
              return Promise.reject(error.response)
            })
    }
}

export default Http;
