var User = /** @class */ (function () {
    function User(uname, id) {
        this.city = "";
        this.name = uname;
        this.Id = id;
    }
    return User;
}());
var printusercreds = new User("bharat", 26);
printusercreds.city = "Mumbai";
/**1. tsc -w (Watch Mode) generating class.js of dist folder:
When you run tsc -w, TypeScript is probably using the default configuration from your tsconfig.json file (if present). This file typically defines the target ECMAScript version and module system. Based on your observation, your tsconfig.json is likely targeting ES6 (or a later version), which is why the output uses the modern class syntax.

If you're targeting ES6 or higher in your tsconfig.json, TypeScript will output code using the ES6+ features, like the class keyword, as in Code 1.

2. tsc src/class.ts (Single File Compilation) generating class.js of src folder:
When you run tsc src/class.ts without specifying a tsconfig.json or overriding the default settings, TypeScript defaults to ES5 as the target and CommonJS as the module system.

In this case, TypeScript is transpiling your code into ES5-compatible syntax. This is why you’re seeing the function-based approach to the class definition and Object.defineProperty for module exports, which are more compatible with older JavaScript environments. This is similar to Code 2. */