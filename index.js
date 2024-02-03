/***
 * 1-masala:
 *       function NewAuto(auto) {
       const NewAuto = { ...auto };
       NewAuto.year *= 1;
       return NewAuto;
     }
     const Car = { year: 2019, name: "BYD", color: "Black" };
     const NewCarlayout = NewAuto(Car);
     console.log(NewCarlayout);
 *  
 *  2-masala:
 *   function Student(Name, age, classes) {
        this.Name = Name;
        this.age = age;
        this.classes = classes;
      }
      Student.prototype.MiddleMark = function () {
        let AllMark = 0;
        for (let i = 0; i < this.classes.length; i++) {
          AllMark += this.classes[i];
        }
        const MiddleMark = AllMark / this.classes.length;
        return MiddleMark;
      };
 * 3-masala:
   function Shape(type, color) {
        this.type = type;
   this.color = color;
     }
     function Circle(Radius, type, color) {
  Shape.call(this, type, color);
  this.form = "Circle";
  this.Radius = Radius;
     }

     function rectangle(length, height, type, color) {
  Shape.call(this, type, color);
  this.form = "rectangle";
  this.length = length;
  this.height = height;
     }
     const Circle = new Circle(10, "Circle", "white");
     console.log("circle:", Circle);
     const rectangle = new Rectangle(9, 2, "rectangle", "yellow");
     console.log("Rectangle:", rectangle);
 */

let AbdurahmonOpnion =
  " Sorry teacher,I don't understand other matters beacuse it is very difficult for we";
