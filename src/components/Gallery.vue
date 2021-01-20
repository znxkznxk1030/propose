<template>
  <div >
    <h2>Memories Of Love</h2>
    <silent-box :gallery="images" :thumbnailHeight="120" :thumbnailWidth="120"></silent-box>

    <!-- <button :click="$router.push({path:'/'})"></button> -->
  </div>
</template>

<script>
export default {
  name: "gallery",
  components: {},
  data() {
    return {
        srcList: [
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/me-001.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/me-002.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/us-003.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-08-41.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-09-16.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-09-26.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-14-16-15-32.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-26-24.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-26-42.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-26-46.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-26-50.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-26-57.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-27-16.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-28-08.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-42.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-45.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-47.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-51.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-53.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-56.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-33-59.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-34-01.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-34-04.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-34-08.jpeg",
            "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-34-11.jpeg",
            // "https://s3.ap-northeast-2.amazonaws.com/hjys.kr/gallery/KakaoTalk_Photo_2021-01-18-10-34-14.jpeg",
        ],
      images: [],
      index: null,
    };
  },
  created() {
      this.images = this.srcList.map(src => {
          return {
              src,
          thumbnailWidth: "220px",
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