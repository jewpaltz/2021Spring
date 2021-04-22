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
          console.log('FB.init')
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };
        console.log('window.fbAsyncInit');

        function loadFB(d, s, id, url) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = url;
          fjs.parentNode.insertBefore(js, fjs);
        }
        loadFB(document, 'script', 'facebook-jssdk1', 'https://connect.facebook.net/en_US/sdk.js');
        //loadFB(document, 'script', 'facebook-jssdk2', 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js');

</script>

<style lang="scss">

</style>
