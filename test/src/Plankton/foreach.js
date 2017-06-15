const foreach = require('../../index').foreach;
const assert = require('chai').assert;


suite('foreach module', () =>
{	
	test('foreach equals to foreach.values', () =>
	{
		assert.equal(foreach, foreach.value);
	});
	
	
	suite('foreach.value', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			foreach.value(subject, (...args) => { result.push(args) });
			assert.deepEqual([['b'], ['c']], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			foreach.value({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['c'], ['e']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			foreach.value([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			foreach.value({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					foreach.value(null, () => {});
				});
		});
	});
	
	
	suite('foreach.key', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			foreach.key(subject, (...args) => { result.push(args) });
			assert.deepEqual([[0], [1]], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			foreach.key({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['b'], ['d']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			foreach.key([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			foreach.key({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					foreach.key(null, () => {});
				});
		});
	});
	
	
	suite('foreach.pair', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			foreach.pair(subject, (...args) => { result.push(args) });
			assert.deepEqual([[0, 'b'], [1, 'c']], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			foreach.pair({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([['b', 'c'], ['d', 'e']], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			foreach.pair([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			foreach.pair({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					foreach.pair(null, () => {});
				});
		});
	});
	
	
	suite('foreach.item', () => 
	{
		test('array subject', () =>
		{
			let result = [];
			let subject = ['b', 'c'];
			
			subject.e = 1;
			
			foreach.item(subject, (...args) => { result.push(args) });
			assert.deepEqual([[{0: 'b'}], [{1: 'c'}]], result);
		});
		
		test('object subject', () =>
		{
			let result = [];
			foreach.item({'b': 'c', 'd': 'e'}, (...args) => { result.push(args) });
			assert.deepEqual([[{'b': 'c'}], [{'d': 'e'}]], result);
		});
		
		test('scope passed', () =>
		{
			let scope;
			foreach.item([2], function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
			
			scope = null;
			foreach.item({'a': 2}, function () { scope = this; }, 1);
			assert.strictEqual(1, scope);
		});
		
		test('invalid subject, error thrown', () =>
		{
			assert.throws(
				() => {
					foreach.item(null, () => {});
				});
		});
	});
	
});