# Value Binding

Verte supports two-way binding using `v-model` to bind the color value to your component data.

```vue
<template>
  <Verte v-model="color" picker="wheel" model="rgb" />
</template>

<script setup>
const color = ref('');
</script>
```

:::tip
The emitted color value will always be in the same configured color-model, the previous code will produce RGB color strings. i.e: `rgb(r,g,b)`.
:::
