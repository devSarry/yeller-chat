<template>
    <div>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>John Doe</strong> <small>@jon doe</small> <small>31m</small>
                            <br>
                            {{ message.text }}
                        </p>
                    </div>
                    <nav class="level">
                        <div class="level-left">
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-reply"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                            </a>
                            <a class="level-item">
                                <span class="icon is-small"><i class="fa fa-heart"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    </div>
</template>
<style>

</style>
<script>
    
    export default{
        props: ['message'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
