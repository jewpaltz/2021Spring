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
            <img :src="Session.user.profile" />
            <b> {{Session.user.firstName}} {{Session.user.lastName}} </b>
            <br />
            {{Session.user.handle}}
            (<a @click="logout">
                Log out
            </a>)
        </div>
    </div>
</template>

<script>
import Session, { Logout } from "../models/Session";

export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.$router.push('Login');
        },
        logout(){
            Logout();
        }
    }
}
</script>

<style>

</style>