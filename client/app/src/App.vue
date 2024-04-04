<script>
import { defineComponent, ref } from 'vue'

import Items from "./components/Items.vue";
import AppHeader from "./components/layouts/Header.vue";
import AppFooter from "./components/layouts/Footer.vue";

export default defineComponent({
  components: { Items, AppFooter, AppHeader },
});
</script>

<template>
  <div>
    <AppHeader></AppHeader>
    <Items msg="Items"></Items>
    <AppFooter></AppFooter>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
body {
  font-family: "Lato", sans-serif;
}
</style>
