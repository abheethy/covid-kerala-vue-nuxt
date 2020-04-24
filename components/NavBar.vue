<template>
  <div class="nav">
    <h4 class="brand gradiant-color">Covid Kerala</h4>
    <h5 class="gradiant-color">Last updated on {{ parsedDate }}</h5>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  computed: {
    parsedDate() {
      const eventDate = new Date()
      return eventDate.toDateString()
    }
  }
}
</script>

<style scoped>
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  text-decoration: none;
}
.gradiant-color {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: linear-gradient(to right, #16c0b0, #84cf6a);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-bottom: 25px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
</style>
