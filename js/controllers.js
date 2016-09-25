angular.module('app.controllers', [])
  
.controller('recyclicalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('whereToRecycleCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('nearbyLocationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	// if (navigator.geolocation) {
 //        navigator.geolocation.getCurrentPosition(showPosition);
 //    } else {
 //        x.innerHTML = "Geolocation is not supported by this browser.";
 //    }

	$scope.locations = searchArea('00000');

	function searchArea(zipCode){
	// $stateParams.type
		return [
			{
				'id':0,
				'name':'Recycling Center',
				'address':'320 Hudson St',
				'distance':'.1 miles',
			},
			{
				'id':1,
				'name':'Recycling Event',
				'address':'123 Main St',
				'distance':'2.3 miles',
			},
			{
				'id':2,
				'name':'Eco Event',
				'address':'12 Potato St',
				'distance':'4.3 miles',
			},
		]
	}
}])
   
.controller('locationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('zeroWasteNYCCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('recycling101Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.categories = categories;
}])
   
.controller('wasteTypeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.wasteType = categories[$stateParams.categoryId].items[$stateParams.itemId];
}])
   
.controller('aboutRecyclicalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
var categories = [
	{
		name: "Trash",
		color: "#EE7071",
		items: [
			{
				name:'Food wrappers'
			},
			{
				name:'Dirty paper food container'
			},
			{
				name:'Dirty pizza box'
			},
		]
	},
	{
		name: "Paper curbside",
		color: "#A7D55C",
		items: [
			{
				name:'Newspaper'
			},
			{
				name:'Cardboard'
			},
		]
	},
	{
		name: "Plastic/metal curbside",
		color: "#84BBE5",
		items: [
			{
				name:'Clean plastic food containers'
			},
			{
				name:'Pots and pans'
			},
		]
	},
	{
		name: "Clothing donation",
		color: "#CE7777",
		items: [
			{
				name:'Clean whole clothes'
			},
		]
	},
	{
		name: "Textile recycling",
		color: "#FDD36F",
		items: [
			{
				name:'Worn out clothes'
			},
		]
	},
	{
		name: "Electronics recycling",
		color: "#B5B7BD",
		items: [
			{
				name:'Electronics'
			},
			{
				name:'Batteries'
			},
		]
	},
	{
		name: "Compost",
		color: "#DEA56A",
		items: [
			{
				name:'Food waste',
				description: 'Brief description of recyclable/reusable thing here. Maecenas maximus vulputate libero non fringilla. Phasellus ex dui, laoreet sagittis bibendum non, rhoncus eu nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
				imageUrl: 'https://www.cambridgema.gov/~/media/Images/publicworks/recyclingandrubbish/Compost/food%20scraps%20iphoto%20from%20Biobag%20350x266.jpg?la=en'
			}
		]
	},
]