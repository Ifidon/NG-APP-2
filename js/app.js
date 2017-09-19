(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService)

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.showItemsToBuy();

		toBuy.buyItem = function(itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}

		
	}

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var alreadyBought = this;

		alreadyBought.items = ShoppingListCheckOffService.showItemsBought();

		


	}

	function ShoppingListCheckOffService() {
		var service = this;

		var itemsToBuy = ["1 bag of rice", "1 bag of beans", "5 crates of egg", "1 bag potatoes", "1 bag of flour", "5 cartons of fresh milk"];

		var itemsBought = [];

		service.showItemsToBuy = function() {
			return itemsToBuy;
		};


		service.buyItem = function(itemIndex) {

			itemsBought.push(itemsToBuy[itemIndex]);

			itemsToBuy.splice(itemIndex, 1);


		}


		service.showItemsBought = function() {
			return itemsBought;
		};

		
	}


})();
