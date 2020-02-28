"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var operators_1 = require("rxjs/operators");
var Rx_1 = require("rxjs/Rx");
//@Injectable
var IssueService = /** @class */ (function () {
    function IssueService(_http, /*@Inject('BASE_URL')*/ baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    IssueService.prototype.getIssues = function () {
        return this._http.get('https://localhost:59267/api/Issue/').pipe(operators_1.map(function (res) {
            console.log('res', res);
            return res;
        }));
    };
    IssueService.prototype.errorHandler = function (error) {
        console.log(error);
        return Rx_1.Observable.throw(error);
    };
    return IssueService;
}());
exports.IssueService = IssueService;
//# sourceMappingURL=employeeservice.service.js.map