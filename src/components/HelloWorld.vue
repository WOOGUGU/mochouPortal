<template>
  <h1>{{ msg }}</h1>

  <n-icon size="40" color="#0e7a0d">
    <FlowData />
  </n-icon>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button type="button" @click="age++">ageAdd</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userUsersStore } from '../store/user'
import { FlowData } from '@vicons/carbon'

const count = ref(0)
const store = userUsersStore()
const { name, age, sex } = storeToRefs(store)

defineProps<{ msg: string }>()

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
