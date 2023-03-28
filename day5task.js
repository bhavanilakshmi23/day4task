
((array1, array2) => {
 let middle = array1.length;
     let totalArray = array1.concat(array2).sort((a, b) => a - b);

     console.log((totalArray[middle - 1] + totalArray[middle])/2);
})([1, 2, 3, 4, 5], [1, 2, 3 ,4, 5]);

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c)  {
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);

var arr1= [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr1.length; i++) {
 if (arr1[i] % 2 === 0) {
 console.log(arr1[i]);
 }}
})();

