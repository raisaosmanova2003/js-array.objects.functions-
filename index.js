// ? 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// let eded = 345; 
// let cəm = 0;
// let hasil = 1;
// let rəqəm;
// let rəqəmlər = eded;

// while (rəqəmlər > 0) {
//     rəqəm = rəqəmlər % 10;
//     cəm += rəqəm;
//     hasil *= rəqəm;
//     rəqəmlər = (rəqəmlər - rəqəm) 
// }


// console.log(`${eded} ədədinin rəqəmlərinin cəmi: ${cəm}`);
// console.log(`${eded} ədədinin rəqəmlərinin hasil: ${hasil}`);



// ? 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let eded=24
// function bolenleri(eded) {
//     for (let index = 0; index <= eded; index++) {
//         if(eded%index==0) {
//             console.log(index);
//         }
        
//     }
// }
// bolenleri(eded)
// ? 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// function bolenlerinSayi(eded) {
//     let bolenlerinSayi = 0;
//     for (let i = 1; i <= eded; i++) {
//         if (eded % i === 0) {
//             bolenlerinSayi++;
//         }
//     }
//     return bolenlerinSayi;
// }

// let eded = 24; 
// let say = bolenlerinSayi(eded);
// console.log(`${eded} ədədinin bölənlərinin sayı: ${say}`);


// ? 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın: 0*0=0,1*1=1 ve s.

// for (let i = 0; i <= 10; i++) {
//     let hasil = i * i;
//     console.log(`${i} x ${i} = ${hasil}`);
// }

// ? 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın

// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//     let i_kvadrat = i ** 2;
//     let i_kub = i ** 3;
//     console.log(`${i}    ${i_kvadrat}    ${i_kub}`);
// }

// ? 6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin


// ? 7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let tekCem = 0;
// let cutCem = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         cutCem += i; 
//     } else {
//         tekCem += i; 
//     }
// }

// console.log("0 - 100 arası tək ədədlərin cəmi:", tekCem);
// console.log("0 - 100 arası cüt ədədlərin cəmi:", cutCem);

// ! ARRAYS



// ? # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];
  
//   const uzunElementler = [];
//   for (let i = 0; i < webTechs.length; i++) {
//       const tech = webTechs[i];
//       if (tech.length > 4) {
//           uzunElementler.push(tech);
//       }
//   }
  
//   console.log(uzunElementler);
  


// ? # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın
//   const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  

//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//       const product = products[i];
//       total += product.price;
//   }
  
//   const average = total / products.length;
  
//   console.log("Məhsulların cəmi qiyməti:", total);
//   console.log("Məhsulların orta qiyməti:", average); 
  

// ? countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın



// ? Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.
// function findNumberOfDivisors(n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findNumberOfDivisors(24)); 

// ? daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// function findSpaceCounts(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findSpaceCounts("salam necesen? "));

// ! function

// ?  1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir
// function printFullName(firstName, lastName) {
//     return `I am ${firstName} ${lastName}`;
// }

// console.log(printFullName("Jhon", "Doe")); 


// ?  2) daxil edilən ədədin kvadratını return edən funksiya yazın
// function square(number) {
//     return number **2;
// }

// console.log(square(5));

// ? 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.
// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }
// function subtruct(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }

// console.log(sum(2, 3));      
// console.log(multiply(2, 3));  
// console.log(subtruct(2, 3));  
// console.log(divide(2, 3));    



// ? Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return a / b;
//         default:
//             return "operatoru duzgun daxil edin";
//     }
// }

// console.log(calculator(2, 5, "+")); 
// console.log(calculator(2, 5, "*")); 
// console.log(calculator(2, 5, "/")); 
// console.log(calculator(2, 5, "-")); 

// ?  arrayın ilk və son elementinin cəmini return edən function yazın
// const getSum = (array) => {
//     const first = array[0];
//     const last = array[array.length - 1];
//     return first + last;
// };


// console.log(getSum([1, 2, 3]));            
// console.log(getSum([80, 5, 58, 17, 100])); 
// console.log(getSum([15, -500, 0, 50]));    


// ? arrayın bütün elementlərinin cəmini qaytaran funksiya yazın
// const getSum = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// };


// console.log(getSum([1, 2, 3]));           
// console.log(getSum([80, 5, 58, 17, 100])); 
// console.log(getSum([15, -500, 0, 50]));     

// ?  arrayin daxilindəki max elementi return edən funksiya yazın
// const getMax = (array) => {
//     if (array.length === 0) {
//         return "Array boşdur";
//     }
//     let max = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// };


// console.log(getMax([80, 5, 58, 17, 100,23]));  


// ? filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

// for (let index = 0; index < employees.length; index++) {
//         let employee=employees[index]
//         if(employee.salary > 60000) {
//             console.log(employee);
//         }
        
//       }
     
    
// ? verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın
// function findElement(arr, number) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === number) {
//             return `${number} array elementlərindən biridir`;
//         }
//     }
//     return `${number} array elementləri arasında yoxdur`;
// }

// console.log(findElement([33, 28, 45, 17], 45));
// console.log(findElement([33, 28, 45, 17], 38)); 


// ?    task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// function sayiTap(text) {
//     let count = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === ' ') {
//             count++;
//         }
//     }
//     return count;
// }


// console.log(sayiTap(sampleNews)); 


// ?  Daxil edilən iki arrayi birləşdirən funksiya yazın.
// function concatArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));


// ? Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// function array_filled(length, value) {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result.push(value);
//     }
//     return result;
// }

// console.log(array_filled(6, 0)); 



// ? Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, .......

  


// ?   Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.