'use strict';


const forEach = require('../../index').forEach;
const assert = require('chai').assert;


suite('forEach module', () =>
{	
	test('forEach equals to forEach.values', () =>
	{
		assert.equal(forEach, forEach.value);
	});
	
	
	suite('forEach.value', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			forEach.value(subject, (...args) => { result.push(args) });
			assert.deepEqual([['b'], ['c']], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			forEach.value({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['c'], ['e']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			forEach.value([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			forEach.value({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					forEach.value(null, () => {});
				});
		});
	});
	
	
	suite('forEach.key', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			forEach.key(subject, (...args) => { result.push(args) });
			assert.deepEqual([[0], [1]], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			forEach.key({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['b'], ['d']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			forEach.key([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			forEach.key({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					forEach.key(null, () => {});
				});
		});
	});
	
	
	suite('forEach.pair', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			forEach.pair(subject, (...args) => { result.push(args) });
			assert.deepEqual([[0, 'b'], [1, 'c']], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			forEach.pair({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['b', 'c'], ['d', 'e']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			forEach.pair([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			forEach.pair({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					forEach.pair(null, () => {});
				});
		});
	});
	
	
	suite('forEach.item', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			forEach.item(subject, (...args) => { result.push(args) });
			assert.deepEqual([[{0: 'b'}], [{1: 'c'}]], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			forEach.item({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([[{'b': 'c'}], [{'d': 'e'}]], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			forEach.item([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			forEach.item({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					forEach.item(null, () => {});
				});
		});
	});
	
});