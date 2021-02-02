<template>
  <div>
    <Header />
    <div id="main">
      <div class="wrap">
        <div class="title">
          <img src="../assets/よくある質問.png" alt="">
          <h1>よくある質問</h1>
        </div>
        <div id="enter">
          <h2>入会について</h2>
          <div class="Q1" @click="click('1')">
            <p>Q.  初心者で着物を持っていないのですが、</p>
            <p>大丈夫ですか？</p>
          </div>
          <div class="A1" v-show="show.indexOf('1') >= 0">
            <p>A.  大丈夫です。</p>
            <p>入会してから、活動の買い物ツアーで買いそろえる方も多いです。</p>
            <p>着付け練習会もあるので、着付けができなくてもかまいません。</p>
          </div>
          <div class="Q2" @click="click('2')">
            <p>Q.  2年生なのですが、入会できますか？</p>
          </div>
          <div class="A2" v-show="show.indexOf('2') >= 0">
            <p>A.  もちろんです！</p>
            <p>大学、短大、専門、大学院の学生であれば、学年問わず1年中入れます。</p>
          </div>
          <div class="Q3" @click="click('3')">
            <p>Q.  他のサークルとの掛け持ちはできますか？</p>
          </div>
          <div class="A3" v-show="show.indexOf('3') >= 0">
            <p>A.  もちろんできます！</p>
          </div>
          <div class="Q4" @click="click('4')">
            <p>Q. 入会費や年会費はいくらですか？</p>
          </div>
          <div class="A4" v-show="show.indexOf('4') >= 0">
            <p>A.  入会費は無料で年会費は2000円を指定の口座に振込支払いです。</p>
            <p>振込手数料はご負担をお願いしています。</p>
          </div>
        </div>
        <div id="activty">
          <h2>活動について</h2>
          <div class="Q5" @click="click('5')">
          <p>Q.  毎回着物を着ていかなくてはいけませんか？</p>
          </div>
          <div class="A5" v-show="show.indexOf('5') >= 0">
            <p>A.  着物でなくてもかまいません。</p>
            <p>洋服や和服や和洋折衷コーデなど、何を着るかは個人の自由です。</p>
          </div>
          <div class="Q6" @click="click('6')">
          <p>Q.  着物は高いイメージがあります。</p>
          <p>安く手にいれることはできますか？</p>
          </div>
          <div class="A6" v-show="show.indexOf('6') >= 0">
            <p>A.  中古のアンティーク着物などであれば一着3000円～で手に入ります。</p>
            <p>1万円までのカジュアルな着物を持っている会員が多いです。</p>
          </div>
          <div class="Q7" @click="click('7')">
          <p>Q.  感染症対策はしていますか？</p>
          </div>
          <div class="A7" v-show="show.indexOf('7') >= 0">
            <p>A.  マスク着用やアルコール消毒、大人数の活動の場合は少人数グループに別れて行動するなどの対策をしています。</p>
            <p>活動の頻度も例年より少なめです。</p>
          </div>
        </div>
        <div id="link">
          <p class="contact" @click="$router.push({ name: 'Contact' })">お問い合わせはこちら</p>
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
      show: []
    };
  },
  methods: {
    click: function(data){
      if (this.show.indexOf(data) >= 0) {
        this.show = this.show.filter(n => n !== data)
      }
      else {
        this.show.push(data)
      }
    },
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
.wrap {
  max-width: 100%;
  background: #ffffff;
  padding-top: 125px;
}
.title {
  text-align: center;
}
.title img {
  height: 5rem;
  margin: 2rem 0;
}
.title h1 {
  text-decoration: underline #9B003F;
  font-family: "beautiful font";
  font-size: 4rem;
  margin-bottom: 4rem;
}
#enter, #activty {
  font-family: "UD Digi Kyokasho NP-R";
}
#enter h2, #activty h2 {
  font-size: 2.5rem;
  margin-top: 3rem;
  text-align: center;
  text-decoration: underline;
}
.Q1, .Q2, .Q3, .Q4, .Q5, .Q6, .Q7, .A1, .A2, .A3, .A4, .A5, .A6, .A7 {
  font-size: 2rem;
  margin-left: 30%;
  margin-right: 20%;
  line-height: 1.2;
}
.Q1, .Q2, .Q3, .Q4, .Q5, .Q6, .Q7 {
  margin-top: 5rem;
  cursor: pointer;
}
.A1, .A2, .A3, .A4, .A5, .A6, .A7 {
  margin-bottom: 2rem;
  padding-top: 2rem;
}
#enter p, #activty p {
  display: inline;
}
#link {
  display: flex;
  justify-content: center;
}
#link p {
  font-family: "UD Digi Kyokasho NP-R";
  text-decoration: underline;
  font-size: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
  margin: 3rem 0;
}

@media screen and (max-width: 768px) {
  #main {
    background: url(../assets/雪輪枠P.png) repeat;
    padding: 5vw;
  }
  .wrap {
    padding-top: 15vw;
    min-height: 100vh;
  }
  .title img {
  height: 15vw;
  margin: 4vw 0;
  }
  .title h1 {
  text-decoration: underline #9B003F;
  font-size: 10vw;
  margin-bottom: 4vw;
  }
  #enter h2, #activty h2 {
    font-size: 5vw;
    margin-top: 10vw;
  }
  .Q1, .Q2, .Q3, .Q4, .Q5, .Q6, .Q7, .A1, .A2, .A3, .A4, .A5, .A6, .A7 {
  font-size: 3vw;
  margin-left: 10%;
  margin-right: 15%;
  }
  .Q1, .Q2, .Q3, .Q4, .Q5, .Q6, .Q7 {
    margin-top: 4vw;
    cursor: pointer;
  }
  .A1, .A2, .A3, .A4, .A5, .A6, .A7 {
    padding-top: 2vw;
    margin-bottom: 5vw;
  }
  #enter p, #activty p {
    display: block;
  }
  #link p {
  font-size: 3vw;
  margin: 5vw 0;
  }
}
</style>