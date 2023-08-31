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
      console.log(this.todoList[index].done);
      if (this.todoList[index].done) {
        this.todoList[index].done = false;
      } else {
        this.todoList[index].done = true;
      }
    },
  },
}).mount("#app");
