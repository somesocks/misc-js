
/* this is a normal ES5 constructor function */
function ES5Class (a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

class ES6Class {

	/* this is a normal ES6 constructor */
	constructor (a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
}


/* this is an ES5 constructor, with an explicit return */
function ES5ClassWithReturn (a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;

	return this;
}

/* this is an ES5 constructor, that will work with or without new, and recycle "this" */
function GuardedES5Class (a, b, c) {
	const self = this instanceof GuardedES5Class ? this : Object.create(GuardedES5Class.prototype);

	self.a = a;
	self.b = b;
	self.c = c;

	return self;
}

module.exports = {
	ES5Class,
	ES5ClassWithReturn,
	ES6Class,
	GuardedES5Class,
};
