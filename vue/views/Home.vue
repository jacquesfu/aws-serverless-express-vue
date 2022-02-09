<template>
  <div class="home">
    <span class="font-bold">Server Status:</span>
    <StatusPill :text="status === 200 ? 'Operational' : 'Offline'" :status="status === 200 ? 'success' : 'error'" />
    <CodeBlock :code="JSON.stringify(data)" />
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import StatusPill from "@/components/StatusPill.vue";
import CodeBlock from "@/components/CodeBlock.vue"; // @ is an alias to /vue

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    StatusPill,
    CodeBlock,
  },
  data() {
    return {
      status: 500,
      data: {}
    }
  },
  async created() {
    console.log(process.env.VUE_APP_API_URL)
    const response = await fetch(`${process.env.VUE_APP_API_URL}/health`)
    this.status = response.status
    this.data = await response.json()
  }
});
</script>
