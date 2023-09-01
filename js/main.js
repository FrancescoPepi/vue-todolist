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
      newTodo: {
        item: "",
        done: false,
      },
      error: {
        msg: "",
        type: "",
        done: false,
      },
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
      const newTodoCopy = { ...this.newTodo };
      if (newTodoCopy.item.length <= 1) {
        this.error.msg = "l'item è troppo corto";
        this.error.done = true;
        console.log("no");
        return;
      } else {
        this.error.done = false;
      }
      for (element in this.todoList) {
        if (this.todoList[element].item.includes(newTodoCopy.item)) {
          this.error.msg = "l'item inserito è già nella lista";
          this.error.done = true;
          console.log("no");
          return;
        } else {
          this.error.done = false;
        }
      }
      this.todoList.unshift(newTodoCopy);
    },
  },
}).mount("#app");
