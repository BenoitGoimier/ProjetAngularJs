module.exports=function($scope,config,$location,rest,save,$document,modalService, $controller){
    $controller('BeerAddController', {$scope: $scope});

    if(angular.isUndefined(config.activeBeer)){
        $location.path("beers/");
    }
    $scope.activeBeer=config.activeBeer;

    $scope._update=function(beer,force,callback){
        var result=false;
        if(force || $scope.frmBeer.$dirty){
            if(angular.isUndefined(beer)){
                beer=$scope.activeBeer;
            }else{
                config.activeBrewery=angular.copy(brewery);
                config.activeBrewery.reference=brewery;
            }
            $scope.data.posted={
                "name" : brewery.name,
                "url"  : brewery.url
            };

            config.activeBrewery.reference.name=$scope.activeBrewery.name;
            config.activeBrewery.reference.url=$scope.activeBrewery.url;
            config.activeBrewery.reference.updated_at=new Date();

            if(config.breweries.update==="immediate" || force)
                rest.put(config.activeBrewery.id,$scope.data,"breweries",config.activeBrewery.name,callback);
            else{
                config.activeBrewery.reference.flag="Updated";
                save.addOperation("Updated",$scope.update,config.activeBrewery.reference);
                result=true;
            }
        }else{
            result=true;
        }
        return result;
    }
};