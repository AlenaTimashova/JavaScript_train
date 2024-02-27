const count = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },

  template: `
        <div>
        <button @click="increment"> + </button>
        <button @click="decrement"> - </button>
        <span>{{counter}}</span>
        </div>
    `,
};
