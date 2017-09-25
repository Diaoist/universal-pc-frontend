<template>
  <div class="hello">
    <div class="canvas-pdf">
    <canvas id="left-canvas"></canvas>
    <canvas id="right-canvas" ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted() {
    this.canvas = document.getElementById('left-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.loadPDFJS();
  },
  data() {
    return {
      url: 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
      pdfDoc: null,
      pageNum: 1,
      pageRendering: false,
      pageNumPending: null,
      scale: 0.8,
      canvas: '',
      ctx: '',
    };
  },
  methods: {
    loadPDFJS() {
      if (window.PDFJS) {
        this.renderPage('right-canvas');
        this.renderPage('left-canvas');
      } else {
        setTimeout(() => {
          this.loadPDFJS();
        }, 200);
      }
    },
    renderPage(id) {
      const loadingTask = window.PDFJS.getDocument(this.url);
      loadingTask.promise.then((pdf) => {
        // Fetch the first page
        const pageNumber = 1;
        pdf.getPage(pageNumber).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport(scale);

          // Prepare canvas using PDF page dimensions
          const canvas = document.getElementById(id);
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          const renderContext = {
            canvasContext: context,
            viewport,
          };
          const renderTask = page.render(renderContext);
          renderTask.then(() => {
          });
        });
      }, () => {
        // PDF loading error
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  .canvas-pdf {
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items:center;/*指定垂直居中*/
  }
}
#left-canvas {
  width: 50%;
  // height:100%;
}
#right-canvas {
  width: 50%;
  // height:100%;
}
</style>
