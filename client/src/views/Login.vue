<template>

    <div class="columns">
        <div class="column is-half is-offset-one-quarter">
            <form @submit.prevent="login" class="box">
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Handle" v-model="handle">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-success">
                    Login
                    </button>
                </p>
                </div>

                <hr />

                <button @click.prevent="loginFB" class="button is-primary is-fullwidth is-large">
                    Login with Facebook
                </button>
            </form>

        </div>
    </div>
</template>

<script>
import { Login, LoginFB } from "../models/Session";
export default {
    data: ()=>({
        handle: null,
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password);
        },
        loginFB(){
            /*global FB */
            FB.login(function(response) {
                console.log({response})
                    if (response.status === 'connected') {
                        LoginFB(response.authResponse.accessToken)
                    } else {
                        // The person is not logged into your webpage or we are unable to tell. 
                    }
            }, {scope: 'public_profile,email'});
        }
    }
}
</script>

<style>

</style>