<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { browserName, browserVersion } from "./utils";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    return {
      msg: browserName + "-" + browserVersion,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
