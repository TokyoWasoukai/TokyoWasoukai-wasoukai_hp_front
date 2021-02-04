<template>
  <div>
    <Header />
    <div id="main">
    <div class="wrap">
        <div class="title">
          <img src="../assets/お問い合わせ.png" alt="">
          <h1>お問い合わせ</h1>
        </div>
        <div class="contact">
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="HPからお問い合わせがきました。" />
            <div class="box">
              <div>
                <label for="name">お名前</label>
                <input type="text" id="name" name="name" />
              </div>
              <div>
                <label for="mail">返信用メールアドレス</label>
                <input type="email" id="mail" name="email" />
              </div>
              <div>
                <label for="msg">お問い合わせ内容</label>
                <textarea id="msg" name="message"></textarea>
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
};
</script>

<style scoped>
#main {
  background: url('../assets/雪輪枠.png') repeat;
  padding: 125px;
  max-width: 100%;
  min-height: 100vh;
}
.wrap {
  max-width: 100%;
  background: #ffffff;
  padding-top: 125px;
  min-height: 100vh;
}
.title {
  text-align: center;
}
.title img {
  height: 6rem;
  margin: 2rem 0;
}
.title h1 {
  text-decoration: underline #9B003F;
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
    background: url(../assets/雪輪枠P.png) repeat;
    padding: 5vw;
  }
  .wrap {
    padding-top: 10vw;
  }
  .title img {
    height: 10vw;
    margin: 4vw 0;
  }
  .title h1 {
    text-decoration: underline #9B003F;
    font-size: 10vw;
    margin-bottom: 4vw;
  }
  .contact h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  .contact .box {
    background: #E5E5E5;
    width: 90%;
    height: 45%;
    border: solid  #007655 0.5vw;
    border-radius: 3vw;
    display: inline-block;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 10vw;
  }
  .contact label {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 4vw;
    display: block;
    text-align: left;
    margin-left: 10%;
    margin-top: 3vw;
    margin-bottom: 0.5vw;
  }
  .contact input {
    width: 80%;
    height: 5vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  .contact textarea {
    width: 80%;
    height: 20vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  .contact button {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 4vw;
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
    font-size: 4vw;
    line-height: 1.5;
  }
}
</style>