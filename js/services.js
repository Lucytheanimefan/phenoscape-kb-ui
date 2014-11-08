'use strict';

/* Services */

angular.module('pkb.services', ['ngResource'])
	.value('version', '0.1')
	.factory('EntityPresence', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/entity/presence', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
	.factory('EntityAbsence', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/entity/absence', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
	.factory('AnatomicalTermSearch', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/entity/search', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
	.factory('CharacterStateSearch', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/characterstate/search', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
	.factory('Label', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/term/label', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
	.factory('Labels', function ($resource) {
		return $resource('http://pkb-new.nescent.org/kb/term/labels', {}, {
			query: {
				method: 'GET',
				headers: {'Accept': 'application/json'}
		}})
	})
    
    ;