<template>
  <div class="u-carousel-item u-clearfix" :class="`u-section-1-${no}`">
    <div class="u-clearfix u-sheet u-sheet-1">
      <div
        class="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1"
      >
        <div class="u-layout">
          <div class="u-layout-row">
            <div
              class="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-image-1"
            >
              <div
                class="u-container-layout u-valign-middle u-container-layout-1"
              ></div>
            </div>
            <div
              class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-white u-layout-cell-2"
            >
              <div
                class="u-container-layout u-valign-middle u-container-layout-2"
              >
                <h3 class="u-custom-font u-font-oswald u-text u-text-1" v-if="subTitle">
                  {{ subTitle }}
                </h3>
                <h2 class="u-custom-font u-font-oswald u-text u-text-2">
                  {{ title }}
                </h2>
                <p class="u-text u-text-3">
                  {{ text }}
                </p>
                <a
                  href="https://youtu.be/MqNJnDaLaco"
                  class="u-active-none u-border-2 u-border-black u-btn u-btn-rectangle u-button-style u-custom-font u-font-oswald u-hover-none u-none u-btn-1"
                  >들어줄래?</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  props: {
    subTitle: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    no: {
      type: Number,
      default: 0,
    },
  },
};
</script>