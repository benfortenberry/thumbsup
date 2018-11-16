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
                <p class="title">Bio</p>
                <p class="subtitle "> Elijah is a 4 year old boy who loves cars. He also loves trucks. And cars. Also cars. His favorite colors
                  are black and pink. Paw Patrol is good too.</p>
                <!-- <p class="subtitle left">Ivan is a nine year old boy who loves Mario Kart, fruit snacks and the song "Fast Cars" by the Buzzcocks.</p> -->
                <!-- <p class="subtitle left"> He runs super-fast and never loses a fight with his brother.</p> -->

              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">Favorite Pokemon</p>
                <p class="subtitle"><a class="button is-medium is-text" href="https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)" target=_blank>Eevee</a></p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">

                <figure class="image is-4by3">
                  <img src="../assets/cat.jpg">
                </figure>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Favorite Song</p>
              <p class="subtitle"><a class="button is-medium is-text" href="https://www.youtube.com/watch?v=vQObWW06VAM" target="_blank">Apache (Jump On It)</a> </p>

            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Things I Like</p>
              <p class="subtitle ">Cats</p>
              <p class="subtitle"> Puzzles</p>
              <p class="subtitle"> Pink</p>
              <p class="subtitle"> Drawing</p>
              <p class="subtitle"> Legos</p>
              <p class="subtitle"> Cars</p>
              <p class="subtitle"> Video Games</p>
              <p class="subtitle"> Swings</p>
              <!-- <p class="subtitle"> Harris</p> -->
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
          <router-link class="button is-text" to="/ben">Ben</router-link>

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
  name: 'Elijah',
  props: {
    msg: String
  }
}
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
  background-color: #b61173 !important;
}
.title {
  color: #fff;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 3px;
}

.is-success {
  background-color: #ff9800;
}

.is-danger {
  background-color: #ff8100;
}

.is-warning {
  background-color: #ef6b30;
}

.is-primary {
  background-color: #e0335e;
}

.is-info {
  background-color: #b61173;
}

.button {
  color: #fff;
  text-decoration: none;
}
</style>
