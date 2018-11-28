<template>
  <div class="topchain">
    <div class="topchain-area">
      <img src="@/assets/images/index/topchain.png" class="topchain">
      <div class="topchain-title">A high performance blockchain platform for real-world business</div>
      <div class="item">
        <span class="item-title platform">Multi-Chain Platform</span>
        <span class="item-info">Pluggable service chains to meet the complexity of real-world business. Financial settlement is separated from business logic.</span>
      </div>
      <div class="item">
        <span class="item-title blockchain">High Performance Blockchain</span>
        <span class="item-info">Book and settle high volume of transactions in real-world business on blockchain.</span>
      </div>
      <div class="item">
        <span class="item-title ledgers">Three Layers of Distributed Ledgers</span>
        <span class="item-info endmagrinb">Seamless combination of main chain, service chains and off-chain ledger to store, process, book and settle any volume and any size of real-world business.</span>
      </div>
    </div>
    <div class="core-feature">
      <div class="core-title">Core Features</div>
      <ul class="core-list">
        <li class="parallel-item"><img src="@/assets/images/index/lattice.png" class="core-image"><span class="core-text">Two-Layer Lattice</span></li>
        <li class="sharding-item"><img src="@/assets/images/index/sharding.png"  class="core-image"><span class="core-text">Two-Layer Sharding</span></li>
        <li class="endmarginr vm-item"><img src="@/assets/images/index/vm.png"  class="core-image"><span class="core-text">Two-Layer VM</span></li>
        <li class="margint parallel-item"><img src="@/assets/images/index/parallel.png"  class="core-image"><span class="core-text one">High-Speed Parallel PBFT</span></li>
        <li class="margint zero-item"><img src="@/assets/images/index/zero.png"  class="core-image"><span class="core-text two">Instant Transactions Zero Fees</span></li>
        <li class="margint endmarginr built-item"><img src="@/assets/images/index/privacy.png"  class="core-image"><span class="core-text three">Built-In Security Privacy Protection</span></li>
      </ul>
    </div>
    <div class="full-line"></div>
    <div class="blossom">
      <div class="blossom-title">A Blossom Ecosystem</div>
      <div class="blossom-info">Three DApps with over <span class="amount">50,000,000</span> users will be immediately available on TOP </div>
      <ul class="blossom-list">
        <li>
          <img src="@/assets/images/index/dingtone.png" class="blossom-image">
          <div class="image-title">Dingtone</div>
          <div class="circle"></div>
          <div class="blossom-text">Decentralized Messaging App</div>
        </li>
        <li>
          <img src="@/assets/images/index/skyvpn.png" class="blossom-image">
          <div class="image-title">SkyVPN</div>
          <div class="circle"></div>
          <div class="blossom-text text-vpn">Decentralized VPN Service</div>
        </li>
        <li class="endmarginr">
          <img src="@/assets/images/index/coverme.png" class="blossom-image">
          <div class="image-title">CoverMe</div>
          <div class="circle"></div>
          <div class="blossom-text">Secure Messaging App</div>
        </li>
      </ul>
    </div>
    <div class="full-line"></div>
  </div>
</template>

<script>
export default {
  name: 'TopChain'
}
</script>

