module.exports=function() {
	var factory={breweries:{},server:{}};
	factory.activeBrewery=undefined;
	factory.breweries.loaded=false;
	factory.breweries.refresh="all";//all|ask
	factory.breweries.update="immediate";//deffered|immediate
	factory.server.privateToken="";
	factory.server.restServerUrl="http://localhost/angularJs/ProjetAngularJs/rest-open-beer/";
	factory.server.force=true;
	return factory;
};