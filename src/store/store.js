import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import qs from 'querystring'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://pretest-qa.dcidev.id/api/v1/'
// const baseURL = 'https://pretest-qa.dcidev.id/api/v1/'
export const store =  new Vuex.Store({
    state:{

    },
    mutations:{
        
    },
    actions:{
        register(context, data) {
            axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.defaults.headers.post['Accept'] = 'application/json';
            axios.defaults.headers.post['Connection'] = 'keep-alive';

            // axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'accept, content-type';
            console.log(data,'data')

            return new Promise((resolve, reject) => {
              axios.post(`register`,null,{params:data})
                .then(response => {
                  resolve(response)
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                  reject(error)
                })
            })
          },
    }
})