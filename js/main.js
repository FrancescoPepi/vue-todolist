const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [
        {
          item: "latte",
          done: false,
        },
        {
          item: "pane",
          done: false,
        },
        {
          item: "uova",
          done: false,
        },
      ],
    };
  },
}).mount("#app");
