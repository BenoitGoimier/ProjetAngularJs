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
                config.activeBeer=angular.copy(beer);
                config.activeBeer.reference=beer;
            }
            $scope.data.posted={
                "name" : beer.name,
                "photo"  : beer.photo
            };

            config.activeBeer.reference.name=$scope.activeBeer.name;
            config.activeBeer.reference.photo=$scope.activeBeer.photo;
            config.activeBeer.reference.updated_at=new Date();

            if(config.beers.update==="immediate" || force)
                rest.put(config.activeBeer.id,$scope.data,"breweries",config.activeBeer.name,callback);
            else{
                config.activeBeer.reference.flag="Updated";
                save.addOperation("Updated",$scope.update,config.activeBeer.reference);
                result=true;
            }
        }else{
            result=true;
        }
        return result;
    }
};