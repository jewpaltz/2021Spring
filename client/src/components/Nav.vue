<template>
        <nav class="navbar container is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i class="fab fa-instagram fa-3x  fa-fw fa-pulse"></i>
            Ista-Gratitude
          </a>
      
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive }" @click.prevent="isActive = !isActive" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">

          <router-link to="/" class="navbar-item" >Feed</router-link>
          <router-link to="/mywall" class="navbar-item" >My Wall</router-link>
          <router-link to="/Documentation"  class="navbar-item">Documentation</router-link>
            
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link to="/about" class="navbar-item">
                  About
                </router-link>

                <a class="navbar-item" href="jobs.html">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
          <router-link to="/Shop"  class="navbar-item">Shop</router-link>
            <div class="navbar-item">
              <login-badge />
            </div>
          </div>
        </div>
      </nav>

</template>

<script>
import LoginBadge from "./LoginBadge";

export default {
    data: ()=> ({
        isActive: false
    }),
    components: {
      LoginBadge
    }
}
</script>

<style>

</style>