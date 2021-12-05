class Router {
  constructor(meta = {}) {
    const { basename } = meta;
    if (basename) {
      this.basename = basename;
    }
    this.routes = [];
  }

  get(uri, callback) {
    // ensure that the parameters are not empty
    if (!uri || !callback) throw new Error("uri or callback must be given");

    // ensure that the parameters have the correct types
    if (typeof uri !== "string")
      throw new TypeError("typeof uri must be a string");
    if (typeof callback !== "function")
      throw new TypeError("typeof callback must be a function");

    let _uri = uri;
    if (this.basename) {
      _uri = this.basename + uri;
    }

    // throw an error if the route uri already exists to avoid confilicting routes
    this.routes.forEach((route) => {
      if (route._uri === _uri)
        throw new Error(`the uri ${route._uri} already exists`);
    });

    // add route to the array of routes
    const route = {
      _uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
      callback,
    };
    this.routes.push(route);
  }

  init() {
    this.routes.some((route) => {
      let regEx = new RegExp(`^${route._uri}$`);
	  console.log(regEx, "zzzzz");
	  console.log(path, "xxxxx");
      let path = window.location.pathname;

      if (path.match(regEx)) {
        // our route logic is true, return the corresponding callback

        let req = { path };
        return route.callback.call(this, req);
      }
    });
  }
}

export default Router;
