<template>
  <div class="p6">
    <div class="p6_textarea">
      <div class="title">A Blossom Ecosystem</div>
      <div class="text">Three DApps with over
        <span class="notice">45,000,000</span> users
        <br> will be immediately available on
        <span class="notice">TOP</span>
      </div>
    </div>
    <div class="p6_main">
      <div class="item dingtone_position">
        <div class="icon dingtone"></div>
        <span class="name">Dingtone</span>
        <span class="text">Decentralized</span>
        <span class="text">Messaging App</span>
      </div>
      <div class="item skyvpn_position">
        <div class="icon skyvpn"></div>
        <span class="name">SkyVPN</span>
        <span class="text">Decentralized</span>
        <span class="text">VPN Service</span>
      </div>
      <div class="item coverme_position">
        <div class="icon coverme"></div>
        <span class="name">CoverMe</span>
        <span class="text">Secure</span>
        <span class="text">Messaging App</span>
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

<style lang='scss' type='text/css' scoped>
  .p6 {
    height: 100%;
    width: 100%;
    background-image: url(img/6_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p6_textarea {
      width: 100%;
      position: absolute;
      top: 10%;
      text-align: center;
      .title {
        font-size: 4.25rem;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 600;
      }
      .text {
        font-size: 1.75rem;
        color: #fff;
        line-height: 1.875rem;
        letter-spacing: 3px;
        margin-top: 1.25rem;
        line-height: 2.5rem;
        .notice {
          color: #ffdd00;
          font-weight: 600;
          font-size: 1.375rem;
        }
      }
    }
    .p6_main {
      width: 80%;
      position: absolute;
      left: 50%;
      top: 42%;
      margin-left: -40%;
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
        .dingtone {
          background-image: url(img/6_logo_dingtone.png);
        }
        .skyvpn {
          background-image: url(img/6_logo_skyvpn.png);
        }
        .coverme {
          background-image: url(img/6_logo_coverme.png);
        }
        .name {
          font-size: 2rem;
          color: #fff;
          display: block;
          margin-top: 15%;
          margin-bottom: 5%;
          font-weight: 600;
        }
        .text {
          font-size: 1.625rem;
          color: #fff;
          margin-top: 0px;
          display: block;
        }
      }
    }
  }

</style>
