<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <br />
            <img src="../assets/logo_white.png" />
          </h1>
          <!-- <p class="subtitle">We make apps.</p> -->
          <br />
          <br />
          <div class="container">
            <div class="level">
              <div class="level-item">
                <div class="field is-grouped">
                  <div class="control center">
                    <figure class="image center is-128x128">
                      <img class="is-rounded" src="../assets/holiday.png" />
                    </figure>
                    <br />
                    <div class="dropdown" :class="{'is-active': active}" @click="active = !active">
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
                          <a
                            target="_blank"
                            href="https://itunes.apple.com/us/app/everyday-holidays/id1410776446?ls=1&mt=8"
                            class="dropdown-item"
                          >
                            <i class="fa fa-apple" aria-hidden="true"></i> iOS
                          </a>
                          <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.thumbsupsolutions.everydayaholiday&hl=en"
                            class="dropdown-item"
                          >
                            <i class="fa fa-android" aria-hidden="true"></i> Android
                          </a>

                          <a
                            target="_blank"
                            href="http://thumbsup.solutions/holidays"
                            class="dropdown-item"
                          >
                            <i class="fa fa-globe" aria-hidden="true"></i> Web
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="level-item">
                <div class="field is-grouped">
                  <div class="control">
                    <figure class="image center is-128x128">
                      <img class="is-rounded" src="../assets/lastdesires.png" />
                    </figure>
                    <br />
                    <div
                      class="dropdown"
                      :class="{'is-active': active2}"
                      @click="active2 = !active2"
                    >
                      <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Last Desires</span>
                          <span class="icon is-small">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <!-- <a target='_blank' href="https://itunes.apple.com/us/app/everyday-holidays/id1410776446?ls=1&mt=8" class="dropdown-item">
                            <i class="fa fa-apple" aria-hidden="true"></i> iOS
                          </a>-->
                          <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.lastdesires.thumbsupsolutions"
                            class="dropdown-item"
                          >
                            <i class="fa fa-android" aria-hidden="true"></i> Android
                          </a>

                          <a
                            target="_blank"
                            href="http://lastdesires.com/app/"
                            class="dropdown-item"
                          >
                            <i class="fa fa-globe" aria-hidden="true"></i> Web
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="level-item">
                <div class="field is-grouped">
                  <div class="control">
                    <figure class="image center is-128x128">
                      <img class="is-rounded" src="../assets/maze.png" />
                    </figure>
                    <br />
                    <div
                      class="dropdown"
                      :class="{'is-active': active3}"
                      @click="active3 = !active3"
                    >
                      <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Yabidib's Maze</span>
                          <span class="icon is-small">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a
                            target="_blank"
                            href="https://apps.apple.com/us/app/yabdibs-maze/id1451634263?app=itunes&ign-mpt=uo%3D4"
                            class="dropdown-item"
                          >
                            <i class="fa fa-apple" aria-hidden="true"></i> iOS
                          </a>
                          <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.thumbsupsolutions.yabdibsmaze&hl=en"
                            class="dropdown-item"
                          >
                            <i class="fa fa-android" aria-hidden="true"></i> Android
                          </a>

                          <a
                            target="_blank"
                            href="http://thumbsup.solutions/maze"
                            class="dropdown-item"
                          >
                            <i class="fa fa-globe" aria-hidden="true"></i> Web
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <h2 class="subtitle">
            Hero subtitle
          </h2>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ThumbsUp",
  props: {
    msg: String
  },
  data() {
    return {
      active: false,
      active2: false,
      active3: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 17px;
  background-color: #000 !important;
  background-image: url("../assets/bg7.jpg") !important;
  height: 100vh;
  background-size: cover;
  min-height: 100vh;

  text-align: center;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.title,
.subtitle {
  color: #f7f7f7;
}
.is-link {
  background-color: #c2e7f2;
}
</style>
