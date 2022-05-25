'use strict';

let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];


let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const findIntersection = (courses, range) => 
courses.filter(
  course => { 
    let startPrice = range[0];
    let endPrice = range[1];
    let courseStartPrice = course.prices[0];
    let courseEndPrice = course.prices[1];
    if(startPrice === null) {
      startPrice = 0;
    }

    if(endPrice === null) {
      endPrice = Infinity;
    }

    if(courseStartPrice === null) {
      courseStartPrice = 0;
    }

    if(courseEndPrice === null) {
      courseEndPrice = Infinity;
    }

   return startPrice < courseEndPrice && courseStartPrice < endPrice; 
  }
  )

  console.log(findIntersection(courses, requiredRange1));
  console.log(findIntersection(courses, requiredRange2));
  console.log(findIntersection(courses, requiredRange3));
  //console.log(findIntersection(courses, [0, 0]));
  console.log(findIntersection(courses, [100, 100]));
  console.log(findIntersection(courses, [250, 250]));