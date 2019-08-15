<template>
  <div class="top">
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    <p v-else>
      no text
    </p>
    <p><input type="text" v-model="msg" /></p>
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    clear() {
      this.msg = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
