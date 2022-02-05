<template>
  <pre>
    <code class="whitespace-pre bg-zinc-50 block max-w-lg mx-auto flex border-solid border border-gray-100">
      {{ code }}
    </code>
  </pre>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CodeBlock",
  props: {
    code: String
  }
});
</script>
