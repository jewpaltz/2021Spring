<template>
  <div id="my-wall">
      <div class="columns">
          <div class="column is-one-quarter">
              <div class="content-item">
                  <FriendsShort />
              </div>
          </div>
          <div class="column">

              <div class="content-item">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="addPost">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Owner</label>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Name" v-model="newPost.user.name">
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                    </div>
                                    <div class="field">
                                    <p class="control is-expanded has-icons-left has-icons-right">
                                        <input class="input" type="text" placeholder="Socialmedia Handle" v-model="newPost.user.handle" >
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                        </span>
                                        <span class="icon is-small is-right">
                                        <i class="fas fa-check"></i>
                                        </span>
                                    </p>
                                    </div>
                                </div>
                                </div>

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
              </div>

              <div class="content-item" v-for="(post, i) in posts" :key="i">
                <ContentCard :post="post" />
              </div>
          </div>
          <div class="column is-one-quarter">
              <div class="content-item">
                <ContentCard :post="newPost" />
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import ContentCard from "../components/ContentCard";

export default {
    data: ()=> ({
        newPost: {
            user: { }
        },
        posts: [
            { 
                src: "https://bulma.io/images/placeholders/1280x960.png",
                alt: "Placeholder image",
                caption: "Lorem Ipsom",
                time: Date(),
                user: {
                    name: "John Smith",
                    handle: "@johnsmith",
                    pic: "https://bulma.io/images/placeholders/96x96.png"
                }
            },
            { 
                src: "https://bulma.io/images/placeholders/1280x960.png",
                alt: "Placeholder image",
                caption: "We want Moshiach Now",
                time: Date(),
                user: {
                    name: "Kamala Harris",
                    handle: "@johnsmith",
                    pic: "https://bulma.io/images/placeholders/96x96.png"
                }
            },
            { 
                src: "https://bulma.io/images/placeholders/1280x960.png",
                alt: "Placeholder image",
                caption: "Have a wonderful day",
                time: Date(),
                user: {
                    name: "Moshe Plotkin",
                    handle: "@johnsmith",
                    pic: "https://bulma.io/images/placeholders/96x96.png"
                }
            },
        ]
    }),
    components: {
        ContentCard
    },
    methods: {
        addPost(){
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        }
    }
}
</script>

<style>
.content-item {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>