<template>
  <div class="p8">
    <div class="p8_team">
      <div class="title">Team</div>
      <div class="team_area">
        <div class="row1">
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_steve.png">
            </span>
            <span class="name">Steve Wei</span>
            <span class="job">CEO</span>
            <span class="info">WebEx Fellow &amp; Founding Employee
              <br> Co-founder of Cenwave, acquired by Huawei
              <br> Co-founder of Dingtone</span>
          </div>
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_noah.png">
            </span>
            <span class="name">Noah Wang</span>
            <span class="job">CMO</span>
            <span class="info">Managerial Positions at Starr, ICBC and PwC
                <br>Yale MBA
                <br>Member of Mensa International
            </span>
          </div>
        </div>
        <div class="row2">
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_yang.png">
            </span>
            <span class="name">Kelven Yang</span>
            <span class="job">Chief Architect</span>
            <span class="info">WebEx Chief Architect &amp; Founding Employee
              <br> Founding Employee of cloud.com
              <br> Co-founder of Dingtone</span>
          </div>
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_peter.png">
            </span>
            <span class="name">Peter Wei</span>
            <span class="job">VP of Engineering</span>
            <span class="info">Founding Employee of WebEx
              <br> Formal R&D Director of Fortinet
              <br> Formal Technology Architect in TrendMicro</span>
          </div>
          <div class="item">
            <span class="icon">
                <img src="./img/8_team_taylor.png">
            </span>
            <span class="name">Taylor Wei</span>
            <span class="job">VP of Platform</span>
            <span class="info">Cryptography Expert
              <br> Expert in Secure Communication
              <br> Co-founder of Dingtone</span>
          </div>
        </div>
      </div>
      <div class="team_other">
        <swiper class="swiper swiper-no-swiping" :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <div v-for="item in peopleList1" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div v-for="item in peopleList2" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div v-for="item in peopleList3" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div v-for="item in peopleList4" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div v-for="item in peopleList5" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div v-for="item in peopleList6" :key="item.name" class="staff_item">
              <div class="border"></div>
              <div class="icon" :class="item.avatar"></div>
              <div class="name">{{item.name}}</div>
              <div class="job">{{item.job}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <div class="p8_investors">
      <div class="title">Investors</div>
          <div class="investor_area">
              <div class="item">
                  <img src="./img/8_i_fenbushi.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_dhvc.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_genesis.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_ld.png">
              </div>
              <div class="item">
                  <img src="./img/NGC.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_roots.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_vancoin.png">
              </div>
              <div class="item">
                  <img src="./img/capital.png">
              </div>
              <div class="item">
                  <img src="./img/Fund.png">
              </div>
              <div class="item">
                  <img src="./img/ORIGIN.png">
              </div>
              <div class="item">
                  <img src="./img/MEK.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_jubilee.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_dao.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_zhuimeng.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_teec.png">
              </div>
              <div class="item">
                  <img src="./img/8_i_starwin.png">
              </div>
          </div>
    </div>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'

export default {
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
          el: '.swiper-pagination'
        }
      },
      peopleList1: [
        {avatar: 'icon-Tiger', name: 'Tiger Liu', job: 'VP of Communication Technology'},
        {avatar: 'icon-Edward', name: 'Edward Lu', job: 'Director of Security Technology'},
        {avatar: 'icon-Kun', name: 'Kun Sun', job: 'Director of Infrastructure'},
        {avatar: 'icon-Teresa', name: 'Teresa Gao', job: 'Director of Marketing'},
        {avatar: 'icon-Kelly', name: 'Kelly Gu', job: 'Director of QA'},
        {avatar: 'icon-Ivan', name: 'Ivan Ai', job: 'Senior Developer'},
        {avatar: 'icon-Kael', name: 'Kael Ai', job: 'Senior Developer'},
        {avatar: 'icon-Banning', name: 'Banning Cai', job: 'Senior Developer'},
        {avatar: 'icon-Jarvis', name: 'Jarvis Cai', job: 'Senior Developer'},
        {avatar: 'icon-Liang', name: 'Liang Chen', job: 'Senior Test Engineer'}
      ],
      peopleList2: [
        {avatar: 'icon-Bowen', name: 'Bowen Deng', job: 'Senior Developer'},
        {avatar: 'icon-Joy', name: 'Joy Deng', job: 'Senior Developer'},
        {avatar: 'icon-Anchorer', name: 'Anchorer Du', job: 'Senior Developer'},
        {avatar: 'icon-Dexter', name: 'Dexter Duan', job: 'Senior Product Manager'},
        {avatar: 'icon-Jenny', name: 'Jenny Fang', job: 'Community Manager'},
        {avatar: 'icon-Shawn', name: 'Shawn Hao', job: 'Senior Developer'},
        {avatar: 'icon-Andy', name: 'Andy Hong', job: 'Senior Developer'},
        {avatar: 'icon-Nick', name: 'Nick Huang', job: 'Senior Product Manager'},
        {avatar: 'icon-Martin', name: 'Martin Li', job: 'Senior Test Engineer'},
        {avatar: 'icon-Waiting', name: 'Waiting Li', job: 'Community Manager'},
        {avatar: 'icon-Morgan', name: 'Morgan Li', job: 'Senior Client Developer(Windows)'}
      ],
      peopleList3: [
        {avatar: 'icon-Ashton', name: 'Ashton Liu', job: 'Senior Test Engineer'},
        {avatar: 'icon-Doris', name: 'Doris Liu', job: 'Senior Product Designer'},
        {avatar: 'icon-Lynch', name: 'Lynch Lu', job: 'Senior Developer'},
        {avatar: 'icon-Johnny', name: 'Johnny Lv', job: 'Senior Developer'},
        {avatar: 'icon-Locke', name: 'Locke Meng', job: 'Senior Product Manager'},
        {avatar: 'icon-Albert', name: 'Albert Pan', job: 'Senior Developer'},
        {avatar: 'icon-Destiny', name: 'Destiny Si', job: 'Senior Test Engineer'},
        {avatar: 'icon-Jasper', name: 'Jasper Sun', job: 'Community Manager'},
        {avatar: 'icon-Asher', name: 'Asher Wang', job: 'Senior Developer'},
        {avatar: 'icon-Kenny', name: 'Kenny Wang', job: 'Senior Developer'}
      ],
      peopleList4: [
        {avatar: 'icon-Cara', name: 'Cara Wang', job: 'Senior Test Engineer'},
        {avatar: 'icon-Anita', name: 'Anita Weng', job: 'Senior Product Designer'},
        {avatar: 'icon-Franco', name: 'Franco Wu', job: 'Senior Developer'},
        {avatar: 'icon-Nova', name: 'Nova Wu', job: 'Community Manager'},
        {avatar: 'icon-Shane', name: 'Shane Wu', job: 'Community Manager'},
        {avatar: 'icon-Tom', name: 'Tom Wu', job: 'Senior Developer'},
        {avatar: 'icon-Bright', name: 'Bright Wu', job: 'Senior Developer'},
        {avatar: 'icon-Bear', name: 'Bear Xiong', job: 'Senior Developer'},
        {avatar: 'icon-Bill', name: 'Bill Yang', job: 'Senior Developer'},
        {avatar: 'icon-Journey', name: 'Journey Yu', job: 'Senior Developer'}
      ],
      peopleList5: [
        {avatar: 'icon-Aries', name: 'Aries Zhang', job: 'Senior Test Engineer'},
        {avatar: 'icon-Justin', name: 'Justin Zhang', job: 'Senior Developer'},
        {avatar: 'icon-Kris', name: 'Kris Zhang', job: 'Senior Product Designer'},
        {avatar: 'icon-Faker', name: 'Faker Zhao', job: 'Senior Developer'},
        {avatar: 'icon-sky', name: 'Sky Zhao', job: 'Senior Operation Engineer'},
        {avatar: 'icon-Tiny', name: 'Tiny Zhao', job: 'Senior Developer'},
        {avatar: 'icon-Harry', name: 'Harry Zhong', job: 'Senior Product Designer'},
        {avatar: 'icon-Velen', name: 'Velen Zhou', job: 'Senior Developer'},
        {avatar: 'icon-Tim', name: 'Tim Zhou', job: 'Senior Developer'},
        {avatar: 'icon-Morgan', name: 'Morgan Li', job: 'Senior Developer'}
      ],
      peopleList6: [
        {avatar: 'icon-dacheng', name: 'Dacheng Sheng', job: 'Senior Product Manager'},
        {avatar: 'icon-wangfeng', name: 'Feng Wang', job: 'Senior Developer'},
        {avatar: 'icon-Lauren', name: 'Lauren Feng', job: 'Social Media Marketing'}
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}

