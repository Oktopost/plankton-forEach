require('../namespace').namespace('Plankton', function (root) 
{
	'use strict';
	
	
	var is		= root.Plankton.is;
	var obj		= root.Plankton.obj;
	var array	= root.Plankton.array;
	
	
	function getForEachForSubject(subject)
	{
		if (is.array(subject))
		{
			return array.forEach;
		}
		else if (is.jsObject(subject))
		{
			return obj.forEach;
		}
		else
		{
			throw Error('Subject must be Array or Object');
		}
	}
	
	
	/**
	 * @name Plankton.forEach
	 * 
	 * @param {Array|Object} subject
	 * @param {function(*)} callback
	 * @param {*=} scope
	 */
	var forEach = function (subject, callback, scope)
	{
		var method = getForEachForSubject(subject);
		method.value(subject, callback, scope);
	};
	
	/**
	 * @param {Array} subject
	 * @param {function(*)} callback
	 * @param {*=} scope
	 */
	forEach.value = forEach;
	
	/**
	 * @param {Array} subject
	 * @param {function(Number)} callback
	 * @param {*=} scope
	 */
	forEach.key = function (subject, callback, scope)
	{
		var method = getForEachForSubject(subject);
		method.key(subject, callback, scope);
	};
	
	/**
	 * @param {Array} subject
	 * @param {function(Number *)} callback
	 * @param {*=} scope
	 */
	forEach.pair = function(subject, callback, scope)
	{
		var method = getForEachForSubject(subject);
		method.pair(subject, callback, scope);
	};
	
	/**
	 * @param {Array} subject
	 * @param {function(Array)} callback
	 * @param {*=} scope
	 */
	forEach.item = function(subject, callback, scope)
	{
		var method = getForEachForSubject(subject);
		method.item(subject, callback, scope);
	};
	
	
	this.forEach = forEach;
});