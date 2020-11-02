<template>
  <div id="about">
    <div class="container flexible">
      <div class="info">
        <h2>Everyone's yoga</h2>
        <p>
          We offers over 4,000 professionally-filmed online yoga classes taught
          by experienced, certified yoga teachers to customers around the world.
          We believe that yoga should be accessible to everyone and our classes
          are designed to give you an in-studio experience, at an affordable
          price, in your own home.
        </p>
        <div class="video-box">
          <img
            src="@/assets/images/video-image.png"
            alt="girl yoga lotus-pose"
            class="video"
          />
          <img
            src="@/assets/images/play-button.png"
            alt="play button"
            class="play-button"
          />
        </div>
      </div>
      <ul class="list">
        <li v-for="yoga in yogaItems" :key="yoga.title">
          <img :src="yoga.image" :alt="yoga.title" />
          <div class="list-item">
            <h3>{{ yoga.title }}</h3>
            <p>
              {{ yoga.text }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      yogaItems: [
        {
          title: "Balance Body & Mind",
          text:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been industry's standard.",
          image: require("../assets/images/candle.png"),
        },
        {
          title: "Weight Loss",
          text:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been industry's standard.",
          image: require("../assets/images/body.png"),
        },
        {
          title: "Meditation Practice",
          text:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been industry's standard.",
          image: require("../assets/images/hand.png"),
        },
        {
          title: "Yoga is a way to freedom",
          text:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been industry's standard.",
          image: require("../assets/images/dove.png"),
        },
        {
          title: "Increased energy",
          text:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been industry's standard.",
          image: require("../assets/images/power.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#about {
  background-image: url(../assets/images/bg-section-2.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  .flexible {
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .info {
      width: 60%;
      margin: 110px 68px 0 0;
      @media (max-width: 1200px) {
        margin: 110px 48px 110px 0;
      }
      @media (max-width: 992px) {
        margin: 110px 28px 110px 0;
      }
      @media (max-width: 768px) {
        margin: 60px 28px 0 0;
        width: 100%;
      }
      @media (max-width: 576px) {
        margin: 40px 28px 0 0;
        width: 100%;
      }
      p {
        margin: 23px 0 50px;
      }
      .video-box {
        position: relative;
        width: 100%;
        height: auto;
        .video {
          width: 100%;
        }
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .list {
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 0;
    @media (max-width: 1200px) {
      margin-top: 68px;
    }
    @media (max-width: 992px) {
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }

    li {
      display: flex;
      margin-bottom: 32px;
      margin-bottom: 25px;
      img {
        width: $icon-width;
        height: $icon-height;
        align-self: center;
        @media (max-width: 992px) {
          width: 50px;
          height: 50px;
        }
      }
      .list-item {
        margin-left: 28px;
        @media (max-width: 992px) {
          margin-left: 18px;
        }
        h3 {
          margin-bottom: 20px;
          @media (max-width: 992px) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
