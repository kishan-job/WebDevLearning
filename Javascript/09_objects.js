// In JavaScript, an object is a fundamental data type that allows you to storing collections of key-value pairs. 

var user1 = {
  firstName: "kishan",
  lastName: "kancharla",
  coursesEnrolled: [],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: 10001,
  },
  setCourses: function (course) {
    this.coursesEnrolled.push(course);
    console.log(this.coursesEnrolled);
    return this.coursesEnrolled.length;
  },
};

user1.setCourses("React Js");
user1.setCourses("javaScript");
console.log(user1.coursesEnrolled);

var lengts = user1.setCourses("8");
console.log(lengts);






//**********************important*************************** */
const person = {
  fistName: "kishan",
  lastName: "kancharla",
  courses: [],

  // for arrow function didn't have this 
  courseEnrolled: (course) => {
    person.courses.push(course);
  },

  // for regular function have this 
  courseCount: function () {
    console.log(this.courses.length);
  },
};

person.courseEnrolled("react") // this is not regular funtion call this is method call
person.courseCount()