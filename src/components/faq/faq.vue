<template>
  <div class="faq" ref="wrapper">
    <div class="bg_1"></div>
    <!-- <div class="bg_2"></div> -->
    <div class="big_title">Frequently Asked Questions</div>
    <div class="container">
      <div class="left_title">
        <ul>
          <li :class="{active:selectIndex===1}" @click="selectItem(1)">I.Project Overview</li>
          <li :class="{active:selectIndex===2}" @click="selectItem(2)">II. Technical Details</li>
          <li :class="{active:selectIndex===3}" @click="selectItem(3)">III. Tokens & How to Earn Them</li>
          <li :class="{active:selectIndex===4}" @click="selectItem(4)">IV. For Developers</li>
        </ul>
      </div>
      <div class="right_content">
        <div class="content_item" id="item1" ref="item1">
          <div class="title">I.Project Overview</div>
          <div class="question_item">
            <div class="question">Q1: What is TOP?</div>
            <span class="answer">The TOP project has two ambitious missions: (1) Building a decentralized communication network infrastructure.
              (2) Developing a high- performance public blockchain platform that can handle a large volume of transactions
              for the communication network.</span>
            <span class="answer">TOP Network is a decentralized open communication network providing cloud communication services such as messaging,
              calling, video, VPN, CDN, IoT data sharing and more. Enabled by blockchain 4.0 technology, TOP Network is secure,
              low cost and unstoppable.</span>
            <span class="answer">TOP Chain is a high-performance DAG-based blockchain platform designed for real-world businesses. With its three-layered
              ledgers, two-layered sharding, instant transaction, and zero transaction fees, TOP Chain can process any volume
              and any size of real-world business on blockchain.</span>
          </div>
          <div class="question_item">
            <div class="question">Q2: Why did the team want to build a public blockchain platform?</div>
            <span class="answer">We didn’t want to build a public blockchain platform, we had to.</span>
            <span class="answer">When we started the project last year, we had 40 million users scheduled to move to TOP Network. With this existing
              user base, TOP Network will have over one hundred thousand transactions per second from day one. We tried to
              find an existing public blockchain platform as a ledger for TOP Network. But it turned out that none of those
              blockchain platforms can handle such a large volume of transactions. In the end, we had to make a hard decision
              to build our own ledger – a general-purpose public blockchain platform that can handle any volume and any size
              of real-word business on blockchain.</span>
          </div>
          <div class="question_item">
            <div class="question">Q3: What is the current status of TOP?</div>
            <span class="answer">TOP was founded in late 2017. We’ve been on stealth mode since then, so there’s not much information about us.</span>
            <span class="answer">We’ve been putting a lot of effort into technology development and we already have a private testnet. The real-time
              performance of our testnet is displayed on our website
              <a href="http://www.topnetwork.org" target="_blank">(http://www.topnetwork.org)</a>. Our testnet has already reached 2000 TPS in a single shard, much faster than
              most public blockchains on the market. TOP will be launched later this year.</span>
            <span class="answer">We have closed $8 million US in early investment from prestigious investors, and we’ll start a crowd sale for
              our tokens very soon.</span>
          </div>
          <div class="question_item">
            <div class="question">Q4: Is the whitepaper for the project available?</div>
            <span class="answer">The white paper is going through the legal opinion process. It will be available on our website very soon. Stay
              tuned! We’ll update here when the release date is confirmed. </span>
            <span class="answer">Please check out the executive summary from our website, which has all the key information.</span>
          </div>
          <div class="question_item">
            <div class="question">Q5: Who have invested in your project so far?</div>
            <span class="answer">We have closed $8 million US in early investment from prestigious institution investors, including DHVC, Fenbushi
              Capital, NEO Global Capital, LD Capital and more.</span>
          </div>
          <div class="question_item">
            <div class="question">Q6: How can I invest in TOP Network?</div>
            <span class="answer">If you’re an institution investor, you can participate in our private sale now. Email
              <a href="mailto:contact@topnetwork.org">contact@topnetwork.org</a> for more details.</span>
            <span class="answer">For individual investors, please participate in our public token sale in a few weeks. KYC will be required.</span>
          </div>
          <div class="question_item">
            <div class="question">Q7: Where can I get information about the team?</div>
            <span class="answer">You can find more information about Steve, the CEO and co-founder of TOP Network, on
              <a href="https://www.linkedin.com/in/stevenwee/" target="_blank">his LinkedIn page</a>.</span>
            <span class="answer">And more team members can be found on our
              <a href="https://www.linkedin.com/company/topnetwork/" target="_blank">company LinkedIn page</a>.</span>
          </div>
        </div>
        <div class="content_item" id="item2" ref="item2">
          <div class="title">II. Technical Details</div>
          <div class="question_item">
            <div class="question">Q8. Does TOP Network have an MVP?</div>
            <span class="answer">More than an MVP! We already have a testnet running. You can see the performance of our private testnet on our
              <a href="https://www.topnetwork.org/" target="_blank">official website</a>. We have already achieved 2000 TPS in a single shard.</span>
            <img src="static/img_faq.png">
            <span class="answer">Also, our demo DApp—BitVPN is in development and will be released after TOP Network is launched.</span>
            <span class="answer">Our existing VPN app, SkyVPN, has gained over 10 million users in less than 10 months since it was launched.
              SkyVPN will be moved to TOP Network and it will bring a huge volume of business to TOP.</span>
          </div>
          <div class="question_item">
            <div class="question">Q9. So TOP Network is about building a VPN?</div>
            <span class="answer">BitVPN is only a demo app that is being built on TOP network. TOP Network is a lot more than a VPN app. We are
              building a public communication network infrastructure that can provide any kind of communication services,
              such as messaging, calling, CDN, streaming, storage, IoT data sharing and more. VPN is only one of the communication
              services that TOP provides.</span>
          </div>
          <div class="question_item">
            <div class="question">Q10. How will you move your 45 million users to TOP?</div>
            <span class="answer">Several years ago, we designed a distributed network layer before we developed our communication apps - Dingtone,
              CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP Network.
              That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP Network. In fact, the users won’t
              even notice the migration process.</span>
            <span class="answer">When TOP Network is launched, 45 million users will be immediately available on TOP.</span>
          </div>
        </div>
        <div class="content_item" id="item3" ref="item3">
          <div class="title">III. Tokens & How to Earn Them</div>
          <div class="question_item">
            <div class="question">Q11. Is there going to be a token mine? And how do we become miners?</div>
            <span class="answer">There will be TOP tokens available for mining after TOP Network is launched. For example, SkyVPN users would
              possibly become miners of TOP tokens after the launching of TOP Network later this year. Any user can contribute
              his device and bandwidth into TOP Network and receive token awards based on the contribution they make.</span>
          </div>
          <div class="question_item">
            <div class="question">Q12. How can I convert tokens to cash after I get tokens from mining?</div>
            <span class="answer">Once TOP tokens are listed on a cryptocurrency exchange, you can sell the tokens for cash.</span>
          </div>
          <div class="question_item">
            <div class="question">Q13. Will you offer a bounty or proof-of-care program?</div>
            <span class="answer">Yes, we will soon announce a bounty program. Please stay tuned.</span>
          </div>
          <div class="question_item">
            <div class="question">Q14. Will there be a crowdsale?</div>
            <span class="answer">Yes, and we will announce the date of the crowdsale soon. Please stay tuned.</span>
          </div>
        </div>
        <div class="content_item" id="item4" ref="item4">
          <div class="title">IV. For Developers</div>
          <div class="question_item">
            <div class="question">Q15. I’m trying to develop a messaging app on my own. How can I make use of your project?</div>
            <span class="answer">TOP Network provides cloud communication services such as messaging, calling, video, VPN, CDN, IoT data sharing
              and more. Any apps can tap into this network through the API and SDK we provide.</span>
            <span class="answer">If you are building a messaging app, TOP is the perfect choice for you. With TOP, you no longer need to build
              your own communication stack, deploy servers, and maintain the network. With a few lines of code, you will
              have a powerful messaging app.</span>
          </div>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="footer">
      <div class="bg_2"></div>
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
          <div class="text">
            <a @click="clickTermsOfService()">Terms of Service</a> |
            <a @click="clickPrivacyPolicy()">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'

export default {
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
      element.scrollIntoView({
        behavior: 'smooth'
      })
    },
    clickTermsOfService () {
      this.$ga.event('bootBtn_faq', 'click', 'TermsOfService')
    },
    clickPrivacyPolicy () {
      this.$ga.event('bootBtn_faq', 'click', 'PrivacyPolicy')
    },
    clickIcon (type) {
      this.$ga.event('bootBtn_faq', 'click', 'Click' + type + '')
    }
  },
  components: {}
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
  .faq {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0;
    margin: 0;
    background-color: #0d1458;
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    font-family: PingFangSC-Regular, Verdana, Geneva, Tahoma, sans-serif;
    .bg_1 {
      width: 100%;
      height: 57rem;
      background-image: url(img/bg1_faq.png);
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      left: 0;
      top: 5rem;
      z-index: -1;
    }
    .bg_2 {
      width: 100%;
      height: 25rem;
      background-image: url(img/bg2_faq.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 100%;
      position: absolute;
      left: 0;
      bottom: 11rem;
      z-index: -1;
    }
    .big_title {
      text-align: center;
      font-size: 3.5rem;
      color: rgba(255, 255, 255, 1);
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      margin-top: 5rem;
      font-weight: 600;
    }
    .container {
      width: 80%;
      margin: 0 auto;
      margin-top: 8rem;
      font-size: 0;
      .left_title {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        width: 25%;
        float: left;
        height: 10rem;
        ul {
          padding: 0;
          margin: 0;
          height: 100%;
          li {
            text-align: left;
            list-style: none;
            height: 1.2rem;
            line-height: 1.2rem;
            margin-bottom: 1.6rem;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.3);
            &:hover {
              color: rgba(255, 255, 255, 1);
            }
          }
          .active {
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .right_content {
        display: blokck;
        font-size: 1rem;
        width: 75%;
        margin-left: 25%;
        .content_item {
          background-color: #1E266E;
          width: 100%;
          padding-left: 4rem;
          padding-right: 4rem;
          text-align: left;
          box-sizing: border-box;
          margin-bottom: 5rem;
          .title {
            font-size: 1.5rem;
            padding: 1.5rem 0 0.5rem 0;
            text-align: left;
            box-sizing: border-box;
            font-weight: 600;
          }
          .question_item {
            width: 100%;
            border-bottom: 1px solid rgba($color: #fff, $alpha: 0.15);
            .question {
              font-size: 1.13rem;
              font-weight: 600;
              padding: 1.5rem 0 1.375rem 0;
              text-align: left;
            }
            .answer {
              font-size: 0.9375rem;
              color: rgba(255, 255, 255, 0.7);
              margin-bottom: 1.375rem;
              display: inline-block;
              a {
                color: #F9DD4B;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            img {
              width: 34rem;
              height: 17rem;
              display: block;
              margin-bottom: 2rem;
            }
          }
          .question_item:last-child {
            border: none;
          }
        }
      }
    }
    .footer {
      height: 11rem;
      width: 100%;
      position: relative;
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
