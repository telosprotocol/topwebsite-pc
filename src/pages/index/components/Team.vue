<template>
  <div class="team">
    <div class="team-area">
      <div class="team-title">Team</div>
      <ul class="team-list">
        <li class="ceo-item">
          <img src="@/assets/images/index/Steve.png" class="person ceo-person">
          <div class="name">Steve Wei</div>
          <div class="job">CEO</div>
          <div class="jobinfo">
            <p>WebEx Fellow &amp; Founding Employee</p>
            <p>Co-founder of Cenwave, Acquired by Huawei</p>
            <p>Co-founder of Dingtone</p>
          </div>
        </li>
        <li class="cmo-item">
          <img src="@/assets/images/index/Noah.png" class="person ceo-person">
          <div class="name">Noah Wang</div>
          <div class="job">CMO</div>
          <div class="jobinfo">
            <p>Managerial Positions at Starr, ICBC and PwC</p>
            <p>Yale MBA</p>
            <p>Member of Mensa International</p>
          </div>
        </li>
        <li class="chief-item">
          <img src="@/assets/images/index/Kelven.png" class="person">
          <div class="name">Kelven Yang</div>
          <div class="job">Chief Architect</div>
          <div class="jobinfo chief-jobinfo">
            <p>WebEx Chief Architect &amp; Founding Employee</p>
            <p>Founding Employee of cloud.com</p>
            <p>Co-founder of Dingtone</p>
          </div>
        </li>
        <li class="chief-item">
          <img src="@/assets/images/index/Peter.png" class="person">
          <div class="name">Peter Wei</div>
          <div class="job">VP of Engineering</div>
          <div class="jobinfo vp-jobinfo">
            <p>Founding Employee of WebEx</p>
            <p>Formal R&amp;D Director of Fortinet</p>
            <p>Formal Technology Architect in TrendMicro</p>
          </div>
        </li>
        <li>
          <img src="@/assets/images/index/Taylor.png" class="person">
          <div class="name">Taylor Wei</div>
          <div class="job">VP of Platform</div>
          <div class="jobinfo platform-jobinfo">
            <p>Cryptography Expert</p>
            <p>Expert in Secure Communication</p>
            <p>Co-founder of Dingtone</p>
          </div>
        </li>
      </ul>
      <div class="team-other">
        <swiper class="swiper swiper-no-swiping" :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList1" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList2" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList3" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList4" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList5" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList6" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList7" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList8" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList9" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList10" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList11" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList12" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList13" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="other-list">
              <li class="other-item" v-for="item in peopleList14" :key="item.name">
                <img :src="item.avatar" class="other-image">
                <div class="other-name">{{item.name}}</div>
                <div class="other-job">{{item.job}}</div>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="advisor-title">Advisors</div>
      <ul class="advisor-list">
        <li>
          <img src="@/assets/images/index/Eric.png" class="advisor-image">
          <div class="advisor-name">Eric Yuan</div>
          <div class="advisor-info">Founder &amp; CEO of Zoom Video Communications</div>
        </li>
        <li>
          <img src="@/assets/images/index/Mark.png" class="advisor-image">
          <div class="advisor-name">Mark Greene</div>
          <div class="advisor-info">Former CEO of FICO</div>
        </li>
        <li>
          <img src="@/assets/images/index/Roger.png" class="advisor-image">
          <div class="advisor-name">Roger Lim</div>
          <div class="advisor-info">Founding Partner of NGC</div>
        </li>
        <li>
          <img src="@/assets/images/index/Kevin.png" class="advisor-image">
          <div class="advisor-name">Kevin Hsu</div>
          <div class="advisor-info">Founder of BlockVC</div>
        </li>
      </ul>
      <div class="full-line"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'Team',
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        mousewheel: false,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      peopleList1: [
        {avatar: require('@/assets/images/otherTeam/1.png'), name: 'Tiger Liu', job: 'VP of Communication Technology'},
        {avatar: require('@/assets/images/otherTeam/2.png'), name: 'Edward Lu', job: 'Director of Security Technology'},
        {avatar: require('@/assets/images/otherTeam/3.png'), name: 'Kun Sun', job: 'Director of Infrastructure'},
        {avatar: require('@/assets/images/otherTeam/4.png'), name: 'Teresa Gao', job: 'Director of Marketing'},
        {avatar: require('@/assets/images/otherTeam/5.png'), name: 'Kelly Gu', job: 'Director of QA'}
      ],
      peopleList2: [
        {avatar: require('@/assets/images/otherTeam/6.png'), name: 'Ivan Ai', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/7.png'), name: 'Kael Ai', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/8.png'), name: 'Banning Cai', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/9.png'), name: 'Jarvis Cai', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/10.png'), name: 'Liang Chen', job: 'Senior Test Engineer'}
      ],
      peopleList3: [
        {avatar: require('@/assets/images/otherTeam/11.png'), name: 'Bowen Deng', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/12.png'), name: 'Joy Deng', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/13.png'), name: 'Anchorer Du', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/14.png'), name: 'Dexter Duan', job: 'Senior Product Manager'},
        {avatar: require('@/assets/images/otherTeam/15.png'), name: 'Jenny Fang', job: 'Community Manager'}
      ],
      peopleList4: [
        {avatar: require('@/assets/images/otherTeam/16.png'), name: 'Shawn Hao', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/17.png'), name: 'Andy Hong', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/18.png'), name: 'Nick Huang', job: 'Senior Product Manager'},
        {avatar: require('@/assets/images/otherTeam/19.png'), name: 'Martin Li', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/20.png'), name: 'Waiting Li', job: 'Community Manager'}
      ],
      peopleList5: [
        {avatar: require('@/assets/images/otherTeam/21.png'), name: 'Ashton Liu', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/22.png'), name: 'Doris Liu', job: 'Senior Product Designer'},
        {avatar: require('@/assets/images/otherTeam/23.png'), name: 'Lynch Lu', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/24.png'), name: 'Johnny Lv', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/25.png'), name: 'Locke Meng', job: 'Senior Product Manager'}
      ],
      peopleList6: [
        {avatar: require('@/assets/images/otherTeam/26.png'), name: 'Albert Pan', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/27.png'), name: 'Destiny Si', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/28.png'), name: 'Jasper Sun', job: 'Community Manager'},
        {avatar: require('@/assets/images/otherTeam/29.png'), name: 'Asher Wang', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/30.png'), name: 'Kenny Wang', job: 'Senior Developer'}
      ],
      peopleList7: [
        {avatar: require('@/assets/images/otherTeam/31.png'), name: 'Cara Wang', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/32.png'), name: 'Anita Weng', job: 'Senior Product Designer'},
        {avatar: require('@/assets/images/otherTeam/33.png'), name: 'Franco Wu', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/34.png'), name: 'Nova Wu', job: 'Community Manager'},
        {avatar: require('@/assets/images/otherTeam/35.png'), name: 'Shane Wu', job: 'Community Manager'}
      ],
      peopleList8: [
        {avatar: require('@/assets/images/otherTeam/36.png'), name: 'Tom Wu', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/37.png'), name: 'Bright Wu', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/38.png'), name: 'Bear Xiong', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/39.png'), name: 'Bill Yang', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/40.png'), name: 'Journey Yu', job: 'Senior Developer'}
      ],
      peopleList9: [
        {avatar: require('@/assets/images/otherTeam/41.png'), name: 'Aries Zhang', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/42.png'), name: 'Justin Zhang', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/43.png'), name: 'Kris Zhang', job: 'Senior Product Designer'},
        {avatar: require('@/assets/images/otherTeam/44.png'), name: 'Faker Zhao', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/45.png'), name: 'Sky Zhao', job: 'Senior Operation Engineer'}
      ],
      peopleList10: [
        {avatar: require('@/assets/images/otherTeam/46.png'), name: 'Tiny Zhao', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/47.png'), name: 'Harry Zhong', job: 'Senior Product Designer'},
        {avatar: require('@/assets/images/otherTeam/48.png'), name: 'Velen Zhou', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/49.png'), name: 'Tim Zhou', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/50.png'), name: 'Morgan Li', job: 'Senior Developer'}
      ],
      peopleList11: [
        {avatar: require('@/assets/images/otherTeam/51.png'), name: 'Dacheng Sheng', job: 'Senior Product Manager'},
        {avatar: require('@/assets/images/otherTeam/52.png'), name: 'Feng Wang', job: 'Senior Developer'},
        {avatar: require('@/assets/images/otherTeam/53.png'), name: 'Lauren Feng', job: 'Social Media Marketing'},
        {avatar: require('@/assets/images/otherTeam/Roc liu@2x.png'), name: 'Roc Liu', job: 'Senior Product Manager'},
        {avatar: require('@/assets/images/otherTeam/Angelina huang@2x.png'), name: 'Angelina Huang', job: 'Senior Test Engineer'}
      ],
      peopleList12: [
        {avatar: require('@/assets/images/otherTeam/Caroline zuo@2x.png'), name: 'Caroline Zuo', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/Neville Chen@2x.png'), name: 'Neville Chen', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/Hallie Wei@2x.png'), name: 'Hallie Wei', job: 'Senior Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/Spring yan@2x.png'), name: 'Spring Yan', job: 'Test Engineer'},
        {avatar: require('@/assets/images/otherTeam/Ariel.jin@2x.png'), name: 'Ariel Jin', job: 'Test Engineer'}
      ],
      peopleList13: [
        {avatar: require('@/assets/images/otherTeam/Tory xu@2x.png'), name: 'Tory Xu', job: 'Senior iOS Develope'},
        {avatar: require('@/assets/images/otherTeam/Seal.wu@2x.png'), name: 'Seal Wu', job: 'Senior Android Developer'},
        {avatar: require('@/assets/images/otherTeam/Section wang@2x.png'), name: 'Section Wang', job: 'Senior iOS Developer'},
        {avatar: require('@/assets/images/otherTeam/Bruce liu@2x.png'), name: 'Bruce Liu', job: 'Senior Web Developer'},
        {avatar: require('@/assets/images/otherTeam/Esther Zong@2x.png'), name: 'Esther Zong', job: 'Community Manager'}
      ],
      peopleList14: [
        {avatar: require('@/assets/images/otherTeam/Ernest wang@2x.png'), name: 'Ernest Wang', job: 'Senior C++ Developer'},
        {avatar: require('@/assets/images/otherTeam/Jimmy xu@2x.png'), name: 'Jimmy Xu', job: 'Senior C++ Developer'},
        {avatar: require('@/assets/images/otherTeam/Hank Chen@2x.png'), name: 'Hank Chen', job: 'Senior C++ Developer'},
        {avatar: require('@/assets/images/otherTeam/Wing Liu@2x.png'), name: 'Wing Liu', job: 'Test Engineer'}
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  .team{
    width:100%;
    background:rgba(4,17,38,1);
    .team-area{
      width: 1280px;
      margin:0 auto;
      padding-top:162px;
      .team-title{
        margin:0 auto;
        text-align: center;
        margin-bottom: 40px;
        width:148px;
        height:63px;
        font-size:60px;
        font-family:Cera Pro;
        font-weight:400;
        line-height:63px;
        color:rgba(255,255,255,1);
      }
      .team-list{
        width:100%;
        margin:0 auto;
        overflow: hidden;
        li{
          float: left;
          width:33.3%;
          .person{
            display: block;
            margin:0 auto;
            width:138px;
            height:138px;
          }
          .name{
            margin:0 auto;
            text-align:center;
            margin-top:14px;
            width:160px;
            height:28px;
            font-size:26px;
            font-family:Cera Pro;
            font-weight:400;
            line-height:28px;
            color:rgba(255,255,255,1);
          }
          .job{
            margin:0 auto;
            text-align:center;
            margin-top:13px;
            width:175px;
            height:21px;
            font-size:20px;
            font-family:Cera Pro;
            font-weight:400;
            line-height:21px;
            color:rgba(255,255,255,1);
          }
          .jobinfo{
            margin:0 auto;
            text-align:center;
            margin-top:9px;
            width:340px;
            height:104px;
            font-size:16px;
            font-family:Arial;
            font-weight:400;
            line-height:20px;
            color:rgba(138,159,175,1);
          }
        }
        .ceo-item{
          width:36%;
          padding-left:14%;
        }
        .cmo-item{
          width:34%;
          padding-right:16%
        }
      }
      .team-other{
        width:100%;
        margin:0 auto;
        margin-top:80px;
        overflow: hidden;
        .other-list{
          width: 90%;
          overflow: hidden;
          margin-left:5%;
          display: inline-block;
          height:330px;
          .other-item{
            width: 20%;
            float: left;
            margin:0 auto;
            .other-image{
              display: block;
              margin:0 auto;
              width:138px;
              height:138px;
            }
            .other-name{
              text-align:center;
              margin: 0 auto;
              margin-top:33px;
              width:172px;
              height:24px;
              font-size:22px;
              font-family:Cera Pro;
              font-weight:400;
              line-height:24px;
              color:rgba(255,255,255,1);
            }
            .other-job{
              margin: 0 auto;
              margin-top:7px;
              text-align:center;
              width:204px;
              height:119px;
              font-size:18px;
              font-family:Arial;
              font-weight:400;
              line-height:21px;
              color:rgba(138,159,175,1);
            }
          }
        }
      }
      .swiper-button-next{
        background-image:url('../../../assets/images/otherTeam/nextarrow.png');
        background-size:20px 76px;
        width: 20px;
        height: 76px;
        top:32%;
        outline: none;
      }
      .swiper-button-prev{
        background-image:url('../../../assets/images/otherTeam/prevarrow.png');
        background-size:20px 76px;
        width: 20px;
        height: 76px;
        top:32%;
        outline: none;
      }
      .swiper-pagination-bullets{
        bottom:45px;
      }
      .swiper-pagination-bullets /deep/ .swiper-pagination-bullet{
        background:#8A9FAF;
      }
     .swiper-pagination-bullets /deep/ .swiper-pagination-bullet-active{
       background: #007aff;
     }
      .advisor-title{
        width:100%;
        text-align:center;
        margin-top:34px;
        margin-bottom: 60px;
        height:63px;
        font-size:60px;
        font-family:Cera Pro;
        font-weight:400;
        line-height:63px;
        color:rgba(255,255,255,1);
      }
      .advisor-list{
        width:100%;
        margin:0 auto;
        overflow: hidden;
        li{
          width:25%;
          float: left;
          .advisor-image{
            display: block;
            margin:0 auto;
            width:138px;
            height:138px;
          }
          .advisor-name{
            width:100%;
            text-align:center;
            margin-top:33px;
            height:24px;
            font-size:22px;
            font-family:Cera Pro;
            font-weight:400;
            line-height:24px;
            color:rgba(255,255,255,1);
          }
          .advisor-info{
            text-align:center;
            margin: 0 auto;
            margin-top:5px;
            width:260px;
            height:119px;
            font-size:18px;
            font-family:Arial;
            font-weight:400;
            line-height:21px;
            color:rgba(138,159,175,1);
          }
        }
      }
      .full-line{
        width:1280px;
        height:2px;
        background:linear-gradient(117deg,rgba(119,187,211,0) 0%,rgba(119,187,211,1) 49%,rgba(119,187,211,0) 100%);
        margin:0 auto;
        margin-top:116px;
      }
    }
  }
</style>
