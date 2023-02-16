<script>
import MenuHeader from '../components/MenuHeader.vue'
export default {
    name: 'AppHeader',
  data() {
    return {
      
    };
  },
  components: {
    MenuHeader
  }
}
; 
</script>

<template>
  <div class="container-header">
    <div class="top-header">
      <div class="container-center-top-header">
        <div class="left">
          <div>
            <font-awesome-icon id="icon-top-header"  class="yellow" icon="fa-solid fa-location-dot" />
            6767 Santa Monica Blvd, Los Angeles, CA 90038
          </div>
          <div id="home-logo">
            <img src="../images/mt-2236-home-logo.png" alt="">
          </div>
        </div>

        <div class="right">
          <div id="top-right">
            <div>
              <font-awesome-icon class="yellow" icon="fa-solid fa-phone" />
              Call Now 123-456-7890</div>
            <div>
              <button class="button-white">Donate</button>

            </div>
          </div>
          <div id="bottom-right">
            <MenuHeader/>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-header">
      <div id="icon-phone-round" >
        <font-awesome-icon class="yellow" icon="fa-solid fa-phone" />

      </div>
      <div class="container-center">
        <div class="only-left">
          <div>
            <button class="button-yellow-mini"> WELCOME</button>
          </div>
          <div>
            <h1>
              ACADEMIC CHESS FOR <span class="yellow italic">EVERYONE</span> 
            </h1>
          </div>
          <div>
            <h4>
              We are dedicated to broadening and developing chess as art,
              recreation, and as a significant element of culture in Northern California.
            </h4>
          </div>
          <div class="bottom-header-button">
            <button class="button-yellow">
              Enroll Now
            </button>

            <button id="btn-header-learn-more">
              Learn More
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>

  .container-header{
    background-image: url(../images/mt-2236-home-bg1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  


</style>