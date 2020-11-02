<template>
  <div id="trial">
    <div class="container">
      <div class="offer">
        <h2>2020 Renewal Series</h2>
        <p>
          Finally, a resolution you can stick to. Reconnect with your fitness
          goals in 2020 with four classes designed to ease you back into your
          routine.
        </p>
        <button>Take this challenge</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrialSection",
};
</script>

<style lang="scss" scoped>
#trial {
  background-image: url(../assets/images/yoga-girl.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 745px;
  width: 100%;
  position: relative;
  @media(max-width: 576px){
    height: 400px;
  }
  .offer {
    width: 490px;
    position: absolute;
    top: 40%; //cause white line holds place
    left: calc(50% - 350px);
      @media(max-width: 768px){
  left: calc(50% - 250px);
        }
     @media(max-width: 576px){
       width: auto;
       top: 60px;
  left: 0;
  margin: 0 30px;
  
      }
    p {
      font-size: 16px;
      margin: 26px 0 51px;
    }
  }
}
</style>
