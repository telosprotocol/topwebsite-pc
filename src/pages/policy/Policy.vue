<template>
  <div class="faq">
    <navbar/>
    <div class="faqinfo">
      <div class="title-area">
        <div class="faqtitle">Privacy Policy</div>
      </div>
    </div>
    <div class="info">
        <div class="info-title">This Privacy Policy is designed to assist you with understanding how TOP Network collects, uses and discloses the information you provide us when accessing or using this website.</div>
        <div class="item">
            <div class="item-question">Changes to Our Privacy Policy</div>
            <div class="item-ask">We may change this Privacy Policy in our sole discretion at any time. Any revisions to this Privacy Policy will be posted on the home page of our Website. It is your obligation to periodically visit our Website to review any changes that may be made to this Privacy Policy. Your continued use of our Website constitutes your agreement to be bound by any such changes to this Privacy Policy. If you do not agree with this Privacy Policy, you are not authorized to use our Website and your sole recourse is to not use our Website.</div>
        </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import vFooter from '@/components/common/vFooter'
export default {
  name: 'Policy',
  components: {
    Navbar,
    vFooter
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
  }
</style>
