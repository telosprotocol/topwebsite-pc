<template>
  <div class="pdf_content">
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
  </div>
</template>

<script>
import PDFJS from 'pdfjs-dist'

export default {
  data () {
    return {
      title: '',
      pdfDoc: null,
      loadding: false,
      pages: 0,
      pdf_url: 'static/TOP_Whitepaper_English.pdf'
    }
  },
  created () {
    document.oncontextmenu = function () {
      event.returnValue = false
    }
    window.onkeydown = function (e) {
      if (e.keyCode === 123) {
        e.preventDefault()
      }
    }
  },
  methods: {
    renderPage (num) {
      let _this = this
      this.pdfDoc.getPage(num).then(function (page) {
        let canvas = document.getElementById('the-canvas' + num)
        let ctx = canvas.getContext('2d')
        let dpr = window.devicePixelRatio || 1
        let bsr = ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio || 1
        let ratio = dpr / bsr
        var viewport = page.getViewport(screen.availWidth / page.getViewport(1).width)
        canvas.width = viewport.width * ratio
        canvas.height = viewport.height * ratio
        canvas.style.width = viewport.width + 'px'
        canvas.style.height = viewport.height + 'px'
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (_this.pages > num) {
          _this.renderPage(num + 1)
        }
      })
    },
    renderPageForPc (num) {
      let _this = this
      this.pdfDoc.getPage(num).then(function (page) {
        let canvas = document.getElementById('the-canvas' + num)
        let ctx = canvas.getContext('2d')
        var scale = 1.5
        var viewport = page.getViewport(scale)
        canvas.width = viewport.width
        canvas.height = viewport.height
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (_this.pages > num) {
          if (_this.isMobile()) {
            _this.renderPage(num + 1)
          } else {
            _this.renderPageForPc(num + 1)
          }
        }
      })
    },
    loadFile (url) {
      this.$layer.loading()
      let _this = this
      PDFJS.getDocument(url).then(function (pdf) {
        _this.$layer.close()
        _this.pdfDoc = pdf
        _this.pages = _this.pdfDoc.numPages
        _this.$nextTick(() => {
          if (_this.isMobile()) {
            _this.renderPage(1)
          } else {
            _this.renderPageForPc(1)
          }
        })
      })
    },
    isMobile () {
      let sUserAgent = navigator.userAgent
      let mobileAgents = ['Android', 'iPhone', 'Symbian', 'WindowsPhone', 'iPod', 'BlackBerry', 'Windows CE']
      let isMobile = 0
      for (let i = 0; i < mobileAgents.length; i++) {
        if (sUserAgent.indexOf(mobileAgents[i]) > -1) {
          isMobile = 1
          break
        }
      }
      return isMobile
    }
  },
  mounted () {
    this.loadFile(this.pdf_url)
  }
}
</script>

<style scoped>
canvas {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}
.pdf_content{
  background-color: #3c3c3c;
  /* background-color: white; */
}
@media print {
  .pdf_content{
    display: none;
  }
}
</style>
