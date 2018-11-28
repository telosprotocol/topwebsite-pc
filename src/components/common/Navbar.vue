<template>
  <div class="header" v-bind:class="{'trans':!!transClass}">
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
            <li class="testnet-item" @click="OpenPDF()">EXECUTIVE SUMMARY</li>
          </ul>
        </li>
        <li class="testnet" @mouseenter="showTestnet" @mouseleave="hideTestnet" @click="OpenTestnet()" >TESTNET<span class="iconfont arrowdistance">&#xe615;</span>
          <ul class="entry testnetlist" v-if="showTest">
            <li class="testnet-item" @click="OpenTestBounty()">TESTNET BOUNTY</li>
            <li class="testnet-item" @click="OpenTestnet()">TOP TESTNET</li>
            <li class="testnet-item" @click="OpenWallet()">WALLET</li>
            <li class="testnet-item" @click="OpenExplorer()">EXPLORER</li>
          </ul>
        </li>
        <li class="testnet endmargin" @mouseenter="showAbouts" @mouseleave="hideAbouts" >ABOUT<span class="iconfont arrowdistance">&#xe615;</span>
          <ul class="entry aboutlist" v-if="showAbout">
            <li class="testnet-item" @click="OpenTeam()">TEAM</li>
            <li class="testnet-item" @click="OpenFAQ()">FAQ</li>
          </ul>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    transClass: {
      type: Boolean,
      default: false
    },
    navClass: String
  },
  data () {
    return {
      show: false,
      showTest: false,
      // showAmbassadors: false,
      showAbout: false,
      langshow: false,
      showBounty: false
    }
  },
  methods: {
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    clickToBlog () {
      window.open('https://www.topnetwork.org/blog', '_blank')
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
    OpenEvent () {
      this.$router.push('/event')
      this.$ga.event('topBtn', 'click', 'viewEvent')
    },
    OpenRedeem () {
      this.$ga.event('RedeemBtn', 'click', 'viewRedeem')
      this.$router.push('/redeem')
    },
    OpenTOPIndex () {
      this.$ga.event('topindexBtn', 'click', 'viewIndex')
      this.$router.push('/')
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
    // showAmbassador () {
    //   this.showAmbassadors = true
    // },
    // hideAmbassador () {
    //   this.showAmbassadors = false
    // },
    hideTestnet () {
      this.showTest = false
    },
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
    height:100%;
    position: relative;
    .navbar{
      width:100%;
      padding: 0 3.5%;
      height:88px;
      margin:0 auto;
    //   background:#0E1456;
      background:#030C20;
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
            background:rgba(3,12,32,0.9);
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

    &.trans{
      background: url(../../assets/images/ambassador/bg1.png) no-repeat;
      -webkit-background-size: 100%;
      background-size: 100%;
      background-position: 50%;
      min-width: 1280px;
      .navbar{
        background:rgba(3,12,32,.8);
      }
    }
  }
</style>
