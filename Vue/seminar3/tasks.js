const tasks = {
  data() {
    return {
      tasks: [],
      title: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        id: Date.now(),
        title: this.title,
      });
      this.title = "";
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((el) => id !== el.id);
    },
  },

  template: `
          <div>
          <input v-model="title" type="text" />
            <button @click="addTask">Добавить</button>
            <ul>
                <li v-for="task in tasks" :key="task.id">{{task.title}}
                <button @click="removeTask(task.id)">Удалить</button>
                </li>
        
      </ul>
          </div>
      `,
};
