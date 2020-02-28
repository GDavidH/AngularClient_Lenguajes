"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var operators_1 = require("rxjs/operators");
var Rx_1 = require("rxjs/Rx");
//@Injectable
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http, /*@Inject('BASE_URL')*/ baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get('https://localhost:44335/api/Employee/').pipe(operators_1.map(function (res) {
            console.log('res', res);
            return res;
        }));
    };
    EmployeeService.prototype.errorHandler = function (error) {
        console.log(error);
        return Rx_1.Observable.throw(error);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employeeservice.service.js.map