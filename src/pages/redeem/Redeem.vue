<template>
  <div class="faq">
    <navbar/>
    <div class="faqinfo">
      <div class="title-area">
        <div class="faqtitle">Redeem the Metal Coin to TOP Tokens</div>
        <div class="title-desc">Congratulations! If you have obtained a TOP Network metal coin from one of our offline activities, please follow these instructions and you can redeem the coin.</div>
      </div>
      <div class="info-area">
        <div class="info-item" ref="infoList">
          <ul class="info-list" >
            <li class=" endmagrintop" :class="{active:selectIndex===1}" @click="selectItem(1)">Step 1. Find the Code</li>
            <li :class="{active:selectIndex===2}" @click="selectItem(2)">Step 2. Connect to Bot</li>
            <li :class="{active:selectIndex===3}" @click="selectItem(3)">Step 3. Redeem Code on Bot</li>
          </ul>
        </div>
        <div class="info-detail">
          <div class="stepOne" id="item1">
            <div class="step">Step 1. Find the Code</div>
            <div class="step-detail">Find the six-digit redeem code on the cover paper along with the metal coin.</div>
            <img src="@/assets/images/redeem/coin.png" class="coin">
          </div>
          <div class="stepOne" id="item2">
            <div class="step">Step 2. Connect to Bot</div>
            <div class="step-detail">Connect to TOP Network bounty bot on Telegram. <span>(Make sure you have Telegram installed first)</span></div>
            <img src="@/assets/images/redeem/btn.png" class="bot" @click="openBot">
          </div>
          <div class="stepOne" id="item3">
            <div class="step">Step 3. Redeem Code on Bot</div>
            <div class="step-detail">After connecting to TOP Network bounty bot, click "<span>Redeem a Metal Coin to Tokens!</span>", follow the instructions and redeem your coin to TOP tokens!</div>
            <img src="@/assets/images/redeem/group.png" class="group">
          </div>
          <div class="stepOne noborderleft">
            <div class="step">>> How can I get a metal coin?</div>
            <div class="step-detail">
              <p>OP Network metal coins are being distributed by our team touring all over the world! You can redeem the metal coin to TOP Tokens! Pay close attention to our tour schedule and you might be the next one to get a TOP Network metal coin!</p>
              <p>Our latest tour &amp; event schedules and notifications can be found in our official Telegram group: <a href="https://t.me/topnetwork_top" target="_blank">https://t.me/topnetwork_top.</a></p>
              <p class="endmarbtm">Join now and don't miss anything!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/components/common/vFooter'
export default {
  name: 'Redeem',
  components: {
    Navbar,
    vFooter
  },
  data () {
    return {
      selectIndex: 1
    }
  },
  methods: {
    selectItem (i) {
      this.selectIndex = i
      if (i === 1) {
        return
      }
      var element = document.getElementById('item' + i + '')
      element.scrollIntoView()
    },
    openBot () {
      window.open('https://t.me/TOPNetworkBot', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  .faqinfo{
    width: 100%;
    background: #041126;
    padding-bottom: 167px;
    color:rgba(255,255,255,1);
    font-family:Cera Pro;
    font-weight:500;
    .title-area{
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.2);
      background: url('../../assets/images/childrenPage/title.png');
      background-size: cover;
      background-position: center 0;
      padding: 91px 0 96px;
      .faqtitle{
        width: 1280px;
        height:86px;
        line-height: 86px;
        margin:0 auto;
        text-align: center;
        font-size:65px;
        font-weight:bold;
      }
      .title-desc{
        width:1285px;
        height: 94px;
        font-size:30px;
        line-height:32px;
        color:rgba(138,159,175,1);
        margin:33px auto 0 auto;
      }
    }
    .info-area{
      width:1166px;
      margin: 0 auto;
      background: #111E31;
      padding: 46px 73px 46px 73px;
      box-sizing: border-box;
      overflow: hidden;
      .info-item{
        height: 100%;
        text-align: left;
        width:315px;
        font-size:20px;
        line-height:29px;
        float: left;
        li{
            width:100%;
            height: 20px;
            line-height: 20px;
            text-align:left;
            font-size:20px;
            color:rgba(255,255,255,.3);
            margin-top:14px;
            cursor: pointer;
          }
          .active {
            color: rgba(255, 255, 255, 1);
          }
          .endmagrintop{
            margin-top:0;
          }
      }
      .info-detail{
        float: left;
        width:692px;
        .stepOne{
          width:100%;
          margin-bottom: 49px;
          border-left:1px solid rgba(255,255,255,.8);
          padding-left:28px;
          .step{
            width:100%;
            height:26px;
            text-align: left;
            font-size:26px;
            line-height:26px;
            font-weight: bold;
          }
          .step-detail{
            margin:25px 0;
            text-align: left;
            width:100%;
            font-size:20px;
            font-weight:300;
            line-height:23px;
            opacity: 0.8;
            span{
              color:#E4AF0A;
            }
            a{
              color:#E4AF0A;
              cursor: pointer;
              border-bottom: 1px solid #E4AF0A;
              padding-bottom: 1px;
            }
            p{
              margin-bottom: 25px;
            }
            .endmarbtm{
              margin-bottom: 0;
            }
          }
          .coin{
            width: 435px;
            height: 215px;
            margin:0 auto;
          }
          .bot{
            width:211px;
            height:40px;
            cursor: pointer;
          }
          .group{
            width: 100%;
          }
        }
        .noborderleft{
          border-left:0;
        }
      }
    }
  }
</style>
