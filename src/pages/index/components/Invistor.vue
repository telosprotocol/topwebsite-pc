<template>
  <div class="invistor">
    <div class="invistor-area">
      <div class="invistor-title">Investors</div>
      <ul class="invisor-list">
        <li><img src="@/assets/images/invistor/1.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/2.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/3.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/4.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/5.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/6.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/7.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/8.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/9.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/10.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/11.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/12.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/13.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/14.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/15.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/16.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/17.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/18.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/19.png" class="invisor-image"></li>
        <li><img src="@/assets/images/invistor/20.png" class="invisor-image"></li>
      </ul>
      <div class="full-line"></div>
    </div>
    <div class="roadmap-area">
      <div class="roadmap-title">Roadmap</div>
      <div class="time-area">
        <img src="@/assets/images/invistor/time.png" class="time-image">
        <div class="launch commonfont">Launch A Testnet of TOP Network &amp; Chain</div>
        <div class="Q3 commonfont">Q3, 2018</div>
        <div class="july commonfont">JULY, 2018</div>
        <div class="single commonfont">Single Shard 1,000 TPS</div>
        <div class="tps2000 commonfont">Single Shard Goal 2,000 TPS</div>
        <div class="tps15000 commonfont">3 Zones, 20 Shards 9,000 TPS</div>
        <div class="goal commonfont">5 Zones,100 Shards 50,000 TPS</div>
        <div class="official commonfont">Official Launch of TOP Network &amp; Chain</div>
        <div class="dec commonfont">Dec, 2018</div>
        <div class="Q1 commonfont">Q1, 2019</div>
        <div class="private">Private Testnet Now <span class="tps-amount">{{tpsNum}}</span> TPS</div>
      </div>
      <div class="join-testnet" @click="openTestnet">Join TOP Network Testnet Right Now!</div>
      <img src="@/assets/images/invistor/testnet.png" class="testnet-btn" @click="openTestnetVideo">
      <transition name="fade">
        <div class="video_area" v-if="showTestnetVideo">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions"></video-player>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import {getTpsNum} from '../../../../fetch/api'
export default {
  name: 'Invistor',
  data () {
    return {
      tpsNum: '0',
      showTestnetVideo: false,
      playerOptions: {
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/testnet.mp4'
        }]
      }
    }
  },
  created () {
    this.refreshTPSNum()
  },
  beforeDestroy () {
    clearInterval(this.tpsId)
  },
  components: {
    videoPlayer
  },
  methods: {
    openTestnet () {
      window.open('https://www.topnetwork.org/testnet', '_blank')
    },
    openTestnetVideo () {
      this.showTestnetVideo = true
    },
    closeVideo () {
      this.showTestnetVideo = false
    },
    getTpsNumInfo () {
      getTpsNum().then(res => {
        if (res.data.Result === 1) {
          this.tpsNum = this.toQfw((res.data.Tps).toString())
        }
      }).catch(res => {
      })
    },
    refreshTPSNum () {
      this.getTpsNumInfo()
      this.tpsId = setInterval(() => {
        this.getTpsNumInfo()
      }, 5000)
    },
    toQfw (str) {
      var re = /(?=(?!(\b))(\d{3})+$)/g
      str = str.replace(re, ',')
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
  .invistor{
    width: 100%;
    background:rgba(4,17,38,1);
    padding-bottom:167px;
    .invistor-area{
      width:1280px;
      margin:0 auto;
      padding-top:162px;
      .invistor-title{
        width:100%;
        margin:0 auto;
        margin-bottom:64px;
        text-align:center;
        color:rgba(255,255,255,1);
        height:63px;
        font-size:60px;
        font-family:Cera Pro;
        font-weight:400;
        line-height:63px;
      }
      .invisor-list{
        width: 100%;
        overflow: hidden;
        li{
          float: left;
          width:25%;
          margin-bottom: 64px;
          .invisor-image{
            width:220px;
            height:84px;
            display: block;
            margin: 0 auto;
          }
        }
      }
      .full-line{
        width:1280px;
        height:2px;
        background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
        margin:0 auto;
        margin-top:188px;
      }
    }
    .roadmap-area{
      width: 1280px;
      margin:0 auto;
      position: relative;
      .roadmap-title{
        width:100%;
        margin-top:162px;
        text-align:center;
        margin-bottom:219px;
        height:63px;
        font-size:60px;
        font-family:Cera Pro;
        font-weight:400;
        line-height:78px;
        color:rgba(255,255,255,1);
      }
      .time-area{
        width: 100%;
        position: relative;
        .time-image{
          width:96%;
        }
        .commonfont{
          position: absolute;
          width:194px;
          height:46px;
          font-size:18px;
          font-family:Arial;
          font-weight:400;
          line-height:26px;
          color:rgba(138,159,175,1);
          text-align: center;
        }
        .launch{
          left:22px;
          top:58px;
        }
        .Q3{
          left:71px;
          top:210px;
          width:92px;
          font-weight:500;
          color:rgba(119,187,211,1);
        }
        .july{
          left:150px;
          top:125px;
          color:rgba(119,187,211,1);
        }
        .single{
          left:276px;
          top:240px;
          width:104px;
          height:46px;
          line-height:26px;
        }
        .tps2000{
          left:470px;
          top:58px;
          width:150px;
          height:46px;
          line-height:26px;
        }
        .tps15000{
          left:660px;
          top:240px;
          width:188px;
          height:46px;
          line-height:26px;
        }
        .goal{
          top:58px;
          right:237px;
          width:170px;
          height:46px;
          line-height:26px;
        }
        .official{
          right:20px;
          top:240px;
          width:182px;
          height:46px;
          line-height:26px;
        }
        .dec{
          right:90px;
          top:185px;
          font-family:Cera Pro;
          font-weight:500;
          color:rgba(119,187,211,1);
        }
        .Q1{
          right:14px;
          top:103px;
          font-family:Cera Pro;
          font-weight:500;
          color:rgba(119,187,211,1);
        }
        .private{
          position: absolute;
          right:477px;
          top:-88px;
          text-align: center;
          color:rgba(255,255,255,1);
          width:255px;
          height:59px;
          font-size:28px;
          font-family:Cera Pro;
          font-weight:400;
          line-height:29px;
          .tps-amount{
            color:rgba(207,154,31,1);
          }
        }
      }
      .join-testnet{
        margin:0 auto;
        border-bottom: 2px solid rgba(207,154,31,1);
        margin-top:148px;
        cursor: pointer;
        text-align: center;
        width:800px;
        height:48px;
        font-size:40px;
        font-family:Cera Pro;
        font-weight:bold;
        line-height:64px;
        color:rgba(255,255,255,1);
        padding-bottom:10px;
        .amount{
          color:rgba(207,154,31,1);
        }
      }
      .testnet-btn{
        margin:0 auto;
        display: block;
        width:300px;
        height:60px;
        cursor: pointer;
        margin-top:59px;
      }
    }
    .video_area{
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 999;
      .close_btn{
        height: 72px;
        width: 72px;
        position: absolute;
        right: 0px;
        top: 0px;
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
        height:86%;
        vertical-align: middle;
        padding-bottom: 10px;
        .close_btn{
          right: 21px;
          top: 26px;
        }
      }
    }
  }
</style>
