/* Low coupling & high cohesion principle
Принцип построения архитектуры приложения, при котором внутри компонента (в данном случае класса)
идет высокая степень сочетаемости элементов (методов и конструкторов), что позволяет создать самодостаточный 
элемент и переиспользовать его в других системах. При этом между отдельными элементами поддерживается низкая 
связанность, что позволяет классам быть независимыми друг от друга. И также положительно влияет на гибкость кода, 
его поддерживаемость и переиспользование.
 */


/**
 * Abstract class for geometric shapes.
 * @class
 */

class Shape {

    /**
     * Метод вычисления площади фигуры
     * @abstract
     * @returns {number}
     */

    getArea() {
        throw new Error('Area method should be implemented')
    }

    /**
        * Метод вычисления периметра фигуры
        * @abstract
        * @returns {number}
        */

    getPerimeter() {
        throw new Error('Perimeter method should be implemented')
    }
}

/**
* Создает экземпляр Circle(круга).
* @class
* @augments Shape
*/

class Circle extends Shape {
    /**
    * 
    * @constructor
    * @this  {Circle}
    * @param {number} radius - Радиус окружности.
    */

    constructor(radius) {
        super()
        this.radius = radius
    }

    /**
     * Подсчитывает площадь окружности
     *
     * @this   {Circle}
     * @returns {number} площадь окружности.
     */

    getArea() {
        return (this.radius ** 2) * Math.PI
    }

    /**
     * Подсчитывает длину окружности
     *
     * @this   {Circle}
     * @returns {number} Длина окружности.
     */

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
/**
* Создает экземпляр Rect(прямоугольника).
* @class
* @augments Shape
*/

class Rect extends Shape {
    /**
    *
    * @constructor
    * @this  {Rect}
    * @param {number} width - Ширина прямоугольника.
    * @param {number} length - Длина прямоугольника.
    */
    constructor(width, length) {
        super()
        this.width = width
        this.length = length
    }

    /**
     * Подсчитывает площадь прямоугольника
     *
     * @this   {Rect}
     * @returns {number} - площадь прямоугольника.
     */

    getArea() {
        return this.width * this.length
    }

    /**
    * Подсчитывает периметр прямоугольника
    *
    * @this   {Rect}
    * @returns {number} - периметр прямоугольника
    */

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}
/**
* Создает экземпляр Triangle(треугольника).
* @class
* @augments Shape
*/

class Triangle extends Shape {

    /**
    * @constructor
    * @this  {Triangle}
    * @param {number} side1 - Первая сторона треугольника
    * @param {number} side2 - Вторая сторона треугольника
    * @param {number} side3 - Третья сторона треугольника
    */

    constructor(side1, side2, side3) {
        super()
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    /**
     * Проверяет существует ли треугольник с указанными сторонами
     * @this   {Triangle}
     * @returns {boolean} - возвращает истину, если треугольник с такими сторонами существует, в противном случае - ложь
     */

    exists(){
        return (this.side1 + this.side2) > this.side3 
                && (this.side1 + this.side3) > this.side2 
                && (this.side2 + this.side3) > this.side1
    }


/**
 * Подсчитывает периметр треугольника
 *
 * @this   {Triangle}
 * @returns {number} - периметр треугольника
 */


getPerimeter() {
    return this.side1 + this.side2 + this.side3;
}

/**
 * Подсчитывает площадь треугольника
 *
 * @this   {Triangle}
 * @returns {number} - площадь треугольника
 */

getArea() {
    const halfPerimetr = this.getPerimeter() / 2;
    return Math.sqrt(halfPerimetr * (halfPerimetr - this.side1) * (halfPerimetr - this.side2) * (halfPerimetr - this.side3));
}

}

/**
 * Класс для подсчета площади фигур
 * @class
 */

class AreaCalculator {
    /**
     * Принимает фигуры в массив
     * @constructor
     * @param {Shape} shapes - геометрические фигуры
     */
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    /**
     * Функция ведет подсчет суммы площадей фигур, переданных в массив класса AreaCalculator
     * @returns {number} - сумма площадей фигур
     */

    sum() {
        return this.shapes.reduce((sum, shape) => {
          sum += shape.getArea();
          return sum;
        }, 0)
      }
}


// Пример использования конкретных классов геометрических фигур

const circle = new Circle(5);
console.log(circle.getArea());
console.log(circle.getPerimeter());

const rectangle = new Rect(4, 5);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());

const triangle = new Triangle(20, 15, 18);
if (triangle.exists()) {
    console.log(triangle.getArea());
    console.log(triangle.getPerimeter());
} else {
    console.log("Треугольника с указанными сторонами не существует")
}

const calc = new AreaCalculator([circle, triangle, rectangle]);
console.log(calc.sum());



