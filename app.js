var app = angular.module('myApp', ['ngAnimate']);

app.controller("RedditController", function ($scope) {
  $scope.posts = [];

  $scope.addPost = function () {
    $scope.posts.push({
        title: $scope.title,
        author: $scope.author,
        image: $scope.image,
        description: $scope.description,
        date: new Date(),
        comments: [],
        votes: 0
    });
    $scope.title= "";
    $scope.author="";
    $scope.image="";
    $scope.description="";
  }
  $scope.addVote = function (post) {
    post.votes += 1;
  }
  $scope.subtractVote = function (post) {
    post.votes -= 1;
  }

  $scope.addComment = function (post) {
      console.log($scope.user, "USER");
    post.comments.push({
      user: $scope.user,
      comment: $scope.commentText
    })
    $scope.user="";
    $scope.commentText="";
  }

  $scope.custom = true;
  $scope.comment= true;
  $scope.show= true;
  $scope.showComment = function () {
    $scope.comment = $scope.comment === false ? true: false;
  }
  $scope.toggleCustom = function() {
    $scope.custom = $scope.custom === false ? true: false;
  }
  $scope.commentShow = function() {
    $scope.show = $scope.show === false ? true: false;
  }

})
// app.controller("MyFirstController", function($scope){
//     $scope.name = "Severus Snape";
// })
//
// app.controller("ExerciseController", function ($scope) {
//   $scope.favColor = "Orange";
//   $scope.secondsInACentury = secondsInACentury();
//   $scope.rightNow = new Date();
//   $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
//   $scope.symbols = ["\u2665", "\u2663", "\u2666", "\u2660"];
//   $scope.repeat = [1,1,2,5,6,9,9,9];
//   $scope.obj = {name: "claire", age: 27}, {name: 'collin', age: 25}, {name: 'mary', age: 55};
//   $scope.number = 5;
//   $scope.pickRandomNumber = function(){
//     $scope.number = Math.floor(Math.random() * 10) + 1
//   }
// })
//
// app.controller("CameraController", function ($scope) {
//   $scope.cameras = [
//     {
//       title: "Nikon D3100 DSLR",
//       image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
//       rating: 3.4,
//       price: 369.99,
//       onSale: true
//     },
//     {
//       title: "Canon EOS 70D",
//       image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
//       rating: 2.0,
//       price: 1099.0,
//       onSale: false
//     },
//     {
//       title: "Nikon D810A",
//       image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
//       rating: 4.2,
//       price: 3796.95,
//       onSale: true
//     }
//   ]
// })
//
// function secondsInACentury() {
//   var minute = 60;
//   var hour = minute * 60;
//   var day = hour * 24;
//   var year = day * 365;
//   var century = year * 100
//   return century
// }
//
// app.controller("ContactController", function ($scope) {
//  $scope.myForm = [{
//    name: $scope.myForm.name,
//    email: $scope.myForm.email,
//    number: $scope.myForm.number
//  }];
//  $scope.myForm.name = "Jakob Jenkov";
//  $scope.myForm.email  = "foo@bar.com";
//  $scope.myForm.number  = "555-555-5555";
//
//   $scope.myForm.submitTheForm = function(item, event) {
//    console.log("--> Submitting form");
//    $scope.myForm += {
//       name: $scope.myForm.name,
//       email: $scope.myForm.email,
//       number: $scope.myForm.number
//    };
//  }
// });
