<template>
  <footer class="footer pt-5 pb-3">
    <div class="container mb-2">
      <div class="row">
        <div class="col-md-6 flex-column">
          <a href="#">
            <img src="../../images/Logo.png" class="footer-logo" alt="Vin Chateau" />
          </a>
          <div class="footer-page row mt-4 mb-4">
            <div class="col">
              <ul>
                <li class="mb-2"><a href="#">會員專區</a></li>
                <li class="mb-2"><a href="#">知識充電站</a></li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li class="mb-2"><a href="#">貨品寄送資訊</a></li>
                <li class="mb-2">
                  <RouterLink to="/privacyPolicy" class="footer-link">隱私權政策</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- desktop -->
        <div class="d-none d-md-block col-6">
          <ul class="footer-social d-flex justify-content-end">
            <li>
              <a href="#"><img src="../../images/facebook.png" alt="facebook" /></a>
            </li>
            <li>
              <a href="#"><img src="../../images/instagram.png" alt="instagram" /></a>
            </li>
            <li>
              <a href="#"><img src="../../images/tiktok.png" alt="tiktok" /></a>
            </li>
          </ul>
          <div class="d-flex flex-column align-items-end">
            <ul class="footer-contact">
              <li class="pb-2">
                <img width="24px" class="pe-2" src="../../images/footerPhone.png" alt="phone" /><a
                  href="#"
                  >0912345678</a
                >
              </li>
              <li>
                <img width="24px" class="pe-2" src="../../images/footerMail.png" alt="email" /><a
                  href="#"
                  >vinchateau@mail.com</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- mobile -->
        <div class="col-12 d-md-none">
          <div class="d-flex flex-column">
            <ul class="footer-contact-mobile mb-4">
              <li class="pb-2">
                <img width="24px" class="pe-2" src="../../images/footerPhone.png" alt="phone" /><a
                  href="#"
                  >0912345678</a
                >
              </li>
              <li>
                <img width="24px" class="pe-2" src="../../images/footerMail.png" alt="email" /><a
                  href="#"
                  >vinchateau@mail.com</a
                >
              </li>
            </ul>
          </div>
          <ul class="footer-social-mobile d-flex justify-content-center">
            <li>
              <a href="#"><img src="../../images/facebook.png" alt="facebook" /></a>
            </li>
            <li>
              <a href="#"><img src="../../images/instagram.png" alt="instagram" /></a>
            </li>
            <li>
              <a href="#"><img src="../../images/tiktok.png" alt="tiktok" /></a>
            </li>
          </ul>
        </div>
      </div>
      <img width="100%" src="../../images/footerContainer.png" />
      <p class="text-center copyright">Copyright © 2024 Vin Chateau</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #f5ebd8;
  color: #4d403c;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
.footer-logo {
  width: 180px;
}
.footer-page li a {
  border-left: 4px solid #752725;
  padding-left: 20px;
  font-size: 20px;
}
.footer-link {
  border-left: 4px solid #752725;
  padding-left: 20px;
  font-size: 20px;
}
.footer-social {
  padding-top: 40px;
  padding-bottom: 40px;
  gap: 20px;
  li {
    padding: 10px;
    background-color: #fffbf5;
    border-radius: 8px;
    img {
      width: 32px;
    }
  }
}
.footer-social-mobile {
  gap: 8px;
  li {
    padding: 10px;
    background-color: #fffbf5;
    border-radius: 8px;
    img {
      width: 32px;
    }
  }
}
.copyright {
  padding-top: 20px;
  font-size: 14px;
}
</style>
