<template>
  <div class="hello">
    <br />
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="subtitle intro left mt-5">
                Ben lives in New Orleans with his wife and three sons where he
                works as a software developer. Before that, he did other things.
              </p>
              <p class="subtitle left">
                When not in front of a computer, he enjoys playing guitar where
                no one can listen, films with no plot and attempting to avoid
                existential anxiety where possible.<br /><br />
                It never is.
              </p>
            </article>
          </div>
        </div>
        <div class="tile">
          <article class="tile is-child notification is-success">
            <div class="content">

              <p class="subtitle">
                <a
                  class="button is-text"
                  href="https://www.linkedin.com/in/ben-fortenberry/"
                  target="_blank"
                  >LinkedIn</a
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
@import url('https://fonts.googleapis.com/css2?family=Hedvig+Letters+Serif:opsz@12..24&display=swap');
.hello {
  padding-top: 17px;
  background-color: #000 !important;
  height: calc(100vh - calc(100vh - 100%));
  min-height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://media.giphy.com/media/3o6fJ6NjGOUFdxMYg0/giphy.gif);
  background-size: cover;
  background-attachment: fixed;
}

* {
  color: #fff;
  font-family: 'Hedvig Letters Serif', serif;
}

.intro::first-letter {
  initial-letter: 2;
  margin-right: 3px;
  margin-top: -27px;
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

.mt-5
{
  margin-top: 5px;
}
</style>
