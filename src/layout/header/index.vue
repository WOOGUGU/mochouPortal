<template>
  <div class="headerLogo"></div>
  <div class="headerMenu">
    <n-menu :value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script setup lang="ts">
import { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

const activeKey = 'a-wild-sheep-chase'
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/home'
          }
        },
        'home'
      ),
    key: 'portal-home'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/artical-list'
          }
        },
        'artical-list'
      ),
    key: 'portal-artical-list'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/artical-info'
          }
        },
        'artical-info'
      ),
    key: 'portal-artical-info'
  }
]

</script>

<style lang="less" scoped>

</style>
