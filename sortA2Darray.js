// var arr = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]];
    // Test.expect(Array.isArray(namesSorter(arr)), "Is not returning an array");

// let arr = [['Juan'], ['Brad']]
  // it ("returns ['Brad', 'Juan'] when array is [['Juan'], ['Brad']]", function(){
  //   Test.assertDeepEquals(namesSorter([['Juan'], ['Brad']]), ['Brad', 'Juan']);
  // });
// let arr = [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]
  // it ("returns [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ] when array is [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]", function(){
  //   Test.assertDeepEquals(namesSorter([['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]), [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ]);
  // });
let arr = [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]
  // it ("returns [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ] when array is [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]", function(){
  //   Test.assertDeepEquals(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]), [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ]);
  // });


function namesSorter(departmentsArray) {
  // arr = departmentsArray.join("");
  let newArr = [];

  departmentsArray.forEach((ary, i) => {
    ary.forEach((nomb, i) => {
      newArr.push(nomb)

    });


  });
  //ordenar por legh
  newArr.sort(function(a, b) {
    return a.length - b.length || // sort by length, if equal then
      a.localeCompare(b); // sort by dictionary order
  });
  // ordernar alfabeticamente
  // newArr = newArr.sort()
  console.log(newArr);
  return newArr;
}
namesSorter(arr)
