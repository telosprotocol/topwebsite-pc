<template>
  <div class="p4">
    <div class="p4_logo"></div>
    <div class="P4_text">A high performance blockchain platform for real-world business</div>
    <div class="p4_main">
      <div class="img"></div>
      <div class="text_area">
        <div class="text_item">
          <div class="title">Multi-Chain Platform</div>
          <div class="content">Pluggable service chains to meet the complexity of real-world business. Financial settlement is separated from business logic.
          </div>
        </div>
        <div class="text_item">
          <div class="title">High Performance Blockchain</div>
          <div class="content">Book and settle high volume of transactions in real-world business on blockchain.</div>
        </div>
        <div class="text_item">
          <div class="title">Three Layers of Distributed Ledgers</div>
          <div class="content">Seamless combination of main chain, service chains, and off-chain ledger to store, process, book, and settle
              any volume and any size of real-world business.</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang='scss' rel='stylesheet/scss'>
.p4 {
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(img/4_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  .p4_logo {
    height: 6.25rem;
    width: 25rem;
    position: absolute;
    background-image: url(img/4_title.png);
    background-size: 100%;
    background-repeat: no-repeat;
    top: 10%;
    left: 50%;
    margin-left: -12.5rem;
  }
  .P4_text {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 26%;
    left: 0;
    font-size: 2rem;
    color: #fff;
  }
  .p4_main {
    width: 70%;
    height: 60%;
    position: absolute;
    top: 20%;
    left: 15%;
    .img {
      height: 26.25rem;
      width: 25rem;
      position: absolute;
      background-image: url(img/4_img.png);
      background-size: 100%;
      background-repeat: no-repeat;
      top: 35%;
      right: 55%;
    }

    .text_area {
      height: 50%;
      width: 50%;
      position: absolute;
      right: 0%;
      top: 34%;
      text-align: left;
      .text_item {
        height: auto;
        margin-bottom: 2.5rem;
        .title {
          font-size: 1.75rem;
          color: #f5c541;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .content {
          font-size: 1.375rem;
          color: #fff;
          letter-spacing: 1px;
          margin-top: 0.625rem;
        }
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .p4_main {
      top: 18%;
      .img {
        height: 22.5rem;
        width: 21.25rem;
        top: 33%;
      }
      .text_area {
        top: 25%;
        .text_item {
          margin-bottom: 1.875rem;
          .content {
            line-height: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
