<template>
  <div>
    <Header />
    <div id="main">
      <div class="wrap">
        <div class="title">
          <img src="../assets/和蒼会について.png" alt="">
          <h1>和蒼会について</h1>
        </div>
        <div class="introduction">
          <div class="purpose">
            <p>東京和蒼会とは着物が好きな学生が</p><p>交流することを目的としたサークルです</p>
          </div>
          <div class="established">
            <p>2014年1月6日に設立</p><p>毎年40～50名が所属しています</p>          
          </div>
          <div class="student">
            <p>大学、大学院、専門学校、短大、専門や</p><p>学年問わず1年中入れます</p>
          </div>
          <div class="gender_ratio">
            <p>男女比は３：７です（2021年現在）</p>
          </div>
          <div class="activty">
            <p>関東（東京）を中心に、</p><p>月に2～3回お出かけ企画や着付け練習会を行っています</p>
          </div>
        </div>
        <div class="destination_example">
          <h2 class="subtitle">お出かけの具体例</h2>
          <ul>
            <li>庭園や美術館</li>
            <li>買い物ツアー</li>
            <li>和風の街並み（浅草等）散策</li>
            <li>アフタヌーンティー</li>
            <li>蛍狩り</li>
            <li>紅葉狩り      etc…</li>
          </ul>
        </div>
        <div class="information">
          <p>興味のある方や入会希望の方は、</p><p>LINE@やお問い合わせでご連絡ください </p>
        </div>
        <div class="link">
          <ul>
            <li class="activty" @click="$router.push({ name: 'Activty' })">活動内容はこちら</li>
            <li class="faq" @click="$router.push({ name: 'Faq' })">よくある質問はこちら</li>
            <li class="contact" @click="$router.push({ name: 'Contact' })">お問い合わせはこちら</li>
          </ul>
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
  }
};
</script>

<style scoped>
#main {
  background: url('../assets/雪輪枠.png') repeat;
  min-height: 100vh;
  padding: 125px;
  max-width: 100%;
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
  height: 5rem;
  margin: 2rem 0;
}
.title h1 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 4rem;
}
.introduction {
  text-align: center;
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  line-height: 2.5;
}
.purpose p, .established p, .student p, .activty p {
  display: inline;
}
.destination_example {
  font-family: "UD Digi Kyokasho NP-R";
  line-height: 3;
}
.destination_example h2 {
  text-decoration: underline;
  font-size: 3rem;
  text-align: center;
}
.destination_example ul {
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  margin-left: 15%;
}
.destination_example li {
  margin-left: 5%;
}
.information {
  text-align: center;
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  line-height: 3;
}
.information p {
  display: inline;
  margin: 5rem 0;
}
.link {
  display: flex;
  justify-content: center;
  line-height: 2;
  margin: 5rem 0;
}
.link ul {
  list-style: none;
  text-decoration: underline;
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  #main {
    background: url('../assets/雪輪枠P.png');
    padding: 5vw;
  }
  .title img {
  height: 15vw;
  margin: 4vw 0;
  }
  .wrap {
    padding-top: 15vw;
  }
  .title h1 {
  text-decoration: underline #9B003F;
  font-size: 10vw;
  margin-bottom: 4vw;
  }
  .introduction {
    font-size: 4vw;
    line-height: 2.5;
  }
  .purpose, .established, .student, .activty {
    margin-top: 5vw;
  }
  .purpose p, .established p, .student p, .activty p {
    display: block;
    line-height: 1.2;
  }
  .destination_example {
    margin-top: 5vw;
    line-height: 2;
  }
  .destination_example h2 {
    font-size: 4vw;
  }
  .destination_example ul {
    display: block;
    font-size: 4vw;
    margin-left: 15%;
  }
  .information {
    font-size: 4vw;
    line-height: 1.2;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
  .information p {
    display: block;
    margin: 0;
  }
  .link {
    display: flex;
    justify-content: center;
    margin-top: 5vw;
  }
  .link ul {
    font-size: 4vw;
    margin-bottom: 4vw;
    cursor: pointer;
  }
}
</style>