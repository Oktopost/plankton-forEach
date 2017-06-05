'use strict';


const Namespace = require('oktopost-namespace');
const is		= require('oktopost-plankton-is').is;
const obj		= require('oktopost-plankton-obj').obj;
const array		= require('oktopost-plankton-array').array;


const container = {
	Plankton: {
		is:		is,
		obj:	obj,
		array:	array
	}
};

const Plankton = new Namespace(container);


module.exports = {
	Plankton: container.Plankton,
	namespace: Plankton.getCreator()
};