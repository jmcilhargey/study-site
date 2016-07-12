angular.module("jsSolutions", ["ngAnimate", "ngSanitize"])

  .controller("MainController", ["$scope", "$http", "$sce", function($scope, $http, $sce) {

    $http.get("https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/algorithms.json").then(function(data) {
      $scope.problems = data;
    }, function(error) {
      $scope.error = error || "Request failed";
    })
    
    $scope.inject = function(html) {
      return $sce.trustAsHtml(prettyPrintOne(html))
    }
  }])

$(document).ready(function() {
  
  var offset = $(".navbar-default").offset().top;
  
  $(window).on("scroll", function() {
    
    var scrollPos = $(document).scrollTop();
    
    if (scrollPos > offset) {

      $(".navbar-default").addClass("fixed");
      $(".block").addClass("space");
    } else {
      
      $(".navbar-default").removeClass("fixed");
      $(".block").removeClass("space");
    }
  });
  
  $(".navbar a").on("click", function(event) {
    
    event.preventDefault();
    
    var hash = this.hash;
    
    var windowOffset = $(hash).offset().top;
    
    $("html, body").animate({ scrollTop: windowOffset - 75 }, 500, function() {
      window.location.hash = hash;
    });
  });
});