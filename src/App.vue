<template>
  <div id="app">
    <HeaderSection />
    <AboutSection />
    <ClassesSection />
    <GallerySection />
    <TrialSection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ClassesSection from "./components/ClassesSection.vue";
import GallerySection from "./components/GallerySection.vue";
import TrialSection from "./components/TrialSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    AboutSection,
    ClassesSection,
    GallerySection,
    TrialSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/common.scss";
</style>
