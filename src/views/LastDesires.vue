<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Last Desires
          </h1>
          <!-- <h2 class="subtitle">
            Hero subtitle
          </h2> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LastDesires',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 17px;
  background-color: #fff !important;
  background-image: url("../assets/snow.jpg") !important;
  height: 100vh;
  background-size: cover;
  min-height: 100vh;

  text-align: center;
}
.title,
.subtitle {
  color: #333;
}
.is-link {
  background-color: #c2e7f2;
}
</style>
