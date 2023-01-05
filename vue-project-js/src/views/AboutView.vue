<script setup>
import ComponentA from '../components/ComponentA.vue'
import ComponentB from '../components/ComponentB.vue'
</script>


<template>
  <ComponentB/>
</template>


<template>
  <div class="about">
    <h1>{{ title }} {{ $route.params.id }} </h1><br>
    <input type="text" ref="bug" name="target" placeholder="username" value="10" />
    <button @click="clickBtn()">Click</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: "This is an about page xxx"
    }
  },
  methods: {
    clickBtn() {
      console.log(this.$refs.bug.value)
      this.$refs['bug'].class.add("asds")
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
