(function (){
  "use strict";

angular.module("Portfolio")
  .controller("HomeController", HomeController)
  .controller("ProjectController", ProjectController)

HomeController.$inject=[]
ProjectController.$inject =[]

function HomeController () {
  var hc = this

  hc.popup ={text: "SCROLL ME",
             hidden: true}

}


function ProjectController () {

}


})()
