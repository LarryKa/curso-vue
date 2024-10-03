<template>
  <section>
    <h1>Counter: {{ counter }}</h1>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';
interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);
// import { computed, ref } from 'vue';
// const counter = ref(props.value);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply px-5 py-1 bg-blue-500 hover:bg-blue-700 rounded mr-2;
}
</style>
