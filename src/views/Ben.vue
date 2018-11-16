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
                <p class="title">Bio</p>
                <p class="subtitle left">
                  Ben lives in New Orleans where he works as a front-end web developer.
                  Before that, he did other things.
                </p>
                <p class="subtitle left">

                  When not in front of a computer, he enjoys playing guitar and piano where no one can listen,
                  films with no plot and attempting to avoid existential anxiety where possible. It never is.
                </p>
                <!-- <p class="subtitle left"> He runs super-fast and never loses a fight with his brother.</p> -->

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
              <p class="subtitle"><a style="height:100%" class="button is-medium is-text" href="https://www.youtube.com/watch?v=AuA0HQ4Zobc" target="_blank">Epitaph</a></p>

            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Social</p>
              <p class="subtitle "><a class='button is-text' href='https://twitter.com/BenFortenberry' target='_blank'>Twitter</a></p>
              <p class="subtitle "><a class='button is-text' href='https://www.linkedin.com/in/ben-fortenberry/' target='_blank'>LinkedIn</a></p>
              <br />
              <p class="title">Things</p>
              <p class="subtitle "><a class='button is-text' href='http://benfortenberry.com/robo/' target='_blank'>Robo The Fan</a></p>
              <p class="subtitle "><a class='button is-text' href='http://benfortenberry.com/vue/quiz/index.html#/' target='_blank'>Quiz-O-Matic</a></p>
              <p class="subtitle "><a class='button is-text' href='http://benfortenberry.com/stories/tumbleweeds-usurper.html' target='_blank'>The Tumbleweed's Usurper</a></p>

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
          <router-link class="button is-text" to="/abram">Abram</router-link>

        </p>
        <p class="control">
          <router-link class="button is-text" to="/elijah">Elijah</router-link>

        </p>
        <p class="control">
          <router-link class="button is-text" to="/ivan">Ivan</router-link>

        </p>
        <p class="control">
          <router-link class="button is-text" to="/kolleen">Kolleen</router-link>

        </p>
      </div>
      <br /><br />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Ben',

    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Russo+One');

  .hello {
      padding-top: 17px;
      background-color: #262626 !important;
      height: 100vh;
      min-height: 100vh;

      text-align: center;
  }
  .hero-body {
      background-color: #282f3f !important;
  }
  .title {
      color: #fff;
      font-family: 'Russo One', cursive;
      /* letter-spacing: 3px; */
  }

  .is-success {
      background-color: #282f3f;
  }

  .is-danger {
      background-color: #b7a28f;
  }

  .is-warning {
      background-color: #7a6f73;
  }

  .is-primary {
      background-color: #454755;
  }

  .is-info {
      background-color: #fee6b8;
  }

  .button {
      color: #fff;
      text-decoration: none;
  }
</style>
