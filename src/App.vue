<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      list: {
        1: {
          name: "Вадим Немченко",
          id: 1,
          company: "Яндекс",
          department: "Игры",
          profession: "Разработчик",
        },
        2: {
          name: "Вадим Немченко",
          id: 2,
          company: "Яндекс",
          department: "Игры",
          profession: "Разработчик",
        },
        3: {
          name: "Вадим Немченко",
          id: 3,
          company: "Яндекс",
          department: "Игры",
          profession: "Разработчик",
        },
      }
    };
  },
  created() {
    if (!localStorage.list) {
      localStorage.list = JSON.stringify(this.list);
    }
  },
};
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: relative;
  }
</style>