<template>
  <p>Response from <code class="bg-zinc-100 px-2 py-1 rounded-sm">GET /status</code></p>
  <pre>
    <code class="rounded-sm whitespace-pre bg-zinc-100 block max-w-lg mx-auto flex border-solid border border-gray-100">
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
