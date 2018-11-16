<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <br />
            <img src='../assets/logo_white.png' />
          </h1>
          <!-- <p class="subtitle">We make apps.</p> -->
          <br /> <br />
          <div class='container'>

            <div class="level">
              <div class="level-item">
                <div class="field is-grouped">
                  <div class='control'>

                    <div class="dropdown " :class="{'is-active': active}" @click='active = !active'>
                      <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Everyday Holidays</span>
                          <span class="icon is-small">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a target='_blank' href="https://itunes.apple.com/us/app/everyday-holidays/id1410776446?ls=1&mt=8" class="dropdown-item">
                            <i class="fa fa-apple" aria-hidden="true"></i> iOS
                          </a>
                          <a target='_blank' href='https://play.google.com/store/apps/details?id=com.thumbsupsolutions.everydayaholiday&hl=en' class="dropdown-item">
                            <i class="fa fa-android" aria-hidden="true"></i> Android
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- <p class="control">
                    <a class="button ">
                      Everyday Holidays
                    </a>
                  </p> -->
                  <!-- <p class="control">
                    <a class="button" href='http://lastdesires.com'>
                      Last Desires
                    </a>
                  </p>
                  <p class="control">
                    <a class="button ">
                      Quiz-O-Matic
                    </a>
                  </p> -->
                  <!-- <p class="control">
                    <a class="button ">
                      Robo The Fan
                    </a>
                  </p> -->
                </div>
              </div>
            </div>
          </div>

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
  name: 'ThumbsUp',
  props: {
    msg: String
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 17px;
  background-color: #000 !important;
  background-image: url("../assets/bg5.jpg") !important;
  height: 100vh;
  background-size: cover;
  min-height: 100vh;

  text-align: center;
}
.title,
.subtitle {
  color: #f7f7f7;
}
.is-link {
  background-color: #c2e7f2;
}
</style>
