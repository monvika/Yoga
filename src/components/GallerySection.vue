<template>
  <div id="gallery">
    <div class="container">
      <div class="title">
        <h6>Tap into your inner fountain of youth.</h6>
        <p>
          Access hundreds of yoga classes shot in natural studios around the
          world.
          <br />Unlimited access for $15/month.
        </p>
      </div>
      <div class="gallery flexible">
        <img src="@/assets/images/gallery-1.jpg" alt="yoga girls" />
        <img src="@/assets/images/gallery-2.jpg" alt="yoga girls" />
        <img src="@/assets/images/gallery-3.jpg" alt="yoga girls" />
        <img
          src="@/assets/images/gallery-4.jpg"
          alt="yoga girls"
          class="image-wide"
        />
        <img src="@/assets/images/gallery-5.jpg" alt="yoga girls" />
        <img
          v-if="imagesLoaded"
          src="@/assets/images/gallery-1.jpg"
          alt="yoga girls"
        />
        <img
          v-if="imagesLoaded"
          src="@/assets/images/gallery-2.jpg"
          alt="yoga girls"
        />
        <img
          v-if="imagesLoaded"
          src="@/assets/images/gallery-3.jpg"
          alt="yoga girls"
        />
      </div>
      <!--
      active button - change the color
      rename button while showing more or less-->
      <button
        @click="loadMore"
        :class="{ active: imagesLoaded }"
        v-text="imagesLoaded ? 'Show less' : 'Load more'"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "GallerySection",
  data() {
    return {
      imagesLoaded: false,
    };
  },
  methods: {
    loadMore: function () {
      //show when clicked = hide after next click
      this.imagesLoaded = !this.imagesLoaded;
    },
  },
};
</script>
<style lang="scss" scoped>
#gallery {
  background-color: $white;
  .title {
    margin: 122px auto;
    @media (max-width: 992px) {
      margin: 71px auto;
    }
    @media (max-width: 768px) {
      margin: 61px auto;
    }
    @media (max-width: 576px) {
      margin: 51px auto;
    }
  }
  h6 {
    font-size: 32px;
    margin-bottom: 27px;
    color: $grafite;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  p {
    text-align: center;
  }
  .gallery {
    flex-wrap: wrap;
    justify-content: space-between;
    .image-wide {
      object-fit: cover;
      object-position: left;
      border-radius: 25px;
    }
    img {
      padding-bottom: 30px;
      @media (max-width: 1200px) {
        width: 50%;
        padding: 15px;
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
  .active {
    background: #4c77eb;
  }
  button {
    @media (max-width: 576px) {
      margin-left: 15px;
    }
  }
}
</style>
