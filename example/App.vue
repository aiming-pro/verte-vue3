<template>
  <div>
    <div>
      {{ value }}
    </div>
    <Verte v-model="value" model="hex" />
    <div>History {{ recentColors }}</div>
    <Verte v-model:colorHistory="other" />
    <Verte v-model:colorHistory="other" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Verte, useVerteStore } from '../src/verte';

const value = ref('');
const other = ref(['#000']);

const { recentColors } = useVerteStore({
  recentColors: ['#000', '#fff', '#ff0000'],
});

watch(
  recentColors,
  (value) => {
    console.log(value);
  },
  { deep: true }
);
</script>
