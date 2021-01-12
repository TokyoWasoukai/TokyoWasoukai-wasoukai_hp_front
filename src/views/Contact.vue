<template>
  <div>
    <Header />
    <div id="main">
      <div class="title">
        <img src="../assets/お問い合わせ.png" alt="">
        <h1>お問い合わせ</h1>
      </div>
      <div class="contact">
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
        <div class="imformation">
          <p>その他、GmailやLINE@でも</p><p>お問い合わせを受け付けております</p>
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
    Footer,
  },
  data() {
    return {
      text: "",
      email: "",
      tel: "",
      msg: "",
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
    },
  },
};
</script>

<style scoped>
#main {
  border: solid 100px;
  border-image: url(../assets/雪輪枠.png) 50 round;
  margin-bottom: 125px;
  margin-top: 125px;
}
.title {
  text-align: center;
}
.title img {
  height: 5rem;
  margin: 2rem 0;
}
.title h1 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 5rem;
}
.contact {
  text-align: center;
}
.contact .box {
  background: #E5E5E5;
  width: 50%;
  height: 50rem;
  border: solid  #007655 ;
  border-radius: 3rem;
  display: inline-block;
  text-align: center;
  margin-bottom: 1rem;
}

.contact label {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  display: block;
  text-align: left;
  margin-left: 15%;
  margin-top: 3rem;
  margin-bottom: 0.5rem;
}
.contact input {
  width: 70%;
  height: 3rem;
  border-style: none;
  border-radius: 0.5rem;
  margin: 0 auto;
}
.contact textarea {
  width: 70%;
  height: 20rem;
  border-style: none;
  border-radius: 1rem;
  margin: 0 auto;
}
.contact button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  left: 10%;
  margin-top: 1rem;
}
.imformation p {
  display: inline;
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 3rem;
  line-height: 5;
}
@media screen and (max-width: 768px) {

  #main {
    border: solid 10vw;
    border-image: url(../assets/雪輪枠.png) 50 round;
    margin-top: 20vw;
    margin-bottom: 20vw;
  }
  .title img {
    height: 15vw;
    margin: 4vw 0;
  }
  .title h1 {
    text-decoration: underline #9B003F 1vw;
    font-size: 10vw;
    margin-bottom: 4vw;
  }
  .contact h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F 0.5vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  .contact .box {
    background: #E5E5E5;
    width: 70%;
    height: 45%;
    border: solid  #007655 ;
    border-radius: 3vw;
    display: inline-block;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 10vw;
  }
  .contact label {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 3vw;
    display: block;
    text-align: left;
    margin-left: 15%;
    margin-top: 3vw;
    margin-bottom: 0.5vw;
  }
  .contact input {
    width: 70%;
    height: 4vw;
    border-style: none;
    border-radius: 0.5vw;
    margin: 0 auto;
  }
  .contact textarea {
    width: 70%;
    height: 20vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  .contact button {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 2vw;
    background: #007655;
    color: #ffffff;
    border-style: none;
    padding: 1.5vw 3vw;
    border-radius: 2vw;
    left: 10%;
    margin-bottom: 5%;
  }
  .imformation {
    margin-bottom: 5vw;
  }
  .imformation p {
    display: block;
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 3vw;
    line-height: 1.5;
  }
}
</style>