</script>

<style lang='scss' rel='stylesheet/scss' scoped>
@import url('../../sprites/sprite.css');

  .p8 {
    height: 300%;
    width: 100%;
    background-image: url(img/8_bg0.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p8_team{
        height: 68%;
        width: 100%;
        position: relative;
        .title{
            width: 80%;
            height: 3.75rem;
            text-align: center;
            color: #fff;
            font-size: 3.25rem;
            margin: 0 auto;
            position: absolute;
            top: 10%;
            left: 10%;
            font-weight: 600;
        }
        .team_area{
            width: 70%;
            position: absolute;
            top: 18%;
            left: 50%;
            margin-left: -35%;
            color: #fff;
            .icon{
                // height: 7.8125rem;
                width: 6.8rem;
                margin: 0 auto;
                background-size: 80%;
                background-repeat: no-repeat;
                display: block;
                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    display: block;
                }
            }
            .name{
                font-size: 1.5rem;
                text-align: center;
                display: block;
                margin-top: 0.625rem;
            }
            .job{
                font-size: 1.25rem;
                margin-top: 0.625rem;
                text-align: center;
                display: block;
            }
            .info{
                font-size: 1rem;
                margin-top: 0.625rem;
                text-align: center;
                display: block;
                height: 3.75rem;
                color: #88d4ff;
            }
            .row1{
                width: 80%;
                margin: 0 auto;
                height: 250px;
                font-size: 0;
                .item{
                    width: 50%;
                    display: inline-block;
                    vertical-align: top;
                }
            }
            .row2{
                width: 100%;
                height: 15.625rem;
                font-size: 0;
                margin-top: 1.875rem;
                .item{
                    width: 33.33%;
                    display: inline-block;
                    vertical-align: top;
                }
            }
        }
        .team_other{
          color: #fff;
          position: absolute;
          width: 80%;
          left: 10%;
          height: 34rem;
          bottom: 12%;
          font-size: 0;
          text-align: left;
          .staff_item{
            width: 20%;
            height: 50%;
            position: relative;
            text-align: center;
            display: inline-block;
            .border{
              height: 150px;
              width: 150px;
              background-image: url(img/1_border.png);
              background-size: 100%;
              background-repeat: no-repeat;
              z-index: 10;
              display: inline-block;
              position: absolute;
              left: 42%;
              top: 0%;
              margin-left: -52.5px;
              transform: scale(0.7);
            }
            .icon{
              display: inline-block;
              z-index: 5;
              position: absolute;
              left: 42%;
              top: -4%;
              margin-left: -52.5px;
              transform: scale(0.7);
            }
            .name{
              font-size: 1.25rem;
              height: 1.25rem;
              width: 100%;
              color: #fff;
              position: absolute;
              bottom: 30%;
              left: 50%;
              transform: translateX(-50%);
            }
            .job{
              font-size: 1rem;
              height: 1rem;
              width: 100%;
              color: #88d4ff;
              position: absolute;
              bottom: 20%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
        @media screen and (max-width: 1024px) {
          .team_other{
            height: 36rem;
             bottom: 5%;
          }
        }
    }
    .p8_investors{
      height: 32%;
      position: relative;
      .investors{
          width: 80%;
          margin: 0 auto;
          margin-top: 3.125rem;
      }
      .title{
        width: 80%;
        height: 3.75rem;
        text-align: center;
        color: #fff;
        font-size: 3.25rem;
        position: absolute;
        top: 2%;
        left: 50%;
        margin-left: -40%;
        font-weight: 600;
      }
      .investor_area{
        width: 80%;
        font-size: 0;
        position: absolute;
        top: 16%;
        left: 50%;
        margin-left: -40%;
        .item{
            width: 25%;
            height: 11.25rem;
            display: inline-block;
            position: relative;
            margin-bottom: 0.625rem;
            img{
                height: 6.25rem;
                width: 13.75rem;
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -3.125rem;
                margin-left: -6.875rem;
            }
        }
      }
    }
  }

</style>
