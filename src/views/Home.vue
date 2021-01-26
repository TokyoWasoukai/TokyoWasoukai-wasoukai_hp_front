<template>
  <div>
    <Header />
    <div id="main">
      <div class="wrap">
        <div id="eyecatch">
          <h1 class="catchcopy1">服でしょ？
          </h1>
            <carousel :autoplay="true" :loop="true" :autoplayTimeout="3000" :per-page="1" :speed="2000">
            <slide>
              <span class="label"><img src="../assets/lavel1.png" alt="">
              </span>
            </slide>
            <slide>
              <span class="label"><img src="../assets/lavel2.png" alt=""></span>
            </slide>
            <slide>
              <span class="label"><img src="../assets/lavel3.png" alt=""></span>
            </slide>
            <slide>
              <span class="label"><img src="../assets/lavel4.png" alt=""></span>
            </slide>
            </carousel>
          <h1 class="catchcopy2"> 着物だって、</h1>          
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
          <p class="Q1">Q.  初心者で着物を持っていないのですが、大丈夫ですか？</p>
          <p class="A1">A.  大丈夫です。入会してから、活動の買い物ツアーで買いそろえる方も多いです。着付け練習会もあるので、着付けができなくてもかまいません。</p>
          <p class="Q2">Q.  毎回着物を着ていかなくてはいけませんか？</p>
          <p class="A2">A.  着物でなくてもかまいません。洋服や和服や和洋折衷コーデなど、何を着るかは個人の自由です。</p>
          <button @click="$router.push({ name: 'Faq' })">すべて見る</button>
        </div>
        <div id="contact">
          <h2>お問い合わせ</h2>
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
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { Carousel, Slide } from "vue-carousel";


export default {
  components: {
    Header,
    Footer,
    Carousel,
    Slide,
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
#eyecatch {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 100%;
}
#eyecatch h1 {
  writing-mode: vertical-lr;
  font-family: "beautiful font";
  font-size: 5rem;
  margin-top: 10rem;
}
#eyecatch .VueCarousel {
  width: 80%;
  max-width: 80%;
  text-align: center;
}
#eyecatch .VueCarousel-slide {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

#eyecatch .label img {
  max-width: 100%;
  height: auto;
}
#about {
  text-align: center;
}
#about h2 {
  text-decoration: underline #9B003F;
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
  margin-left: 75%;
  margin-top: 5rem;
  
}
#activty {
  text-align: center;
}
#activty h2 {
  text-decoration: underline #9B003F;
  font-family: "beautiful font";
  font-size: 4rem;
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 5rem;
  text-align: center;
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
  margin-left: 75%;
  margin-top: 5rem;
}

#faq h2 {
  text-decoration: underline #9B003F;
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
  line-height: 1.2;
  text-align-last: left;
}
#faq .A1, #faq .A2 {
  padding-top: 2rem;
}
#faq .Q2 {
  margin-top: 5rem;
}
#faq button {
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  background: #007655;
  color: #ffffff;
  border-style: none;
  padding: 1.5rem 3rem;
  border-radius: 2rem;
  margin-left: 75%;
  margin-top: 5rem;
}
#contact {
  text-align: center;
}
#contact h2 {
  text-decoration: underline #9B003F;
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
  margin-bottom: 5rem;
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
  margin-top: 1rem;
}
@media screen and (max-width: 768px) {

  #main {
    background: url(../assets/雪輪枠P.png) repeat;
    padding: 5vw;
  }
  .wrap {
    padding-top: 10vw;
  }
  #eyecatch h1 {
    font-size: 10vw;
    margin-top: 10vw;
    display: inline;
    justify-content: center;
  }
  #eyecatch .VueCarousel {
  width: 80%;
  max-width: 80%;
  height: 80%;
  text-align: center;
  }
  #eyecatch .VueCarousel-slide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  #eyecatch .label {
    margin-top: 10vw;
  }
  #eyecatch .label img {
    margin: 0;
    max-width: 100%;
    height: auto;
  }
  #about h2 {
    font-size: 8vw;
    text-decoration: underline #9B003F;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #about p {
    font-size: 4vw;
    display: block;
    line-height: 1.2;
  }
  #about button {
    font-size: 4vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #activty h2 {
    font-size: 8vw;
    text-decoration: underline #9B003F;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #activty p {
    font-size: 4vw;
    display: block;
    line-height: 1.2;
  }
  #activty button {
    font-size: 4vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #faq {
    text-align-last: right;
  }
  #faq h2 {
    font-size: 8vw;
    text-decoration: underline #9B003F;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #faq p {
    font-size: 4vw;
    margin-left: 5%;
    margin-right: 5%;
    text-align-last: right;
  }
  #faq .A1, #faq .A2 {
    padding-top: 2vw;
  }
  #faq .Q2 {
    margin-top: 5vw;
  }
  #faq button {
    font-size: 4vw;
    padding: 2vw 4vw;
    border-radius: 3vw;
    margin-left: 60%;
    margin-top: 5vw;
  }
  #contact h2 {
    font-size: 7vw;
    text-decoration: underline #9B003F;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  #contact .box {
    background: #E5E5E5;
    width: 90%;
    height: 45%;
    border: solid  #007655 0.5vw;
    border-radius: 3vw;
    display: inline-block;
    text-align: center;
    margin-top: 5vw;
  }
  #contact label {
    font-family: "UD Digi Kyokasho NP-R";
    font-size: 4vw;
    display: block;
    text-align: left;
    margin-left: 10%;
    margin-top: 3vw;
    margin-bottom: 0.5vw;
}
  #contact input {
    width: 80%;
    height: 5vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  #contact textarea {
    width: 80%;
    height: 20vw;
    border-style: none;
    border-radius: 1vw;
    margin: 0 auto;
  }
  #contact button {
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
}
</style>