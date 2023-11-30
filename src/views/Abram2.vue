<template>
  <div class="hello">
    <br />
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="subtitle intro left mt-10">
                Abram lives in New Orleans where he attends The Willow School and
                participates in the Robotics Club.
                <br /><br />
                He hopes to pursue a career in robotics engineering.
              </p>
              <!-- <p class="subtitle left">
                When not in front of a computer, he enjoys playing guitar where
                no one can listen, films with no plot and attempting to avoid
                existential anxiety where possible.<br /><br />
                It never is.
              </p> -->
            </article>
          </div>
        </div>
        <div class="tile">
          <article class="tile is-child notification is-success">
            <div class="content">
              <!-- <p class="title">Things I like</p>

              <p class="subtitle mt-5">Minecraft</p>
              <p class="subtitle">Pokemon</p>
              <p class="subtitle">Reading</p>
              <p class="subtitle">Cats</p>
              <p class="subtitle">Legos</p>
              <p class="subtitle">Mythology</p>
              <p class="subtitle">Video Games</p>
              <p class="subtitle">Sleeping</p>
              <div class="content"></div> -->
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ben',
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
.hello {
  padding-top: 17px;
  background-color: #000 !important;
  height: calc(100vh - calc(100vh - 100%));
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://media.giphy.com/media/Vf2TxqFiyWran2lx8V/giphy.gif);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

* {
  color: #fff;
  font-family: 'Source Code Pro', serif;
}

.intro::first-letter {
  initial-letter: 2;
  margin-right: 5px;
  margin-top: -30px;
}

.is-success {
  background-color: transparent;
}

.is-primary {
  background-color: transparent;
}

.button,
.subtitle {
  color: #fff;
  font-size: 25px;

  text-decoration: none;
}

.mt-5 {
  margin-top: 5px !important;
}

.mt-10 {
  margin-top: 10px !important;
}
</style>
