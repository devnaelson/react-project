<!-- ComponentB.vue -->
<script>
import { store } from '../stores/store'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>From B: {{ store.count }}</template>
