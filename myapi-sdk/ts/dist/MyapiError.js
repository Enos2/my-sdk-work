"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyapiError = void 0;
class MyapiError extends Error {
    isMyapiError = true;
    sdk = 'Myapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MyapiError = MyapiError;
//# sourceMappingURL=MyapiError.js.map