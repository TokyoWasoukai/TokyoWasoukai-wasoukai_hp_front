<template>
  <div>
    <Header />
    <div class="main">
      <div class="title">
        <img src="../assets/和蒼会について.png" alt="">
        <h1>和蒼会について</h1>
      </div>
      <div class="introduction">
        <p class="purpose">
          東京和蒼会とは着物が好きな学生が交流することを目的としたサークルです</p>
        <p class="established">
          2014年1月6日に設立
          毎年40～50名が所属しています
        </p>
        <p class="student">
          大学、大学院、専門学校、短大、専門や
          学年問わず1年中入れます
        </p>
        <p class="gender_ratio">
          男女比は３：７です（2021年現在）
        </p>
        <p class="activty">
          関東（東京）を中心に、
          月に2～3回お出かけ企画や着付け練習会を行っています
        </p>
      </div>
      <div class="destination_example">
        <h2 class="title">お出かけの具体例</h2>
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
        <p>
          興味のある方や入会希望の方は、
          LINE＠かお問い合わせでご連絡ください
        </p>
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
