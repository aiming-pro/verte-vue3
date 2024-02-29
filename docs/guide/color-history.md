# Color History

Verte offers a couple of ways to maintain the list of recent colors picked using the picker.

## Internal Store

By default all Verte pickers share the same color history. The default can be configured with a composable.

```vue
<script setup>
import { useVerteStore } from 'verte-vue3';

useVerteStore({ recentColors: localStorage.getItem('colors') });
</script>
```

You can subscribe to the changes of the recent colors by using a deep watcher on `recentColors` in the store:

```vue
<script setup>
import { useVerteStore } from 'verte-vue3';

// fetch and save the recent colors to the localstorage.
const { recentColors } = useVerteStore({
  recentColors: localStorage.getItem('colors'),
});
watch(
  recentColors,
  (colors) => {
    localStorage.setItem('colors', JSON.stringify(colors));
  },
  { deep: true }
);
</script>
```

## Using Props

Verte accepts a `colorHistory` prop which is an array of color strings, this will disable sharing between verte components and each one will have its own history.

```vue
<Verte :showHistory="true" :colorHistory="list" />
```

You could allow sharing between some verte components using `v-model`:

```vue
<Verte :showHistory="true" v-model:colorHistory="list" />

<Verte :showHistory="true" v-model:colorHistory="list" />
```

::: tip
When providing the `colorHistory` prop, the Verte store does not handle any changes to the history so you might need to handle persisting the color histroy using conventional Vue patterns.
:::
