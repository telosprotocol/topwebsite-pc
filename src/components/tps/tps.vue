<template>
 <div class="tps">
    <div class="main">
      <div class="title"><span class="logo"></span>Private Testnet</div>
      <div class="now" :style="{left:tpsPosition}">
        NOW <span>{{tpsNum}}</span> TPS
        <span class="arrow"></span>
        <div class="line"></div>
      </div>
      <div class="time_area">
        <div class="was">Was 982 TPS
          <div class="line"></div>
        </div>
        <div class="was wastwo">Was 1923 TPS
          <div class="line linetwo"></div>
        </div>
        <div class="time">
          <span class="start_time">2018-07</span>
          <span class="end_time">2018-12</span>
        </div>
        <div class="text text1">Single Shard <br><span>1,000</span> TPS</div>
          <div class="text text2">Single Shard Goal <br><span>2,000</span> TPS</div>
          <div class="text text3">3 Zones, 6 Shards <br><span>9,000</span> TPS</div>
          <div class="text text4">5 Zones, 100 Shards <br><span>50,000</span> TPS</div>
      </div>
    </div>
 </div>
</template>

<script>
import {getTpsNum} from '../../../fetch/api'

export default {
  data () {
    return {
      tpsNum: '0',
      tpsPosition: '43%'
    }
  },
  created () {
    this.refreshTPSNum()
  },
  methods: {
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
      setInterval(() => {
        this.getTpsNumInfo()
      }, 5000)
    },
    toQfw (str) {
      var re = /(?=(?!(\b))(\d{3})+$)/g
      str = str.replace(re, ',')
      return str
    }
  },
  components: {}
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
.tps{
  height: 100%;
  width: 100%;
  background-image: url(img/11.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  .main{
    width: 80%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .title{
      width: 90%;
      height: 6.25rem;
      line-height: 7rem;
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      color: #fff;
      position: absolute;
      top: 15%;
      left: 5%;
      .logo{
        height: 6.25rem;
        width: 20rem;
        display: inline-block;
        background-image: url(img/4_title.png);
        background-size: 100%;
        background-repeat: no-repeat;
        vertical-align: top;
        margin-right: 1.5rem;
      }
    }
    .now{
      // width: 50%;
      height: 5rem;
      line-height: 5rem;
      letter-spacing: 1px;
      color: #fff;
      text-align: center;
      font-size: 3rem;
      font-weight: 600;
      position: absolute;
      top: 27.42%;
      // left: -9%;
      span{
        color: #f5c541;
        font-family:Helvetica, sans-serif;
      }
      .arrow{
        height: 2rem;
        width: 3.125rem;
        background-image: url(img/arrow.png);
        background-size: 100%;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        bottom: -3rem;
        left: 50%;
        transform: translateX(-50%);
      }
      .line{
        height: 14rem;
        width: 1px;
        border-left: 1px #f5c541 dashed;
        position: absolute;
        left: 50%;
        top: 9rem;
        margin-left: -0.5px;
      }
    }
    .was{
        font-size: 1.625rem;
        font-weight: 500;
        position: absolute;
        width: 13rem;
        top: 0%;
        transform: translateY(-50%);
        left: 2%;
        color: #fff;
        .line{
          height: 7.5rem;
          width: 1px;
          border-left: 1px #f5c541 dashed;
          position: absolute;
          left: 50%;
          top: 3rem;
          margin-left: -0.5px;
        }
      }
    .wastwo{
      left: 25%;
      top:-15%;
      .linetwo{
        height: 10.5rem;
        top:3rem;
      }
    }
    .time_area{
      width: 100%;
      position: absolute;
      height: 20rem;
      top: 50.43%;
      left: 0;
      .time{
        background-image: url(img/line.png);
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 10rem;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -4.5rem;
        .start_time{
          color: #65e0ff;
          font-size: 1.625rem;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 15%;
        }
        .end_time{
          color: #65e0ff;
          font-size: 1.625rem;
          display: inline-block;
          position: absolute;
          right: 0;
          bottom: 15%;
        }
      }
      .text{
        font-size: 1.625rem;
        color: #fff;
        position: absolute;
        font-family:Helvetica, sans-serif;
        line-height: 2.5rem;
      }
      .text1{
        bottom: 0;
        left: 17.25%;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text2{
        top: 0;
        left: 33.87%;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text3{
        bottom: 0;
        right: 31.22%;
        span{
          color: #65e0ff;
          font-weight: 600;
        }
      }
      .text4{
        top: 0;
        right: 13.4%;
        span{
          color: #f5c541;
          font-weight: 600;
        }
      }
    }
  }
}

</style>