<style lang="scss" scoped>
.topchain{
  background:rgba(4,17,38,1);
  width:100%;
  .topchain-area{
    width:1280px;
    margin:0 auto;
    padding-top:154px;
    .topchain{
      width:316px;
      display: block;
      margin:0 auto;
      margin-bottom:82px;
    }
    .topchain-title{
      text-align: center;
      color:rgba(255,255,255,1);
      margin:0 auto;
      margin-bottom:64px;
      width:100%;
      height:36px;
      font-size:36px;
      font-family:Cera Pro;
      font-weight:300;
      line-height:36px;
    }
    .item{
      width:89%;
      margin: 0 auto;
      text-align:center;
      margin-bottom:40px;
      .item-title{
        width: 26%;
        text-align:right;
        font-size:32px;
        font-family:Cera Pro;
        font-weight:300;
        line-height:46px;
        color:rgba(119,187,211,1);
        margin-right:50px;
        display: inline-block;
        vertical-align: top;
      }
      .ledgers{
        width: 300px;
      }
      .item-info{
        text-align:left;
        display: inline-block;
        width:480px;
        height:80px;
        font-size:20px;
        font-family:Arial;
        font-weight:400;
        line-height:23px;
        color:rgba(138,159,175,1);
        padding-top:10px;
      }
      .endmagrinb{
        margin-bottom:0;
      }
    }
  }
  .core-feature{
    width:1280px;
    margin:0 auto;
    .core-title{
      margin: 0 auto;
      margin-top:154px;
      text-align: center;
      color:rgba(255,255,255,1);
      width:404px;
      height:63px;
      font-size:60px;
      font-family:Cera Pro;
      font-weight:400;
      line-height:63px;
      color:rgba(255,255,255,1);
    }
    .core-list{
      width:100%;
      margin:0 auto;
      margin-top:96px;
      margin-bottom:173px;
      overflow: hidden;
      li{
        width:33.3%;
        float: left;
        text-align: left;
        .core-image{
          width:61px;
          height:61px;
          margin-right:22px;
          display: inline-block;
        }
        .core-text{
          display: inline-block;
          vertical-align: middle;
          text-align: left;
          width:150px;
          height:56px;
          font-size:26px;
          font-family:Cera Pro;
          font-weight:400;
          line-height:28px;
          color:rgba(255,255,255,1);
        }
        .one{
          width:152px;
        }
        .two{
          width:250px;
        }
        .three{
          width:231px;
        }
      }
      .sharding-item{
        box-sizing: border-box;
        padding-left:38px;
      }
      .vm-item{
        box-sizing: border-box;
        padding-left:51px;
      }
      .parallel-item{
        width:32.3%;
        box-sizing: border-box;
        padding-left:70px;
      }
      .zero-item{
        width:34.3%;
        box-sizing: border-box;
        padding-left:35px;
      }
      .built-item{
        width:32.3%;
        box-sizing: border-box;
        padding-left:35px;
      }
      .margint{
        margin-top:121px;
      }
      .endmarginr{
        margin-right:0;
      }
    }
    .full-line{
      width:1280px;
      height:2px;
      background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
      margin:0 auto;
    }
  }
  .blossom{
    width:1100px;
    margin:0 auto;
    .blossom-title{
      text-align: center;
      margin:0 auto;
      margin-top:162px;
      width:621px;
      height:63px;
      font-size:60px;
      font-family:Cera Pro;
      font-weight:400;
      line-height:63px;
      color:rgba(255,255,255,1);
    }
    .blossom-info{
      text-align:center;
      margin:0 auto;
      margin-top:50px;
      margin-bottom: 85px;
      width:1030px;
      height:93px;
      font-size:36px;
      font-family:Cera Pro;
      font-weight:300;
      line-height:52px;
      color:rgba(255,255,255,1);
      .amount{
        color:#CF9A1F;
        font-weight: 500;
      }
    }
    .blossom-list{
      width:100%;
      margin:0 auto;
      overflow: hidden;
      li{
        float: left;
        width:33.3%;
        text-align: center;
        .blossom-image{
          display: block;
          margin:0 auto;
          width:116px;
          height:116px;
        }
        .image-title{
          text-align:center;
          margin:0 auto;
          margin-top:40px;
          width:169px;
          height:40px;
          font-size:40px;
          font-family:Cera Pro;
          font-weight:300;
          line-height:40px;
          color:rgba(119,187,211,1);
        }
        .circle{
          margin:0 auto;
          margin-top:25px;
          width:6px;
          height:6px;
          background:rgba(119,187,211,1);
          border-radius:50%;
        }
        .blossom-text{
          margin:0 auto;
          text-align:center;
          margin-top:35px;
          width:194px;
          height:60px;
          font-size:26px;
          font-family:Cera Pro;
          font-weight:400;
          line-height:28px;
          color:rgba(255,255,255,1);
        }
      }
      .endmarginr{
        margin-right:0;
      }
    }
  }
  .full-line{
    width:1280px;
    height:2px;
    background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
    margin:0 auto;
    margin-top:155px;
  }
}

</style>
