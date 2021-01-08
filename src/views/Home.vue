<template>
  <div>
    <Header />
    <div id="main">
      <div class="wrap">
        <div id="eyecatch">
          <h1 class="catchcopy1">着物だって、
          </h1>

          <h1 class="catchcopy2"> 服でしょ？</h1>          
        </div>
        <div id="about">
          <h2>和蒼会について</h2>
          <p>東京和蒼会とは、着物が好きな学生が</p>
          <p>交流することを目的としたサークルです</p>
          <button @click="$router.push({ name: 'About' })">すべて見る</button>
        </div> 
        <div id="activty">
          <h2>活動内容</h2>
          <p>関東（東京）を中心に</p>
          <p>月に2～3回お出かけ企画や着付け教室を</p>
          <p>行っています</p>
          <button @click="$router.push({ name: 'Activty' })">すべて見る</button>
        </div>
        <div id="faq">
          <h2>よくある質問</h2>
          <p class="Q1">Q. 初心者で着物を持っていないのですが、大丈夫ですか？</p>
          <p class="A1">A.大丈夫です。入会してから、活動の買い物ツアーで買いそろえる方も多いです。着付け練習会もあるので、着付けができなくてもかまいません。</p>
          <p class="Q2">Q. 毎回着物を着ていかなくてはいけませんか？</p>
          <p class="A2">A. 着物でなくてもかまいません。洋服や和服や和洋折衷コーデなど、何を着るかは個人の自由です。</p>
          <button @click="$router.push({ name: 'Faq' })">すべて見る</button>
        </div>
        <div id="contact">
          <h2>お問い合わせ</h2>
          <form class="form" method="post" @submit.prevent="sendContact()">
            <div class="contact">
              <label for="name">お名前</label>
              <input type="text" id="name" name="user_name" v-model="text" />
            </div>
            <div>
              <label for="mail">返信用メールアドレス</label>
              <input type="email" id="mail" name="user_mail" v-model="email" />
            </div>
            <div>
              <label for="msg">お問い合わせ内容</label>
              <textarea id="msg" name="user_message" v-model="msg"></textarea>
            </div>
            <div class="button-submit">
              <button class="button" type="submit">送信</button>
            </div>
          </form>
        </div>
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
  data() {
    return {
      text: "",
      email: "",
      tel: "",
      msg: ""
    };
  },
    //バリデーション
  methods: {
    sendContact() {
      if (
        this.text == "" ||
        this.email == "" ||
        this.msg == ""
      ) {
        alert("入力されていない項目があります");
      } else {
        //送信をしたらテキストが空になるように更新
        this.text = "";
        this.email = "";
        this.msg = "";
        alert("送信しました");
      }
    }
  }
};
</script>

<style scoped>
#main {
  padding-top: 100vw;
  width: 100%;
  padding: 150px 5vw;
  background: url(../assets/雪輪枠.png) repeat;
}
.wrap {
  padding: 10vw;
  background: #ffffff;
}
#eyecatch h1 {
  writing-mode: vertical-rl;
  font-family: "beautiful font";
  font-size: 5vw;
}
#about h2 {
  text-decoration: underline #9B003F 0.5vw;
  font-family: "beautiful font";
  font-size: 4vw;
  text-align: center;
}
#about p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  display: inline-block;
  text-align: center;
}
#about button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1vw 2vw;
  border-radius: 1.5vw;
  left: 10%;
}
#activty h2 {
  text-decoration: underline #9B003F 0.5vw;
  font-family: "beautiful font";
  font-size: 4vw;
  text-align: center;
}
#activty p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  display: inline-block;
  text-align: center;
}
#activty button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1vw 2vw;
  border-radius: 1.5vw;
  left: 10%;
}
#faq h2 {
  text-decoration: underline #9B003F 0.5vw;
  font-family: "beautiful font";
  font-size: 4vw;
  text-align: center;
}
#faq p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  display: inline-block;
  text-align: center;
}
#faq button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2vw;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1vw 2vw;
  border-radius: 1.5vw;
  left: 10%;
}
@media screen and (max-width: 768px) {

  #main {
    padding-top: 25vw;
  }

}
</style>