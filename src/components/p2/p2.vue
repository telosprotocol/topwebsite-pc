<template>
  <div class="p2">
    <div class="small_earth" :class="{smallearth_scroll:showAnimate}"></div>
    <div ref="bigearth" class="big_earth" :class="{bigearth_scroll:showAnimate}"></div>
    <div class="title_area">
      <div class="p2_title"></div>
      <div class="title_text">
        <span>
          Full-Stack Decentralized
        </span>
        <span>Cloud Communication Services</span>
      </div>
    </div>
    <div class="icon_area">
            <div class="icon_item vpn_position">
      <div class="icon vpn"></div>
      <div class="text vpn_text">VPN</div>
    </div>
    <div class="icon_item VoIP_position">
      <div class="icon voip"></div>
      <div class="text voip_text">VoIP</div>
    </div>
    <div class="icon_item video_position">
      <div class="icon video"></div>
      <div class="text video_text">Video</div>
    </div>
    <div class="icon_item storage_position">
      <div class="icon storage"></div>
      <div class="text storage_text">Storage</div>
    </div>
    <div class="icon_item cdn_position">
      <div class="icon cdn"></div>
      <div class="text cdn_text">CDN</div>
    </div>
    <div class="icon_item Messaging_position">
      <div class="icon messaging"></div>
      <div class="text messaging_text">Messaging</div>
    </div>
    <div class="icon_item live_position">
      <div class="icon live"></div>
      <div class="text live_text">Live Streaming</div>
    </div>
    <div class="icon_item iot_position">
      <div class="icon iot"></div>
      <div class="text iot_text">IoT Data Sharing</div>
    </div>
    </div>
    <div class="paly_area" @click="openVideo()">
      <span class="play_icon"></span>
      <span class="text">Watch a Demo Video</span>
    </div>
    <transition name="fade">
    <div class="video_area" v-if="show_video">
      <div class="close_btn" @click="closeVideo()"></div>
      <video-player class="video-player-box" :playsinline="true" :options="playerOptions" @ended="closeVideo($event)"></video-player>
    </div>
    </transition>
  </div>
</template>

