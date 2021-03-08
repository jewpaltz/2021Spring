<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light" @click="login">
                Log in
            </a>
        </div>
        <div v-else>
            Hello Moshe Plotkin
            (<a @click="logout">
                Log out
            </a>)
        </div>
    </div>
</template>

<script>
import Session, { Login, Logout } from "../models/Session";

export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            Login();
        },
        logout(){
            Logout();
        }
    }
}
</script>

<style>

</style>