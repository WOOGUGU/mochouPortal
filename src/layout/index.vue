<template>
  <n-layout class="layoutHome">
    <n-layout-header bordered>
      <portalHeader />
    </n-layout-header>
    <n-layout-content bordered>
      <router-view />
    </n-layout-content>
    <n-layout-footer bordered>
      <portalFooter />
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts">
import portalHeader from './header/index.vue'
import portalFooter from './footer/index.vue'

</script>

<style lang="less" scoped>
.layoutHome {
  min-height: 100vh;

  .n-layout-header {
    background-color: aliceblue;
  }

  .n-layout-content {
    background-color: aquamarine;
  }

  .n-layout-footer {
    background-color: antiquewhite;
  }

}
</style>
