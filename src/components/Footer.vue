<template>
  <div class="footer-wrap">
    <footer class="footer">
      <div class="SNS-wrap">
        <ul>
          <li class="Twitter"><a href="https://twitter.com/wasoukai"><img src="../assets/Twitter.png" alt=""></a></li>
          <li class="Instagram"><a href="https://www.instagram.com/p/B_9Se9dAPjc/"><img src="../assets/Instagram.png" alt=""></a></li>
          <li class="Gmail"><a href="mailto:tokyo.wasoukai2020@gmail.com"><img src="../assets/Gmail.png" alt=""></a></li>
          <li class="Line"><a href="https://t.co/2py3rqZDe7?amp=1"><img src="../assets/Line.png" alt=""></a></li>
        </ul>
      </div>
      <div class="copyright">
        <p>©2021 東京着物インカレサークル和蒼会</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-wrap {
  min-height: 100vh; 
  position: relative;
  box-sizing: border-box;
}

.footer {
  position: absolute;
  bottom: 0;
  border-top: 8px solid #9B003F;
  height: 125px;
  width: 100%;
}
.SNS-wrap ul {
  display: flex;
  justify-content: center;
}
.SNS-wrap li a img {
  height: 50%;
  padding-top: 15%;
}
.copyright p {
  font-family: "UD Digi Kyokasho NP-R";
  font-weight: bold;
  text-align: center; 
}

@media screen and (max-width: 768px) {
  .footer {
    border-top: 5px solid #9B003F;
  }
  .SNS-wrap li a img {
    height: 15vw;
    padding-top: 15%;
  }
  .copyright p {
    font-size: 4vw; 
    margin-top: 3vw;
  }
}
</style>