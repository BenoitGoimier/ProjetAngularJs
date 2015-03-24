<<<<<<< HEAD
module.exports=function($scope,config,$location) {

    $scope.beer = config.activeBeer;

    if (angular.isUndefined(config.activeBeer)) {
        $location.path("beers/");
    } else {
        if ($scope.beer.photo == null || $scope.beer.photo == "") {
            $scope.beer.photo = "beer.png";
        }
    }
};
=======
/**
 * Created by Simoun on 24/03/2015.
 */
>>>>>>> 22ca430795b7999529e51e88defe13fbc57c0589
