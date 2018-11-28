<template>
    <div class="p9">
        <div class="p9_main">
            <div class="title">Contact Us</div>
            <div class="area1">
                <input v-model="email" placeholder="Your Email" class="email_input" :class="{error:errEmail}" type="text" />
                <div class="btn" @click="addEmailInfo()">Send</div>
            </div>
            <div class="area2">
                <textarea v-model="message" placeholder="Your Message" class="message_text"></textarea>
                <div class="update_area" @click="swicthCheck()">
                    <span class="checkbox" :class="{unsel:!ischeck,sel:ischeck}"></span>
                    <span class="text">Receive Update</span>
                </div>
                <div class="wechat_area">
                    <!-- <img class="wechat_qr" src="https://www.topnetwork.org/static/topqr.jpg?v=1234"> -->
                    <img class="wechat_qr" src="@/assets/images/index/erweima.png">
                    <span class="text">WeChat Group QR</span>
                </div>
                <div class="email_info">Email:
                    <a @click="clickMailTo()" href="mailto:contact@topnetwork.org">contact@topnetwork.org</a>
                </div>
                <div v-if="redeemcode" class="code">Redeem Code: {{ redeemcode }}</div>
            </div>
        </div>
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
    </div>
</template>

<script>
import {
  addContactInfo,
  getRedeemCode,
  getCookie,
  addCookie
} from '../../../fetch/api'
export default {
  data () {
    return {
      ischeck: true,
      email: '',
      message: '',
      errEmail: '',
      redeemcode: null
    }
  },
  created: function () {
    this.$nextTick(() => {
      if (document.referrer.indexOf('google.com') > 0) {
        let redeemcode = getCookie('redeemcodex')
        if (!redeemcode) {
          getRedeemCode().then((res) => {
            if (res.data.Result === 1) {
              this.redeemcode = res.data.data
              addCookie('redeemcodex', this.redeemcode, 30)
            }
          })
        } else {
          this.redeemcode = redeemcode
        }
      }
    })
  },
  methods: {
    swicthCheck () {
      this.ischeck = !this.ischeck
      let str = this.ischeck ? 'true' : 'false'
      this.$ga.event('checkbox', 'click', 'ReceiveUpdate_' + str)
    },
    addEmailInfo () {
      let isemail = this.checkEmail(this.email)
      if (!isemail) {
        this.errEmail = true
        this.$ga.event('sendBtn', 'click', 'Email_error')
        return false
      }
      if (!this.message || this.message.trim() === '') {
        this.$layer.dialog({
          content: 'Please leave a message so we can better communicate with you.',
          contentClass: 'className',
          btn: ['OK']
        })
        this.errEmail = false
        return false
      }
      this.$ga.event('sendBtn', 'click', 'SendMessageSuccess')
      this.$layer.loading()
      let isUpdate = this.check ? 1 : 0
      addContactInfo(this.email, this.message, isUpdate)
        .then(res => {
          this.$layer.close()
          if (res.data.Result === 1) {
            this.email = ''
            this.message = ''
            this.$layer.dialog({
              content: 'We received your message. Please stay tuned for news from TOP.',
              contentClass: 'className',
              btn: ['OK']
            })
          } else if (res.data.Result === 0 && res.data.errorCode === 10001) {
            this.$layer.dialog({
              content: 'Please leave a message so we can better communicate with you.',
              contentClass: 'className',
              btn: ['OK']
            })
            return false
          }
        })
        .catch(() => {
          this.$layer.close()
        })
    },
    checkEmail (s) {
      var regu =
                    /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/
      var re = new RegExp(regu)
      if (re.test(s)) {
        return true
      } else {
        return false
      }
    },
    clickTermsOfService () {
      this.$ga.event('bootBtn', 'click', 'TermsOfService')
    },
    clickPrivacyPolicy () {
      this.$ga.event('bootBtn', 'click', 'PrivacyPolicy')
    },
    clickIcon (type) {
      this.$ga.event('bootBtn', 'click', 'Click' + type + '')
    },
    clickMailTo () {
      this.$ga.event('emailLink', 'click', 'ClickMailTo')
    }
  },
  components: {

  }
}
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
    .p9 {
        height: 100%;
        width: 100%;
        background-image: url(img/9_bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        .p9_main {
            width: 60%;
            height: 65%;
            top: 8%;
            left: 50%;
            margin-left: -30%;
            position: absolute;
            .title {
                font-size: 3.5rem;
                color: #fff;
                text-align: left;
                font-weight: 600;
            }
            .area1 {
                width: 100%;
                height: 3.75rem;
                position: relative;
                margin-top: 2.5rem;
                .email_input {
                    height: 100%;
                    width: 65%;
                    border: none;
                    background-color: #3063c1;
                    border-radius: 0.375rem;
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                    color: #fff;
                    font-size: 1.5rem!important;
                    position: absolute;
                    left: 0;
                    outline: none;
                    box-sizing: border-box;
                }
                .error {
                    border: 1px solid red;
                }
                .email_input::-webkit-input-placeholder {
                    color: #fff;
                    font-size: 1.5rem!important;
                    opacity: 0.7;
                }
                .email_input:-moz-placeholder {
                    color: #fff;
                    font-size: 1.5rem!important;
                    opacity: 0.7;
                }
                .email_input::-moz-placeholder {
                    color: #fff;
                    font-size: 1.5rem!important;
                    opacity: 0.7;
                }
                .email_input:-ms-input-placeholder {
                    color: #fff;
                    font-size: 1.5rem!important;
                    opacity: 0.7;
                }
                .btn {
                    background-image: linear-gradient(90deg, #00eaff 0%, #0093ff 39%, #003cff 100%), linear-gradient( #88d4ff, #88d4ff);
                    height: 100%;
                    line-height: 3.75rem;
                    vertical-align: top;
                    width: 30%;
                    color: #fff;
                    text-align: center;
                    border-radius: 0.375rem;
                    display: inline-block;
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    font-size: 1.875rem;
                    font-weight: 600;
                }
            }
            .area2 {
                margin-top: 1.25rem;
                width: 100%;
                height: 62%;
                position: relative;
                .message_text {
                    background-color: #3063c1;
                    border-radius: 0.375rem;
                    height: 100%;
                    width: 65%;
                    border: none;
                    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
                    color: #fff;
                    font-size: 1.5rem;
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    resize: none;
                    outline: none;
                    font-family: Arial, Helvetica, sans-serif;
                }
                .message_text::-webkit-input-placeholder {
                    color: #fff;
                    font-size: 1.5rem;
                    font-family: Arial, Helvetica, sans-serif;
                    opacity: 0.7;
                }
                .message_text:-moz-placeholder {
                    color: #fff;
                    font-size: 1.5rem;
                    font-family: Arial, Helvetica, sans-serif;
                    opacity: 0.7;
                }
                .message_text::-moz-placeholder {
                    color: #fff;
                    font-size: 1.5rem;
                    font-family: Arial, Helvetica, sans-serif;
                    opacity: 0.7;
                }
                .message_text:-ms-input-placeholder {
                    color: #fff;
                    font-size: 1.5rem;
                    font-family: Arial, Helvetica, sans-serif;
                    opacity: 0.7;
                }
                .update_area {
                    height: 1.5625rem;
                    line-height: 1.5625rem;
                    width: 30%;
                    position: absolute;
                    top: 0;
                    right: 0;
                    text-align: center;
                    .checkbox {
                        display: inline-block;
                        height: 1.5625rem;
                        width: 1.5625rem;
                        background-size: 100%;
                        background-repeat: no-repeat;
                    }
                    .unsel {
                        background-image: url(img/9_box.png);
                    }
                    .sel {
                        background-image: url(img/9_box_sel.png);
                    }
                    .text {
                        color: #fff;
                        font-size: 1.5rem;
                        vertical-align: top;
                        display: inline-block;
                        cursor: default;
                        margin-left: 1.25rem
                    }
                }
                .wechat_area {
                    width: 30%;
                    position: absolute;
                    top: 15%;
                    right: 0;
                    .wechat_qr {
                        height: 10rem;
                        width: 10rem;
                        object-fit: fill;
                        margin: 0 auto;
                        display: block;
                    }
                    .text {
                        color: #fff;
                        font-size: 1.2rem;
                        margin-top: 0.625rem;
                        text-align: center;
                        display: block;
                    }
                }
                .email_info {
                    width: 30%;
                    position: absolute;
                    height: 0.875rem;
                    bottom: 0;
                    right: 0;
                    text-align: center;
                    color: #fff;
                    font-size: 1.25rem;
                    a {
                        color: #3ad7fe;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                .code {
                    position: absolute;
                    left: 0;
                    bottom: -2rem;
                    font-size: 1.125rem;
                    color: #fff;
                }
            }
        }
        .footer {
            height: 20%;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            border-top: 1px solid #203486;
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
                    background-image: url(img/9_logo.png);
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
                            background-image: url(img/9_icon_telegram.png);
                        }
                        .twitter {
                            background-image: url(img/9_icon_twitter.png);
                        }
                        .medium {
                            background-image: url(img/medium.png);
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
    }
</style>
