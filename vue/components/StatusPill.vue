<template>
  <span
      class="rounded-full m-4 py-2 px-4 text-white inline-block"
      :class="status === 'error' ? 'bg-red-500' : 'bg-green-600'">
    {{ text }}
  </span>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"; 

export default defineComponent({
  name: 'StatusPill',
  props: {
    text: String,
    status: String as PropType<"error" | "success">
  }
})
</script>
