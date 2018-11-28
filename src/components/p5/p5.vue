<template>
 <div class="p5">
     <div class="p5_title">Core Features</div>
     <div class="p5_main">
         <div class="item">
             <span class="icon lattice"></span>
             <span class="text">Two-Layer Lattice</span>
         </div>
         <div class="item">
             <span class="icon sharding"></span>
             <span class="text">Two-Layer Sharding</span>
         </div>
         <div class="item">
             <span class="icon vm"></span>
             <span class="text">Two-Layer VM</span>
         </div>
         <div class="item">
             <span class="icon speed"></span>
             <span class="text">High-Speed <br>
                    Parallel PBFT</span>
         </div>
         <div class="item">
             <span class="icon zero"></span>
             <span class="text"> Instant Transactions
                        <br>Zero Fee</span>
         </div>
         <div class="item">
             <span class="icon privacy"></span>
             <span class="text">Built-In Security
                    <br>Privacy Protection</span>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='scss' rel='stylesheet/scss'>
.p5{
    height: 100%;
    width: 100%;
    background-image: url(img/5_bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .p5_title{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 10%;
        font-size: 5rem;
        color: #fff;
        letter-spacing: 2px;
    }
    .p5_main{
        width: 70%;
        height: 50%;
        position: absolute;
        top: 25%;
        left: 50%;
        margin-left: -35%;
        font-size: 0;
        .item{
            width: 33.33%;
            height: 40%;
            display: inline-block;
            margin-top: 3.75rem;
            .icon{
                height: 8.125rem;
                width: 7.75rem;
                background-size: cover;
                background-repeat: no-repeat;
                margin: 0 auto;
                display: block;
            }
            .text{
                display: block;
                width: 100%;
                height: 1.875rem;
                line-height: 1.875rem;
                font-size: 1.875rem;
                text-align: center;
                margin-top: 0.625rem;
                color: #fff;
                line-height: 2.5rem;
            }
            .lattice{
                background-image: url(img/5_icon_lattice.png);
            }
            .sharding{
                background-image: url(img/5_icon_sharding.png);
            }
            .vm{
                background-image: url(img/5_icon_vm.png);
            }
            .speed{
                background-image: url(img/5_icon_speed.png);
            }
            .zero{
                background-image: url(img/5_icon_zero.png);
            }
            .privacy{
                background-image: url(img/5_icon_privacy.png);
            }
        }
    }
}
</style>
