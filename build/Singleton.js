"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instance;
var Singleton = /** @class */ (function () {
    // removed the instance creation; constructor now checks if the instance exists and throws the error to enforce singularity
    // BUT the instance is not created here, so the module can only be lazily loaded. 
    function Singleton() {
        if (instance) {
            throw new Error("ALREADY_INSTANTIATED");
        }
    }
    Singleton.prototype.getInstance = function () {
        if (!instance) {
            instance = this;
        }
        return instance;
    };
    return Singleton;
}());
exports.default = Singleton;
//# sourceMappingURL=Singleton.js.map