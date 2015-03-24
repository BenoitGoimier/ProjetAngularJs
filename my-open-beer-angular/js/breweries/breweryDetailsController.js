module.exports=function($scope,config,$location) {

    $scope.brewery = config.activeBrewery;

    if (angular.isUndefined(config.activeBrewery)) {
        $location.path("breweries/");
    }
    else{
        if($scope.brewery.photo == null || $scope.brewery.photo == ""){
            $scope.brewery.photo = "http://sharenews.co.za/wp-content/uploads/2014/10/Breweries-Reading-PA.jpg";
        }
    }
};