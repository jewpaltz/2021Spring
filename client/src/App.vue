<template>
  <div id="app">
    <MyNav />
    <div class="container">
      <router-view/>
    </div>

      <div id="fb-root"></div>
      <div class="fb-customerchat"
        attribution="biz_inbox"
        page_id="138346359546785">
      </div>
  </div>
</template>

<script>
import MyNav from "./components/Nav";

export default {
  components: {
    MyNav
  }
}
        /*global FB*/
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

</script>

<style lang="scss">

</style>
