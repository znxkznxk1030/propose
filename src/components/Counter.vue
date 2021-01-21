<template>
  <section class="u-clearfix u-section-1" id="sec-caf1">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <video-embed class="vidio-embed" :params="{autoplay: 1}" src="https://youtu.be/2NDZ-UofQ6c"></video-embed>
      <div class="u-align-center u-container-style u-group u-group-1">
        <div class="u-container-layout u-valign-middle u-container-layout-1">
          <h2 class="u-text u-text-1">D-Day</h2>
          <p class="u-text u-text-2">“I believe love is always eternal. Even if eternity is only five minutes.” <br>- Sandra Cisneros</p>
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
              {{ days }}
            </h1>
            <p class="u-text u-text-4">Day</p>
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
              {{ hour }}
            </h1>
            <p class="u-text u-text-6">Hour</p>
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
              {{ min }}
            </h1>
            <p class="u-text u-text-6">Minute</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      days: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };
  },
  mounted() {
    let gap = this.getTimeGap();
    this.days = Math.floor(gap / (1000 * 60 * 60 * 24));
    this.hour = Math.floor((gap - (this.days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.min = Math.floor((gap - (this.days * 1000 * 60 * 60 * 24) - (this.hour * 1000 * 60 * 60)) / (1000 * 60));
    this.sec = Math.floor(gap / 1000);
    setInterval(() => {
      let gap = this.getTimeGap();
      this.days = Math.floor(gap / (1000 * 60 * 60 * 24));
      this.hour = Math.floor((gap - (this.days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.min = Math.floor((gap - (this.days * 1000 * 60 * 60 * 24) - (this.hour * 1000 * 60 * 60)) / (1000 * 60));
      this.sec = Math.floor(gap / 1000);
    }, 3000);
  },
  methods: {
    getTimeGap() {
      let now = new Date().getTime();
      let fday = new Date("2021-03-12T00:00:00").getTime();
      return fday - now;
    },
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
    },
  },
};
</script>
<style scoped>
.vidio-embed {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 30vh;
}
</style>