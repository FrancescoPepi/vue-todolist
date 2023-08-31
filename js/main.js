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
  methods: {
    barra(index) {
      if (this.todoList[index].done) {
        this.todoList[index].done = false;
      } else {
        this.todoList[index].done = true;
      }
    },
    removeItem(index) {
      this.todoList.splice(index, 1);
    },
  },
}).mount("#app");
