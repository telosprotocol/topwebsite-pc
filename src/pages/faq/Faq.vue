<template>
  <div class="faq">
    <navbar/>
    <div class="faqinfo">
      <div class="title-area">
        <div class="faqtitle">Frequently Asked Questions</div>
      </div>
      <div class="info-area">
        <div class="info-item" ref="infoList">
          <ul class="info-list" >
            <li class=" endmagrintop" :class="{active:selectIndex===1}" @click="selectItem(1)">I. Project Overview</li>
            <li  :class="{active:selectIndex===2}" @click="selectItem(2)">II. Technical Details</li>
            <li  :class="{active:selectIndex===3}" @click="selectItem(3)">III. Tokens &amp; How to Earn Them</li>
            <li  :class="{active:selectIndex===4}" @click="selectItem(4)">IV. For Developers</li>
          </ul>
        </div>
        <div class="info-detail">
          <div class="one" id="item1">
            <div class="info-detail-one">
              <div class="name">I. Project Overview</div>
              <div class="question">Q1: What is TOP?</div>
              <div class="detail">
                <p class="line-one">TOP Network is a decentralized open communication network that provides cloud communication services on the blockchain. TOP offers secure, low-cost services such as messaging, calling, video, VPN, CDN, IoT data sharing and more.</p>
                <p class="line-one">TOP Network is also a high-performance public blockchain platform designed to handle real-world business of any size or volume. Powered by innovations including three-layer network, two-layer sharding, two-layer lattice DAG and PBFT-DPoS*, TOP can process several hundred thousand transactions per second on the blockchain.</p>
                <p class="line-one">The long-term mission of TOP Network is to build a public blockchain infrastructure for all Dapps. Our world-class team of over 100 developers is striving for this goal.</p>
                <p>TOP Network originated from the common underlying network layer of Dingtone, CoverMe and SkyVPN, three communication apps built by the TOP team before the blockchain project. These apps, having attracted over 50 million users in total, will be ported to TOP Network upon the launch of TOP and generate huge volumes of transactions in the TOP ecosystem.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question question-handle">Q2: Why did the team want to build a public blockchain platform?</div>
              <div class="detail">
                <p class="line-one">We didn't intend to build a public blockchain platform, but we soon realized we had to.</p>
                <p>When we started the project last year, we had 40 million users to move onto TOP Network, which means TOP Network needs to process over one hundred thousand transactions per second when it starts to operate. We tried to find an existing public blockchain platform to serve as a ledger for TOP Network, but it turned out that no blockchain platform could reach such a high TPS. In the end, we had no choice but decided to build our own ledger – a general-purpose public blockchain platform that can handle real-world business of any size or volume.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question question-handle">Q3: What is the current status of TOP?</div>
              <div class="detail">
                <p>TOP was founded in late 2017. We've made significant progress since we came out of stealth mode in August 2018. We've not only advanced in technical development, but also investment, community operations and marketing. We recently released our whitepaper, Testnet and various bounty activities. Stay tuned for more updates from TOP!</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question question-handle">Q4: Is the whitepaper for the project available?</div>
              <div class="detail">
                <p>The whitepaper for TOP Network is available! Click “Whitepaper” on our website to get access to our whitepaper.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question question-handle">Q5: Who have invested in your project so far?</div>
              <div class="detail">
                <p>We have closed $8 million in early investment from prestigious institutional investors, including Fenbushi Capital, Danhua Capital (DHVC), NEO Global Capital, LD Capital and more.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question question-handle">Q6: How can I invest in TOP Network?</div>
              <div class="detail">
                <p>If you're an institutional investor, you can participate in our private sale now. Email to <a href="mailto:contact@topnetwork.org">contact@topnetwork.org</a> for more details. For individual investors, please participate in our public token sale in a few weeks. KYC (Know Your Customer) will be required.</p>
              </div>
            </div>
            <div class="info-detail-one noneborline">
              <div class="question question-handle">Q7: Where can I get information about the team?</div>
              <div class="detail">
                <p>You can find more information about Steve, CEO and co-founder of TOP Network, on <a href="https://www.linkedin.com/in/stevenwee/" target="_blank">his LinkedIn page</a>. You can find more information about our team members on our<a href="https://www.linkedin.com/company/topnetwork" target="_blank">company LinkedIn page.</a></p>
              </div>
            </div>
          </div>
          <div class="one" id="item2">
            <div class="info-detail-one">
              <div class="name">II. Technical Details</div>
              <div class="question">Q8. Does TOP Network have a MVP?</div>
              <div class="detail">
                <p>More than a MVP! We have already released our Testnet and achieved 2,000 TPS in a single shard. You can check out the performance of our private Testnet on <a href="https://www.topnetwork.org/">our official website</a>. Also, our demo DApp—BitVPN is under development and will be ready for its release soon. Our existing VPN app, SkyVPN, has gained over 10 million users in less than 10 months since its launch. SkyVPN will be ported onto TOP Network and will bring a huge volume of business to the TOP ecosystem.</p>
                <img src="@/assets/images/childrenPage/time.png" class="time">
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question">Q9. So is TOP Network about building a VPN?</div>
              <div class="detail">
                <p>BitVPN is only a demo app that is being built on TOP network. TOP Network is much more than a VPN app. We are building a public communication network infrastructure that can provide any kind of communication services, such as messaging, calling, CDN, streaming, storage, IoT data sharing and more. VPN is only one of the communication services that TOP provides.</p>
              </div>
            </div>
            <div class="info-detail-one noneborline">
              <div class="question">Q10. How will you move your 50 million users to TOP?</div>
              <div class="detail">
                <p>Several years ago, we designed a distributed network layer before we developed our communication apps - Dingtone, CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP Network. That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP Network. In fact, the users won't even notice the migration process. Over 50 million users will be immediately available on TOP Network once it's launched.</p>
              </div>
            </div>
          </div>
          <div class="one" id="item3">
            <div class="info-detail-one">
              <div class="name">III. Tokens &amp; How to Earn Them</div>
              <div class="question">Q11. Is there going to be a token mining? And how do we become miners?</div>
              <div class="detail">
                <p>TOP tokens will be available for mining after TOP Network is launched. For example, SkyVPN users would possibly become miners of TOP tokens after the launch of TOP Network later this year. Any user can contribute his device and bandwidth to TOP Network and receive tokens based on the contribution they make.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question">Q12. How can I convert TOP tokens to cash after I get tokens from mining?</div>
              <div class="detail">
                <p>Once TOP tokens are listed on a cryptocurrency exchange, you can sell the tokens for cash.</p>
              </div>
            </div>
            <div class="info-detail-one">
              <div class="question">Q13. Will you offer a bounty or proof-of-care program?</div>
              <div class="detail">
                <p>Yes, we have kicked off an array of TOP Network bounty programs! You can find them on our bounty bot: <a href="https://t.me/TOPNetworkBot" target="_blank">https://t.me/TOPNetworkBot</a>.</p>
              </div>
            </div>
            <div class="info-detail-one noneborline">
              <div class="question">Q14. Will there be a crowdsale?</div>
              <div class="detail">
                <p class="nolineheight">Yes, and we will announce the date of the crowdsale soon. Please stay tuned.</p>
              </div>
            </div>
          </div>
          <div class="one" id="item4">
            <div class="info-detail-one noneborline">
              <div class="name">IV. For Developers</div>
              <div class="question">Q15. I'm trying to develop a messaging app on my own. How can I make use of your project?</div>
              <div class="detail">
                <p>TOP Network provides cloud communication services such as messaging, calling, video, VPN, CDN, IoT data sharing and more. Any app can tap into this network through the API and SDK we provide. If you are building a messaging app, TOP is the perfect choice for you. With TOP, you no longer need to build your own communication stack, deploy servers, and maintain the network. With a few lines of code, you will have a powerful messaging app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/index/telegram.png" class="telegramImage" @click="openTelegram">
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/components/common/vFooter'
export default {
  name: 'Faq',
  components: {
    Navbar,
    vFooter
  },
  data () {
    return {
      selectIndex: 1
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
      this.$ga.event('bootBtn_faq', 'click', 'Telegram')
    },
    selectItem (i) {
      this.selectIndex = i
      // if (i === 1) {
      //   return
      // }
      var element = document.getElementById('item' + i + '')
      element.scrollIntoView()
    },
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 300) {
        if (document.documentElement.scrollTop >= 1799 && document.documentElement.scrollTop < 2547) {
          this.$refs.infoList.style.position = 'fixed'
          this.$refs.infoList.style.top = 46 + 'px'
          this.selectIndex = 2
        } else if (document.documentElement.scrollTop >= 2547 && document.documentElement.scrollTop < 2873) {
          this.$refs.infoList.style.position = 'fixed'
          this.$refs.infoList.style.top = 46 + 'px'
          this.selectIndex = 3
        } else if (document.documentElement.scrollTop >= 2873) {
          this.$refs.infoList.style.position = 'fixed'
          this.$refs.infoList.style.top = 46 + 'px'
          this.selectIndex = 4
        } else if (document.documentElement.scrollTop >= 360 && document.documentElement.scrollTop < 1799) {
          this.$refs.infoList.style.position = 'fixed'
          this.$refs.infoList.style.top = 46 + 'px'
          this.selectIndex = 1
        } else {
          // this.$refs.infoList.style.position = 'fixed'
          this.$refs.infoList.style.top = 46 + 'px'
          this.selectIndex = 1
        }
      } else {
        this.$refs.infoList.style.position = ''
        this.$refs.infoList.style.top = 390 + 'px'
        this.selectIndex = 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .faqinfo{
    width: 100%;
    background: #041126;
    padding-bottom: 167px;
    .title-area{
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.2);
      background: url('../../assets/images/childrenPage/title.png');
      background-size: cover;
      background-position: center 0;
      padding: 81px 0 233px;
      .faqtitle{
        width: 1280px;
        margin:0 auto;
        text-align: center;
        font-size:72px;
        font-family:Cera Pro;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
    }
    .info-area{
      width:1100px;
      margin: 0 auto;
      margin-top:-142px;
      background: #111E31;
      padding: 44px 35px 0px 40px;
      box-sizing: border-box;
      overflow: hidden;
      .info-item{
        width:314px;
        height: 100%;
        // float: left;
        transform: translate(0,0);
        // position: fixed;
        // top:390px;
        // left: 290px;
        .info-list{
          width: 100%;
          height: 100%;
          position: fixed;
          left:0px;
          top:5px;
          li{
            width:100%;
            text-align:left;
            font-size:20px;
            font-family:Cera Pro;
            font-weight:500;
            color:rgba(255,255,255,.3);
            margin-top:14px;
            cursor: pointer;
          }
          .active {
            color: rgba(255, 255, 255, 1);
          }
          .endmagrintop{
            margin-top:0;
          }
        }
      }
      .info-detail{
        float: left;
        width:698px;
        margin-left:315px;
        .one{
          border-left:1px solid rgba(255,255,255,0.7);
          padding-left:25px;
          box-sizing: border-box;
          margin-bottom: 53px;
          .info-detail-one{
            text-align: left;
            width: 100%;
            padding-bottom:25px;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            .name{
              width:100%;
              font-size:26px;
              font-family:Cera Pro;
              font-weight:900;
              color:rgba(255,255,255,1);
            }
            .question-handle{
              margin-top:25px;
            }
            .question{
              width:100%;
              font-size:20px;
              font-family:Cera Pro;
              font-weight:500;
              color:rgba(255,255,255,1);
              margin:20px 0 14px 0;
            }
            .detail{
              width: 100%;
              font-size:16px;
              font-family:Cera Pro;
              font-weight:300;
              line-height:23px;
              color:rgba(255,255,255,0.7);
              .line-one{
                margin-bottom:25px;
              }
              .line-two{
                margin-bottom: 86px;
              }
              .time{
                width: 100%;
                margin-top:25px;
              }
              a{
                color:#f9dd4b;
                cursor: pointer;
                display: inline-block;
                text-decoration: underline;
              }
            }
          }
          .noneborline{
            border-bottom:0px;
            padding-bottom: 0px;
            .nolineheight{
              line-height: 12px;
            }
          }
        }
      }
    }
  }
  .telegramImage{
    position: fixed;
    right:40px;
    bottom:40px;
    width: 60px;
    height: 60px;
    display: block;
    cursor: pointer;
  }
</style>
