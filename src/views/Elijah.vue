<template>
    <div class="hello">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Elijah Fortenberry
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
                                <p class="subtitle left"> Elijah is a 6 year old boy who loves video games and board games. His favorite colors
                                    are red and aqua. Tig and Leo is good too. </p>

                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">Favorite Pokemon</p>
                                <p class="subtitle"><a
                                        class="button is-medium is-text"
                                        href="https://www.pokemon.com/us/pokedex/pikachu"
                                        target=_blank
                                    >Pikachu</a></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">

                                <figure class="image is-4by3">
                                    <img src="../assets/kitty.jpg">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Favorite Song</p>

                            <p class="subtitle"><a
                                    class="button is-medium is-text"
                                    href="https://www.youtube.com/watch?v=-tJYN-eG1zk"
                                    target="_blank"
                                >We Will Rock You</a><br /> by Queen </p>

                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Things I Like</p>
                            <p class="subtitle ">Cats</p>
                            <p class="subtitle"> Dogs</p>
                            <p class="subtitle"> Aqua</p>
                            <p class="subtitle"> Playing</p>
                            <p class="subtitle"> Legos</p>
                            <p class="subtitle"> Marbles</p>
                            <p class="subtitle"> Video Games</p>
                            <p class="subtitle"> Swings</p>
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
        name: "Elijah",
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Luckiest+Guy");

    .hello {
        padding-top: 17px;
        background-color: #262626 !important;
        height: 100vh;
        min-height: 100vh;

        text-align: center;
    }
    .hero-body {
        background-color: rgb(0, 145, 145)   !important;
    }
    .title {
        color: #fff;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 3px;
    }

    .is-success {
        background-color: #f37735 ;
    }

    .is-danger {
        background-color: #00aedb  ;
    }

    .is-warning {
        background-color: #d11141   ;
    }

    .is-primary {
        background-color: #00b159 ;
    }

    .is-info {
        background-color:#ffc425  ;
        color:black;
    }

    .button {
        color: #fff;
    }
</style>
