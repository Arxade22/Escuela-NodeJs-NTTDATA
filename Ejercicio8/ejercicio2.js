var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var Exercise2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var pizza, Horno, precalentandoHorno, prepararPizza, cocinarPizza, watchSomething, drinkSomething, HornoReady, pizzaReady;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pizza = { prepared: false, cooked: false };
                Horno = { heated: false, cooking: false };
                precalentandoHorno = function () {
                    console.log("[Precalentando horno]");
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            console.log("Bep Bep Beeep! Horno Calentado!");
                            resolve(true);
                        }, 5000);
                    }).then(function (res) {
                        Horno.heated = res;
                    });
                };
                prepararPizza = function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                console.log("[Preparando pizza]");
                                _a = pizza;
                                return [4 /*yield*/, new Promise(function (resolve) {
                                        setTimeout(function () {
                                            resolve(true);
                                        }, 3000);
                                    })];
                            case 1:
                                _a.prepared = _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                cocinarPizza = function () {
                    console.log("[Cocinando pizza]");
                    Horno.cooking = true;
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            console.log("Bep Bep Beeep! Pizza lista!");
                            resolve(true);
                        }, 10000);
                    }).then(function (res) {
                        Horno.cooking = !res;
                        pizza.cooked = res;
                    });
                };
                watchSomething = function (pizzaReady) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("[Mirando la TV]");
                                return [4 /*yield*/, pizzaReady["finally"]()];
                            case 1:
                                _a.sent();
                                console.log("[Dejaste de mirar la TV]");
                                return [2 /*return*/];
                        }
                    });
                }); };
                drinkSomething = function (HornoReady) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("[Tomando refresco]");
                                return [4 /*yield*/, HornoReady["finally"]()];
                            case 1:
                                _a.sent();
                                console.log("[Dejaste de tomar refresco]");
                                return [2 /*return*/];
                        }
                    });
                }); };
                HornoReady = precalentandoHorno();
                return [4 /*yield*/, prepararPizza()];
            case 1:
                _a.sent();
                return [4 /*yield*/, drinkSomething(HornoReady)];
            case 2:
                _a.sent();
                pizzaReady = cocinarPizza();
                return [4 /*yield*/, watchSomething(pizzaReady)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
Exercise2();
