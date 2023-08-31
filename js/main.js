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
      newTodo: "",
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
    pushNew() {
      if (!this.newTodo == "")
        this.todoList.unshift({
          item: this.newTodo,
          done: false,
        });
    },
  },
}).mount("#app");
