<template>
  <div id="app">
    <div>Vue3 Main</div>
    <ul>
      <li
        v-for="item in microApps"
        :key="item.name"
        @click="go(item.activeRule)"
        :style="{margin: '12px', cursor: 'pointer'}"
      >{{ item.name }}</li>
    </ul>
    <main>
      <div id="container"></div>
    </main>
  </div>
</template>

<script>
import microApps from './micro-apps';

export default {
  name: 'App',
  data() {
    return {
      microApps,
    };
  },
  methods: {
    go(href) {
      window.history.pushState({}, null, href);
    }
  }
}
</script>

<style>
</style>
