<template>
  <section>
    <h1 className="text-3xl font-bold underline">Mi primera app</h1>
    <hr />
    <MyCounter :value="10" />
    <MyCounterScript :value="8" />
    <MyCounterScript2 :value="2" />
  </section>
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
