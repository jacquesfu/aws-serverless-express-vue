<template>
  <div class="home">
    <span class="font-bold">Server Status:</span>
    <StatusPill text="Operational" :status="status === 200 ? 'success' : 'error'" />
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import StatusPill from "@/components/StatusPill.vue"; // @ is an alias to /vue

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    StatusPill
  },
  data() {
    return {
      status: 500
    }
  },
  async created() {
    const response = await fetch("http://localhost:3000/health")
    this.status = response.status
  }
});
</script>
