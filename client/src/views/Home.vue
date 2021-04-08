<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" id="home-img">
    <h1> Hi this is new awesome code</h1>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import { api } from "../models/myFetch";

(async ()=>{

  const actualItem = await api("posts");
  console.log({actualItem});

})()



export default {
  name: 'Home',
  components: {
    
  }
}
</script>
