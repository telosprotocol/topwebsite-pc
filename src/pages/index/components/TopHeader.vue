<template>
  <div class="header">
    <div class="navbar">
      <img src="@/assets/images/index/topLogo.png" class="logo" @click="OpenTOPIndex">
      <ul class="navbar-item" >
        <li class="testnet" @mouseenter="showlang" @mouseleave="hidelang">LANGUAGE<span class="arrowdistance iconfont">&#xe615;</span>
          <ul class="entry languagelist" v-if="langshow">
            <li class="testnet-item">ENGLISH</li>
          </ul>
        </li>
        <li class="testnet" @click="OpenRedeem()">REDEEM</li>
        <li class="testnet" @mouseenter="showBountyItem" @mouseleave="hideBountyItem">BOUNTY<span class="arrowdistance iconfont">&#xe615;</span>
          <ul class="entry bountylist" v-if="showBounty">
            <li class="testnet-item" @click="OpenBounty()">BITCOINTALK  &nbsp;BOUNTY</li>
            <li class="testnet-item" @click="OpenGuide()">BOUNTY &nbsp;GUIDE</li>
            <li class="testnet-item" @click="OpenANN()">BITCOINTALK  &nbsp;ANN</li>
            <li class="testnet-item" @click="OpenLimitedTime()">LIMITED-TIME &nbsp;BOUNTY</li>
          </ul>
        </li>
        <li class="testnet" @click="OpenEvent()">EVENT</li>
        <li class="testnet" @click="OpenAmbassador()">AMBASSADORS</li>
        <!--<li class="testnet" @mouseenter="showAmbassador" @mouseleave="hideAmbassador">AMBASSADORS<span class="arrowdistance iconfont">&#xe615;</span>-->
          <!--<ul class="entry whitelist" v-if="showAmbassadors">-->
            <!--<li class="testnet-item" @click="OpenAmbassador()">AMBASSADORS</li>-->
          <!--</ul>-->
        <!--</li>-->
        <li class="testnet" @mouseenter="showitem" @mouseleave="hideitem">WHITEPAPER<span class="arrowdistance iconfont">&#xe615;</span>
          <ul class="entry whitelist" v-if="show">
            <li class="testnet-item" @click="OpenWhitePaper()">WHITEPAPER</li>
            <li class="testnet-item" @click="OpenPDF()">EXECUTIVE &nbsp;SUMMARY</li>
          </ul>
        </li>
        <li class="testnet" @mouseenter="showTestnet" @mouseleave="hideTestnet" @click="OpenTestnet()" >TESTNET<span class="arrowdistance iconfont">&#xe615;</span>
          <ul class="entry testnetlist" v-if="showTest">
            <li class="testnet-item" @click="OpenTestBounty()">TESTNET BOUNTY</li>
            <li class="testnet-item" @click="OpenTestnet()">TOP TESTNET</li>
            <li class="testnet-item" @click="OpenWallet()">WALLET</li>
            <li class="testnet-item" @click="OpenExplorer()">EXPLORER</li>
          </ul>
        </li>
        <li class="testnet endmargin" @mouseenter="showAbouts" @mouseleave="hideAbouts" >ABOUT<span class="arrowdistance iconfont">&#xe615;</span>
          <ul class="entry aboutlist" v-if="showAbout">
            <li class="testnet-item" @click="OpenTeam()">TEAM</li>
            <li class="testnet-item" @click="OpenFAQ()">FAQ</li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <div class="entry">
      <div class="title">Cloud Communication Services On Blockchain</div>
      <div class="world">World's first decentralized open communication network powered by blockchain 4.0 technology</div>
      <img src="@/assets/images/index/executive.png" class="executive" @click="OpenPDF()">
    </div> -->
    <swiper class="swiper swiper-no-swiping" :options="swiperOption" ref="mySwiper">
      <swiper-slide><a @click="openVideo()"><img src="@/assets/images/banner1.png"></a></swiper-slide>
      <swiper-slide><a href="https://www.topnetwork.org/ambassador" target="_blank"><img src="@/assets/images/banner2.png"></a></swiper-slide>
      <swiper-slide><a href="https://bitcointalk.org/index.php?topic=5070267.msg47953223#msg47953223" target="_blank"><img src="@/assets/images/banner3.png"></a></swiper-slide>
      <swiper-slide><a href="https://www.eventbrite.com/e/wdas-x-dorahacks-hacker-arena-tickets-51641231313" target="_blank"><img src="@/assets/images/banner4.png"></a></swiper-slide>
      <swiper-slide><a href="https://www.topnetwork.org/testnet/#/activepage" target="_blank"><img src="@/assets/images/banner5.png"></a></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <transition name="fade">
        <div class="video_area" v-if="showBannerVideo">
          <div class="close_btn" @click="closeVideo()"></div>
          <video-player class="video-player-box" :playsinline="true" :options="playerOptions"></video-player>
        </div>
      </transition>
    <img src="@/assets/images/index/telegram.png" class="telegram" @click="openTelegram">
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'TopHeader',
  data () {
    return {
      show: false,
      showTest: false,
      // showAmbassadors: false,
      showAbout: false,
      langshow: false,
      showBounty: false,
      swiperOption: {
        direction: 'horizontal',
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false// 自动切换的时间间隔，单位ms
        },
        loop: true,
        speed: 300,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      showBannerVideo: false,
      playerOptions: {
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'static/4.mp4'
        }]
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    videoPlayer
  },
  methods: {
    openVideo () {
      this.showBannerVideo = true
    },
    closeVideo () {
      this.showBannerVideo = false
    },
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    clickToBlog () {
      window.open('https://www.topnetwork.org/blog', '_blank')
    },
    OpenTOPIndex () {
      this.$ga.event('topindexBtn', 'click', 'viewIndex')
      this.$router.push('/')
    },
    OpenFAQ () {
      this.$ga.event('topBtn', 'click', 'viewFAQ')
      this.$router.push('/faq')
    },
    OpenBounty () {
      window.open('https://bitcointalk.org/index.php?topic=5070267.msg47953223#msg47953223', '_blank')
    },
    OpenGuide () {
      window.open('https://medium.com/@topnetwork/top-network-bounty-campaign-released-2a3e9a9f1e65', '_blank')
    },
    OpenANN () {
      window.open('https://bitcointalk.org/index.php?topic=5049339.msg46994432#msg46994432', '_blank')
    },
    OpenLimitedTime () {
      window.open('https://medium.com/top-network/weekly-limited-time-bounty-offer-3-on-up-to-130-tokens-for-grab-54ffad5d033e', '_blank')
    },
    OpenEvent () {
      this.$ga.event('EventBtn', 'click', 'viewEvent')
      this.$router.push('/event')
    },
    OpenRedeem () {
      this.$ga.event('RedeemBtn', 'click', 'viewRedeem')
      this.$router.push('/redeem')
    },
    OpenTestBounty (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation()
      } else {
        window.event.cancelBubble = true
      }
      this.$ga.event('viewActivepage', 'click', 'activepage')
      window.open('https://www.topnetwork.org/testnet/#/activepage', '_blank')
    },
    OpenTestnet (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation()
      } else {
        window.event.cancelBubble = true
      }
      this.$ga.event('viewTestnet', 'click', 'testnet')
      window.open('https://www.topnetwork.org/testnet/', '_self')
    },
    OpenWallet (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation()
      } else {
        window.event.cancelBubble = true
      }
      this.$ga.event('viewTestnet', 'click', 'wallet')
      window.open('https://www.topnetwork.org/testnet/#/testnet/wallet', '_self')
    },
    OpenExplorer (e) {
      if (e && e.stopPropagation) {
        e.stopPropagation()
      } else {
        window.event.cancelBubble = true
      }
      this.$ga.event('viewTestnet', 'click', 'explorer')
      window.open('https://www.topnetwork.org/testnet/#/testnet/explorer', '_self')
    },
    OpenWhitePaper () {
      this.$ga.event('viewWhite', 'click', 'bootBtn')
      this.$router.push('/submitemail')
    },
    OpenAmbassador () {
      this.$ga.event('ambassador', 'click', 'bootBtn')
      this.$router.push('/ambassador')
    },
    OpenPDF () {
      this.$ga.event('topBtn', 'click', 'viewPdf')
      window.open('/pdf', '_blank')
    },
    OpenTeam () {
      window.open('https://www.linkedin.com/company/topnetwork/', '_blank')
    },
    showitem () {
      this.show = true
    },
    hideitem () {
      this.show = false
    },
    showTestnet () {
      this.showTest = true
    },
    hideTestnet () {
      this.showTest = false
    },
    // showAmbassador () {
    //   this.showAmbassadors = true
    // },
    // hideAmbassador () {
    //   this.showAmbassadors = false
    // },
    showAbouts () {
      this.showAbout = true
    },
    hideAbouts () {
      this.showAbout = false
    },
    showlang () {
      this.langshow = true
    },
    hidelang () {
      this.langshow = false
    },
    showBountyItem () {
      this.showBounty = true
    },
    hideBountyItem () {
      this.showBounty = false
    }
  },
  created () {
    let action = this.$route.query.action
    if (action && action === 'view') {
      this.$router.push({path: 'pdf'})
    } else if (action && action === 'faq') {
      this.$router.push({path: 'faq'})
    } else if (action && action === 'redeem') {
      this.$router.push({path: 'redeem'})
    } else if (action && action === 'submitemail') {
      this.$router.push({path: 'submitemail'})
    } else if (action && action === 'whitepaper') {
      this.$router.push({path: 'whitepaper'})
    } else if (action && action === 'event') {
      this.$router.push({path: 'event'})
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    }
  }
}
</script>

