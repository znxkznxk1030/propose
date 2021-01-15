<template>
  <section
    id="carousel_5323"
    class="u-carousel u-slide u-block-06e4-1"
    data-u-ride="carousel"
    data-interval="3000"
  >
    <ol class="u-absolute-hcenter u-carousel-indicators u-block-06e4-2">
      <li
        data-u-target="#carousel_5323"
        class="u-active u-grey-30"
        data-u-slide-to="0"
      ></li>
      <li
        data-u-target="#carousel_5323"
        class="u-grey-30"
        data-u-slide-to="1"
      ></li>
    </ol>

    <div class="u-carousel-inner" role="listbox">
      <div class="u-active u-carousel-item u-clearfix u-section-1-1">
        <div class="u-clearfix u-sheet u-sheet-1">
          <div
            class="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1"
          >
            <div class="u-layout">
              <div class="u-layout-row">
                <div
                  class="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-30 u-size-xs-60 u-image-1"
                  src=""
                >
                  <div
                    class="u-container-layout u-valign-middle u-container-layout-1"
                    src=""
                  ></div>
                </div>
                <div
                  class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-size-xs-60 u-white u-layout-cell-2"
                >
                  <div
                    class="u-container-layout u-valign-middle u-container-layout-2"
                  >
                    <h2 class="u-custom-font u-font-oswald u-text u-text-2">
                      Hyejung & Youngsoo
                    </h2>
                    <p class="u-text u-text-3">
                      When it comes to sunny days, nothing beats a T-shirt dress
                      for throw-on-and-go simplicity. We've given ours extra
                      oomph with a sophisticated boat neck so it'll look just as
                      good on the beach as at weekend brunch with the girls.
                    </p>
                    <a
                      href="https://nicepage.com/website-templates"
                      class="u-active-none u-border-2 u-border-black u-btn u-btn-rectangle u-button-style u-custom-font u-font-oswald u-hover-none u-none u-btn-1"
                      >read more</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <carousel :no="2" :title="'귀여운 우리 둘'" :text="'blah blah'"/>
    </div>
    <a
      class="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-text-body-color u-block-06e4-3"
      href="#carousel_5323"
      role="button"
      data-u-slide="prev"
    >
      <span aria-hidden="true">
        <svg viewBox="0 0 256 256">
          <g>
            <polygon
              points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"
            ></polygon>
          </g>
        </svg>
      </span>
      <span class="sr-only">
        <svg viewBox="0 0 256 256">
          <g>
            <polygon
              points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128"
            ></polygon>
          </g>
        </svg>
      </span>
    </a>
    <a
      class="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-body-color u-block-06e4-4"
      href="#carousel_5323"
      role="button"
      data-u-slide="next"
    >
      <span aria-hidden="true">
        <svg viewBox="0 0 306 306">
          <g id="chevron-right">
            <polygon
              points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"
            ></polygon>
          </g>
        </svg>
      </span>
      <span class="sr-only">
        <svg viewBox="0 0 306 306">
          <g id="chevron-right">
            <polygon
              points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"
            ></polygon>
          </g>
        </svg>
      </span>
    </a>
  </section>
</template>
<script>
import Carousel from './Carousel.vue';

export default {
    name: "MainPage",
    components: {
        Carousel
    }
};
</script>