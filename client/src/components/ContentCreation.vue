<template>
                  <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="$emit('add')">
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

</template>

<script>
export default {
    props:{
        newPost: Object
    }
}
</script>

<style>

</style>