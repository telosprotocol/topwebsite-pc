<template>
 <div class="p1">
     <div id="video2_area" class="video-bg">
                    <video v-if="showVideo" id="video2" class="video-tvc2" loop="loop" autoplay="autoplay" src="./img/video.mp4" muted>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <!-- <div style="height: 100%;width: 100%;background: transparent;" id="p1_bg"></div> -->
                <div class="p1_logo"></div>
                <div class="p1_slogen">Cloud Communication Services<br>
                            on <span class="notice">Blockchain</span></div>
                <div class="redeem" @click="OpenRedeem()">Redeem Tokens</div>
                <div class="navigation_item someitem testnet" @mouseenter="showTestnet" @mouseleave="hideTestnet" @click="OpenTestnet()">Testnet
                    <img src="@/components/common/images/arrow.png" class="white-arrow">
                    <ul class="white-summary" v-if="showTest">
                      <li class="testnet-item" @click="OpenBounty()">Bounty Activities</li>
                      <li class="testnet-item" @click="OpenWallet()">Wallet</li>
                      <li class="testnet-item" @click="OpenExplorer()">Explorer</li>
                    </ul>
                </div>
                <!-- <div class="pdf" @click="OpenPDF()">Executive Summary</div> -->
                <a class="blog_btn" @click="clickToBlog()">Blog</a>
                <div class="navigation_item someitem whitePaper" @mouseenter="showitem" @mouseleave="hideitem">WhitePaper
                    <img src="@/components/common/images/arrow.png" class="white-arrow">
                    <ul class="white-summary" v-if="show">
                        <li class="white" @click="OpenWhitePaper()">Whitepaper</li>
                        <li class="white" @click="OpenPDF()">Executive Summary</li>
                    </ul>
                </div>
                <div class="faq" @click="OpenFAQ()">FAQ</div>
                <select class="langurage">
                    <option value="1">English</option>
                </select>
                <!-- <div class="title"></div> -->
                <div class="slogen_area">
                    <span>World’s first decentralized open communication network</span>
                    <span>powered by blockchain 4.0 technology</span>
                </div>
                <div class="mobile"></div>
 </div>
</template>

<script>

import scrollReveal from 'scrollreveal'

export default {
  data () {
    return {
      scrollReveal: scrollReveal(),
      showVideo: false,
      pdf_url: 'static/TOP_Executive_Summary_EN.pdf',
      show: false,
      showTest: false
    }
  },
  mounted () {
    this.scrollReveal.reveal('.p1_slogen', {
      duration: 500,
      delay: 100,
      origin: 'top',
      reset: true,
      mobile: false,
      distance: '0px'
    })
    this.scrollReveal.reveal('.slogen_area', {
      duration: 500,
      delay: 100,
      origin: 'top',
      reset: true,
      mobile: false,
      distance: '0px'
    })
    this.scrollReveal.reveal('.mobile', {
      duration: 500,
      delay: 100,
      origin: 'bottom',
      reset: true,
      mobile: false,
      distance: '100px'
    })

    this.showVideo = true
  },
  methods: {
    OpenPDF () {
      this.$ga.event('topBtn', 'click', 'viewPdf')
      window.open('/pdf', '_blank')
    },
    clickToBlog () {
      this.$ga.event('topBtn', 'click', 'ClickBlog')
      window.open('/blog', '_blank')
    },
    OpenFAQ () {
      this.$ga.event('topBtn', 'click', 'viewFAQ')
      window.open('/faq', '_blank')
    },
    OpenRedeem () {
      this.$ga.event('topBtn', 'click', 'viewRedeem')
      this.$router.push('/redeem')
    },
    OpenWhitePaper () {
      this.$ga.event('viewWhite', 'click', 'bootBtn')
      this.$router.push('/submitemail')
    },
    OpenTestnet () {
      this.$ga.event('viewTestnet', 'click', 'testnet')
      window.open('https://www.topnetwork.org/testnet/', '_blank')
    },
    OpenBounty () {
      this.$ga.event('viewBounty', 'click', 'bounty')
      window.open('https://www.topnetwork.org/testnet/#/activepage', '_blank')
    },
    OpenWallet () {
      this.$ga.event('viewTestnet', 'click', 'wallet')
      window.open('https://www.topnetwork.org/testnet/#/testnet/wallet', '_blank')
    },
    OpenExplorer () {
      this.$ga.event('viewTestnet', 'click', 'explorer')
      window.open('https://www.topnetwork.org/testnet/#/testnet/explorer', '_blank')
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
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    }
  },
  components: {}
}
</script>

