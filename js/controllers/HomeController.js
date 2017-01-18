(function (){
  "use strict";

angular.module("Portfolio")
  .controller("HomeController", HomeController)


HomeController.$inject=[]

    function HomeController () {
      var hm = this;

      hm.title = "Functionality and Maximalism";

      hm.about= "Hello! I am a front-end web developer with back-end experience. As a design oriented developer, I value vibrant and playful user interfaces. Born and raised in Los Angeles (with stints in New York and Madrid), I graduated from NYU in 2014 and later the Web Development Immersive at General Assembly. Subsequently, I have experience working across a number of frameworks such as Rails and the MEAN stack. ";

      hm.launchModal = launchModal;

        function launchModal () {
          $("#demo01").animatedModal();
        }



    }
})()
