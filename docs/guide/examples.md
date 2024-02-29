---
sidebar: auto
---

<style>
  .verte__menu {
    background: var(--vp-c-bg);
  }

  .verte__input {
    border-color: rgb(118, 118, 118);
    border-style: solid;
    font-family: inherit;
    line-height: normal;
  }

  .slider__input {
    font-family: inherit;
    line-height: normal;
  }
</style>

# Examples

## Default Example

<verte-demo menuPosition="bottom"></verte-demo>

```vue
<template>
  <Verte />
</template>

<script setup>
import Verte from 'verte-vue3';
</script>
```

## Start Color

<verte-demo modelValue="#f0f"></verte-demo>

```vue
<Verte modelValue="#f0f"></Verte>
```

## Position menu

### Top

<verte-demo menuPosition="top"></verte-demo>

```vue
<Verte menuPosition="top"></Verte>
```

### Bottom

<verte-demo menuPosition="bottom"></verte-demo>

```vue
<Verte menuPosition="bottom"></Verte>
```

### Right

<verte-demo menuPosition="right"></verte-demo>

```vue
<Verte menuPosition="right"></Verte>
```

### Left

<verte-demo menuPosition="left"></verte-demo>

```vue
<Verte menuPosition="left"></Verte>
```

### Center

<verte-demo menuPosition="center"></verte-demo>

```vue
<Verte menuPosition="center"></Verte>
```

## Layout Customization

## Wheel Picker

<verte-demo picker="wheel"></verte-demo>

```vue
<Verte picker="wheel"></Verte>
```

## Custom Guide Icon

<verte-demo modelValue="#f0f">
  <svg viewBox="0 0 24 24">
    <path d="M0 20h24v4H0z"/>
    <path style="fill: #000" d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/>
  </svg>
</verte-demo>

```html
<Verte>
  <svg viewBox="0 0 24 24">
    <path d="M0 20h24v4H0z" />
    <path
      style="fill: #000"
      d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"
    />
  </svg>
</Verte>
```

### Widget

Display the component vertically at all times and disable dragging.

<verte-demo modelValue="#2426d3" display="widget"></verte-demo>

```vue
<Verte display="widget"></Verte>
```

### RGB Sliders

Display the component vertically using a trigger button and allow dragging.

<verte-demo modelValue="#f0f" display="widget" :rgbSliders="true"></verte-demo>

```vue
<Verte display="widget" :rgbSliders="true"></Verte>
```

### No Recent colors

Display the component vertically using a trigger button and allow dragging.

<verte-demo modelValue="#f0f" display="widget" :showHistory="false"></verte-demo>

```vue
<Verte display="widget" :showHistory="null"></Verte>
```

<style>
.verte {
  margin-top: 10px;
}
</style>
