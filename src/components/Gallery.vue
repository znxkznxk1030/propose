<template>
  <div>
    <h2>Gallery</h2>
    <silent-box :gallery="images"></silent-box>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '300px',
        height: '200px',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  components: {},
  data() {
    return {
        srcList: [
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-08-41.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-09-16.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-09-26.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-15-32.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/me-001.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/me-002.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/us-003.jpeg",
        ],
      images: [],
      index: null,
    };
  },
  created() {
      this.images = this.srcList.map(src => {
          return {
              src,
          thumbnailWidth: "80px",
          }
      })
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>