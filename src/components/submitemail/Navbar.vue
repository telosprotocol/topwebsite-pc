<template>
     <div class="header">
      <a href="/"><img src="./images/1_logo.png" class="logo"></a>
      <ul class="navigation">
        <li class="navigation_item endmrt">
          <select class="language">
            <option class="language_color">English</option>
          </select>
        </li>
        <li class="navigation_item" @click="OpenFAQ()">FAQ</li>
        <!-- <li class="navigation_item"  ">Executive Summary</li> -->
        <li class="navigation_item" @click="OpenPDF()">Executive Summary</li>
        <li class="navigation_item"><a class="blog_btn" @click="clickToBlog()">Blog</a></li>
        <li class="navigation_item someitem testnet" @mouseenter="showTestnet" @mouseleave="hideTestnet" @click="OpenTestnet()">Testnet
          <img src="@/components/common/images/arrow.png" class="white-arrow">
          <ul class="white-summary" v-if="showTest">
            <li class="testnet-item" @click="OpenBounty()">Bounty Activities</li>
            <li class="testnet-item" @click="OpenWallet()">Wallet</li>
            <li class="testnet-item" @click="OpenExplorer()">Explorer</li>
          </ul>
        </li>
        <li class="testnet" @click="OpenAmbassador()">AMBASSADORS</li>
        <li class="navigation_item" @click="OpenRedeem()">Redeem Tokens</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      show: false,
      showTest: false
    }
  },
  methods: {
    OpenPDF () {
      this.$ga.event('viewPdf', 'click', 'bootBtn')
      //   window.open(location.href + '?action=view', '_blank')
      window.open('/pdf', '_blank')
    },
    clickToBlog () {
      this.$ga.event('ClickBlog', 'click', 'bootBtn')
      window.open('/blog', '_blank')
    },
    OpenFAQ () {
      this.$ga.event('viewFAQ', 'click', 'bootBtn')
      //   window.open(location.href + '?action=faq', '_blank')
      window.open('/faq', '_blank')
    },
    OpenRedeem () {
      this.$ga.event('viewRedeem', 'click', 'bootBtn')
      //   window.open(location.href + '?action=redeem', '_blank')
      this.$router.push('/redeem')
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
    OpenAmbassador () {
      this.$ga.event('ambassador', 'click', 'bootBtn')
      this.$router.push('/ambassador')
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
    } else if (action && action === 'ambassador') {
      this.$router.push({path: 'ambassador'})
    }
  }
}
</script>

<style lang='scss' type="text/css" scoped>
  html{
    font-size: 16px;
    font-family:Microsoft YaHei;
    padding: 0;
    margin: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    opacity: 0.8;
  }
  .header{
    width:100%;
    height:7.5rem;
    background:rgba(5,10,59,.9);
    .navigation{
      padding-top: 3rem;
      .navigation_item{
        float: right;
        color: #fff;
        font-size: 1.25rem;
        margin-right: 8rem;
        cursor: pointer;
      }
      .someitem{
        position: relative;
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
          top:1.5rem;
          width:15rem;
          .white{
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
    }
  }
  .endmrt{
    margin-right: 5rem;
  }
  .language{
    background:rgba(5,10,59,1);
    color:#fff;
    font-size: 1.25rem;
    border: none;
    outline: none;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background: url('./images/arrow.png') no-repeat scroll right center transparent;
    background-size: 1.5rem 1.5rem;
    padding-right: 2.2rem;
  }
  .logo{
    float: left;
    padding-top: 2.5rem;
    padding-left: 2.5rem
  }
</style>
