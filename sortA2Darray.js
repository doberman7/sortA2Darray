var arr = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]];
//     Test.expect(Array.isArray(namesSorter(arr)), "Is not returning an array");

//
//   it ("returns ['Brad', 'Juan'] when array is [['Juan'], ['Brad']]", function(){
//     Test.assertDeepEquals(namesSorter([['Juan'], ['Brad']]), ['Brad', 'Juan']);
//   });
//
//   it ("returns [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ] when array is [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]", function(){
//     Test.assertDeepEquals(namesSorter([['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]), [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ]);
//   });
//
//   it ("returns [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ] when array is [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]", function(){
//     Test.assertDeepEquals(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]), [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ]);
//   });


function namesSorter(departmentsArray) {
  // arr = departmentsArray.join("");
  let newArr = [];

  departmentsArray.forEach((ary, i) => {
    ary.forEach((nomb, i) => {
      newArr.push(nomb)

    });


  });

  newArr = newArr.sort()
  return newArr;
}
namesSorter(arr)
