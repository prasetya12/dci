import Http from '../http'

export default {
    register(data){
        return new Promise((resolve,reject)=>{
            return Http.register('register',data)
                .then(response=>resolve(response.data))
                .catch(err=>reject(err))
        })
    }
}