<style lang='scss' type="text/css" scoped>
.p1 {
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(img/bg1.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #0e175a;
    .video-bg {
        height: 100%;
        width: 100%;
        .video-tvc {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all 0.3s linear;
        }
        .video-tvc2 {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all 0.3s linear;
        }
    }
    .mobile {
        width: 25rem;
        height: 15rem;
        position: absolute;
        background-image: url(img/1_iPhone.png);
        background-size: 100%;
        background-repeat: no-repeat;
        bottom: 2%;
        left: 50%;
        margin-left: -12.5rem;
    }
    .p1_logo {
        width: 21.375rem;
        height: 3.125rem;
        position: absolute;
        top: 3rem;
        left: 2.5rem;
        background-image: url('img/1_logo.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .title {
        height: 7.5rem;
        width: 35.625rem;
        position: absolute;
        top: 23%;
        left: 50%;
        margin-left: -17.8125rem;
        background-image: url(img/1_logo2.png);
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 100;
    }
    .redeem{
      position:absolute;
      top: 4.4rem;
      right: 64rem;
      font-size: 1.25rem;
      color: #fff;
      cursor: pointer;
    }
    .someitem{
      position: absolute;
      top: 4.4rem;
      right: 26.5rem;
      font-size: 1.25rem;
      color:#fff;
      .white-arrow{
        position: absolute;
        left:7.6rem;
        top:0.2rem;
        width:1.5rem;
        height:1.5rem;
      }
      .white-summary{
        position:absolute;
        left:-1rem;
        top:0.3rem;
        width:15rem;
        .white{
          list-style: none;
          width:15rem;
          height:4rem;
          line-height:4rem;
          text-align:left;
          text-indent: 1rem;
          // padding-left:1rem;
          color:#fff;
          background:#0E1456;
          cursor: pointer;
        }
        .white:hover{
          background-color: #ffc400;
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16);
        }
      }
    }
    .testnet{
      position: absolute;
      top: 4.4rem;
      right: 53.5rem;
      cursor: pointer;
      .white-arrow{
        position: absolute;
        left:4.9rem;
        top:0.2rem;
        width:1.5rem;
        height:1.5rem;
      }
      .testnet-item{
        list-style: none;
        width:15rem;
        height:4rem;
        line-height:4rem;
        text-align:left;
        text-indent: 1rem;
        color:#fff;
        background:#0E1456;
        cursor: pointer;
      }
      .testnet-item:hover{
        background-color: #ffc400;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.16);
      }
    }
    .p1_slogen{
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 3.75rem;
        letter-spacing: 2px;
        position: absolute;
        top: 36%;
        left: 0;
        font-weight: 600;
        .notice{
            color: #f5c541;
        }
    }
    @media only screen and (max-width: 1600px){
         .p1_slogen{
             top: 30%;
         }
    }
    .slogen_area {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 52%;
        left: 0;
        font-size: 1.875rem;
        color: #fff;
        letter-spacing: 2px;
        z-index: 100;
        opacity: 1;
        span {
            display: block;
            margin-top: 0.9375rem;
        }
    }
    .langurage {
        position: absolute;
        width: 6.25rem;
        height: 2.5rem;
        right: 2.5rem;
        top: 4rem;
        border: none;
        color: #fff;
        font-size: 1.25rem;
        background: url('img/1_jt.png') no-repeat scroll right center transparent;
        outline: none;
        appearance:none;
        -moz-appearance:none;
        -webkit-appearance:none;
        option {
            background-color: #0e175a;
            border: none;
        }
    }
    .pdf{
        position: absolute;
        top: 4.4rem;
        right: 23rem;
        font-size: 1.25rem;
        color: #fff;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    }
    .blog_btn{
        position: absolute;
        top: 4.4rem;
        right: 33em;
        font-size: 1.25rem;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        &:hover{
            opacity: 0.8;
        }
    }
    .faq{
        position: absolute;
        top: 4.4rem;
        right: 12em;
        font-size: 1.25rem;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
        &:hover{
            opacity: 0.8;
        }
    }
}
</style>
