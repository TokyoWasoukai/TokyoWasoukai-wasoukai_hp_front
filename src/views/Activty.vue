<template>
  <div>
    <Header />
    <div id="main">
      <div class="wrap">
        <div class="title">
          <img src="../assets/活動内容.png" alt="">
          <h1>活動内容</h1>
        </div>
        <div id="activty">
          <p>関東（東京）を中心に</p>
          <p>月に2～3回お出かけ企画や着付け教室を</p>
          <p>行っています</p>
        </div>
        <div id="example">
          <h2>お出かけの具体例</h2>
          <ul>
            <li>庭園や美術館へのお出かけ</li>
            <li>買い物ツアー</li>
            <li>和風の街並み（浅草等）散策</li>
            <li>アフタヌーンティー</li>
            <li>蛍狩り</li>
            <li>紅葉狩り</li>
          </ul>
        </div>
        <div id="schedule">
          <h2>年間活動スケジュール</h2>
          <table class="year">
            <tr>
              <th>4月</th>
              <td>新入生歓迎会</td>
            </tr>
            <tr>
              <th>5月</th>
              <td>新入生向け買い物ツアー</td>
            </tr>
            <tr>
              <th>6月</th>
              <td>蛍狩り</td>
            </tr>
            <tr>
              <th>7月</th>
              <td>花火大会</td>
            </tr>
            <tr>
              <th>8月</th>
              <td>納涼会</td>
            </tr>
            <tr>
              <th>9月</th>
              <td>合宿</td>
            </tr>
            <tr>
              <th>10月</th>
              <td>アフタヌーンティー</td>
            </tr>
            <tr>
              <th>11月</th>
              <td>紅葉狩り</td>
            </tr>
            <tr>
              <th>12月</th>
              <td>イルミネーション鑑賞</td>
            </tr>
            <tr>
              <th>1月</th>
              <td>初詣、新年会</td>
            </tr>
            <tr>
              <th>2月</th>
              <td>沿線買い物ツアー</td>
            </tr>
            <tr>
              <th>3月</th>
              <td>卒業生追い出しコンパ</td>
            </tr>
          </table>
        </div>
        <div id="explanation">
          <div class="text1">
            <p>この他にもお出かけ企画盛りだくさん！</p>
          </div>
          <div class="text2">
            <p>在籍2年目以上になれば、</p>
            <p>ご自身でお出かけを企画・開催できます！</p>
          </div>
          <div class="text3">
            <p>行きたいと思っていたところに</p>
            <p>お出かけ企画としてみんなで行けますよ！</p>
          </div>
        </div>
        <div id="information">
          <p>興味のある方や入会希望の方は、</p>
          <p>LINE@やお問い合わせでご連絡ください </p>
        </div>
        <div id="link">
          <ul>
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
  background: url('../assets/雪輪枠.png');
  padding: 125px;
  max-width: 100%;
}
.wrap {
  max-width: 100%;
  background: #ffffff;
  padding-top: 125px;
}
.title {
  text-align: center;
}
.title img {
  height: 6rem;
  margin: 2rem 0;
}
.title h1 {
  text-decoration: underline #9B003F 0.5rem;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 4rem;
}
#activty {
  text-align: center;
  font-family: "UD Digi Kyokasho NP-R";
}
#activty p {
  font-size: 2rem;
  display: inline;
}
#example {
  font-family: "UD Digi Kyokasho NP-R";
  line-height: 2;
}
#example h2 {
  text-align: center;
  text-decoration: underline;
  font-size: 2.5rem;
  margin-top: 3rem;
}
#example ul {
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  margin-left: 15%;
  margin-right: 10%;
}
#example li {
  margin-left: 5%;
}
#schedule {
  font-family: "UD Digi Kyokasho NP-R";
}
#schedule h2 {
  text-align: center;
  text-decoration: underline;
  font-size: 2.5rem;
  margin: 3rem 0;
}
#schedule .year {
  border-collapse: collapse;
  width: 35%;
  margin: 0 auto;
}
#schedule table tr {
  border-bottom: 1px solid #333333;
  font-size: 2rem;
}
#schedule th, td {
  padding: 1.5rem;
}
#schedule td {
  padding-left: 15%;
}
#explanation, #information {
  font-family: "UD Digi Kyokasho NP-R";
  text-align: center;
  font-size: 2rem;
  line-height: 2;
  margin-top: 2rem;
}
#explanation p, #information p {
  display: inline;
}
#link {
  display: flex;
  justify-content: center;
  line-height: 3;
}
#link ul {
  list-style: none;
  text-decoration: underline;
  font-family: "UD Digi Kyokasho NP-R";
  font-size: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  #main {
    background: url('../assets/雪輪枠P.png');
    padding: 5vw;
  }
  .wrap {
    padding: 15vw 0;
    min-height: 100vh;
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
  #activty p, #explanation p, #information p {
    display: block;
    font-size: 4vw;
    line-height: 1.2;
  }
  #example {
    line-height: 2.5;
  }
  #example h2 {
    font-size: 4vw;
    margin-top: 3vw;
  }
  #example ul {
    display: block;
    font-size: 4vw;
    margin-left: 15%;
  }
  #schedule h2 {
    font-size: 4vw;
    margin: 5vw 0;
  }
  #schedule .year {
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
  }
  #schedule table tr {
    border-bottom: 1px solid #333333;
    font-size: 4vw;
  }
  #schedule th, td {
    padding: 1vw;
  }
  #schedule td {
    padding-left: 1vw;
  }
  #link {
  display: flex;
  justify-content: center;
  line-height: 3;
  }
  #link ul {
    font-size: 4vw;
    margin-bottom: 4vw;
  }
  #link li {
    margin: 0;
  }
}
</style>