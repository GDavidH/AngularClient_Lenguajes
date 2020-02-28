"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Component({
    templateUrl: './fetchissue.component.html'
});
var FetchIssueComponent = /** @class */ (function () {
    function FetchIssueComponent(http, _router, _issueService) {
        this.http = http;
        this._router = _router;
        this._issueService = _issueService;
        this.getIssues();
    }
    FetchIssueComponent.prototype.getIssues = function () {
        var _this = this;
        this._issueService.getIssues().subscribe(function (data) { return _this.issueList = data; });
    };
    FetchIssueComponent.prototype.delete = function (id) {
        var _this = this;
        var answer = confirm("Do you want to delete Issue with id: " + id + "?");
        if (answer) {
            this._issueService.deleteIssue(id).subscribe(function (data) {
                _this.getIssues();
            }, function (error) { return console.error(error); });
        }
    };
    return FetchIssueComponent;
}());
exports.FetchIssueComponent = FetchIssueComponent;
//# sourceMappingURL=fetchemployee.component.js.map