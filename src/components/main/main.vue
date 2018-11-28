<template>
 <div id="main">
    <p1></p1>
    <p2></p2>
    <p3></p3>
    <p4></p4>
    <p5></p5>
    <p6></p6>
    <p7></p7>
    <p8></p8>
    <tps></tps>
    <p9></p9>
 </div>
</template>

<script>

import p1 from 'components/p1/p1'
import p2 from 'components/p2/p2'
import p3 from 'components/p3/p3'
import p4 from 'components/p4/p4'
import p5 from 'components/p5/p5'
import p6 from 'components/p6/p6'
import p7 from 'components/p7/p7'
import p8 from 'components/p8/p8'
import p9 from 'components/p9/p9'
import tps from 'components/tps/tps'

export default {
  data () {
    return {

    }
  },
  created () {
    this.$ga.event('index_page', 'view', 'IndexScreenPage')
  },
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    tps
  }
}
</script>

<style>

#main {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%；;
  }
</style>
