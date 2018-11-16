<template>
  <div class="hello">

    <ben v-if="ben"></ben>
    <abram v-if="abram"></abram>
    <elijah v-if="elijah"></elijah>
    <kolleen v-if="kolleen"></kolleen>
    <ivan v-if="ivan"></ivan>
    <thumbs-up v-if="thumbsUp"></thumbs-up>
    <last-desires v-if="lastDesires"></last-desires>
  </div>
</template>

<script>


import LastDesires from './LastDesires.vue'
import ThumbsUp from './ThumbsUp.vue'
import Elijah from './Elijah.vue'
import Kolleen from './Kolleen.vue'
import Ivan from './Ivan.vue'
import Ben from './Ben.vue'
import Abram from './Abram.vue'

export default {
  name: 'Main',
  data() {
    return {

    }
  },

  computed: {

    elijah() {
      return window.location.href.includes('elijahfortenberry')
    },
    ben() {
      return window.location.href.includes('benfortenberry')
    },
    abram() {
      return window.location.href.includes('abram')
    },
    ivan() {
      return window.location.href.includes('ivan')
    },
    kolleen() {
      return window.location.href.includes('kolleen')
    },
    thumbsUp() {
      return window.location.href.includes('thumbsup')
    },
    lastDesires() {
      return window.location.href.includes('lastdesires')
    }



  },
  components: {
    'ben': Ben,
    'last-desires': LastDesires,
    'thumbs-up': ThumbsUp,
    'ivan': Ivan,
    'kolleen': Kolleen,
    'elijah': Elijah,
    'abram': Abram,

  },
  props: {
    msg: String
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
