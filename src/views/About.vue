<template>
  <div>
    <Header></Header>
    <div class="contents">
      <div class="titile">
        <img src="../assets/和蒼会について.png" alt="">
        <h1>和蒼会について</h1>
      </div>
      <div class="introduce">
        <p class="">東京和蒼会とは着物が好きな学生が交流することを目的としたサークルです</p>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
