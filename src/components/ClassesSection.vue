<template>
  <div id="classes">
    <div class="container flexible">
      <img src="@/assets/images/star-classes.png" alt=" mandala picture" />
      <h2>Our Classes</h2>
      <div class="gallery">
        <div
          class="column"
          v-for="gallery in galleryItems"
          :key="gallery.title"
        >
          <img :src="gallery.image" :alt="gallery.title" />
          <div class="content">
            <h3>{{ gallery.title }}</h3>
            <div class="schedule">
              <font-awesome-icon class="icon" icon="clock" />
              <span>{{ gallery.time }}</span>
            </div>
            <div class="schedule">
              <font-awesome-icon class="icon" icon="user" />
              <span>{{ gallery.name }}</span>
            </div>
            <div class="schedule">
              <font-awesome-icon class="icon" icon="level-up-alt" />
              <span>{{ gallery.level }}</span>
            </div>
            <p>{{ gallery.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassesSection",
  data() {
    return {
      galleryItems: [
        {
          title: "Seated and Supine Poses for Beginners",
          image: require("../assets/images/classes-1.png"),
          text: "Welcome to part 5 of our beginner series with Simon Park!",
          time: "7:00 am — 11:00 am",
          name: "Simon Park",
          level: "Beginner",
        },
        {
          title: "Work Towards Compass Pose",
          image: require("../assets/images/classes-2.png"),
          text:
            "Stretch shoulders, hips, and hamstrings as you work towards Compass Pose (Parivrtta Surya Yantrasana).",
          time: "7:00 am — 11:00 am",
          name: "Simon Park",
          level: "Advanced",
        },
        {
          title: "Handstand Variations and Transitions",
          image: require("../assets/images/classes-3.png"),
          text:
            "Explore handstand variations and transitions in this advanced class. A brief warm up will prepare you to play with inversions!",
          time: "7:00 am — 11:00 am",
          name: "Simon Park",
          level: "Advanced",
        },
        {
          title: "Advanced backbending practise",
          image: require("../assets/images/classes-4.png"),
          text:
            "Amanda Botur has created a class to help you prepare for the hormonal shifts and rising emotions that may occur in the days ...",
          time: "8:00 am — 12:00 am",
          name: "Amanda Botur",
          level: "Beginner",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#classes {
  background-image: url(../assets/images/bg-section-3.png);
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    flex-direction: column;
    align-items: center;
    h2 {
      margin: 20px 0 56px 0;
       @media(max-width: 768px){
    margin-bottom: 36px;
      }
      @media(max-width: 576px){
   margin-bottom: 20px;
      }
    }
    img {
      width: 126px;
    }
  }

  .gallery {
    display: flex;
    flex-direction: row;
     @media(max-width: 992px){
    flex-wrap: wrap;
      }

    .column {
      width: 25%;
       @media(max-width: 992px){
    width: 50%;
      }
      @media(max-width: 576px){
   width: 100%;
      }
      img {
        width: 100%;
      }
      .content {
        padding: 14px;
         @media(max-width: 576px){
   padding-left: 30px;
      }
      }
      h3 {
        margin: 15px 0;
         @media(max-width: 992px){
    margin-top:0;
      }
      }
      .schedule {
        display: flex;
        margin-bottom: 10px;
        span {
          font-size: 13px;
          margin-left: 13px;
          color: $grey;
        }
        //paint the icons
        svg.icon path {
          color: $accent;
        }
      }
    }
  }
}
</style>
