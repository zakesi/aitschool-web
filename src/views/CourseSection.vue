<template>
  <div class="sections-page">
    <div class="sections-page-container container-w1200">
      <div class="sections-page-side">
        <div class="course-catalog-container">
          <div class="course-catalog-content">
            <p class="course-catalog-title">{{ course.name }}</p>
            <p class="course-catalog-description">{{ course.short_name }}</p>
          </div>
          <Catalog
            :course="course"
            :can-learn="true"
            :section_id="section_id"
          />
        </div>
      </div>
      <div class="sections-page-main">
        <div class="section--main-container" ref="sectionMainer">
          <div :loading="loading">
            <Video v-if="video_url" :url="video_url"></Video>
            <Marked :content="section.content"></Marked>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Catalog from "@/components/BaseCatalog.vue";
import Marked from "@/components/BaseMarkdown";
import Video from "@/components/BaseVideo.vue";
// import Service from '@/global/service/index.js';

export default {
  name: "Section",
  data() {
    return {
      course: {
        name: "HTML Basic",
        short_name: "HTML",
        chapters: [
          {
            id: 8,
            name: "HTML 基础",
            sections: [
              { id: 29, name: "概览" },
              { id: 30, name: "结构标签" },
              { id: 31, name: "文本标签" },
              { id: 32, name: "资源标签" },
              { id: 33, name: "表格标签" },
              { id: 34, name: "表单标签" },
              { id: 237, name: "百度首页 - HTML" }
            ]
          }
        ]
      },
      section: {
        id: 33,
        name: "表格标签",
        content: "# 表格",
        video_url:
          "http://as-public.qiniu.prodegree.cc/section/2018/1029/85T01deF716kcYiPFiT4uqU4sS1SihPlq5K1GYQW.mp4"
      },
      video_url:
        "http://as-public.qiniu.prodegree.cc/section/2018/1029/85T01deF716kcYiPFiT4uqU4sS1SihPlq5K1GYQW.mp4",
      section_id: 33,
      course_id: 2,
      chapter_id: 8,
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      // let params = this.$route.params;
      // let course_id = params.course_id;
      // let chapter_id = params.chapter_id;
      // let section_id = params.section_id;
      // let courseInfo = Service.course.info(course_id);
      // let sectionInfo = Service.section.info(section_id);
      // this.loading = true;
      // Promise.all([courseInfo, sectionInfo]).then( res => {
      //   this.course_id = course_id;
      //   this.chapter_id = chapter_id;
      //   this.section_id = section_id;
      //   this.course = res[0];
      //   this.section = res[1];
      //   this.video_url = this.section.video_url;
      //   this.loading = false
      //   this.gotoTop();
      // })
    },
    gotoTop() {
      // 切换小节滚动到顶部
      // let sectionMainerDOM = this.$refs.sectionMainer;
      // if(sectionMainerDOM){
      //   console.log(sectionMainerDOM)
      //   sectionMainerDOM.scrollTop = 0;
      // }
      document.documentElement.scrollTop = 0;
    }
  },
  components: {
    Catalog,
    Marked,
    Video
  }
};
</script>

<style lang="less" scoped>
.sections-page {
  background-color: #f5f7f8;
}
.sections-page-container {
  display: flex;
  padding: 20px 0;

  .sections-page-main {
    flex: 1;
  }

  .sections-page-side {
    flex: none;
    width: 260px;
    margin-right: 20px;

    .course-catalog-container {
      background: #fff;
      min-height: 440px;
      border-radius: 8px;
    }

    .course-catalog-content {
      padding: 10px 0;

      .course-catalog-title {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        line-height: 2;
        padding: 0 10px;
        margin: 0;
        margin-left: -1px;
        border-left: 2px solid #2789d9;
        word-break: break-all;
      }

      .course-catalog-description {
        font-size: 12px;
        line-height: 20px;
        color: #666;
        margin: 0 10px;
      }
    }
  }

  .section--main-container {
    min-height: 440px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
  }
}
</style>
