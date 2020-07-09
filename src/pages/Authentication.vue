<template>
    <div class="container">
        <div class="box">
            <div class="wrapper-title">
                <div class="is-size-3 text-purple">
                    Authentication
                </div>
                <div class="is-size-7 has-text-grey-light">
                    Please, validate your phone number first
                </div>
            </div>
            <div class="content" >
                <template>
                    <div class="columns is-mobile" style="text-align:center;margin-top:50px">
                        <div class="column">
                            <input class="text-center" maxlength="1" size="1" min="0" max="9" pattern="[0-9]{1}" v-on:keyup="autoTab" type="tel" v-model="code[0]"  style="font-size:1.6rem;text-align:center"/>
                        </div>
                        <div class="column">
                            <input class="text-center" maxlength="1" size="1" pattern="[0-9]{1}" v-model="code[1]" v-on:keyup="autoTab" style="font-size:1.6rem;text-align:center"/>
                        </div>
                        <div class="column">
                            <input class="text-center" maxlength="1" size="1" pattern="[0-9]{1}" v-model="code[2]" v-on:keyup="autoTab" style="font-size:1.6rem;text-align:center"/>
                        </div>
                        <div class="column">
                            <input class="text-center" maxlength="1" size="1" pattern="[0-9]{1}" v-model="code[3]" v-on:keyup="autoTab" style="font-size:1.6rem;text-align:center"/>
                        </div>
                    </div>
                </template>
            </div>
            <div class="wrap-button">
                <b-button type="is-primary button"  expanded>Validate</b-button>
                <span class="is-size-7 has-text-grey-light"> 
                    <span class="has-text-link login-link" @click="isModalActive=true">Resend OTP</span>
                </span>
            </div>
            <b-modal :active.sync="isModalActive" :width="450">
                <header class="modal-card-head text-purple">
                        <p class="is-size-5 text-purple">Resend Code</p>
                    </header>
                <div class="card modal-card-body" style="border-bottom-right-radius:8px;border-bottom-left-radius:8px;">
                    
                    <section>
                        <VuePhoneNumberInput
                            class="is-danger"
                            v-model="phoneNumber"
                            @update="onUpdate"
                        />
                        <div class="wrap-button" style="margin-top:20px">
                            <b-button type="is-primary button"  expanded>Resend Code</b-button>
                        </div>
                        <div class="wrap-button" style="margin-top:10px">
                            <b-button type="is-light button" @click="closeModal"  expanded>Cancel</b-button>
                        </div>
                        
                    </section>
                </div>
            </b-modal>
        </div>
    </div>
</template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default {
    name:'AuthenticationPage',
    data(){
        return{
             code: ['', '', '', ''],
             isModalActive:false,
             phoneNumber:''
        }
    },
    components:{
        VuePhoneNumberInput
    },
    methods:{
        onFocus () {
            window.scrollTo(0, document.body.scrollHeight)
        },
        autoTab (e) {
            console.log(e.keyCode)
            if(e.keyCode!=8){
                if( event.target.parentElement.nextSibling != null){
                     console.log(event.target.parentElement.nextSibling.children[0].focus())
                }
            }else{
                if( event.target.parentElement.previousSibling != null){
                    console.log(event.target.parentElement.previousSibling.children[0].focus())
                }
            }
        },

        closeModal(){
            const close = document.body.querySelector('.modal-close');
            close.click()
        },
        onUpdate(payload){
            this.phoneNumber = `${payload.countryCallingCode}${payload.phoneNumber}`
        },
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

.wrap-button{
    text-align: center;
}

.login-link{
    cursor: pointer;
}

input:focus{
    border: 1px solid #6C5AEE;
}

.card{
    padding: 20px;
}
</style>