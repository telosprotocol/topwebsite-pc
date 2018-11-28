<template>
  <div class="full">
    <div class="full-stack">
      <div class="full-title">Full-Stack Decentralized Cloud Communication Services</div>
      <ul class="full-list">
        <li><img src="@/assets/images/index/protect.png" class="image"></li>
        <li><img src="@/assets/images/index/phone.png" class="image"></li>
        <li><img src="@/assets/images/index/movie.png" class="image"></li>
        <li class="endmarginr"><img src="@/assets/images/index/link.png" class="image"></li>
        <li class="endmarginb"><img src="@/assets/images/index/clound.png" class="image"></li>
        <li class="endmarginb"><img src="@/assets/images/index/message.png" class="image"></li>
        <li class="endmarginb"><img src="@/assets/images/index/cdn.png" class="image"></li>
        <li class="endmarginb endmarginr"><img src="@/assets/images/index/video.png" class="image"></li>
      </ul>
      <img src="@/assets/images/index/demoViedeo.png" class="demo-video" @click="openVideo">
      <transition name="fade">
        <div class="video_area" v-if="showDemoVideo">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions"></video-player>
        </div>
      </transition>
      <div class="full-line"></div>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'FullStack',
  data () {
    return {
      showDemoVideo: false,
      playerOptions: {
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/video.mp4'
        }]
      }
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    openVideo () {
      this.showDemoVideo = true
    },
    closeVideo () {
      this.showDemoVideo = false
    }
  }
}
</script>

<style lang="scss" scoped>
.full{
  width:100%;
  background:rgba(4,17,38,1);
  padding-top:112px;
  .full-stack{
    width:1280px;
    margin:0 auto;
    position: relative;
    .full-title{
      width:100%;
      margin:0 auto;
      text-align: center;
      margin-bottom:76px;
      width:703px;
      height:100px;
      font-size:48px;
      font-family:Cera Pro;
      font-weight:400;
      line-height:50px;
      color:rgba(255,255,255,1);
    }
    .full-list{
      width:1048px;
      margin:0 auto;
      overflow: hidden;
      li{
        float: left;
        margin-right: 8px;
        margin-bottom:8px;
        width:256px;
        height:144px;
        border-radius:4px;
        .image{
          width:100%;
        }
      }
      .endmarginr{
        margin-right:0;
      }
      .endmarginb{
        margin-bottom: 0;
      }
    }
    .demo-video{
      width:268px;
      height:60px;
      margin:0 auto;
      margin-top:62px;
      margin-bottom:154px;
      display: block;
      cursor: pointer;
    }
    .video_area{
      height: 100%;
      width:100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 999;
      .close_btn{
        height: 72px;
        width: 72px;
        position: absolute;
        right: 10px;
        top: 25px;
        background-image: url('../../../assets/images/index/close.png');
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 1000;
      }
      .video-player-box{
        height: 100%;
        width: 100%;
      }
      .video-player-box /deep/ .video-js{
        height: 100%;
        width: 100%;
      }
      .video-player-box /deep/ .vjs-big-play-button{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    @media screen and (min-width: 1280px) and (max-width: 1500px){
      .video_area{
        height:88%;
        padding-bottom: 10px;
        .close_btn{
          right: 57px;
          top: 15px;
        }
      }
    }
    .full-line{
      width:1280px;
      height:2px;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:0 auto;
    }
  }
}

</style>
