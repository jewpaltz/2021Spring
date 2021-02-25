<template>
          <div class="columns">
            
            <div class="column is-two-thirds">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Shop
                    </p>
                  </header>
                
                  <div class="card-content">

                      <div class="media" v-for="(x, i) in inventory" :key="i">
                        <div class="media-left">
                          <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                          </figure>
                        </div>


                        <div class="media-content">
                        <button class="button is-small is-primary is-pulled-right" @click.prevent="add(i)">
                          Add to Cart
                        </button>
                          <p class="title is-4">{{x.name}}</p>
                          <p class="subtitle is-6">${{x.price}}</p>
                        </div>
                      </div>
                  
                     </div>
                  </div>
            </div>
            <div class="column">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Cart
                    </p>
                  </header>

                  <table class="table is-striped is-narrow is-hoverable is-fullwidth">

                    <tr><th>Name</th><th>Qty</th><th>Cost</th></tr>


                    <tr  v-for="(x, i) in cart" :key="i">
                      <td>{{x.name}}</td>
                      <td>{{x.qty}}</td>
                      <td>{{x.price * x.qty}}</td>
                    </tr>


                    <tr><th>Total</th><th></th><th> {{ cart.reduce((tot, x) => tot + x.qty * x.price, 0 ) }} </th></tr>
                  </table>
                
                  <div class="card-content">
                      
                  
                     <button class="button is-success">Checkout</button>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
          data: () => ({
            inventory: [
                { name: 'Shovel', price: 3.99 },
                { name: 'Sled', price: 13.99 },
                { name: 'Bag of Salt', price: 9.50 },
                { name: 'Snow Blower', price: 399 },
                { name: 'Skis', price: 83.99 },
            ],
            cart: []
          }),
          methods: {
            add(id){
              this.cart.push({... this.inventory[id], qty: 1  })
            }
          }
}
</script>

<style>

</style>