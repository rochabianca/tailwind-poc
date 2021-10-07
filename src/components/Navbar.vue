<template>
<div id="nav" class="shadow-sm mb-6 p-3">
  <div class="container mx-auto">
    <div class="flex justify-between content-center items-center">
      <img src="@/assets/logo.png" class="self-start logo" alt="Logo">
      <ul class="flex">
        <li class="pr-6">
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/about">About</router-link></li>
        <li></li>
      </ul>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang='scss' scoped>
.logo {
  max-width: 50px;
}
</style>
