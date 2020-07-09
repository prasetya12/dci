<template>
    <div class="container">
        <div class="box">
            <div class="wrapper-title">
                <div class="is-size-3 text-purple">
                    Login
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
                                <VuePhoneNumberInput
                                    class="is-danger"
                                    v-model="phoneNumber"
                                    @update="onUpdate"
                                />
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
                    </section>
                </template>
            </div>
            <div class="wrap-button">
                <b-button type="is-primary button"  expanded @click="onLogin">Login</b-button>
                <span class="is-size-7 has-text-grey-light">Don't have an account?
                    <router-link to="/register">
                        <span class="has-text-link login-link">Register</span>
                    </router-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
    name:'LoginPage',
    data(){
        return{
            phoneNumber:'',
            password:'',
            phoneerror:true,
            passworderror:true
        }
    },
    components:{
        VuePhoneNumberInput,
    },
    methods:{
        onUpdate(payload){
            this.phoneNumber = `${payload.countryCallingCode}${payload.phoneNumber}`
        },
        onLogin(){
            console.log('login')
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
        width:400px;
        height: 500px;
        padding-top: 40px;
        padding-bottom: 40px ;
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