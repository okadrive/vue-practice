<template>
  <section class="container">
    <div>
      <h1 class="title">
        Login
      </h1>
      <section class="ex__box">
        <form method="post">
          <p>
            <input
              type="text"
              name="username"
              v-model="input.username"
              placeholder="Username"
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              v-model="input.password"
              placeholder="Password"
            />
          </p>
        </form>
        <div class="links">
          <button type="button">ログイン</button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

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
