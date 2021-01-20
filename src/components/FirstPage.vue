<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <counter-page />
      </div>
      <div class="section">
        <page
          :no="1"
          :title="'Hyejung & Youngsoo'"
          :text="'알콩달콩 사랑했던 우리를 담았던 사진들, 특별한 일 없이도 웃음이 가득 했던 우리의 시간들을 기억하고... 그리고 앞으로 수북히 쌓여 이 공간을 채워줄 사진들을 기대하며...'"
          :subText="'See More'"
          v-on:click-direct="$router.push({ path: '/photos' })"
        />
      </div>
      <div class="section">
        <page
          :no="2"
          :title="'언제나 사랑스러운 혜정이에게'"
          :text="'모든순간이 반짠반짝 빛나고 사랑스러운 우리 혜정이, 그리고 요즘 울 일도 걱정되는 일도 많은 나의 혜정이에게 용기내서 조심스럽게 전하고 싶은 말...'"
          :subText="'See More'"
          v-on:click-direct="openYoutube"
        />
      </div>
      <div class="section">
        <contribute/>
      </div>
    </full-page>
  </div>
</template>
<script>
// import { Carousel, Slide } from "vue-carousel";
import Page from "./Carousel.vue";
import CounterPage from "./Counter";
import Contribute from "./Contribute";

export default {
  name: "FirstPage",
  components: {
    // Carousel,
    // Slide,
    Page,
    CounterPage,
    Contribute
  },
  data() {
    return {};
  },
  methods: {
    openYoutube() {
      window.open("https://youtu.be/0RzAzN41wFo", "_blank");
    },
  },
};
</script>
<style scoped>
#h5-title-1 {
  margin-top: 100px;
}
#p-desc-1 {
  margin-top: 100px;
}
#carousel_e4db {
  height: 100vh;
}
.u-text-2 {
  font-weight: bold;
}
</style>