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
                                <p class="title">Bio</p>
                                <p class="subtitle">Ivan is a nine year old boy who loves Mario Kart, tacos and creating comics.</p>
                                <!-- <p class="subtitle left"> He runs super-fast and never loses a fight with his brother.</p> -->

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
                                    <img src="../assets/tacos.jpg">
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
        background-color: #3e6477 !important;
    }
    .title {
        color: #fff;
        font-family: "Bungee Inline", cursive;
    }

    .is-success {
        background-color: #579c87;
    }

    .is-danger {
        background-color: #a1c181;
    }

    .is-warning {
        background-color: #3e6477;
    }

    .is-primary {
        background-color: #fe7f2d;
    }

    .is-info {
        background-color: #fcca46;
    }

    .button {
        color: #fff;
    }
</style>
