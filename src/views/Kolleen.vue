<template>
    <div class="hello">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Kolleen Fortenberry
                    </h1>

                </div>
            </div>
        </section>

        <br />
        <div class="container">

            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Bio</p>
                                <p class="subtitle ">

                                    Kolleen lives in New Orleans where she works as a business analyst. She loves crochet, knitting and graphic design.

                                </p>
                                <!-- <p class="subtitle left"> He runs super-fast and never loses a fight with his brother.</p> -->

                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">My Work</p>
                                <p class="subtitle">
                                    <a
                                        class="button is-medium is-text"
                                        href='http://www.zazzle.com/gifts?ch=strivedesigns'
                                        target="_blank"
                                    >Zazzle</a>

                                    <a
                                        class="button is-medium is-text"
                                        href='http://www.spoonflower.com/profiles/strive'
                                        target="_blank"
                                    >Spoonflower</a>
                                </p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">

                                <figure class="image">
                                    <img src="../assets/yarn.jpg">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Favorite Song</p>
                            <p class="subtitle"><a
                                    class="button is-medium is-text"
                                    href="https://www.youtube.com/watch?v=9zOKBvHNWus"
                                    target="_blank"
                                >Birdhouse in Your Soul</a> <br />by They Might Be Giants</p>

                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p
                                class="title"
                                style="padding-bottom:10px"
                            >Things I Like</p>
                            <p class="subtitle ">Yarn</p>
                            <p class="subtitle"> Peppermint</p>
                            <p class="subtitle"> Ed Emberley</p>
                            <p class="subtitle"> Polka Dots</p>
                            <p class="subtitle"> Felt Tip Pens</p>
                            <p class="subtitle"> Smell of Rain</p>
                            <p class="subtitle"> Square Necklines</p>
                            <p class="subtitle"> Macaroni and Cheese</p>
                            <div class="content">

                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div class="field is-grouped">
                <p class="control">
                    <router-link
                        class="button is-text"
                        to="/abram"
                    >Abram</router-link>

                </p>
                <p class="control">
                    <router-link
                        class="button is-text"
                        to="/ben"
                    >Ben</router-link>

                </p>
                <p class="control">
                    <router-link
                        class="button is-text"
                        to="/elijah"
                    >Elijah</router-link>

                </p>
                <p class="control">
                    <router-link
                        class="button is-text"
                        to="/ivan"
                    >Ivan</router-link>

                </p>

            </div>
            <br /><br />
        </div>

    </div>
</template>

<script>
    export default {
        name: "Kolleen",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Sansita");
    .hello {
        padding-top: 17px;
        background-color: #262626 !important;
        height: 100vh;
        min-height: 100vh;

        text-align: center;
    }
    .hero-body {
        background-color: #8b4b62 !important;
    }
    .title {
        color: #fff;
        font-family: "Sansita", cursive;
    }

    .is-success {
        background-color: #8b4b62;
    }

    .is-danger {
        background-color: #fcbc80;
    }

    .is-warning {
        background-color: #ea9674;
    }

    .is-primary {
        background-color: #bb6f6b;
    }

    .is-info {
        background-color: #f7e29c;
    }

    .button {
        color: #fff;
    }
</style>
