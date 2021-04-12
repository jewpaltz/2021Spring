<template>
    <form @submit.prevent="login">
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
    </form>
</template>

<script>
import { Login } from "../models/Session";
export default {
    data: ()=>({
        handle: null,
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password);
        }
    }
}
</script>

<style>

</style>