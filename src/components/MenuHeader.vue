<script>
export default {
    name: 'MenuHeader',
    data(){
      return{
        menu: [
          'Home',
          'Services',
          'Courses',
          'About',
          'FAQ',
          'Blog',
          'Contact Us'
        ] 
      }
    }
}; 
</script>

<template>
  <div>
    <ul >
      <li v-for="singleItem in menu"> {{ singleItem }}</li>
      
    </ul>
  </div>

</template>

<style lang="scss" scoped>
  li:first-child{
    color: #ffcd18;
  }


</style>