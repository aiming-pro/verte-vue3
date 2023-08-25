<p align="center">
  <a href="https://github.com/aiming-pro/verte-vue3" target="_blank">
    <img width="400" alt="verte" src="https://aiming-pro.github.io/verte-vue3/verte.png">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/verte-vue3.svg)](https://www.npmjs.com/package/verte-vue3)

# Verte Vue 3

> This is a Vue 3 fork of the [original Verte](https://github.com/baianat/verte).

A Complete Vue.js Color Picker Component

## Features

- Multiple Color Models support: RGB, HSL, and HEX.
- SSR Friendly.
- Small file size, only 7kb gzipped.
- Two way binding support.

## Getting Started

### Installation

First step is to install it using `yarn` or `npm`:

```bash
npm install verte-vue3 --save

# or use yarn
yarn add verte-vue3
```

### Basic usage

```vue
<template>
  <Verte picker="square" model="rgb"></Verte>
</template>

<script setup>
import Verte from 'verte-vue3';
import 'verte-vue3/dist/verte.css';
</script>
```

## License

MIT
