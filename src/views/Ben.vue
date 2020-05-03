<template>
    <div class="hello">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Ben Fortenberry
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
                                <!-- <p class="title">Bio</p> -->
                                <p class="subtitle left">
                                    Ben lives in New Orleans with his wife and three boys where he works as a software developer.
                                    Before that, he did other things.
                                </p>
                                <p class="subtitle left">

                                    When not in front of a computer, he enjoys playing guitar and piano where no one can listen,
                                    films with no plot and attempting to avoid existential anxiety where possible.<br /><br /> It never is.
                                </p>

                            </article>
                            <!-- <article class="tile is-child notification is-warning">
                <p class="title">My Work</p>
                <p class="subtitle"><a class="button is-text" href="http://ivanfortenberry.com/ultra/" target="_blank">Ultra Comics Club</a></p>
              </article> -->
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">

                                <figure class="image ">
                                    <img src="../assets/model2.png">
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Favorite Song</p>
                            <p class="subtitle"><a
                                    style="height:100%"
                                    class="button is-medium is-text"
                                    href="https://www.youtube.com/watch?v=TQtEFdyhgdE"
                                    target="_blank"
                                > Journey In Satchidananda</a>
                                <br />by Alice Coltrane</p>

                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Social</p>
                            <p class="subtitle "><a
                                    class='button is-text'
                                    href='https://twitter.com/BenFortenberry'
                                    target='_blank'
                                >Twitter</a></p>
                            <p class="subtitle "><a
                                    class='button is-text'
                                    href='https://www.linkedin.com/in/ben-fortenberry/'
                                    target='_blank'
                                >LinkedIn</a></p>
                            <br />
                            <p class="title">Things</p>
                            <p class="subtitle "><a
                                    class='button is-text'
                                    href='http://benfortenberry.com/robo/'
                                    target='_blank'
                                >Robo The Fan</a></p>
                            <p class="subtitle "><a
                                    class='button is-text'
                                    href='http://benfortenberry.com/quiz/'
                                    target='_blank'
                                >Quiz-O-Matic</a></p>
                            <p class="subtitle "><a
                                    class='button is-text'
                                    href='http://benfortenberry.com/stories/tumbleweeds-usurper.html'
                                    target='_blank'
                                >The Tumbleweed's Usurper</a></p>

                            <!-- <p class="subtitle"> Pokemon Quest</p>
              <p class="subtitle"> Board Games</p>
              <p class="subtitle"> Chess</p>
              <p class="subtitle"> Toasted Ravioli</p>
              <p class="subtitle"> Cats</p>
              <p class="subtitle"> Nachos</p>
              <p class="subtitle"> Basketball</p> -->
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
        name: "Ben",

        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap");
    .hello {
        padding-top: 17px;
        background-color: #262626 !important;
        height: 100vh;
        min-height: 100vh;
        text-align: center;
    }
    .hero-body {
        background-color: #7395ae !important;
    }
    .title {
        color: #fff;
        font-family: 'IM Fell DW Pica', serif;
        /* letter-spacing: 3px; */
    }

    .is-success {
        background-color: #557a95;
    }

    .is-danger {
        background-color: #635B51;
    }

    .is-warning {
        background-color: #7a6f73;
    }

    .is-primary {
        background-color: #262626;
    }

    .is-info {
        background-color: #5d5c61;
    }

    .button {
        color: #fff;
    }
</style>