<style lang="scss" scoped>
  .header{
    width:100%;
    margin:0 auto;
    // background: url('../../../assets/images/index/headerback.png') no-repeat;
    // background-size: 100% 900px;
    width:100%;
    height:100%;
    // background-size:cover;
    position: relative;
    // padding-bottom: 223px;
    // background-position: center 0;
    box-sizing: border-box;
    background-color: #041126;
    .navbar{
      width:100%;
      padding: 0 3.5%;
      height:88px;
      margin:0 auto;
      background:rgba(3,12,32,0.8);
      box-sizing: border-box;
      .logo{
        float: left;
        width:158px;
        margin-top:32px;
        cursor: pointer;
      }
      .navbar-item{
        float:right;
        text-align: right;
        width:84%;
        min-width: 1000px;
        // margin-top:38px;
        // margin-left:6%;
        li{
          float: right;
          font-size:16px;
          font-family:PF Din Text Universal;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height: 88px;
          margin-left:2.75%;
          cursor: pointer;
          height: 88px;
          .entry{
            position: absolute;
            width:200px;
            top:88px;
            font-size:19px;
            background:#0A1A2F;
            color:#fff;
            z-index:1000;
            .testnet-item{
              width:200px;
              height: 50px;
              line-height: 50px;
              font-weight:500;
              text-align: center;
              margin-left:0;
              cursor: pointer;
            }
            .testnet-item:hover{
              background:#0059A5;
            }
          }
          .testnetlist{
            right: -43px;
          }
          .whitelist{
            right: -32px;
          }
          .bountylist{
            right: -54px;
          }
          .aboutlist{
            right: -50px;
          }
          .languagelist{
            right:-33px;
          }
        }
        .arrowdistance{
          margin-left:10px;
        }
        .testnet{
          position: relative;
        }
        .endmargin{
          margin-left:0;
        }
      }
    }
    .entry{
      width:1280px;
      margin: 0 auto;
      .title{
        text-align:center;
        margin:0 auto;
        width:1165px;
        height:172px;
        font-size:72px;
        font-family:Cera Pro;
        font-weight:bold;
        margin-top:224px;
        line-height:86px;
        color:rgba(255,255,255,1);
      }
      .world{
        margin:0 auto;
        font-family:Cera Pro;
        text-align:center;
        margin-top:27px;
        width:800px;
        height:64px;
        font-size:30px;
        font-family:Cera Pro;
        font-weight:400;
        line-height:32px;
        color:rgba(138,159,175,1);
      }
      .executive{
        margin:0 auto;
        background:rgba(0,88,146,1);
        font-size:26px;
        font-family:PF Din Text Universal;
        font-weight:500;
        line-height:72px;
        color:rgba(255,255,255,1);
        text-align:center;
        border-radius:36px;
        margin-top: 42px;
        cursor: pointer;
        width:332px;
        height:60px;
        display: block;
      }
    }
     @media screen and (min-width: 1280px) and (max-width: 1500px){
      .entry{
        .title{
          margin-top:150px;
        }
      }
    }
    .swiper{
      width: 100%;
      .swiper-pagination-bullet{
        width:20px !important;
        height: 20px !important;
      }
      a{
        width:100%;
        display: block;
        cursor: pointer;
        img{
          width:100%;
          // height: 600px;
        }
      }
    }
    .video_area{
      height: 100%;
      width:100%;
      position: absolute;
      left: 0;
      top: 85px;
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
        height:88%;
        padding-bottom: 10px;
        .close_btn{
          right: 0px;
          top: 0px;
        }
      }
    }
    .telegram{
      position: fixed;
      width:60px;
      height:60px;
      right:40px;
      bottom:40px;
      cursor: pointer;
      z-index: 1000;
    }
    .swiper-button-next{
        background-image:url('../../../assets/images/otherTeam/nextarrow.png');
        background-size:20px 76px;
        width: 20px;
        height: 76px;
        top:50%;
        outline: none;
        z-index:1000;
      }
    .swiper-button-prev{
      background-image:url('../../../assets/images/otherTeam/prevarrow.png');
      background-size:20px 76px;
      width: 20px;
      height: 76px;
      top:50%;
      outline: none;
      z-index:1000;
    }
   /deep/  .swiper-pagination-bullet{
      width:9px !important;
      height: 9px !important;
      margin-right:12px;
    }
    .swiper-pagination-bullets{
        bottom:30px;
      }
    .swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
        background:#8A9FAF;
      }
    .swiper-pagination-bullets /deep/ .swiper-pagination-bullet-active{
       background: #fff;
     }
  }
</style>
