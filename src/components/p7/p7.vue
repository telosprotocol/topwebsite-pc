<template>
  <div class="p7">
    <div class="p7_textarea">
      <div class="title">Our Mission</div>
      <div class="slogen">
        <span class="logo"></span>
        <span class="text"><span class="op">OP</span> - A Communication Layer for Web 3.0 Apps</span>
      </div>
    </div>
    <div class="p7_main">
      <div class="item eos_position">
        <div class="icon eos"></div>
        <span class="name">EOS</span>
        <span class="text">Decentralized</span>
        <span class="text">Apps</span>
      </div>
      <div class="item ipfs_position">
        <div class="icon ipfs"></div>
        <span class="name">IPFS</span>
        <span class="text">Decentralized</span>
        <span class="text">Storage</span>
      </div>
      <div class="item top_position">
        <div class="icon top"></div>
        <span class="name">TOP</span>
        <span class="text">Decentralized</span>
        <span class="text">Communication</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
  .p7 {
    height: 100%;
    width: 100%;
    background-image: url(img/7_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p7_textarea {
      width: 80%;
      position: absolute;
      top: 12%;
      left: 50%;
      margin-left: -40%;
      text-align: center;
      .title {
        font-size: 4.25rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
      }
      .slogen {
        margin-top: 1.25rem;
        .logo {
          height: 3.125rem;
          width: 3.125rem;
          background-image: url(img/7_logo.png);
          background-size: 100%;
          background-repeat: no-repeat;
          display: inline-block;
          vertical-align: bottom;
          margin-bottom: -0.25rem;
          margin-right: -0.625rem;
        }
        .text {
          font-size: 2.25rem;
          color: #fff;
          line-height: 1.875rem;
          letter-spacing: 1px;
          margin-top: 1.25rem;
          font-weight: 600;
          .op{
              font-weight: 500;
          }
        }
      }
    }
    .p7_main {
      width: 70%;
      position: absolute;
      left: 50%;
      top: 42%;
      margin-left: -35%;
      font-size: 0;
      .item {
        width: 33.33%;
        display: inline-block;
        text-align: center;
        .icon {
          height: 9.375rem;
          width: 9.375rem;
          background-size: cover;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
        .eos {
          background-image: url(img/7_icon_eos.png);
        }
        .ipfs {
          background-image: url(img/7_icon_ipfs.png);
        }
        .top {
          background-image: url(img/7_icon_top.png);
        }
        .name {
          font-size: 3rem;
          color: #fff;
          display: block;
          margin-top: 18%;
          margin-bottom: 0.625rem;
        }
        .text {
          font-size: 1.625rem;
          color: #fff;
          display: block;
        }
      }
    }
  }

</style>
