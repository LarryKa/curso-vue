import { computed, ref } from 'vue';

export const useCounter = (initalValue: number) => {
  const counter = ref(initalValue);
  const squareCounter = computed(() => counter.value * counter.value);
  return {
    counter,
    squareCounter,
  };
};
