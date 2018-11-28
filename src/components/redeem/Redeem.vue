<template>
  <div>
    <navbar/>
    <div class="info">
      <div class="title">Redeem the Metal Coin to TOP Tokens</div>
      <div class="keywords">Congratulations! If you have obtained a TOP Network metal coin from one of our offline activities, please follow these instructions and you can redeem the coin. </div>
      <div class="desc">
        <div class="item_one">
          <p class="step_one">1. Find the six-digit redeem code on the cover paper along with the metal coin.</p>
          <img src="./images/group.png" class="group">
          <div class="underline"></div>
        </div>
        <div class="item_two">
          <p class="step_two">2. Connect to TOP Network bounty bot on Telegram.
            <span class="colory">(Make sure you have Telegram installed first)</span>
          </p>
          <p class="button"><a href='https://t.me/TOPNetworkBot'>Enter @TOPNetworkBot</a></p>
          <div class="underline"></div>
        </div>
        <div class="item_three">
          <p class="step_three">3. After connecting to TOP Network bounty bot, click "<span class="colorsy">Redeem a Metal Coin to Tokens!</span>", follow the instructions and redeem your coin to TOP tokens!</p>
          <img src="./images/bot2x2.png" class="bot">
          <div class="underline"></div>
        </div>
        <div class="item_four">
          <p class="question">>> How can I get a metal coin?</p>
          <p class="ask">TOP Network metal coins are being distributed by our team touring all over the world! You can redeem the metal coin to TOP Tokens! Pay close attention to our tour schedule and you might be the next one to get a TOP Network metal coin!</p>
          <p class="ask1">We are kicking off our world tour in September. Our co-founders will be present in Boston in the U.S. and attend Singapore Blockchain Week as scheduled below. If you will be present at these events, please let us know by sending an email to <a class='mail' href=mailto:contact@topnetwork.org>contact@topnetwork.org</a>.</p>
          <p class="ask">We look forward to meeting TOP community members around the world!</p>
          <img src="./images/flyer2x2.png" class="flyer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
export default {
  name: 'Redeem',
  components: {
    Navbar
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
  .mail{
    color: white;
  }
  a:hover{
    opacity: 0.8;
  }
  .info{
    background: url('./images/background.png') no-repeat;
    width:100%;
    background-color: #0c1556;
  }
  .title{
    width:81.5rem;
    font-size:3.81rem;
    font-weight:bold;
    line-height:5.06rem;
    color:rgba(255,255,255,1);
    margin: 0 auto;
    padding-top: 5rem;
  }
  .keywords{
    width:68rem;
    color:#fff;
    text-align:center;
    font-size: 1rem;
    line-height: 3rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  /* 正文部分 */
  .desc{
    width: 75rem;
    margin: 0 auto;
    background:rgba(31,38,110,1);
    box-shadow:0rem 5rem 6rem rgba(0,6,38,0.7);
  }
  .item_one{
    padding-top:3rem;
  }
  .step_one{
    width:67.63rem;
    font-size:1.5rem;
    font-weight:bold;
    line-height:1.94rem;
    color:rgba(255,255,255,1);
    margin: 0 auto;
  }
  .group{
    width:19.32rem;
    background:rgba(0,0,0,0);
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .underline{
    width:65.44rem;
    height:0rem;
    border:2px solid rgba(63,71,132,1);
    margin: 0 auto;
    margin-top: 4rem;
  }
  .step_two{
    width:44.13rem;
    font-size:1.5rem;
    font-weight:bold;
    line-height:1.94rem;
    color:#fff;
    margin:0 auto;
    margin-top: 3rem;
  }
  .colory{
    color:rgba(255,237,186,1);
    display: block;
    text-align: center;
  }
  .button{
    width:18.75rem;
    background:rgba(255,204,65,1);
    border-radius:2rem;
    box-shadow:0rem 5rem 20rem rgba(34,13,150,0.93);
    font-size:1.25rem;
    line-height:3.75rem;
    text-align: center;
    margin: 0 auto;
    margin-top:2rem;
    color:rgba(96,52,0,1);
  }
  .step_three{
    width:66.13rem;
    font-size:1.5rem;
    font-weight:bold;
    line-height:1.94rem;
    color:rgba(255,255,255,1);
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .colorsy{
    color:#ff0;
  }
  .bot{
    width:40.44rem;
    background:rgba(0,0,0,0);
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .item_four{
    padding: 0 0 8rem 4.8rem;
  }
  .question{
    margin: 3rem 0 2rem 0;
    width:29.5rem;
    font-size:1.5rem;
    text-align: left;
    font-weight:bold;
    line-height:1.94rem;
    color:rgba(255,255,255,1);
  }
  .ask{
    width:65.31rem;
    font-size:1.25rem;
    font-weight:400;
    text-align:left;
    line-height:1.63rem;
    color:rgba(255,255,255,1);
    margin-bottom:2rem;
  }
  .ask1{
    width:65.31rem;
    font-size:1.25rem;
    font-weight:400;
    text-align:left;
    line-height:1.63rem;
    color:rgba(255,255,255,1);
    margin-bottom:2rem;
  }
  .flyer{
    width: 56.34rem;
    background:rgba(0,0,0,0);
    box-shadow:0rem 5rem 6rem rgba(0,0,0,0.16);
    display: block;
    margin: 0 auto;
  }
</style>
