"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Component({
    templateUrl: './fetchemployee.component.html'
});
var FetchEmployeeComponent = /** @class */ (function () {
    function FetchEmployeeComponent(http, _router, _employeeService) {
        this.http = http;
        this._router = _router;
        this._employeeService = _employeeService;
        this.getEmployees();
    }
    FetchEmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (data) { return _this.employeeList = data; });
    };
    FetchEmployeeComponent.prototype.delete = function (id) {
        var _this = this;
        var answer = confirm("Do you want to delete customer with id: " + id + "?");
        if (answer) {
            this._employeeService.deleteEmployee(id).subscribe(function (data) {
                _this.getEmployees();
            }, function (error) { return console.error(error); });
        }
    };
    return FetchEmployeeComponent;
}());
exports.FetchEmployeeComponent = FetchEmployeeComponent;
//# sourceMappingURL=fetchemployee.component.js.map