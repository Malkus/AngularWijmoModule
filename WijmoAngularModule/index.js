// JavaScript Document
var chart1=[{label:"West",legendEntry:true,data:{x:["Desktops","Notebooks","AIO","Tablets","Phones"],y:[5,3,4,7,2]}},{label:"Central",legendEntry:true,data:{x:["Desktops","Notebooks","AIO","Tablets","Phones"],y:[2,2,3,2,1]}},{label:"East",legendEntry:true,data:{x:["Desktops","Notebooks","AIO","Tablets","Phones"],y:[3,4,4,2,5]}}];var chart2=[{label:"North",legendEntry:true,data:{x:["PC","Apple"],y:[75,53]}},{label:"South",legendEntry:true,data:{x:["PC","Apple"],y:[62,72]}},{label:"East",legendEntry:true,data:{x:["PC","Apple"],y:[43,34]}}];var chart3=[{label:"UP",legendEntry:true,data:{x:["Chrome","FireFox","Safari","IE"],y:[100,50,75,50]}},{label:"DOWN",legendEntry:true,data:{x:["Chrome","FireFox","Safari","IE"],y:[150,125,30,25]}},{label:"LEFT",legendEntry:true,data:{x:["Chrome","FireFox","Safari","IE"],y:[25,104,74,32]}}]		
		
// Angular Module		
var SampleApp = angular.module('SampleApp', ['wijmo']);

function MyCtrl($scope) {
	$scope.toggle = true;	
	$scope.barChartData = chart1;
	$scope.lineChartData = chart3;
	
	$scope.toggleData = function() {
        if($scope.toggle) { $scope.barChartData = chart2; }
		else { $scope.barChartData = chart1; }
		
		$scope.toggle = !$scope.toggle;
    };
}
// Customize Widget
$(document).ready(function(e) {
    $('.teststyle').wijbarchart({ 
				width:500,
                axis: { 
                    y: { 
                        text: "Total Hardware"
                    }, 
                    x: { 
                        text: ""
                    } 
                }, 
                hint: { 
                    content: function () { 
                        return this.data.label + '\n ' + this.y + ''; 
                    } 
                }, 
                header: { 
                    text: "Hardware Distribution"
                }
            });
});