<template>
                  <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="$emit('add')">

                                <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Picture URL</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="http://google.com" v-model="newPost.src">
                                    </div>
                                    <p class="help is-danger">
                                        This field is required
                                    </p>
                                    </div>
                                </div>
                                </div>

<div class="field is-horizontal">
    <div class="images">
        <img v-for="image in images" :key="image.id" :src="image.src" @click="img_click(image)" />
    </div>
</div>

                                <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Caption</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Tell us what you are thinking" v-model="newPost.caption"></textarea>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div class="field is-horizontal">
                                <div class="field-label">
                                    <!-- Left empty for spacing -->
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                    <div class="control">
                                        <button class="button is-primary">
                                        Post
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

</template>

<script>
export default {
    props:{
        newPost: Object
    },
    data: ()=> ({
        images: []
    }),
    mounted(){
        /*global FB*/
        FB.api('me/photos?fields=images', response=>{
            console.log({response});
            this.images = response.data.map(x=> ({id: x.id, src: x.images[0].source }) )
        })
    },
    methods: {
        img_click(image){
            this.newPost.src = image.src;
            console.log(this.newPost)
        }
    }
}
</script>

<style>
    .images {
        display: block;
    }
    .images img {
        box-sizing: border-box;
        width: 75px;
        float: left;
        padding: 3px;
        border: 1px solid #AABBFF;
        margin: 5px;
        border-radius: 3px;
        cursor: pointer;
    }
</style>