<!--老官网的底部-->
<template>
  <div class="footer">
    <div class="footer_main">
      <span class="logo"></span>
      <div class="left_area">
        <span>Copyright © 2018 Telos Foundation</span>
        <span>All rights reserved</span>
      </div>
      <div class="right_area">
        <div class="social">
          <a class="icon medium" title="Medium" target="_blank" @click="clickIcon('Medium')" href="https://medium.com/@topnetwork"></a>
          <a class="icon telegram" title="Telegram" target="_blank" @click="clickIcon('Telegram')" href="https://t.me/topnetwork_top"></a>
          <a class="icon twitter" title="Twitter" target="_blank" @click="clickIcon('Twitter')" href="https://twitter.com/topnetwork_top"></a>
        </div>
          <div class="text"><a @click="clickTermsOfService()">Terms of Service</a> | <a @click="clickPrivacyPolicy()">Privacy Policy</a> </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CFooter',
  methods: {
    clickTermsOfService () {
      this.$ga.event('bootBtn', 'click', 'TermsOfService')
    },
    clickPrivacyPolicy () {
      this.$ga.event('bootBtn', 'click', 'PrivacyPolicy')
    },
    clickIcon (type) {
      this.$ga.event('bootBtn', 'click', 'Click' + type + '')
    }
  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
  .footer {
    height: 11.8rem;
    width: 100%;
    // background:#0E1456;
    background:rgba(3,12,32,.9);
    border-top: 1px solid rgba(3,12,32,1);
    .footer_main {
      width: 60%;
      height: 100%;
      margin: 0 auto;
      position: relative;
        .logo {
          height: 3.125rem;
          width: 5rem;
          position: absolute;
          top: 50%;
          left: 0;
          margin-top: -1.25rem;
          background-image: url(images/9_logo.png);
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .left_area {
          height: 3.125rem;
          width: 18.75rem;
          position: absolute;
          top: 50%;
          left: 6.25rem;
          margin-top: -1.25rem;
          color: #fff;
          line-height: 1.625rem;
          span {
            display: block;
            font-size: 1rem;
            text-align: left;
          }
        }
        .right_area {
          height: 3.125rem;
          width: 50%;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -1.25rem;
          .social {
              height: 2.25rem;
              text-align: right;
              .icon {
                  height: 1.25rem;
                  width: 1.25rem;
                  background-size: 100%;
                  background-repeat: no-repeat;
                  display: inline-block;
                  margin-right: 1.25rem;
                  cursor: pointer;
                  &:hover {
                      opacity: 0.8;
                      ;
                  }
              }
                .telegram {
                    background-image: url(images/9_icon_telegram.png);
                }
                .twitter {
                    background-image: url(images/9_icon_twitter.png);
                }
                .medium {
                    background-image: url(images/medium.png);
                }
            }
            .text {
                color: #fff;
                font-size: 1rem;
                text-align: right;
                a {
                    cursor: pointer;
                    display: inline-block;
                    margin-right: 0.625rem;
                    margin-left: 0.625rem;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
  }
</style>
