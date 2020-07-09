<template>
    <div class="container">
        <div class="box">
            <div class="wrapper-title">
                <div class="is-size-3 text-purple">
                    Sign up
                </div>
                <div class="is-size-7 has-text-grey-light">
                    Please, fill up the form below
                </div>
            </div>
            <div class="content">
                <template>
                    <section>
                        <div class="form-group">
                            <label class="label has-text-grey-light">
                                Phone Number
                            </label>
                            <div class="control">
                                <VuePhoneNumberInput class="is-danger" v-model="phoneNumber" @update="onUpdate" />
                                <p id="phoneerror" class="help is-danger" v-bind:class="{'is-hidden':phoneerror}">Phone required</p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label has-text-grey-light">
                                Password
                            </label>
                            <div class="control">
                                <input required class="input is-hovered" type="password" placeholder="Password" v-model="password">
                                <p id="passworderror" class="help is-danger" v-bind:class="{'is-hidden':passworderror}" >Password required</p>

                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label has-text-grey-light">
                                Country
                            </label>
                            <div class="control">
                                <country-select required class="input" :regionName="true" :countryName="true" placeholder="Select Country"  v-model="country" topCountry="ID" />
                                <p id="countryerror" class="help is-danger" v-bind:class="{'is-hidden':countryerror}">Country required</p>
                            </div>
                        </div>
                    </section>
                </template>
            </div>
            <div class="wrap-button">
                <b-button type="is-primary button"  expanded @click="onRegister">Register</b-button>
                <span class="is-size-7 has-text-grey-light">Do you have an account ? 
                    <router-link to="/login">
                        <span class="has-text-link login-link">Login</span>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { uuid } from 'vue-uuid'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';


export default {
    name:'RegisterPage',
    data(){
        return{
            phoneNumber:'',
            password:'',
            phone :'',
            latLong:'-7.684055,110.342174',
            deviceToken: uuid.v1(),
            deviceType:2,
            country:'',
            phoneerror:true,
            passworderror:true,
            countryerror:true,


        }
    },
    components:{
        VuePhoneNumberInput,
    },
    methods:{
        onRegister(e){
            e.preventDefault()
            var mode   = process.env.URL;
            console.log(mode,'hallo')

            const params = {
                phone : this.phone,
                password : this.password,
                country : this.country,
                latlong : this.latLong,
                device_token : this.deviceToken,
                device_type : this.deviceType
            }

            if(this.validation()){
                this.$store.dispatch('register',params)
                    .then((res)=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })

            }
        },

        onUpdate(payload){
            this.phone = `${payload.countryCallingCode}${payload.phoneNumber}`
        },

        validation(){
            let result = false;
            if(this.phoneNumber==null){
                this.phoneerror=false
                result = false;
            }else{
                this.phoneerror=true
                result = true;
            }
           

            if(this.password.length==0 || this.password == null){
                this.passworderror=false
                result = false;
            }else{
                this.passworderror=true
                result = true;
            }

            if(this.country.length==0 || this.country == null){
                this.countryerror=false
                result = false;
            }else{
                this.countryerror=true
                result = true;
            }

            return result
        }
    }
}
</script>
<style scoped>
.container{
    height: 100vh;
    padding-top: 50px;
    justify-content: center;
    display: flex;
}

.box{
    width: 400px;
    height: 500px;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
    border-radius: 16px;
    
}

.content{
    margin-top: 30px;
}

.label{
    font-size: 0.8rem;
    font-weight: 200;
}

.form-group{
    margin-top: 20px;
}

.wrap-button{
    text-align: center;
}

.login-link{
    cursor: pointer;
}

</style>