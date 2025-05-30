
In node "console" is the property  in global object. so in javascirpt we can access the any property using window.console but in node we are using global.console here why we are not using in that way?

node.js intentionally makes console directly available for convenience, consistency, and promoting logging best practices.
Using properties of a global object would contradict this design choice.

is setTimeout is the build in method of global object for accessing the property or method from the global object. as per the rule we can access the method in object using object.method() but for setTimeout we are not using the global.setTimeout()

so there is no widow object in node env so node make use of setTimeoutdirectly implicitly


Yes, the absence of a traditional global object like window in Node.js, along with other factors, contributes to the direct availability of setTimeout():