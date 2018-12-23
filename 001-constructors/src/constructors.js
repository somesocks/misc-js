
function ES5Class () { }

function ES5ClassWithReturn () {
	return this;
}

class ES6Class {

	// eslint-disable-next-line no-useless-constructor
	constructor () {
		/**/
	}
}

function CompatClass () {
	const self = this instanceof CompatClass ? this : Object.create(CompatClass.prototype);

	return self;
}

module.exports = {
	ES5Class,
	ES5ClassWithReturn,
	ES6Class,
	CompatClass,
};
