'use strict';

app.directive('movieList', function(){
  return {
    restrict: 'E',
    templateUrl: './templates/movie-list.html'
  };
});
