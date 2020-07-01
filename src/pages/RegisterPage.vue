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
                                <input class="input is-hovered" type="text" placeholder="Phone Number">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label has-text-grey-light">
                                Password
                            </label>
                            <div class="control">
                                <input class="input is-hovered" type="password" placeholder="Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="label has-text-grey-light">
                                Country
                            </label>
                            <div class="control">
                                <input class="input is-hovered" type="tet" placeholder="Country">
                            </div>
                        </div>
                    </section>
                </template>
            </div>
            <div class="wrap-button">
                <b-button type="is-primary" expanded>Register</b-button>
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
export default {
    name:'RegisterPage'
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