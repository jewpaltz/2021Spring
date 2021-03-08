<template>
  <div class="card">
      <div class="card-content">
          <button class="delete is-pulled-right" @click.prevent="$emit('delete')"></button>
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <img :src="post.user.pic" :alt="post.user.name" />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{post.user.name}}</p>
                <p class="subtitle is-6">{{post.user.handle}}</p>
            </div>
      </div>

      </div>
    <div class="card-image">
      <figure class="image">
        <img :src="post.src" :alt="post.alt"
        />
      </figure>
    </div>
    <div class="card-content">

      <div class="content">
        {{post.caption}}
        <br />
        <time :datetime="post.time">{{post.time}}</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
};
</script>

<style>
</style>