<template>
  <div id="menu">
    <div class="mobile-menu" :class="{ show: !isHamburguer }">
      <ul>
        <li v-for="menu in menuItems" :key="menu.title">
          <a href="#">{{ menu.title }}</a>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="menu in menuItems" :key="menu.title">
        <a href="#">{{ menu.title }}</a>
      </li>
    </ul>
    <div
      class="hamburger"
      @click="toggleMenu()"
      :class="{ change: !isHamburguer }"
    >
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  methods: {
    toggleMenu: function () {
      this.isHamburguer = !this.isHamburguer;
      //alert("click working")
    },
  },
  data() {
    return {
      isHamburguer: true,
      menuItems: [
        {
          title: "Home",
        },
        {
          title: "About Us",
        },
        {
          title: "Classes",
        },
        {
          title: "Pricing",
        },
        {
          title: "Login",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.mobile-menu {
  background-color: $white;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  z-index: 1;
  display: none;
  &.show {
    display: block;
  }
  @media (min-width: 768px) {
    display: none;
    &.show {
      display: none;
    }
  }
  ul {
    display: block;
    li {
      padding: 15px 0;
      border-bottom: 2px solid  $accent;
      a {
        font-size: 24px;
        font-weight: bold;
        &:hover {
          color: $accent;
          cursor: pointer;
        }
      }
    }
  }
}
ul {
  display: flex;
  margin-top: 38px;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
  li {
    list-style: none;
    margin: 0 14px;
    a {
      text-decoration: none;
      color: $menu;
      font-size: 16px;
    }
  }
}
.hamburger {
  display: none;
  z-index: 9;
  position: relative;
  @media (max-width: 768px) {
    display: inline-block;
    cursor: pointer;
    margin-top: 25px;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 2px;
    background-color: $accent;
    margin: 6px 0;
    transition: 0.4s;
  }
  &.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-3px, 4px);
    transform: rotate(-45deg) translate(-3px, 4px);
  }

  &.change .bar2 {
    opacity: 0;
  }

  &.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
}
</style>
