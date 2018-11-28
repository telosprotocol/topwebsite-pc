<template>
  <div class="p3">
    <div class="p3_title"></div>
    <div class="p3_main">
      <div class="item token_position">
        <div class="icon token"></div>
        <div class="text_area">
          <span class="title">Tokens</span>
          <span class="text">The network service is completely tokenized via various proof-of-service mechanisms.</span>
        </div>
      </div>
      <div class="item routing_position">
        <div class="icon routing"></div>
        <div class="text_area">
          <span class="title">Smart Routing</span>
          <span class="text">TOP network finds the best routing path between any pair of nodes.</span>
        </div>
      </div>
      <div class="item layered_position">
        <div class="icon layered"></div>
        <div class="text_area">
          <span class="title">Infinite Layers</span>
          <span class="text">The network is intelligently organized into multiple layers. A cluster of nodes can be virtualized into one node to create infinite layers.</span>
        </div>
      </div>
      <div class="item dns_position">
        <div class="icon dns"></div>
        <div class="text_area">
          <span class="title">Smart DNS</span>
          <span class="text">A decentralized naming system for accounts, services, and nodes.</span>
        </div>
      </div>
      <div class="item e2e_position">
        <div class="icon e2e"></div>
        <div class="text_area">
          <span class="title">E2E Encryption</span>
          <span class="text">Communication is end-to-end encrypted to ensure network security.</span>
        </div>
      </div>
      <div class="item object_position">
        <div class="icon object"></div>
        <div class="text_area">
          <span class="title">Smart Object</span>
          <span class="text">The network is a decentralized, programmable, object-based database service.</span>
        </div>
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
// @import url(p3_scroll.css);
.p3 {
    height: 100%;
    width: 100%;
    position: relative;
    background-image: url(img/3_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    .p3_title {
        width: 36.875rem;
        height: 4.6875rem;
        background-image: url(img/3_titile.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 18%;
        left: 50%;
        margin-top: -2.3175rem;
        margin-left: -18.4375rem;
    }
    .p3_main {
        width: 80%;
        margin: 0 auto;
        font-size: 0;
        position: absolute;
        top: 35%;
        left: 50%;
        margin-left: -35%;
        .item {
            display: inline-block;
            width: 50%;
            height: 9.375rem;
            font-size: 0;
            text-align: left;
            margin-bottom: 1.25rem;
            .icon {
                height: 6rem;
                width: 6rem;
                background-size: 100%;
                background-repeat: no-repeat;
                display: inline-block;
                vertical-align: middle;
                margin-top: 0.9375rem;
            }
            .token {
                background-image: url(img/3_icon_tokenized.png);
            }
            .routing {
                background-image: url(img/3_icon_routing.png);
            }
            .layered {
                background-image: url(img/3_icon_layered.png);
            }
            .dns {
                background-image: url(img/3_icon_dns.png);
            }
            .e2e {
                background-image: url(img/3_icon_e2e.png);
            }
            .object {
                background-image: url(img/3_icon_object.png);
            }
            .text_area {
                display: inline-block;
                vertical-align: top;
                width: 70%;
                margin-left: 1.5625rem;
                .title {
                    color: #65e0ff;
                    font-size: 1.75rem;
                    display: block;
                    margin-bottom: 0.625rem;
                    font-weight: 600;
                }
                .text {
                    color: #fff;
                    font-size: 1.375rem;
                    letter-spacing: 1px;
                    line-height: 1.4375rem;
                }
            }
        }
    }
}
</style>
