<template>
    <div class="hello">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Abram Fortenberry
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
                                <p class="subtitle left">Abram is a 12 year old boy who loves 
                                    ice cream sandwiches, 
                                    Digimon, dancing to music and collecting gems. </p>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">Favorite Game</p>
                                <p class="subtitle"><a
                                        class="button is-medium is-text"
                                        href="https://terraria.org/"
                                        target=_blank
                                    >Terraria</a></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">

                                <figure class="image ">
                                    <img
                                        style="max-width:640px"
                                        src="../assets/nintendo.jpg"
                                    >
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Favorite Song</p>

                            <p class="subtitle"><a
                                    class="button is-medium is-text"
                                    href="https://www.youtube.com/watch?v=8nYXTsbwsxA"
                                    target="_blank"
                                >Blitzkrieg Bop</a> <br />by The Ramones</p>

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

                            <p class="subtitle ">Minecraft</p>
                            <p class="subtitle"> Pokemon</p>
                            <p class="subtitle"> Reading</p>
                            <p class="subtitle"> Cats</p>
                            <p class="subtitle"> Legos</p>
                            <p class="subtitle"> Mythology</p>
                            <p class="subtitle"> Video Games</p>
                            <p class="subtitle"> Cycling</p>
                            <!-- <p class="subtitle"> Harris</p> -->
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
        name: "Abram",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Press+Start+2P");

    .hello {
        padding-top: 17px;
        background-color: #262626 !important;
        height: 100vh;
        min-height: 100vh;

        text-align: center;
    }
    .hero-body {
        background-color: #4a4e4d   !important;
    }
    .title {
        color: #fff;
        font-family: "Press Start 2P", cursive;
        font-size: 1.5rem;
    }

    .is-success {
        background-color: #0e9aa7  ;
    }

    .is-danger {
        background-color:#fe8a71  ;
    }

    .is-warning {
        background-color: #689775;
    }

    .is-primary {
        background-color: #3da4ab ;
    }

    .is-info {
        background-color: #f6cd61 ;
    }

    .button {
        color: #fff;
    }
</style>
