/* eslint-env mocha */

const chai = require('chai');

const {
	ES5Class,
	ES5ClassWithReturn,
	ES6Class,
	GuardedES5Class,
} = require('./constructors');

describe(
	'constructor tests',
	() => {

		it(
			'ES5Class: works with new',
			() => {
				const instance = new ES5Class(1, 2, 3);
				chai.assert(instance instanceof ES5Class, `${instance} is not instance of ES5Class`);
			}
		);
		it(
			'ES5Class: works without new',
			() => {
				const instance = ES5Class(1, 2, 3);
				chai.assert(instance instanceof ES5Class, `${instance} is not instance of ES5Class`);
			}
		);
		it(
			'ES5Class: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = new ES5Class(1, 2, 3);
				const instance = ES5Class.call(prebuilt, 1, 2, 3);
				chai.assert(instance instanceof ES5Class, `${instance} is not instance of ES5Class`);
				chai.assert(instance === prebuilt, 'instance !== prebuilt');
			}
		);


		it(
			'ES6Class: works with new',
			() => {
				const instance = new ES6Class(1, 2, 3);
				chai.assert(instance instanceof ES6Class, `${instance} is not instance of ES6Class`);
			}
		);
		it(
			'ES6Class: works without new',
			() => {
				const instance = ES6Class(1, 2, 3);
				chai.assert(instance instanceof ES6Class, `${instance} is not instance of ES6Class`);
			}
		);
		it(
			'ES6Class: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = new ES6Class(1, 2, 3);
				const instance = ES6Class.call(prebuilt, 1, 2, 3);
				chai.assert(instance instanceof ES6Class, `${instance} is not instance of ES6Class`);
				chai.assert(instance === prebuilt, 'instance !== prebuilt');
			}
		);


		it(
			'ES5ClassWithReturn: works with new',
			() => {
				const instance = new ES5ClassWithReturn(1, 2, 3);
				chai.assert(instance instanceof ES5ClassWithReturn, `${instance} is not instance of ES5ClassWithReturn`);
			}
		);
		it(
			'ES5ClassWithReturn: works without new',
			() => {
				const instance = ES5ClassWithReturn(1, 2, 3);
				chai.assert(instance instanceof ES5ClassWithReturn, `${instance} is not instance of ES5ClassWithReturn`);
			}
		);
		it(
			'ES5ClassWithReturn: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = new ES5ClassWithReturn(1, 2, 3);
				const instance = ES5ClassWithReturn.call(prebuilt, 1, 2, 3);
				chai.assert(instance instanceof ES5ClassWithReturn, `${instance} is not instance of ES5ClassWithReturn`);
				chai.assert(instance === prebuilt, 'instance !== prebuilt');
			}
		);


		it(
			'GuardedES5Class: works with new',
			() => {
				const instance = new GuardedES5Class(1, 2, 3);
				chai.assert(instance instanceof GuardedES5Class, `${instance} is not instance of GuardedES5Class`);
			}
		);
		it(
			'GuardedES5Class: works without new',
			() => {
				const instance = GuardedES5Class(1, 2, 3);
				chai.assert(instance instanceof GuardedES5Class, `${instance} is not instance of GuardedES5Class`);
			}
		);
		it(
			'GuardedES5Class: recycles and returns pre-constructed instance',
			() => {
				const prebuilt = new GuardedES5Class(1, 2, 3);
				const instance = GuardedES5Class.call(prebuilt, 1, 2, 3);
				chai.assert(instance instanceof GuardedES5Class, `${instance} is not instance of GuardedES5Class`);
				chai.assert(instance === prebuilt, 'instance !== prebuilt');
			}
		);
	}
);
