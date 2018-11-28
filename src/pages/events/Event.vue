<template>
  <div class="event">
    <navbar/>
    <div class="event-header">
      <!-- <img src="@/assets/images/childrenPage/EventBgpic.png" class="logo-image"> -->
      <img :src="imagePath" class="logo-image">
      <img src="@/assets/images/childrenPage/moreDetails.png" class="moreBtn" @click="openBanner()">
      <!-- <div class="header-wrapper">
        <img :src="'api'+bannerData.imagePath" class="logo-image">
        <div class="title">TOP Network @Ontology Meetup</div>
        <div class="time">San Francisco Oct. 30     Seattle Nov. 1</div>
        <img src="@/assets/images/childrenPage/moreDetails.png" class="moreBtn" @click="openBanner()">
      </div> -->
    </div>
    <div class="linege"></div>
    <div class="info-list" v-for="(item,index) in detailList" :key="index" :class="[index%2==0?'bg1':'bg2']">
        <div class="info-details" >
          <img :src="'api/'+item.imagePath" class="list-image" @click="openDetail(item.url)">
          <div class="description">
            <div class="title" @click="openDetail(item.url)">{{item.name}}</div>
            <div class="time-place">
              <span class="canledar-area"><img src="@/assets/images/childrenPage/calendar.png" class="canledar-image"></span>
              <span class="time">{{item.showDate}}</span>
              <span class="position-area"><img src="@/assets/images/childrenPage/position.png" class="position-image"></span>
              <span class="place">{{item.address}}</span>
            </div>
            <div class="descption-details">{{item.content}}</div>
            <img src="@/assets/images/childrenPage/smoreDetails.png" class="moreBtn" @click="openDetail(item.url)">
          </div>
        </div>
    </div>
    <div class="pagination">
      <el-pagination :current-page.sync="currentPage" background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="handleCurrentChange"></el-pagination>
    </div>
    <img src="@/assets/images/index/telegram.png" class="telegramImage" @click="openTelegram">
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/components/common/vFooter'
import {getEventBanner, getEventDetails} from '../../../fetch/api'
import clamp from '../../../static/clamp.js'
export default {
  name: 'Event',
  components: {
    Navbar,
    vFooter
  },
  data () {
    return {
      bannerData: '',
      imagePath: '',
      detailList: [],
      total: 0,
      pageSize: 10,
      currentPage: 1
    }
  },
  created () {
    this.getBannerData()
    this.getDetailsData()
  },
  updated () {
    this.handleContent()
  },
  methods: {
    // js解决多行文本溢出省略号兼容性
    handleContent () {
      this.$nextTick(() => {
        var descptions = document.getElementsByClassName('descption-details')
        for (var i = 0; i < descptions.length; i++) {
          $clamp(descptions[i], {clamp: 4})
        }
      })
    },
    getBannerData () {
      getEventBanner().then(res => {
        this.bannerData = res.data.data
        this.imagePath = 'api/' + this.bannerData.imagePath
      }).catch(res => {
        console.log('get bannerData failed')
      })
    },
    getDetailsData () {
      var page = Number(sessionStorage.getItem('page'))
      if (!page) {
        getEventDetails(10, 0, '').then(res => {
          this.detailList = res.data.data.rows
          this.total = res.data.data.total
          this.pageSize = res.data.data.limit
        }).catch(res => {
          console.log('get detailData failed')
        })
      } else {
        getEventDetails(10, page * 10, '').then(res => {
          this.currentPage = page + 1
          this.detailList = res.data.data.rows
          this.total = res.data.data.total
          this.pageSize = res.data.data.limit
        }).catch(res => {
          console.log('get detailData failed')
        })
      }
    },
    // 点击分页
    handleCurrentChange (val) {
      sessionStorage.setItem('page', val - 1)
      getEventDetails(10, (val - 1) * 10, '').then(res => {
        this.detailList = res.data.data.rows
        this.total = res.data.data.total
        this.pageSize = res.data.data.limit
        this.toTop()
      }).catch(res => {
        console.log('get detailData failed')
      })
    },
    openDetail (url) {
      window.open(url, '_blank')
    },
    openBanner () {
      window.open(this.bannerData.url, '_blank')
    },
    openTelegram () {
      window.open('https://t.me/topnetwork_top', '_blank')
    },
    // 回到顶部
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .event{
    width: 100%;
    .event-header{
      width:100%;
      background-color:rgba(4,17,38,1);
      // height: 500px;
      position: relative;
      // background:url('../../assets/images/childrenPage/EventBgpic.png') no-repeat;
      // box-sizing: border-box;
      // background-size:cover;
      // height:100%;
      // background-position:center 0;
      // padding:93px 0 53px 0;
      .moreBtn{
        width:332px;
        height:60px;
        background:rgba(0,89,165,1);
        border-radius: 30px;
        cursor: pointer;
        position: absolute;
        left:0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top:77.4%;
      }
      .logo-image{
          width:100%;
        }
      .header-wrapper{
        width: 1280px;
        margin:0 auto;
        .title{
          width:100%;
          text-align: center;
          font-size:72px;
          font-family:Cera Pro;
          font-weight:bold;
          color:rgba(255,255,255,1);
          margin:30px 0 17px 0;
        }
        .time{
          width:100%;
          font-size:50px;
          font-family:Cera Pro;
          font-weight:500;
          color:rgba(138,159,175,1);
          margin-bottom: 50px;
        }
      }
    }
    .linege{
      width:100%;
      height: 60px;
      background:rgba(4,17,38,1);
    }
    .info-list{
      padding:40px 0 40px 0;
      width:100%;
      margin:0 auto;
      .info-details{
        width: 1060px;
        margin:0 auto;
        overflow: hidden;
        .list-image{
          width:318px;
          height:238px;
          float: left;
          margin-right: 40px;
          border-radius:4px;
          cursor: pointer;
        }
        .description{
          width:700px;
          text-align: left;
          float: left;
          .title{
            width:100%;
            height: 35px;
            font-size:30px;
            font-family:Cera Pro;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space:nowrap;
            cursor: pointer;
          }
          .time-place{
            width: 100%;
            margin:16px 0 17px 0;
            .canledar-area{
              display: inline-block;
              margin-right: 20px;
              .canledar-image{
                width: 26px;
                height: 26px;
              }
            }
            .time{
              width:150px;
              display: inline-block;
              margin-right:26px;
              font-size:26px;
              font-family:Cera Pro;
              font-weight:300;
              color:rgba(255,255,255,1);
              vertical-align: middle;
            }
            .position-area{
              display: inline-block;
              margin-right: 20px;
              .position-image{
                width: 26px;
                height: 26px;
              }
            }
            .place{
              font-size:26px;
              font-family:Cera Pro;
              font-weight:300;
              color:rgba(255,255,255,1);
              vertical-align: middle;
            }
          }
          .descption-details{
            width:688px;
            // height:90px;
            font-size:20px;
            font-family:Arial;
            font-weight:400;
            line-height:23px;
            color:rgba(138,159,175,1);
            margin-bottom: 16px;
            position: relative;
            overflow: hidden;
            // display: -webkit-box;
            // -webkit-line-clamp:4;  /*数字是几就显示几行*/
            /* autoprefixer: off */
            // -webkit-box-orient: vertical;
            /* autoprefixer: on */
          }
          .descption-details-after:after{
            content: "...";
            position: absolute;
            bottom: 0;
            right: 0;
            padding-left: 40px;
            background: -webkit-linear-gradient(left, transparent, #fff 55%);
            background: -moz-linear-gradient(left, transparent, #fff 55%);
            background: -o-linear-gradient(left, transparent, #fff 55%);
            background: linear-gradient(to right, transparent, #fff 55%);
          }
          .moreBtn{
            width:170px;
            height:40px;
            display: block;
            background:rgba(0,89,165,1);
            border-radius:66px;
            float: right;
            cursor: pointer;
          }
        }
      }
    }
    .bg1{
      background:rgba(4,17,38,1);
    }
    .bg2{
      background:rgba(17,30,49,1);
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
  }
</style>

<style>
  .pagination{
    width: 100%;
    height: 237px;
    background: #041126;
    padding-top:30px;
  }
  .pagination .is-background .btn-prev{
    width:40px;
    height:40px;
    background:rgba(138,159,175,1);
    border-radius:50%;
  }
  .pagination .is-background .btn-prev .el-icon-arrow-left{
    font-size:20px;
    text-align: center;
    line-height: 40px;
    color:#041126;
  }
  .pagination .is-background .btn-next{
    width:40px;
    height:40px;
    background:rgba(138,159,175,1);
    border-radius:50%;
  }
  .pagination .is-background .btn-next .el-icon-arrow-right{
    font-size:20px;
    text-align: center;
    line-height: 40px;
    color:#041126;
  }
 .pagination .el-pagination .is-background .el-pager li:not(.disabled) .active{
    background: #0059A5 ;
  }
 .pagination .el-pagination .el-pager li{
    width:40px;
    height:40px;
    background:rgba(138,159,175,1);
    border-radius:50%;
    font-size:20px;
    font-family:Cera Pro;
    font-weight:500;
    line-height:40px;
    color:rgba(4,17,38,1);
    text-align: center;
    line-height: 40px;
  }
  .pagination .el-pagination .el-pager .number :hover{
    color:#fff !important;
    background-color: #0059A5 !important;
  }
  .el-pager li.btn-quicknext{
    line-height: 40px;
    text-align: center;
  }
  .pagination .el-pagination .el-pager .el-icon-arrow-left:hover{
    display: none;
  }
</style>
