////////////////////////////////////////////////////////////////////////////////////////////////
// wijmo.angular.js
// Purpose: Custom Directive for use wijmo widgets in angularJS applications
// Notes: New widgets will need handeled in the link function
// Author: Malkus 2013.05.20
////////////////////////////////////////////////////////////////////////////////////////////////

angular.module('wijmo',[]);
angular.module('wijmo').directive('wijmo', function() {
  return {
	// Apply scope outside of linking function Angular interperets that as having its own scope
/*	scope: {
		controlType: "=controlType",
		wijmoData: "=wijmoData"	
	},*/
    // A = attribute, E = Element, C = Class and M = HTML Comment
    restrict:'E,A',
	//Replace if true completely replaces the tag the directive is applied to.
	replace: true,
	//Template
    	template: '<div></div>',
    //The link function is responsible for registering DOM listeners as well as updating the DOM.
    link: function(scope, element, attrs) {
		var myWidget = attrs.controlType;
		
		//wijbarchart
	    if(myWidget == "barchart") {
			element.wijbarchart(); 
			
			scope.$watch(attrs.wijmoData, function(newValue){
				element.wijbarchart({
					seriesList: newValue
				});
			});
		}
		//wijlinechart
		else if(myWidget == "linechart") {
			element.wijlinechart();	
			scope.$watch(attrs.wijmoData, function(newValue){
				element.wijlinechart({
					seriesList: newValue
				});		
			});
		}
		//widget type not found
		else {
			element.html("Undefined Widget");
			element.addClass("brokenWidget");
		}
    }
  };
});