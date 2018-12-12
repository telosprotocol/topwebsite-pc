<template>
  <div class="whitepaper">
    <navbar/>
    <div class="email-input">
      <div class="wrapper">
        <div class="warn">Please enter your email address here. We will send the link of our Whitepaper to your inbox.  </div>
        <input type="email"  name="email" class="emailbox" placeholder="Email" v-model="email">
        <!-- <div class="warn">*A link to our whitepaper will be sent to submitted email.</div> -->
        <div class="btn-submit" @click="submitEmail">Submit</div>
      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/components/common/vFooter'
import {getWhitepaper} from '../../../fetch/api'
export default {
  name: 'SubmitEmail',
  components: {
    Navbar,
    vFooter
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submitEmail () {
      var status = this.checkEmail(this.email)
      let vm = this
      if (status) {
        getWhitepaper(this.email).then(res => {
          this.$layer.dialog({
            content: 'Your email address is successfully submitted. Please check your inbox now.',
            contentClass: 'className',
            btn: ['OK']
          }).then(() => {
            vm.$layer.close()
            vm.$router.push('/')
          })
          this.email = ''
          setTimeout(() => {
            this.$layer.close()
            this.$router.push('/')
          }, 5000)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    checkEmail (s) {
      var regu = /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/
      var re = new RegExp(regu)
      if (re.test(s)) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang='scss' type="text/css" scoped>
  .whitepaper{
    position: relative;
    width:100%;
    .email-input{
      background: url('./images/background.jpg') no-repeat;
      padding:166px 0;
      width:100%;
    .wrapper{
      width: 30%;
      margin:0 auto;
      background-color: #ffffff;
      box-shadow: 0px 10px 16px 0px rgba(69, 90, 117, 0.1);
      border-radius: 8px;
      opacity: 0.9;
      padding-bottom:56px;
      .title{
        width: 34%;
        margin:0 auto;
        padding-top:77px;
        font-family: Cera Pro;
        font-size: 18px;
        font-weight: 600;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #1f233a;
      }
      .emailbox{
        width: 83%;
        margin:40px auto  20px auto;
        height: 47px;
        background-color: #fcfdfe;
        border-radius: 6px;
        border: solid 1px #c7d9e6;
        padding-left:10px;
        outline:none;
        font-size: 16px;
      }
      .warn{
        width:90%;
        margin:0 auto;
        text-align:center;
        height: 58px;
        font-family: Cera Pro;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 19px;
        letter-spacing: 0px;
        color: #1f233a;
        padding-top: 38px;
      }
      .btn-submit{
        width: 59.5%;
        margin:0 auto;
        margin-top:71px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        background-color: #3b5998;
        border-radius: 6px;
        font-family: Cera Pro;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        color:#ffffff;
        cursor: pointer;
      }
    }
  }
}
</style>
