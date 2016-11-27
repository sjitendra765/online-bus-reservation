var myapp = angular.module('mainApp',[]);
myapp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});
myapp.controller('routeEnter',function($scope,$http){	
	$scope.routeShow = true;	
	$scope.s={};
	$scope.routeList = {};
$scope.newRoute = true;
var refresh = function(){
	$scope.exp = false;
	$scope.r={};
$http.get('/admin/trip/getroute').success(function(data){
		console.log('data');
		console.log(data);
		$scope.routeList = data;		
	});
};
refresh();

$scope.routeSave = function(){
	$http.post('/admin/routebus',$scope.r).success(function(response){			
			refresh();
		});
	$scope.newRoute = false;
};

$scope.editBus = function(id){
	$scope.exp = false;
	$scope.routeShow = false;
	$scope.routeList.forEach(function(d){
		if(d.id == id){
			$scope.r = d;
		}
	});
};
$scope.routeUpdate = function(id){
	$http.put('/admin/routebus/' + id , $scope.r).success(function(response){
			refresh();
		});
};
$scope.remove = function(id){
	$http.delete('admin/routebus/' + id).success(function(response){
			refresh();
		});
};
$scope.addPlace = function(){
	$scope.newRoute = false;
};
var refresh1 = function(id){
	$http.get('/admin/routebus/'+id+'/places').success(function(data){
		console.log('data');
		console.log(data);
		$scope.picks = data;		
			});
		
	$http.get('/admin/routebus/'+id+'/deport').success(function(data){
		console.log('data');
		console.log(data);
		$scope.deport = data;		
			});
	};
$scope.addPlace = function(id){
	$scope.exp = true;
	$scope.newRoute = false;
	$scope.routeList.forEach(function(d){
		if(d.id == id){
			$scope.r = d;
		}
	});
	refresh1(id);
		
};

$scope.saveStops = function(id){
	$http.post('/admin/routebus/' + id +'/places', $scope.s).success(function(response){
			refresh1(id);
		});
};
$scope.removeStops = function(id,pid){
	$http.delete('/admin/routebus/'+id+'/places/'+pid).success(function(response){
		console.log(response);
		refresh1(id);
	});
};
$scope.saveDeport = function(id){
	$http.post('/admin/routebus/' + id +'/deport', $scope.d).success(function(response){
			refresh1(id);
		});
};
$scope.removeDeport = function(id,pid){
	$http.delete('/admin/routebus/'+id+'/deport/'+pid).success(function(response){
		console.log(response);
		refresh1(id);
	});
};
});

myapp.controller('tripCntrl',function($scope,$http){
	$scope.bus={};
	$scope.route={};
	$scope.tripList={};
	$scope.addRemove = true;
	$http.get('/admin/trip/getbus').success(function(data){
		console.log('data');
		console.log(data);
		$scope.bus = data;		
	});
	$http.get('/admin/trip/getroute').success(function(data){
		console.log('data');
		console.log(data);
		$scope.route = data;		
	});
	
	var refresh = function(){	
	$scope.tripList={};
	$scope.addRemove = true;
	$http.get('/admin/trip/trip').success(function(data){
		console.log('data');
		console.log(data);
		$scope.tripList = data;		
	});
};
refresh();

$scope.addTrip = function(){
	$http.post('/admin/trip',$scope.t).success(function(response){			
			refresh();
		});	
};

$scope.editTrip = function(id){	
	$scope.addRemove = false;
	$scope.tripList.forEach(function(d){
		if(d.id == id){
			$scope.t = d;
		}
	});
};
$scope.updateTrip = function(id){
	$http.put('/admin/trip/' + id , $scope.t).success(function(response){
			refresh();
		});
};
$scope.removeTrip = function(id){
	$http.delete('/admin/trip/' + id).success(function(response){
			refresh();
		});
};

});
myapp.controller('busCntrl',function($scope,$http){
	$scope.busShow = true;	
	$scope.b = {};
	var refresh = function(){
		$scope.busList = {};
	$http.get('/admin/trip/getbus').success(function(data){		
		console.log('data');
		console.log(data);
		$scope.busList = data;		
	});
};
refresh();
	$scope.editBus = function(id){
		$scope.busShow = false;
		console.log(typeof(id));
				console.log($scope.busList);
		$scope.busList.forEach(function(d){
		if(d.id == id){
			$scope.b = d;
		}
	})
	};
	$scope.saveBus = function(){
	$http.post('/admin/bus',$scope.b).success(function(response){			
			refresh();
		});	
};
	$scope.updateBus = function(id){
	$http.put('/admin/bus/' + id , $scope.b).success(function(response){
			refresh();
			$scope.busShow = true;
		});
};
$scope.removeBus = function(id){
	$http.delete('/admin/bus/' + id).success(function(response){
			refresh();
		});
};

});
myapp.controller('fareCntrl',function($scope,$http){
	$scope.fareShow = true;	
	$scope.c = {};
	var refresh = function(){
		$scope.fareShow = true;
		$scope.fareList = {};
	$http.get('/admin/fare/fare').success(function(data){		
		console.log('data');
		console.log(data);
		$scope.fareList = data;		
	});
};
refresh();
	$scope.editFare = function(id){
		$scope.fareShow = false;
		console.log(typeof(id));
				console.log($scope.busList);
		$scope.fareList.forEach(function(d){
		if(d.id == id){
			$scope.c = d;
		}
	})
	};
	$scope.saveFare = function(){
	$http.post('/admin/fare',$scope.c).success(function(response){			
			refresh();
		});	
};
	$scope.updateFare = function(id){
	$http.put('/admin/fare/' + id , $scope.c).success(function(response){
			refresh();
			$scope.fareShow = true;
		});
	$scope.c = {};
};
$scope.removeFare = function(id){
	$http.delete('/admin/fare/' + id).success(function(response){
			refresh();
		});
};

});

myapp.controller('reportgen',function($scope,$http,Excel,$location,$window,$timeout){
	$scope.liste = {};
	$scope.showReport = function(){
		$http.post('/report',$scope.u).success(function(res){
			console.log(res);
			var re = [];
			res.forEach(function(r){
				re.push(r);
			});
			console.log(re);
			$scope.liste = re;
		});
console.log('udhu');
	};
	$scope.exportToExcel = function(tableId){
		 $scope.exportHref=Excel.tableToExcel(tableId,'Bus Report');
            $timeout(function(){location.href=$scope.exportHref;},100); // trigger download
	};

});
	myapp.factory('Excel',function($window){
        var uri='data:application/vnd.ms-excel;base64,',
            template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
            base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
            format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
        return {
            tableToExcel:function(tableId,worksheetName){
                var table=$(tableId),
                    ctx={worksheet:worksheetName,table:table.html()},
                    href=uri+base64(format(template,ctx));
                return href;
            }
        };
    })
