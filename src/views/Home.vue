<template>
  <div>
    <Header />
    <div id="main">
      <div class="eyecatch">
        <h1 class="catchcopy">着物だって、
          服でしょ？</h1>
        
      </div>
      <div class="about">
        <h2>和蒼会について</h2>
        <p>東京和蒼会とは、着物が好きな学生が</p>
        <p>交流することを目的としたサークルです</p>
        <button @click="$router.push({ name: 'About' })">すべて見る</button>
      </div> 
      <div class="Activty">
        <h2>活動内容</h2>
        <p>関東（東京）を中心に</p>
        <p>月に2～3回お出かけ企画や着付け教室を</p>
        <p>行っています</p>
        <button @click="$router.push({ name: 'Activty' })">すべて見る</button>
      </div>
      <div class="Faq">
        <h2>よくある質問</h2>
        <p class="Q1">Q. 初心者で着物を持っていないのですが、大丈夫ですか？</p>
        <p class="A1">A.大丈夫です。入会してから、活動の買い物ツアーで買い
        そろえる方も多いです。着付け練習会もあるので、着付けができなくてもかまいません。</p>
        <p class="Q2">Q. 毎回着物を着ていかなくてはいけませんか？</p>
        <p class="A2">A. 着物でなくてもかまいません。洋服や和服や和洋折衷コーデなど、何を着るかは個人の自由です。</p>
        <button @click="$router.push({ name: 'Faq' })">すべて見る</button>
      </div>
      <div class="contact">
        <h2>お問い合わせ</h2>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },

};
</script>

<style scoped>
#main {
  padding-top: 150px;
  width: 500px;
  height: 500px;
  border-image-source: url(../assets/雪輪枠.png);
}


@media screen and (max-width: 768px) {

  #main {
    padding-top: 25vw;
  }

}
</style>