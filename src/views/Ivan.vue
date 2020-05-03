<template>
    <div class="hello">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Ivan Fortenberry
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
                                <p class="subtitle left">Ivan is an eleven year old boy who loves 
                                   Smash Bros, tacos and hoverboarding.</p>

                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">My Work</p>
                                <p class="subtitle"><a
                                        class="button is-medium is-text"
                                        href="http://ivanfortenberry.com/ultra/"
                                        target="_blank"
                                    >Ultra Comics Club</a></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">

                                <figure class="image ">
                                    <img src="../assets/bowser.jpg">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Favorite Song</p>

                            <p class="subtitle"><a
                                    class="button is-medium is-text"
                                    href="https://www.youtube.com/watch?v=Ott6NJ_XxdY"
                                    target="_blank"
                                >U Name It</a><br />by Shirley Caesar</p>

                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Things I Like</p>
                            <p class="subtitle ">Super Smash Bros.</p>
                            <p class="subtitle"> Pokemon Quest</p>
                            <p class="subtitle"> Board Games</p>
                            <p class="subtitle"> Chess</p>
                            <p class="subtitle"> Toasted Ravioli</p>
                            <p class="subtitle"> Cats</p>
                            <p class="subtitle"> Nachos</p>
                            <p class="subtitle"> Basketball</p>
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
                        to="/kolleen"
                    >Kolleen</router-link>

                </p>
            </div>
            <br /><br />
        </div>

    </div>
</template>

<script>
    export default {
        name: "Ivan",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Bungee+Inline");

    .hello {
        padding-top: 17px;
        background-color: #262626 !important;
        height: 100vh;
        min-height: 100vh;

        text-align: center;
    }
    .hero-body {
        background-color: #98C14A !important;
    }
    .title {
        color: #fff;
        font-family: "Bungee Inline", cursive;
    }

    .is-success {
        background-color:#8D9215;
    }

    .is-danger {
        background-color: #4056A1;
    }

    .is-warning {
        background-color: #F13C1F;
    }

    .is-primary {
        background-color: #327A5A;
    }

    .is-info {
        background-color: #EAF69E;
    }

    .button {
        color: #fff;
    }
</style>
