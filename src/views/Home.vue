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
            <div class="box">
              <div>
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
  border: solid 100px;
  border-image: url(../assets/雪輪枠.png) 30 round;
  margin-bottom: 125px;
}
#eyecatch {
  display: flex;
  justify-content: space-between;
}
#eyecatch h1 {
  writing-mode: vertical-lr;
  font-family: "beautiful font";
  font-size: 5rem;
  margin: 140px;
  margin-bottom: 0;
}
#about {
  text-align: center;
}
#about h2 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
}
#about p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  display: inline;
}
#about button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  margin-left: 80%;
  margin-top: 5rem;
  
}
#activty {
  text-align: center;
}
#activty h2 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
}
#activty p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  display: inline;
}
#activty button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  margin-left: 80%;
  margin-top: 5rem;
}

#faq h2 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 5rem;
  text-align: center;
  margin-top: 5rem;
}
#faq p {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  margin-left: 15%;
  margin-right: 20%;
}
#faq button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  margin-left: 80%;
  margin-top: 5rem;
}
#contact {
  text-align: center;
}
#contact h2 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  text-align: center;
  margin-top: 5rem;
}
#contact .box {
  background: #E5E5E5;
  width: 50%;
  height: 50rem;
  border: solid  #007655 ;
  border-radius: 3rem;
  display: inline-block;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 10rem;
}

#contact label {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  display: block;
  text-align: left;
  margin-left: 15%;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
}
#contact input {
  width: 70%;
  height: 3rem;
  border-style: none;
  border-radius: 0.5rem;
  margin: 0 auto;
}
#contact textarea {
  width: 70%;
  height: 20rem;
  border-style: none;
  border-radius: 1rem;
  margin: 0 auto;
}
#contact button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  left: 10%;
  margin-top: 2rem;
}
@media screen and (max-width: 768px) {

  #main {
    border: solid 10vw;
    border-image: url(../assets/雪輪枠.png) 30 round;
    margin-top: 20vw;
    margin-bottom: 20vw;
  }
  #eyecatch h1 {
    font-size: 10vw;
    margin-top: 5vw;
  }
  #about h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F 0.5vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #about p {
    font-size: 3vw;
    display: block;
  }
  #about button {
    font-size: 3vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #activty h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F 0.5vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #activty p {
    font-size: 3vw;
    display: block;
  }
  #activty button {
    font-size: 3vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #faq h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F 0.5vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #faq p {
    font-size: 3vw;
    margin-right: 10%;
  }
  #faq button {
    font-size: 3vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #contact h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F 0.5vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #contact .box {
    background: #E5E5E5;
    width: 70%;
    height: 60vw;
    border: solid  #007655 ;
    border-radius: 3vw;
    display: inline-block;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 10vw;
  }
  #contact label {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 3vw;
    display: block;
    text-align: left;
    margin-left: 15%;
    margin-top: 3vw;
    margin-bottom: 0.5vw;
}
  #contact input {
    width: 70%;
    height: 4vw;
    border-style: none;
    border-radius: 0.5vw;
    margin: 0 auto;
  }
  #contact textarea {
    width: 70%;
    height: 20vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  #contact button {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 2vw;
    background: #007655;
    color: #ffffff;
    border-style: none;
    padding: 1vw 2vw;
    border-radius: 1.5vw;
    left: 10%;
    margin-top: 3vw;
  }
}
</style>