
# A little bit of Javascript - constructors

Constructors in JS are an interesting feature.  Pre-ES6 constructor functions are widely regarded as confusing and frustrating, but the new ES6 class syntax creates new problems without effectively solving the old problem.


## What does a constructor do?

A _constructor_, in programming, is a function responsible for creating a new instance of a class.  Object instantiation is usually a semi-native operation, in most programming languages, the native environment is responsible for allocating memory and creating a native instance, before handing that instance off to the constructor function for customization.


## What does a JS constructor look like?

Before ES6, JS classes were normally defined by a constructor function.

```

function Thing(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.sum = a + b + c;
}

var instance = new Thing(1, 2, 3);

```

With ES6 came a new class syntax:

```

class Thing {

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.sum = a + b + c;
	}

}

var instance = new Thing(1, 2, 3);

```


## Why new?

In many object-oriented programming languages, the keyword `new` is used to denote when a class instance is being constructed.

In JS specifically, ES6 classes cannot be instantiated without the `new` keyword:

```

class Thing {

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.sum = a + b + c;
	}

}

// this throws an error
// TypeError: Class constructor Thing cannot be invoked without 'new'
var instance = Thing(1, 2, 3);

```

Even worse, for naive ES5 class constructors, `this` defaults to the execution context, which can cause silent corruption.  

```

function Thing(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.sum = a + b + c;
}

// silently fails.  instance is undefined, and even worse,
// `window` was passed in as `this`, and modified
var instance = Thing(1, 2, 3);

```


## Why not new?

I generally dislike the `new` keyword in JS.  `new` is only useful if you can use it to reliably tell when a new object will be created; but in JS, there are a _multitude_ of ways you can create new objects.

```

let a = {};  // this creates an object

let b = []; // this creates an object

let c = Object.create(Object.prototype); // that's an object

let d = /a+/; // regular expressions are objects

let e = () => () => {}; // closures are objects too

```

Conversely, mandating that constructor functions _require_ `new` when invoked limits their utility.  If a constructor is no longer a normal function, you can't reliably use it as a function.  Its more than a little strange that a language with first-class functions can't have first-class constructors.

```

class Thing {

	constructor(val) {
		this.val = val;
	}

}

let things = [1, 2, 3].map(Thing); // nope nope nope

```


# What then?

To avoid requiring the `new` keyword, I usually stick to defining my classes with ES5 syntax.  However, in order to make them compatible with a variety of situations, I guard the constructor with validation of `this` at the top:

```

function Thing (val) {
	// if this is already an instance of Thing,
	// Thing was likely called with new, so re-use this.
	// otherwise, create a new instance of Thing to use as this.
	const self = this instanceof Thing ?
		this : Object.create(Thing.prototype);

	self.val = val;

	return self;
};

let thing = new Thing(1); // works
let thing2 = Thing(2); // works just fine
let thing3 = Thing.call(new Thing(1), 2); // works, and recycles pre-allocated thing.
let things = [1, 2, 3].map(Thing); // works

```


## Examples / Instructions

You can find examples of different class implementations and test cases in the attached [GitHub repo]https://github.com/somesocks/misc-js/tree/master/001-constructors
