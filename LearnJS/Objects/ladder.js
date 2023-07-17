let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

  // Для цепочки последовательных вызовов через точку нужно в каждом методе возвращать this.

  ladder.up().up().down().showStep().down().showStep().up().up().showStep(); // 1  0  2