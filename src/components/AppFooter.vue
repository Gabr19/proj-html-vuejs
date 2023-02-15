<script>

export default {
    name: 'AppFooter'
}

</script>

<template>
<div class="container">
  <div class="container-center">
    <div class="left">
      <div>
        <img src="../images/mt-2236-home-logo.png" alt="">
      </div>
      <p>Copyright &copy; 2021. All Rights Reserved.</p>
    </div>

    <div class="center">
      <div>
        <div>
          <h4>Follow Us</h4>
        </div>
        <div>
          <div>
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </div>
          <div>
            <font-awesome-icon icon="fa-brands fa-telegram" />
          </div>
          <div>
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
        </div>
      </div>

    </div>

    <div class="right">
      <p>
        Subscribe to get the latest news, course updates, discounts, events
      </p>
      <div>
        <input id="input-footer" type="text" placeholder="Enter your e-mail here *">
      </div>
      <button class="button-yellow">
        Subscribe
      </button>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>

</style>