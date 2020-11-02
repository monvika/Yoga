<template>
  <div id="header">
    <div class="header-inner">
      <div class="header-top">
        <img class="logo" src="@/assets/images/mini-logo.png" alt="mandala" />
        <div class="nav">
          <MenuComponent />
          <button>Start your free trial</button>
        </div>
      </div>
      <h1>
        Be Happy
        <br />
        <span class="header-row2">Be Healthy</span>
        <br />
        <span class="header-row3">Be Infinity</span>
      </h1>
    </div>
  </div>
</template>

<script>
import MenuComponent from "./MenuComponent";
export default {
  name: "HeaderSection",
  components: {
    MenuComponent,
  },
};
</script>
<style lang="scss" scoped>
#header {
  background-image: url(../assets/images/header.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 984px;
  @media (max-width: 576px) {
    height: 400px;
  }
  margin: 0 auto;
  .header-inner {
    margin: 0 50px;
    .header-top {
      display: flex;
      .logo {
        width: $logo-width;
        height: $logo-height;
        margin-top: 15px;
        @media (max-width: 576px) {
            width: 50px;
             height: 50px;
          }
      }
      .nav {
        display: flex;
        margin-left: auto; /*justify-content: flex-end doesn't work for this;*/
        button {
          margin: 26px 0 14px;
          cursor: pointer;
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
    }
  }
  h1 {
    color: $header-color;
    font-size: 72px;
    position: absolute; //problem with centering
    right: 375px;
    top: 290px;
    @media (max-width: 992px) {
      font-size: 52px;
    }
    @media (max-width: 768px) {
      right: 0;
      left: 100px;
    }
    @media (max-width: 576px) {
      font-size: 28px;
      top: 120px;
      right: 0;
      left: 50px;
    }
    .header-row2 {
      padding-left: 36px;
    }
    .header-row3 {
      padding-left: 72px;
    }
  }
}
</style>
