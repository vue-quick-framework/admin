<template>
  <div>
    <slider-bar></slider-bar>
    <content-body></content-body>
  </div>
</template>

<script>
import SliderBar from './SliderBar.vue'
import ContentBody from './ContentBody.vue'
export default {
  components: {
    SliderBar,
    ContentBody
  }
}
</script>
