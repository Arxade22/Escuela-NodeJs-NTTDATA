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
var Exercise1 = function () { return __awaiter(_this, void 0, void 0, function () {
    var searchByCodeCountry, mostrar, obtenerDatosDeObjetosDinamicos;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchByCodeCountry = function (alpha3Code) { return __awaiter(_this, void 0, void 0, function () {
                    var res, data, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 3, , 4]);
                                return [4 /*yield*/, fetch("https://restcountries.com/v3.1/alpha/".concat(alpha3Code))];
                            case 1:
                                res = _a.sent();
                                return [4 /*yield*/, res.json()];
                            case 2:
                                data = _a.sent();
                                return [2 /*return*/, data];
                            case 3:
                                error_1 = _a.sent();
                                console.log(error_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                mostrar = function (abrev) { return __awaiter(_this, void 0, void 0, function () {
                    var data, _a, name_1, currencies, borders, languages, currencie, listaLenguage, paisesVecinos, _i, borders_1, abrev_1, dato, name_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, searchByCodeCountry(abrev)];
                            case 1:
                                data = _b.sent();
                                if (abrev.length === 0) {
                                    console.log('Ingrese datos');
                                    return [2 /*return*/];
                                }
                                if (!(data.status >= 400)) return [3 /*break*/, 2];
                                console.log(data.message);
                                return [3 /*break*/, 7];
                            case 2:
                                _a = data[0], name_1 = _a.name, currencies = _a.currencies, borders = _a.borders, languages = _a.languages;
                                currencie = obtenerDatosDeObjetosDinamicos(currencies)[0];
                                listaLenguage = obtenerDatosDeObjetosDinamicos(languages);
                                paisesVecinos = [];
                                _i = 0, borders_1 = borders;
                                _b.label = 3;
                            case 3:
                                if (!(_i < borders_1.length)) return [3 /*break*/, 6];
                                abrev_1 = borders_1[_i];
                                return [4 /*yield*/, searchByCodeCountry(abrev_1)];
                            case 4:
                                dato = _b.sent();
                                name_2 = dato[0].name;
                                paisesVecinos.push(name_2.common);
                                _b.label = 5;
                            case 5:
                                _i++;
                                return [3 /*break*/, 3];
                            case 6:
                                console.log("El nombre del pa\u00EDs es: ".concat(name_1.common));
                                console.log("El nombre de la moneda es: ".concat(currencie.name, ", y el s\u00EDmbolo es: ").concat(currencie.symbol, ", los lenguajes son: ").concat(listaLenguage));
                                console.log("Los paises vecinos son: ".concat(paisesVecinos));
                                _b.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                }); };
                obtenerDatosDeObjetosDinamicos = function (data) {
                    var keys = Object.keys(data);
                    var array = [];
                    console.log(keys);
                    keys.forEach(function (key) {
                        array.push(data[key]);
                    });
                    return array;
                };
                return [4 /*yield*/, mostrar('pe')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
Exercise1();
