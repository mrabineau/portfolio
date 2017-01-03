(function (){
  "use strict";

angular.module("Portfolio")
  .controller("HomeController", HomeController)


HomeController.$inject=[]

    function HomeController () {
      var hm = this;

      hm.title = "Functionality and Maximalism";

      hm.about= "Mel Rabineau is a front-end web developer with backend experience. As a design oriented developer, she values vibrant and playful user interfaces. Born and raised in Los Angeles (with stints in New York and Madrid), Mel graduated from NYU in 2014 and later the prestigious Web Development Immersive at General Assembly. Subsequently, she has experience working across a number of frameworks such as Rails and the MEAN stack. ";

      hm.launchModal = launchModal;

        function launchModal () {
          $("#demo01").animatedModal();
        }



    }
})()
