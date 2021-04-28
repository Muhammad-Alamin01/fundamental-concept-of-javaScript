var friendsAge = [12, 9, 21, 20, 17, 11, 14];

var sonaliAge = friendsAge[5];
friendsAge[1] = 22;

console.log(sonaliAge);    // array start index [0]
console.log(friendsAge); 

var position = friendsAge.indexOf(11);   // search position
console.log(position);

friendsAge.push(30);     // add element 
console.log(friendsAge); 
console.log(friendsAge.length);
friendsAge.pop(); //  last element remove
console.log(friendsAge); 

var teaLine = ['Kalam', 'Salam', 'Balam', 'Jabbar'];
console.log(teaLine);
console.log(teaLine.shift());   // first element remove
console.log(teaLine);
console.log(teaLine.unshift('Hero-Alam'));
console.log(teaLine);

var part = teaLine.slice(1,2);
console.log(part);