<script>
import scrollReveal from 'scrollreveal'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  data () {
    return {
      scrollReveal: scrollReveal(),
      showAnimate: false,
      show_video: false,
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
  mounted () {
    this.scrollReveal.reveal('.icon_area', {
      duration: 600,
      delay: 400,
      origin: 'right',
      reset: true,
      mobile: false,
      distance: '5rem'
    })
    this.scrollReveal.reveal('.title_area', {
      duration: 500,
      delay: 400,
      origin: 'left',
      reset: true,
      mobile: false,
      distance: '10rem'
    })
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.$refs.bigearth) {
        var offsetTop = this.$refs.bigearth.offsetTop
        if (scrollTop < offsetTop) {
          if (scrollTop > offsetTop) {
            this.showAnimate = true
          } else {
            this.showAnimate = false
          }
        } else {
          if ((offsetTop + 1500) > scrollTop) {
            this.showAnimate = true
          } else {
            this.showAnimate = false
          }
        }
      }
    },
    openVideo () {
      this.$ga.event('video', 'click', 'openVideo')
      this.show_video = true
    },
    closeVideo (play) {
      this.$ga.event('video', 'click', 'closeVideo')
      this.show_video = false
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style lang='scss' type="text/css" scoped>
//   @import url(p2_scroll.css);
.fade-enter-active,.fade-leave-active{
 transition: opacity 0.4s ease;
}
.fade-enter,.fade-leave-active{
 opacity: 0;
}

.p2 {
  height: 100%;
  width: 100%;
  background-image: url("img/2_bg_0.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .video_area{
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    .close_btn{
      height: 2.5rem;
      width: 2.5rem;
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-image: url(img/close.png);
      background-size: 100%;
      background-repeat: no-repeat;
      z-index: 1000;
    }
    .video-player-box{
      height: 100%;
      width: 100%;
    }
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
  .paly_area{
    height: 3.3125rem;
    line-height: 3.3125rem;
    position: absolute;
    left: 6.25rem;
    bottom: 4.75rem;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
    .play_icon{
      height: 3.3125rem;
      width: 3.3125rem;
      background-image: url(img/play_btn.png);
      background-size: 100%;
      background-repeat: no-repeat;
      display: inline-block;
      margin-right: 1rem;
      vertical-align: top;
    }
    .text{
      height: 3.3125rem;
      line-height: 3.3125rem;
      font-size: 1.875rem;
      color: #3ad7fe;
      letter-spacing: 1.5px;
      display: inline-block;
    }
  }
  .video-bg {
    height: 100%;
    width: 100%;
    .video-tvc {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s linear;
    }
  }
  .small_earth {
    position: absolute;
    height: 20.625rem;
    width: 18.75rem;
    background-image: url(img/2_bg_1.png);
    background-size: 100%;
    background-repeat: no-repeat;
    top: 50%;
    left: 51%;
    margin-left: -9.375rem;
    margin-top: -10.3125rem;
    z-index: 10;
  }
  .big_earth {
    height: 42.5rem;
    width: 37.5rem;
    position: absolute;
    background-image: url(img/2_bg_2.png);
    background-size: 100%;
    background-repeat: no-repeat;
    top: 50%;
    left: 50%;
    margin-left: -18.25rem;
    margin-top: -21.25rem;
    z-index: 20;
  }
  .title_area {
    position: absolute;
    left: 15%;
    top: 40%;
    z-index: 30;
    .p2_title {
      width: 35.625rem;
      height: 6.875rem;
      background-image: url(img/2_logo.png);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .title_text {
      font-size: 2rem;
      color: #ffffff;
      line-height: 1.5rem;
      margin-top: 3.125rem;
      line-height: 1.25rem;
      margin-left: 2.625rem;
      text-align: left;
      span {
        display: block;
        margin-top: 1.25rem;
      }
    }
  }
  .icon_area {
    height: 100%;
  }
  .icon_item {
    height: 4.325rem;
    width: 22%;
    line-height: 4.375rem;
    position: absolute;
    cursor: default;
    z-index: 30;
    text-align: left;
    &:hover {
      .icon {
        height: 5.25rem;
        width: 5.25rem;
      }
      .text {
        font-size: 1.5rem;
      }
    }
    .icon {
      height: 4.375rem;
      width: 4.375rem;
      background-size: 100%;
      background-repeat: 100%;
      display: inline-block;
      transition: all 0.2s linear;
      margin-right: 1.25rem;
    }
    .vpn {
      background-image: url(img/2_icon_vpn.png);
    }
    .voip {
      background-image: url(img/2_icon_voip.png);
    }
    .video {
      background-image: url(img/2_icon_video.png);
    }
    .storage {
      background-image: url(img/2_icon_storage.png);
    }
    .cdn {
      background-image: url(img/2_icon_cdn.png);
    }
    .messaging {
      background-image: url(img/2_icon_messaging.png);
    }
    .live {
      background-image: url(img/2_icon_live.png);
    }
    .iot {
      background-image: url(img/2_icon_iot.png);
    }
    .text {
      text-align: left;
      display: inline-block;
      color: #fff;
      font-size: 1.375rem;
      letter-spacing: 1px;
      vertical-align: top;
      transition: all 0.2s linear;
    }
  }
  @media only screen and (max-width: 1600px) {
    .icon_item {
      height: 3.75rem;
      line-height: 3.75rem;
      .icon {
        height: 3.75rem;
        width: 3.75rem;
      }
      .text {
        font-size: 1.25rem;
      }
    }
    .title_area .title {
      width: 30rem;
    }
  }
  .vpn_position {
    top: 13%;
    right: 20%;
  }
  .VoIP_position {
    top: 21%;
    right: 16%;
  }
  .video_position {
    top: 30%;
    right: 13%;
  }
  .storage_position {
    top: 41%;
    right: 11%;
  }
  .cdn_position {
    bottom: 41%;
    right: 11%;
  }
  .Messaging_position {
    bottom: 30%;
    right: 13%;
  }
  .live_position {
    bottom: 20%;
    right: 16%;
  }
  .iot_position {
    bottom: 12%;
    right: 21%;
  }

  @media only screen and (max-width: 1600px) {
    .vpn_position {
      top: 13%;
      right: 14%;
    }
    .VoIP_position {
      top: 21%;
      right: 10%;
    }
    .video_position {
      top: 30%;
      right: 7%;
    }
    .storage_position {
      top: 41%;
      right: 5%;
    }
    .cdn_position {
      bottom: 41%;
      right: 5%;
    }
    .Messaging_position {
      bottom: 30%;
      right: 7%;
    }
    .live_position {
      bottom: 20%;
      right: 10%;
    }
    .iot_position {
      bottom: 12%;
      right: 15%;
    }
  }
}

@keyframes bigearth {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.bigearth_scroll {
  animation: bigearth 0.6s ease-in-out 0.5s 1 alternate both;
}

@keyframes smallearth {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.smallearth_scroll {
  animation: smallearth 0.6s ease-in-out 0.2s 1 alternate both;
}
</style>
