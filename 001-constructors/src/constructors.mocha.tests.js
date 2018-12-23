/* eslint-env mocha */

const chai = require('chai');

const {
	ES5Class,
	ES5ClassWithReturn,
	ES6Class,
	CompatClass,
} = require('./constructors');

describe(
	'constructor tests',
	() => {

		it(
			'ES5Class: works with new',
			() => {
				const instance = new ES5Class();
				chai.assert(instance instanceof ES5Class, 'instanceof ES5Class');
			}
		);
		it(
			'ES5Class: works without new',
			() => {
				const instance = ES5Class();
				chai.assert(instance instanceof ES5Class, 'instanceof ES5Class');
			}
		);
		it(
			'ES5Class: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = Object.create(ES5Class.prototype);
				const instance = ES5Class.call(prebuilt);
				chai.assert(instance instanceof ES5Class, 'instanceof ES5Class');
				chai.assert(instance === prebuilt, 'instance ==== prebuilt');
			}
		);


		it(
			'ES5ClassWithReturn: works with new',
			() => {
				const instance = new ES5ClassWithReturn();
				chai.assert(instance instanceof ES5ClassWithReturn, 'instanceof ES5ClassWithReturn');
			}
		);
		it(
			'ES5ClassWithReturn: works without new',
			() => {
				const instance = ES5ClassWithReturn();
				chai.assert(instance instanceof ES5ClassWithReturn, 'instanceof ES5ClassWithReturn');
			}
		);
		it(
			'ES5ClassWithReturn: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = Object.create(ES5ClassWithReturn.prototype);
				const instance = ES5ClassWithReturn.call(prebuilt);
				chai.assert(instance instanceof ES5ClassWithReturn, 'instanceof ES5ClassWithReturn');
				chai.assert(instance === prebuilt, 'instance ==== prebuilt');
			}
		);


		it(
			'ES6Class: works with new',
			() => {
				const instance = new ES6Class();
				chai.assert(instance instanceof ES6Class, 'instanceof ES6Class');
			}
		);
		it(
			'ES6Class: works without new',
			() => {
				const instance = ES6Class();
				chai.assert(instance instanceof ES6Class, 'instanceof ES6Class');
			}
		);
		it(
			'ES6Class: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = Object.create(ES6Class.prototype);
				const instance = ES6Class.call(prebuilt);
				chai.assert(instance instanceof ES6Class, 'instanceof ES6Class');
				chai.assert(instance === prebuilt, 'instance ==== prebuilt');
			}
		);


		it(
			'CompatClass: works with new',
			() => {
				const instance = new CompatClass();
				chai.assert(instance instanceof CompatClass, 'instanceof CompatClass');
			}
		);
		it(
			'CompatClass: works without new',
			() => {
				const instance = CompatClass();
				chai.assert(instance instanceof CompatClass, 'instanceof CompatClass');
			}
		);
		it(
			'CompatClass: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = Object.create(CompatClass.prototype);
				const instance = CompatClass.call(prebuilt);
				chai.assert(instance instanceof CompatClass, 'instanceof CompatClass');
				chai.assert(instance === prebuilt, 'instance ==== prebuilt');
			}
		);
	}
);
