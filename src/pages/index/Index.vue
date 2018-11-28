<template>
  <div class="index">
    <top-header/>
    <full-stack/>
    <top-chain/>
    <team/>
    <invistor/>
    <v-footer/>
  </div>
</template>

<script>
import TopHeader from '@/pages/index/components/TopHeader'
import FullStack from '@/pages/index/components/FullStack'
import TopChain from '@/pages/index/components/TopChain'
import Team from '@/pages/index/components/Team'
import Invistor from '@/pages/index/components/Invistor'
import vFooter from '@/components/common/vFooter'
export default {
  name: 'Index',
  components: {
    TopHeader,
    FullStack,
    TopChain,
    Team,
    Invistor,
    vFooter
  }
}
</script>

<style scoped>
  .index{
    min-width: 1280px;
    overflow: auto;
  }
</style>
