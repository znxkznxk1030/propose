<template>
  <section class="u-clearfix u-section-1" id="sec-caf1">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div class="u-align-center u-container-style u-group u-group-1">
        <div class="u-container-layout u-valign-middle u-container-layout-1">
          <h2 class="u-text u-text-1">Numbers About HJ & YS</h2>
          <p class="u-text u-text-2">
            모든순간이 다 소중했던 우리의 시간들
          </p>
        </div>
      </div>
      <div class="u-expanded-width u-list u-repeater u-list-1">
        <div
          class="u-align-center u-container-style u-list-item u-repeater-item"
        >
          <div
            class="u-container-layout u-similar-container u-valign-middle u-container-layout-2"
          >
            <h1
              class="u-text u-text-default u-title u-text-3"
              data-animation-name="counter"
              data-animation-event="scroll"
              data-animation-duration="3000"
            >
              {{ getDday() }}
            </h1>
            <p class="u-text u-text-4">지금까지 우리가 함께 했던 날</p>
          </div>
        </div>
        <div
          class="u-align-center u-container-style u-list-item u-repeater-item"
        >
          <div
            class="u-container-layout u-similar-container u-valign-middle u-container-layout-3"
          >
            <h1
              class="u-text u-text-default u-title u-text-5"
              data-animation-name="counter"
              data-animation-event="scroll"
              data-animation-duration="3000"
            >
              {{ getWday() }}
            </h1>
            <p class="u-text u-text-6">앞으로 결혼식 까지...</p>
          </div>
        </div>
        <div
          class="u-align-center u-container-style u-list-item u-repeater-item"
        >
          <div
            class="u-container-layout u-similar-container u-valign-middle u-container-layout-3"
          >
            <h1
              class="u-text u-text-default u-title u-text-5"
              data-animation-name="counter"
              data-animation-event="scroll"
              data-animation-duration="3000"
            >
              {{ getBday() }}
            </h1>
            <p class="u-text u-text-6">우리 콩알이를 볼 때까지 ...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Counter",
  methods: {
    getDday() {
      let now = new Date().getTime();
      let fday = new Date("2020-09-05T10:00:00").getTime();
      return Math.floor((now - fday) / (1000 * 60 * 60 * 24));
    },
    getWday() {
      let now = new Date().getTime();
      let wday = new Date("2021-03-12T00:00:00").getTime();
      return Math.ceil((wday - now) / (1000 * 60 * 60 * 24));
    },
    getBday() {
      let now = new Date().getTime();
      let bday = new Date("2021-09-06T00:00:00").getTime();
      return Math.ceil((bday - now) / (1000 * 60 * 60 * 24));
    }
  },
};
</script>
<style scoped>
</style>