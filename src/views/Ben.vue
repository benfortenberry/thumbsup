<template>
  <div class="hello">
 
    <div class="blob"></div>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Ben Fortenberry</h1>
        </div>
      </div>
    </section>

    <br />
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-4 is-offset-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="subtitle left">
                  Ben lives in New Orleans with his wife and three boys where he
                  works as a software developer. Before that, he did other
                  things.
                </p>
                <p class="subtitle left">
                  When not in front of a computer, he enjoys playing guitar and
                  piano where no one can listen, films with no plot and
                  attempting to avoid existential anxiety where possible.<br /><br />
                  It never is.
                </p>
              </article>
            </div>
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

      <br /><br />
    </div>
  </div>
</template>

<script>





export default {
  name: 'Ben',
mounted() {
  
},
  props: {
    msg: String,
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&display=swap');
.hello {
  padding-top: 17px;
  background-color: #260303 !important;
  height: 100vh;
  min-height: 100vh;
  z-index: 2 !important;
  text-align: center;
}

.title {
  color: #fff;
  font-family: 'Source Code Pro', serif;
  /* letter-spacing: 3px; */
}

.is-success {
  background-color: transparent;
  z-index: 1;
}

.is-danger,
.is-danger p,
.is-danger a {
  background-color: #d9d9d9;
  color: #000 !important;
}

.is-primary {
  background-color: transparent;
  z-index: 1;
}

.is-info {
  background-color: #a60a0a;
}

.title {
  z-index: 10;
}

.button {
  color: #fff;
}

.blob {
  position: absolute;
  left: 30vmin;
  top: -10vmin;
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  width: 70vmin;
  height: 70vmin;
  background: blue;
  background-image: linear-gradient(45deg, #d92b2b 0%, #a60a0a 100%);
  z-index: 0;
  animation: morph 6s linear infinite alternate;
}

@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  }
  100% {
    border-radius: 40% 60%;
  }
}

</style>
