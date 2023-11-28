<template>
  <div class="hello">
    <br />
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="subtitle intro left">
                Ben lives in New Orleans with his wife and three boys where he
                works as a software developer. Before that, he did other things.
              </p>
              <p class="subtitle left">
                When not in front of a computer, he enjoys playing guitar and
                piano where no one can listen, films with no plot and attempting
                to avoid existential anxiety where possible.<br /><br />
                It never is.
              </p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Social</p>

              <p class="subtitle">
                <a
                  class="button is-text"
                  href="https://www.linkedin.com/in/ben-fortenberry/"
                  target="_blank"
                  >LinkedIn</a
                >
              </p>
              <br />
              <p class="title">Things</p>
              <p class="subtitle">
                <a
                  class="button is-text"
                  href="http://benfortenberry.com/robo/"
                  target="_blank"
                  >Robo The Fan</a
                >
              </p>
              <p class="subtitle">
                <a
                  class="button is-text"
                  href="http://benfortenberry.com/quiz/"
                  target="_blank"
                  >Quiz-O-Matic</a
                >
              </p>
              <p class="subtitle">
                <a
                  class="button is-text"
                  href="http://benfortenberry.com/stories/tumbleweeds-usurper.html"
                  target="_blank"
                  >The Tumbleweed's Usurper</a
                >
              </p>

              <div class="content"></div>
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
@import url('https://fonts.googleapis.com/css2?family=Vollkorn&display=swap');
.hello {
  padding-top: 17px;
  background-color: #260303 !important;
  height: 100vh;
  min-height: 100vh;
  background-image: url(https://media.giphy.com/media/l0Exhl2a4hQlubRfy/giphy.gif);
  background-size: cover;
}

* {
  color: #fff;
  font-family: 'Vollkorn', serif;
}

.intro::first-letter {
  initial-letter: 2;
  margin-right: 5px;
  margin-top: -20px;
}

.is-success {
  background-color: transparent;
}

.is-primary {
  background-color: transparent;
}

.button {
  color: #fff;
}
</style>
