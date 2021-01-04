<template>
  <div id="header_menu">
    <header class="header">
      <div class="header-wrap">
        <div class="header-logo">
          <div @click="router.push('../views/Home.vue')"><img src="../assets/wasoukai-logo.png" alt=""></div>
        </div>
      <nav class="header-nav">
        <ul>
          <li @click="router.push('../views/About.vue')"><img src="../assets/和蒼会について.png" alt="">和蒼会について</li>
          <li @click="router.push('../views/Activty.vue')"><img src="../assets/活動内容.png" alt="">活動内容</li>
          <li @click="('../views/Faq')"><img src="../assets/よくある質問.png" alt="">よくある質問</li>
          <li @click="router.push('../views/Contact.vue')"><img src="../assets/お問い合わせ.png" alt="">お問い合わせ</li>
        </ul>
      </nav>
      </div>
      <div class="hamburger_container">
        <div class="hamburger_btn" @click='ActiveBtn=!ActiveBtn'>
          <span class="line line_01" :class="{'btn_line01':ActiveBtn}"></span>
          <span class="line line_02" :class="{'btn_line02':ActiveBtn}"></span>
          <span class="line line_03" :class="{'btn_line03':ActiveBtn}"></span>
        </div>
      </div>
    </header>
    <transition name="hamburger_menu">
    <div class="hamburger_menu" v-show="ActiveBtn">
        <ul>
          <li class="about" @click="router.push('../views/About')">和蒼会について</li>
          <li class="activty" @click="router.push('../views/Activty')">活動内容</li>
          <li class="faq" @click="router.link('../views/Faq')">よくある質問</li>
          <li class="contact" @click="router.push('../views/Contact')">お問い合わせ</li>
        </ul>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ActiveBtn: false
    }
  }
}
</script>

<style scoped>
.header_menu {
  position: relative;
}

.header {
  height: 125px;
  width: 100%;
  position: fixed;
}

.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-logo a img {
  position: absolute;
  height: 100px;
  bottom: 0;
}

.header-nav {
  position: absolute;
  top: 0;
  right: 0;
  height: 125px;
  border-bottom: 8px solid #9B003F;
}

.header-nav a img {
  height: 45%;
  display: block;
  margin-top: 15%;

}

.header-nav ul {
  display: flex;
  justify-content: space-between;
}

.header-nav li {
  margin-right: 0;
  font-size: 10vb;
  font-family: "UD Digi Kyokasho NP-R";
}

.header-nav a {
  color: #000;
  text-decoration: none;
}



@media screen and (max-width: 768px) {
  .header {
    height: 20vw;
    background: #9B003F;
    top: 0;
    z-index: 20;
  }
  .header-logo a img {
    position: absolute;
    height: 15vw;
    top: 3vw;
  }
  .header-nav {
    display: none;
  }
  .hamburger_btn {
    width: 10vw;
    height: 10vw;
    position: absolute;
    cursor: pointer;
    z-index: 50;
    top: 4vw;
    right: 7vw;
  }
  .line {
  position: absolute;
  top: 0;
  left: 1vw;
  width: 10vw;
  height: 1vw;
  background: #D4AF37;
  text-align: center;
  }

  .line_01 {
  top: 2vw;
  transition: 0.4s ease;
  }

  .line_02 {
  top: 6vw;
  transition: 0.4s ease;
  }

  .line_03 {
  top: 10vw;
  transition: 0.4s ease;
  }

  .btn_line01 {
    transform: translateY(4vw) rotate(-45deg);
    transition: 0.4s ease;
  }
  .btn_line02 {
    transition: 0.4s ease;
    opacity: 0;
  }
  .btn_line03 {
    transform: translateY(-4vw) rotate(45deg);
    transition: 0.4s ease;
  }
  .header-nav {
    display: none;
  }
  .hamburger_menu-enter-active, .hamburger_menu-leave-active {
    transition: opacity 0.4s;
  }
  .hamburger_menu-enter, .hamburger_menu-leave-to {
    opacity: 0;
  }
  .hamburger_menu-leave, .hamburger_menu-enter-to{
    opacity: 1;
  }
  .hamburger_menu {
    background: #ffffff;
    margin-top: 20%;
    z-index: 10;
    width: 100%;
    height: 130vw;
    position: sticky;
  }
  .hamburger_menu ul {
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
  .hamburger_menu li {
    list-style: none;
    padding: 5vw;
  }
  .hamburger_menu a {
    text-decoration: none;
    font-family: "beautiful font";
    font-weight: bold;
    font-size: 8vw;
  }
  .hamburger_menu ul .about::before, .about::after {
    content: '';
    display: inline-block;
    background-image: url(../assets/和蒼会について.png);
    width: 15vw;
    height: 15vw;
    background-size: contain;
    vertical-align: middle;
  }

  .hamburger_menu ul .activty::before, .activty::after {
    content: '';
    display: inline-block;
    background-image: url(../assets/活動内容.png);
    width: 15vw;
    height: 15vw;
    background-size: contain;
    vertical-align: middle;
  }

  .hamburger_menu ul .faq::before, .faq::after {
    content: '';
    display: inline-block;
    background-image: url(../assets/よくある質問.png);
    width: 15vw;
    height: 15vw;
    background-size: contain;
    vertical-align: middle;
  }

  .hamburger_menu ul .contact::before, .contact::after {
    content: '';
    display: inline-block;
    background-image: url(../assets/お問い合わせ.png);
    width: 15vw;
    height: 15vw;
    background-size: contain;
    vertical-align: middle;
  }
}

@media screen and (max-width: 480px) {

}
</style>