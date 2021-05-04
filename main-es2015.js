(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header (toggleSideBarForMe)=\"sideBarToggler($event)\"></app-header>\n\n<mat-drawer-container>\n    <mat-drawer mode=\"side\" [opened]=\"sideBarOpen\">\n        <app-sidebar></app-sidebar>\n    </mat-drawer>\n    <mat-drawer-content>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div \n    fxLayout=\"row wrap\" \n    fxLayout.lt-sm=\"column\" \n    fxLayoutGap=\"20px\" \n    fxLayoutAlign=\"flex-start\">\n    <div \n        fxFlex=\"0 1 calc(30% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(100% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <div class=\"mat-elevation-z8\">\n            <app-semi-circle-donut [data]=\"pieChart\"></app-semi-circle-donut>\n        </div>\n    </div>\n\n    <!-- <div \n        fxFlex=\"0 1 calc(30% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(100% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <div class=\"mat-elevation-z8\">\n            <app-clock></app-clock>\n        </div>\n    </div> -->\n\n    <div \n        fxFlex=\"0 1 calc(30% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(100% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <div class=\"mat-elevation-z8\">\n            <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n        </div>\n    </div>\n</div>\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n\n<div>\n    <app-widget-area [data]=\"bigChart\"></app-widget-area>\n</div>\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div>\n    <app-line-chart-with-annotations [data]=\"tourDeFrance\"></app-line-chart-with-annotations>\n</div>\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div fxLayout=\"row wrap\" \n    fxLayout.lt-sm=\"column\" \n    fxLayoutGap=\"20px\" \n    fxLayoutAlign=\"flex-start\"\n    class=\"stats-cards\">\n    <mat-card \n        fxFlex=\"0 1 calc(25% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <app-widget-card label=\"New Users\" total=\"12k\" percentage=\"50\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card \n        fxFlex=\"0 1 calc(25% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <app-widget-card label=\"Users retention\" total=\"10k\" percentage=\"40\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card  \n        fxFlex=\"0 1 calc(25% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <app-widget-card label=\"Users engagement\" total=\"8k\" percentage=\"30\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n    <mat-card  \n        fxFlex=\"0 1 calc(25% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(50% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <app-widget-card label=\"Referral\" total=\"6k\" percentage=\"20\" [data]=\"cards\"></app-widget-card>\n    </mat-card>\n</div>\n\n<br>\n\n<mat-divider></mat-divider>\n\n<br>\n\n<div \n    fxLayout=\"row wrap\" \n    fxLayout.lt-sm=\"column\" \n    fxLayoutGap=\"20px\" \n    fxLayoutAlign=\"flex-start\">\n    <div class=\"table-wrapper\"\n        fxFlex=\"0 1 calc(60% - 20px)\"\n        fxFlex.lt-md=\"100%\"\n        fxFlex.lt-sm=\"100%\">\n        <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"dataSource\">\n\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                    <th mat-header-cell *matHeaderCellDef> No. </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                </ng-container>\n\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n\n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                    <th mat-header-cell *matHeaderCellDef> Weight </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                </ng-container>\n\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n        </div>\n\n    </div>\n    <div \n        fxFlex=\"0 1 calc(30% - 20px)\"\n        fxFlex.lt-md=\"0 1 calc(100% - 20px)\"\n        fxFlex.lt-sm=\"100%\">\n        <div class=\"mat-elevation-z8\">\n            <app-widget-pie [data]=\"pieChart\"></app-widget-pie>\n        </div>\n    </div>\n</div>\n\n<br>\n<br>\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-divider></mat-divider>\n<footer>\n    &copy; All rights reserved 2020\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar\" color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideBar()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n\n        <span> APP LOGO </span>\n\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n            <ul fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>settings</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-icon-button>\n                        <mat-icon>help_outline</mat-icon>\n                    </button>\n                </li>\n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\">\n                        <mat-icon>person_outline</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                            <mat-icon>exit_to_app</mat-icon>\n                            Sign out\n                        </button>\n                    </mat-menu>\n\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n    <div class=\"profile-card\">\n        <div class=\"header\">\n            <h2>Dashboard</h2>\n            <h4>Demo Project</h4>\n        </div>\n        <img src=\"assets/img/charts_1.jpg\" alt=\"Chart\">\n    </div>\n\n    <mat-divider></mat-divider>\n\n    <h2 matSubheader>Pages</h2>\n\n    <mat-list-item routerLinkActive=\"active\" routerLink=\"/\"><a matLine>Dashboard</a></mat-list-item>\n    <mat-list-item routerLinkActive=\"active\" routerLink=\"/posts\"><a matLine>Posts</a></mat-list-item>\n    <mat-list-item routerLinkActive=\"active\" routerLink=\"/articles\"><a matLine>Articles</a></mat-list-item>\n\n    <mat-divider></mat-divider>\n\n    <h2 matSubheader>Tools</h2>\n\n    <a mat-list-item routerLinkActive=\"active\" routerLink=\"/contacts\">\n        <mat-icon>import_contacts</mat-icon>\n        Contacts\n    </a>\n\n    <a mat-list-item routerLinkActive=\"active\" routerLink=\"/contacts\">\n        <mat-icon>contact_phone</mat-icon>\n        Leads\n    </a>\n\n</mat-nav-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/area/area.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/area/area.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\">\n</highcharts-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/card/card.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/card/card.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text\">\n    <h4>{{ label }}</h4>\n\n    <span class=\"total\">{{ total }}</span>\n\n    <span>\n        <mat-icon color=\"primary\">trending_up</mat-icon>\n    </span>\n\n    <span class=\"description\">\n        {{ percentage }}%\n    </span>\n\n    <span> of target</span>\n</div>\n<div class=\"widget\">\n    <highcharts-chart [Highcharts]=\"Highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 60px; display: block;\">\n    </highcharts-chart>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/clock/clock.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/clock/clock.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block;\">\n</highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; height: 400px; display: block;\">\n</highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/pie/pie.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/pie/pie.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block;\">\n</highcharts-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\n    [Highcharts]=\"Highcharts\"\n    [options]=\"chartOptions\"\n    style=\"width: 100%; display: block;\">\n</highcharts-chart>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/speedometer/speedometer.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/speedometer/speedometer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>speedometer works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");





const routes = [{
        path: '',
        component: _default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        children: [{
                path: '',
                component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            }]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _default_default_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/default.module */ "./src/app/default/default.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _default_default_module__WEBPACK_IMPORTED_MODULE_6__["DefaultModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/default/default.component.scss":
/*!************************************************!*\
  !*** ./src/app/default/default.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer {\n  width: 350px;\n}\n\nmat-drawer-container {\n  height: 100%;\n}\n\nmat-drawer-content {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() {
        this.sideBarOpen = true;
    }
    ngOnInit() { }
    sideBarToggler() {
        this.sideBarOpen = !this.sideBarOpen;
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.scss */ "./src/app/default/default.component.scss")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/default/default.module.ts":
/*!*******************************************!*\
  !*** ./src/app/default/default.module.ts ***!
  \*******************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/dashboard.service */ "./src/app/modules/dashboard.service.ts");










let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
            src_app_modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"]
        ],
        providers: [
            src_app_modules_dashboard_service__WEBPACK_IMPORTED_MODULE_9__["DashboardService"]
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/modules/dashboard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/dashboard.service.ts ***!
  \**********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardService = class DashboardService {
    constructor() {
        this.elevationData = [];
    }
    bigChart() {
        return [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }];
    }
    cards() {
        return [71, 78, 39, 66];
    }
    pieChart() {
        return [{
                name: 'Chrome',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Internet Explorer',
                y: 11.84
            }, {
                name: 'Firefox',
                y: 10.85
            }, {
                name: 'Edge',
                y: 4.67
            }, {
                name: 'Safari',
                y: 4.18
            }, {
                name: 'Sogou Explorer',
                y: 1.64
            }, {
                name: 'Opera',
                y: 1.6
            }, {
                name: 'QQ',
                y: 1.2
            }, {
                name: 'Other',
                y: 2.61
            }];
    }
    tourDeFrance() {
        // Data generated from http://www.bikeforums.net/professional-cycling-fans/1113087-2017-tour-de-france-gpx-tcx-files.html
        const elevationData = [
            [0.0, 225],
            [0.1, 226],
            [0.2, 228],
            [0.3, 228],
            [0.4, 229],
            [0.5, 229],
            [0.6, 230],
            [0.7, 234],
            [0.8, 235],
            [0.9, 236],
            [1.0, 235],
            [1.1, 232],
            [1.2, 228],
            [1.3, 223],
            [1.4, 218],
            [1.5, 214],
            [1.6, 207],
            [1.7, 202],
            [1.8, 198],
            [1.9, 196],
            [2.0, 197],
            [2.1, 200],
            [2.2, 205],
            [2.3, 206],
            [2.4, 210],
            [2.5, 210],
            [2.6, 210],
            [2.7, 209],
            [2.8, 208],
            [2.9, 207],
            [3.0, 209],
            [3.1, 208],
            [3.2, 207],
            [3.3, 207],
            [3.4, 206],
            [3.5, 206],
            [3.6, 205],
            [3.7, 201],
            [3.8, 195],
            [3.9, 191],
            [4.0, 191],
            [4.1, 195],
            [4.2, 199],
            [4.3, 203],
            [4.4, 208],
            [4.5, 208],
            [4.6, 208],
            [4.7, 208],
            [4.8, 209],
            [4.9, 207],
            [5.0, 207],
            [5.1, 208],
            [5.2, 209],
            [5.3, 208],
            [5.4, 210],
            [5.5, 209],
            [5.6, 209],
            [5.7, 206],
            [5.8, 207],
            [5.9, 209],
            [6.0, 211],
            [6.1, 206],
            [6.2, 201],
            [6.3, 199],
            [6.4, 200],
            [6.5, 202],
            [6.6, 203],
            [6.7, 202],
            [6.8, 204],
            [6.9, 206],
            [7.0, 208],
            [7.1, 205],
            [7.2, 202],
            [7.3, 198],
            [7.4, 198],
            [7.5, 198],
            [7.6, 198],
            [7.7, 198],
            [7.8, 199],
            [7.9, 197],
            [8.0, 194],
            [8.1, 194],
            [8.2, 195],
            [8.3, 195],
            [8.4, 196],
            [8.5, 192],
            [8.6, 200],
            [8.7, 197],
            [8.8, 194],
            [8.9, 194],
            [9.0, 193],
            [9.1, 192],
            [9.2, 192],
            [9.3, 193],
            [9.4, 191],
            [9.5, 191],
            [9.6, 193],
            [9.7, 193],
            [9.8, 194],
            [9.9, 192],
            [10.0, 192],
            [10.1, 192],
            [10.2, 192],
            [10.3, 192],
            [10.4, 193],
            [10.5, 193],
            [10.6, 193],
            [10.7, 193],
            [10.8, 194],
            [10.9, 194],
            [11.0, 194],
            [11.1, 195],
            [11.2, 194],
            [11.3, 194],
            [11.4, 194],
            [11.5, 194],
            [11.6, 193],
            [11.7, 194],
            [11.8, 194],
            [11.9, 194],
            [12.0, 195],
            [12.1, 195],
            [12.2, 195],
            [12.3, 197],
            [12.4, 197],
            [12.5, 197],
            [12.6, 198],
            [12.7, 201],
            [12.8, 202],
            [12.9, 203],
            [13.0, 205],
            [13.1, 205],
            [13.2, 204],
            [13.3, 210],
            [13.4, 213],
            [13.5, 212],
            [13.6, 213],
            [13.7, 213],
            [13.8, 213],
            [13.9, 214],
            [14.0, 214],
            [14.1, 212],
            [14.2, 209],
            [14.3, 207],
            [14.4, 207],
            [14.5, 208],
            [14.6, 211],
            [14.7, 215],
            [14.8, 219],
            [14.9, 219],
            [15.0, 221],
            [15.1, 224],
            [15.2, 224],
            [15.3, 225],
            [15.4, 225],
            [15.5, 225],
            [15.6, 225],
            [15.7, 225],
            [15.8, 225],
            [15.9, 226],
            [16.0, 226],
            [16.1, 227],
            [16.2, 227],
            [16.3, 230],
            [16.4, 231],
            [16.5, 231],
            [16.6, 232],
            [16.7, 230],
            [16.8, 229],
            [16.9, 228],
            [17.0, 226],
            [17.1, 226],
            [17.2, 224],
            [17.3, 223],
            [17.4, 224],
            [17.5, 223],
            [17.6, 221],
            [17.7, 220],
            [17.8, 218],
            [17.9, 217],
            [18.0, 216],
            [18.1, 216],
            [18.2, 215],
            [18.3, 214],
            [18.4, 213],
            [18.5, 212],
            [18.6, 212],
            [18.7, 213],
            [18.8, 214],
            [18.9, 215],
            [19.0, 215],
            [19.1, 216],
            [19.2, 217],
            [19.3, 216],
            [19.4, 216],
            [19.5, 217],
            [19.6, 219],
            [19.7, 218],
            [19.8, 218],
            [19.9, 220],
            [20.0, 224],
            [20.1, 224],
            [20.2, 225],
            [20.3, 224],
            [20.4, 225],
            [20.5, 228],
            [20.6, 228],
            [20.7, 227],
            [20.8, 228],
            [20.9, 228],
            [21.0, 228],
            [21.1, 229],
            [21.2, 225],
            [21.3, 223],
            [21.4, 222],
            [21.5, 222],
            [21.6, 223],
            [21.7, 224],
            [21.8, 224],
            [21.9, 226],
            [22.0, 228],
            [22.1, 233],
            [22.2, 237],
            [22.3, 237],
            [22.4, 238],
            [22.5, 236],
            [22.6, 232],
            [22.7, 232],
            [22.8, 228],
            [22.9, 227],
            [23.0, 227],
            [23.1, 227],
            [23.2, 227],
            [23.3, 226],
            [23.4, 226],
            [23.5, 226],
            [23.6, 226],
            [23.7, 226],
            [23.8, 226],
            [23.9, 226],
            [24.0, 228],
            [24.1, 228],
            [24.2, 229],
            [24.3, 230],
            [24.4, 230],
            [24.5, 233],
            [24.6, 235],
            [24.7, 234],
            [24.8, 234],
            [24.9, 233],
            [25.0, 233],
            [25.1, 232],
            [25.2, 232],
            [25.3, 232],
            [25.4, 232],
            [25.5, 234],
            [25.6, 234],
            [25.7, 234],
            [25.8, 234],
            [25.9, 237],
            [26.0, 238],
            [26.1, 238],
            [26.2, 238],
            [26.3, 240],
            [26.4, 240],
            [26.5, 244],
            [26.6, 241],
            [26.7, 241],
            [26.8, 245],
            [26.9, 254],
            [27.0, 262],
            [27.1, 255],
            [27.2, 255],
            [27.3, 251],
            [27.4, 252],
            [27.5, 253],
            [27.6, 253],
            [27.7, 251],
            [27.8, 251],
            [27.9, 254],
            [28.0, 255],
            [28.1, 257],
            [28.2, 259],
            [28.3, 259],
            [28.4, 259],
            [28.5, 260],
            [28.6, 258],
            [28.7, 258],
            [28.8, 262],
            [28.9, 260],
            [29.0, 262],
            [29.1, 266],
            [29.2, 268],
            [29.3, 270],
            [29.4, 278],
            [29.5, 276],
            [29.6, 278],
            [29.7, 282],
            [29.8, 281],
            [29.9, 284],
            [30.0, 287],
            [30.1, 292],
            [30.2, 303],
            [30.3, 309],
            [30.4, 317],
            [30.5, 324],
            [30.6, 334],
            [30.7, 334],
            [30.8, 319],
            [30.9, 321],
            [31.0, 333],
            [31.1, 337],
            [31.2, 345],
            [31.3, 352],
            [31.4, 386],
            [31.5, 398],
            [31.6, 406],
            [31.7, 416],
            [31.8, 423],
            [31.9, 425],
            [32.0, 425],
            [32.1, 424],
            [32.2, 423],
            [32.3, 421],
            [32.4, 421],
            [32.5, 422],
            [32.6, 421],
            [32.7, 421],
            [32.8, 421],
            [32.9, 421],
            [33.0, 421],
            [33.1, 423],
            [33.2, 435],
            [33.3, 450],
            [33.4, 451],
            [33.5, 452],
            [33.6, 452],
            [33.7, 452],
            [33.8, 452],
            [33.9, 455],
            [34.0, 459],
            [34.1, 465],
            [34.2, 469],
            [34.3, 473],
            [34.4, 476],
            [34.5, 480],
            [34.6, 483],
            [34.7, 487],
            [34.8, 490],
            [34.9, 494],
            [35.0, 497],
            [35.1, 502],
            [35.2, 504],
            [35.3, 507],
            [35.4, 511],
            [35.5, 514],
            [35.6, 518],
            [35.7, 521],
            [35.8, 524],
            [35.9, 527],
            [36.0, 528],
            [36.1, 525],
            [36.2, 526],
            [36.3, 528],
            [36.4, 528],
            [36.5, 528],
            [36.6, 529],
            [36.7, 528],
            [36.8, 526],
            [36.9, 525],
            [37.0, 524],
            [37.1, 524],
            [37.2, 524],
            [37.3, 525],
            [37.4, 528],
            [37.5, 528],
            [37.6, 532],
            [37.7, 534],
            [37.8, 538],
            [37.9, 540],
            [38.0, 544],
            [38.1, 546],
            [38.2, 554],
            [38.3, 555],
            [38.4, 559],
            [38.5, 566],
            [38.6, 568],
            [38.7, 571],
            [38.8, 571],
            [38.9, 570],
            [39.0, 569],
            [39.1, 567],
            [39.2, 567],
            [39.3, 566],
            [39.4, 566],
            [39.5, 566],
            [39.6, 566],
            [39.7, 566],
            [39.8, 566],
            [39.9, 565],
            [40.0, 563],
            [40.1, 562],
            [40.2, 563],
            [40.3, 563],
            [40.4, 562],
            [40.5, 562],
            [40.6, 562],
            [40.7, 561],
            [40.8, 563],
            [40.9, 561],
            [41.0, 559],
            [41.1, 559],
            [41.2, 559],
            [41.3, 558],
            [41.4, 559],
            [41.5, 560],
            [41.6, 560],
            [41.7, 560],
            [41.8, 559],
            [41.9, 557],
            [42.0, 556],
            [42.1, 555],
            [42.2, 555],
            [42.3, 556],
            [42.4, 557],
            [42.5, 557],
            [42.6, 557],
            [42.7, 557],
            [42.8, 557],
            [42.9, 557],
            [43.0, 557],
            [43.1, 557],
            [43.2, 558],
            [43.3, 559],
            [43.4, 560],
            [43.5, 563],
            [43.6, 566],
            [43.7, 570],
            [43.8, 572],
            [43.9, 575],
            [44.0, 573],
            [44.1, 576],
            [44.2, 577],
            [44.3, 579],
            [44.4, 581],
            [44.5, 584],
            [44.6, 591],
            [44.7, 593],
            [44.8, 594],
            [44.9, 596],
            [45.0, 599],
            [45.1, 601],
            [45.2, 601],
            [45.3, 604],
            [45.4, 607],
            [45.5, 607],
            [45.6, 607],
            [45.7, 607],
            [45.8, 605],
            [45.9, 607],
            [46.0, 609],
            [46.1, 612],
            [46.2, 613],
            [46.3, 614],
            [46.4, 614],
            [46.5, 614],
            [46.6, 616],
            [46.7, 616],
            [46.8, 615],
            [46.9, 615],
            [47.0, 618],
            [47.1, 617],
            [47.2, 615],
            [47.3, 614],
            [47.4, 613],
            [47.5, 613],
            [47.6, 613],
            [47.7, 613],
            [47.8, 612],
            [47.9, 612],
            [48.0, 609],
            [48.1, 610],
            [48.2, 603],
            [48.3, 598],
            [48.4, 598],
            [48.5, 596],
            [48.6, 595],
            [48.7, 593],
            [48.8, 590],
            [48.9, 587],
            [49.0, 583],
            [49.1, 580],
            [49.2, 576],
            [49.3, 569],
            [49.4, 568],
            [49.5, 566],
            [49.6, 560],
            [49.7, 559],
            [49.8, 558],
            [49.9, 562],
            [50.0, 564],
            [50.1, 563],
            [50.2, 563],
            [50.3, 567],
            [50.4, 574],
            [50.5, 577],
            [50.6, 580],
            [50.7, 581],
            [50.8, 579],
            [50.9, 579],
            [51.0, 578],
            [51.1, 574],
            [51.2, 569],
            [51.3, 564],
            [51.4, 558],
            [51.5, 554],
            [51.6, 550],
            [51.7, 543],
            [51.8, 539],
            [51.9, 536],
            [52.0, 532],
            [52.1, 530],
            [52.2, 529],
            [52.3, 528],
            [52.4, 528],
            [52.5, 528],
            [52.6, 528],
            [52.7, 527],
            [52.8, 527],
            [52.9, 528],
            [53.0, 529],
            [53.1, 528],
            [53.2, 526],
            [53.3, 526],
            [53.4, 524],
            [53.5, 519],
            [53.6, 517],
            [53.7, 517],
            [53.8, 522],
            [53.9, 521],
            [54.0, 520],
            [54.1, 518],
            [54.2, 513],
            [54.3, 518],
            [54.4, 520],
            [54.5, 523],
            [54.6, 526],
            [54.7, 522],
            [54.8, 513],
            [54.9, 512],
            [55.0, 513],
            [55.1, 513],
            [55.2, 518],
            [55.3, 522],
            [55.4, 526],
            [55.5, 526],
            [55.6, 525],
            [55.7, 522],
            [55.8, 520],
            [55.9, 519],
            [56.0, 518],
            [56.1, 518],
            [56.2, 518],
            [56.3, 517],
            [56.4, 516],
            [56.5, 517],
            [56.6, 517],
            [56.7, 517],
            [56.8, 521],
            [56.9, 522],
            [57.0, 518],
            [57.1, 517],
            [57.2, 514],
            [57.3, 515],
            [57.4, 513],
            [57.5, 511],
            [57.6, 511],
            [57.7, 511],
            [57.8, 510],
            [57.9, 510],
            [58.0, 509],
            [58.1, 509],
            [58.2, 509],
            [58.3, 509],
            [58.4, 509],
            [58.5, 509],
            [58.6, 509],
            [58.7, 509],
            [58.8, 509],
            [58.9, 510],
            [59.0, 510],
            [59.1, 521],
            [59.2, 524],
            [59.3, 528],
            [59.4, 533],
            [59.5, 539],
            [59.6, 545],
            [59.7, 551],
            [59.8, 562],
            [59.9, 572],
            [60.0, 579],
            [60.1, 585],
            [60.2, 593],
            [60.3, 596],
            [60.4, 605],
            [60.5, 617],
            [60.6, 620],
            [60.7, 627],
            [60.8, 628],
            [60.9, 627],
            [61.0, 627],
            [61.1, 628],
            [61.2, 629],
            [61.3, 632],
            [61.4, 634],
            [61.5, 638],
            [61.6, 637],
            [61.7, 638],
            [61.8, 639],
            [61.9, 640],
            [62.0, 640],
            [62.1, 639],
            [62.2, 639],
            [62.3, 637],
            [62.4, 637],
            [62.5, 636],
            [62.6, 637],
            [62.7, 636],
            [62.8, 637],
            [62.9, 635],
            [63.0, 629],
            [63.1, 626],
            [63.2, 626],
            [63.3, 623],
            [63.4, 621],
            [63.5, 621],
            [63.6, 621],
            [63.7, 622],
            [63.8, 625],
            [63.9, 626],
            [64.0, 629],
            [64.1, 631],
            [64.2, 633],
            [64.3, 631],
            [64.4, 632],
            [64.5, 634],
            [64.6, 637],
            [64.7, 637],
            [64.8, 637],
            [64.9, 637],
            [65.0, 638],
            [65.1, 641],
            [65.2, 644],
            [65.3, 646],
            [65.4, 649],
            [65.5, 648],
            [65.6, 647],
            [65.7, 647],
            [65.8, 649],
            [65.9, 650],
            [66.0, 651],
            [66.1, 654],
            [66.2, 652],
            [66.3, 651],
            [66.4, 650],
            [66.5, 650],
            [66.6, 649],
            [66.7, 648],
            [66.8, 648],
            [66.9, 648],
            [67.0, 649],
            [67.1, 650],
            [67.2, 647],
            [67.3, 642],
            [67.4, 641],
            [67.5, 638],
            [67.6, 636],
            [67.7, 635],
            [67.8, 633],
            [67.9, 636],
            [68.0, 638],
            [68.1, 639],
            [68.2, 641],
            [68.3, 643],
            [68.4, 644],
            [68.5, 645],
            [68.6, 649],
            [68.7, 651],
            [68.8, 648],
            [68.9, 645],
            [69.0, 640],
            [69.1, 637],
            [69.2, 637],
            [69.3, 637],
            [69.4, 635],
            [69.5, 630],
            [69.6, 628],
            [69.7, 625],
            [69.8, 622],
            [69.9, 620],
            [70.0, 618],
            [70.1, 613],
            [70.2, 612],
            [70.3, 608],
            [70.4, 603],
            [70.5, 599],
            [70.6, 597],
            [70.7, 591],
            [70.8, 590],
            [70.9, 587],
            [71.0, 584],
            [71.1, 584],
            [71.2, 582],
            [71.3, 574],
            [71.4, 572],
            [71.5, 570],
            [71.6, 572],
            [71.7, 573],
            [71.8, 575],
            [71.9, 578],
            [72.0, 590],
            [72.1, 595],
            [72.2, 595],
            [72.3, 579],
            [72.4, 581],
            [72.5, 583],
            [72.6, 583],
            [72.7, 583],
            [72.8, 583],
            [72.9, 580],
            [73.0, 579],
            [73.1, 584],
            [73.2, 587],
            [73.3, 594],
            [73.4, 597],
            [73.5, 597],
            [73.6, 596],
            [73.7, 593],
            [73.8, 591],
            [73.9, 596],
            [74.0, 596],
            [74.1, 598],
            [74.2, 598],
            [74.3, 595],
            [74.4, 592],
            [74.5, 592],
            [74.6, 592],
            [74.7, 594],
            [74.8, 597],
            [74.9, 600],
            [75.0, 601],
            [75.1, 605],
            [75.2, 604],
            [75.3, 604],
            [75.4, 607],
            [75.5, 607],
            [75.6, 607],
            [75.7, 604],
            [75.8, 605],
            [75.9, 608],
            [76.0, 616],
            [76.1, 618],
            [76.2, 629],
            [76.3, 633],
            [76.4, 634],
            [76.5, 637],
            [76.6, 644],
            [76.7, 650],
            [76.8, 653],
            [76.9, 653],
            [77.0, 657],
            [77.1, 664],
            [77.2, 668],
            [77.3, 668],
            [77.4, 668],
            [77.5, 672],
            [77.6, 674],
            [77.7, 679],
            [77.8, 681],
            [77.9, 689],
            [78.0, 692],
            [78.1, 704],
            [78.2, 708],
            [78.3, 714],
            [78.4, 716],
            [78.5, 719],
            [78.6, 722],
            [78.7, 729],
            [78.8, 733],
            [78.9, 735],
            [79.0, 736],
            [79.1, 737],
            [79.2, 737],
            [79.3, 737],
            [79.4, 737],
            [79.5, 736],
            [79.6, 736],
            [79.7, 736],
            [79.8, 737],
            [79.9, 737],
            [80.0, 737],
            [80.1, 737],
            [80.2, 738],
            [80.3, 739],
            [80.4, 739],
            [80.5, 739],
            [80.6, 741],
            [80.7, 741],
            [80.8, 741],
            [80.9, 741],
            [81.0, 743],
            [81.1, 744],
            [81.2, 744],
            [81.3, 744],
            [81.4, 744],
            [81.5, 746],
            [81.6, 748],
            [81.7, 757],
            [81.8, 753],
            [81.9, 752],
            [82.0, 751],
            [82.1, 748],
            [82.2, 746],
            [82.3, 756],
            [82.4, 755],
            [82.5, 748],
            [82.6, 745],
            [82.7, 749],
            [82.8, 752],
            [82.9, 753],
            [83.0, 753],
            [83.1, 755],
            [83.2, 764],
            [83.3, 766],
            [83.4, 771],
            [83.5, 774],
            [83.6, 775],
            [83.7, 777],
            [83.8, 778],
            [83.9, 778],
            [84.0, 780],
            [84.1, 780],
            [84.2, 782],
            [84.3, 783],
            [84.4, 786],
            [84.5, 791],
            [84.6, 792],
            [84.7, 787],
            [84.8, 782],
            [84.9, 780],
            [85.0, 777],
            [85.1, 777],
            [85.2, 777],
            [85.3, 777],
            [85.4, 770],
            [85.5, 768],
            [85.6, 764],
            [85.7, 763],
            [85.8, 758],
            [85.9, 757],
            [86.0, 760],
            [86.1, 759],
            [86.2, 756],
            [86.3, 751],
            [86.4, 748],
            [86.5, 748],
            [86.6, 747],
            [86.7, 746],
            [86.8, 745],
            [86.9, 746],
            [87.0, 746],
            [87.1, 747],
            [87.2, 742],
            [87.3, 738],
            [87.4, 733],
            [87.5, 730],
            [87.6, 730],
            [87.7, 727],
            [87.8, 725],
            [87.9, 722],
            [88.0, 719],
            [88.1, 718],
            [88.2, 716],
            [88.3, 712],
            [88.4, 710],
            [88.5, 708],
            [88.6, 707],
            [88.7, 705],
            [88.8, 699],
            [88.9, 695],
            [89.0, 686],
            [89.1, 674],
            [89.2, 671],
            [89.3, 670],
            [89.4, 670],
            [89.5, 669],
            [89.6, 668],
            [89.7, 669],
            [89.8, 670],
            [89.9, 672],
            [90.0, 679],
            [90.1, 681],
            [90.2, 684],
            [90.3, 689],
            [90.4, 693],
            [90.5, 697],
            [90.6, 701],
            [90.7, 705],
            [90.8, 708],
            [90.9, 709],
            [91.0, 712],
            [91.1, 714],
            [91.2, 716],
            [91.3, 706],
            [91.4, 697],
            [91.5, 689],
            [91.6, 681],
            [91.7, 677],
            [91.8, 668],
            [91.9, 663],
            [92.0, 661],
            [92.1, 653],
            [92.2, 652],
            [92.3, 650],
            [92.4, 647],
            [92.5, 646],
            [92.6, 645],
            [92.7, 642],
            [92.8, 640],
            [92.9, 640],
            [93.0, 651],
            [93.1, 648],
            [93.2, 657],
            [93.3, 660],
            [93.4, 660],
            [93.5, 662],
            [93.6, 672],
            [93.7, 675],
            [93.8, 681],
            [93.9, 685],
            [94.0, 694],
            [94.1, 700],
            [94.2, 707],
            [94.3, 716],
            [94.4, 720],
            [94.5, 723],
            [94.6, 727],
            [94.7, 727],
            [94.8, 728],
            [94.9, 727],
            [95.0, 727],
            [95.1, 727],
            [95.2, 730],
            [95.3, 735],
            [95.4, 744],
            [95.5, 749],
            [95.6, 753],
            [95.7, 759],
            [95.8, 762],
            [95.9, 767],
            [96.0, 782],
            [96.1, 781],
            [96.2, 783],
            [96.3, 785],
            [96.4, 789],
            [96.5, 796],
            [96.6, 807],
            [96.7, 813],
            [96.8, 819],
            [96.9, 822],
            [97.0, 824],
            [97.1, 826],
            [97.2, 830],
            [97.3, 832],
            [97.4, 836],
            [97.5, 838],
            [97.6, 842],
            [97.7, 847],
            [97.8, 848],
            [97.9, 854],
            [98.0, 855],
            [98.1, 858],
            [98.2, 863],
            [98.3, 870],
            [98.4, 875],
            [98.5, 883],
            [98.6, 889],
            [98.7, 896],
            [98.8, 904],
            [98.9, 910],
            [99.0, 916],
            [99.1, 922],
            [99.2, 927],
            [99.3, 931],
            [99.4, 938],
            [99.5, 941],
            [99.6, 949],
            [99.7, 954],
            [99.8, 962],
            [99.9, 967],
            [100.0, 976],
            [100.1, 983],
            [100.2, 986],
            [100.3, 992],
            [100.4, 994],
            [100.5, 999],
            [100.6, 1004],
            [100.7, 1006],
            [100.8, 1007],
            [100.9, 1009],
            [101.0, 1012],
            [101.1, 1016],
            [101.2, 1019],
            [101.3, 1021],
            [101.4, 1025],
            [101.5, 1025],
            [101.6, 1020],
            [101.7, 1017],
            [101.8, 1009],
            [101.9, 1003],
            [102.0, 1000],
            [102.1, 994],
            [102.2, 989],
            [102.3, 986],
            [102.4, 979],
            [102.5, 974],
            [102.6, 972],
            [102.7, 964],
            [102.8, 961],
            [102.9, 957],
            [103.0, 952],
            [103.1, 946],
            [103.2, 944],
            [103.3, 940],
            [103.4, 936],
            [103.5, 935],
            [103.6, 934],
            [103.7, 934],
            [103.8, 934],
            [103.9, 934],
            [104.0, 933],
            [104.1, 929],
            [104.2, 922],
            [104.3, 914],
            [104.4, 906],
            [104.5, 910],
            [104.6, 906],
            [104.7, 903],
            [104.8, 895],
            [104.9, 893],
            [105.0, 891],
            [105.1, 889],
            [105.2, 889],
            [105.3, 893],
            [105.4, 899],
            [105.5, 904],
            [105.6, 906],
            [105.7, 897],
            [105.8, 883],
            [105.9, 895],
            [106.0, 898],
            [106.1, 893],
            [106.2, 895],
            [106.3, 907],
            [106.4, 916],
            [106.5, 915],
            [106.6, 920],
            [106.7, 919],
            [106.8, 917],
            [106.9, 911],
            [107.0, 904],
            [107.1, 891],
            [107.2, 894],
            [107.3, 902],
            [107.4, 900],
            [107.5, 900],
            [107.6, 898],
            [107.7, 897],
            [107.8, 897],
            [107.9, 897],
            [108.0, 909],
            [108.1, 910],
            [108.2, 906],
            [108.3, 920],
            [108.4, 901],
            [108.5, 900],
            [108.6, 895],
            [108.7, 892],
            [108.8, 887],
            [108.9, 889],
            [109.0, 904],
            [109.1, 910],
            [109.2, 910],
            [109.3, 907],
            [109.4, 906],
            [109.5, 898],
            [109.6, 908],
            [109.7, 911],
            [109.8, 920],
            [109.9, 928],
            [110.0, 939],
            [110.1, 939],
            [110.2, 935],
            [110.3, 932],
            [110.4, 926],
            [110.5, 924],
            [110.6, 919],
            [110.7, 913],
            [110.8, 909],
            [110.9, 906],
            [111.0, 901],
            [111.1, 899],
            [111.2, 899],
            [111.3, 899],
            [111.4, 898],
            [111.5, 896],
            [111.6, 895],
            [111.7, 889],
            [111.8, 887],
            [111.9, 886],
            [112.0, 881],
            [112.1, 875],
            [112.2, 872],
            [112.3, 867],
            [112.4, 856],
            [112.5, 850],
            [112.6, 842],
            [112.7, 839],
            [112.8, 836],
            [112.9, 827],
            [113.0, 822],
            [113.1, 817],
            [113.2, 809],
            [113.3, 805],
            [113.4, 802],
            [113.5, 796],
            [113.6, 793],
            [113.7, 790],
            [113.8, 786],
            [113.9, 778],
            [114.0, 770],
            [114.1, 759],
            [114.2, 754],
            [114.3, 744],
            [114.4, 744],
            [114.5, 746],
            [114.6, 741],
            [114.7, 761],
            [114.8, 759],
            [114.9, 737],
            [115.0, 722],
            [115.1, 719],
            [115.2, 720],
            [115.3, 721],
            [115.4, 722],
            [115.5, 718],
            [115.6, 713],
            [115.7, 709],
            [115.8, 706],
            [115.9, 707],
            [116.0, 699],
            [116.1, 689],
            [116.2, 685],
            [116.3, 683],
            [116.4, 669],
            [116.5, 665],
            [116.6, 661],
            [116.7, 657],
            [116.8, 653],
            [116.9, 653],
            [117.0, 647],
            [117.1, 640],
            [117.2, 638],
            [117.3, 633],
            [117.4, 628],
            [117.5, 624],
            [117.6, 618],
            [117.7, 613],
            [117.8, 607],
            [117.9, 602],
            [118.0, 598],
            [118.1, 595],
            [118.2, 595],
            [118.3, 594],
            [118.4, 602],
            [118.5, 598],
            [118.6, 598],
            [118.7, 601],
            [118.8, 605],
            [118.9, 608],
            [119.0, 612],
            [119.1, 614],
            [119.2, 611],
            [119.3, 608],
            [119.4, 611],
            [119.5, 612],
            [119.6, 614],
            [119.7, 615],
            [119.8, 613],
            [119.9, 611],
            [120.0, 602],
            [120.1, 593],
            [120.2, 588],
            [120.3, 588],
            [120.4, 586],
            [120.5, 583],
            [120.6, 579],
            [120.7, 579],
            [120.8, 578],
            [120.9, 576],
            [121.0, 575],
            [121.1, 579],
            [121.2, 574],
            [121.3, 570],
            [121.4, 565],
            [121.5, 562],
            [121.6, 560],
            [121.7, 559],
            [121.8, 556],
            [121.9, 554],
            [122.0, 546],
            [122.1, 542],
            [122.2, 536],
            [122.3, 531],
            [122.4, 529],
            [122.5, 529],
            [122.6, 518],
            [122.7, 515],
            [122.8, 515],
            [122.9, 515],
            [123.0, 514],
            [123.1, 513],
            [123.2, 506],
            [123.3, 498],
            [123.4, 496],
            [123.5, 494],
            [123.6, 483],
            [123.7, 479],
            [123.8, 476],
            [123.9, 470],
            [124.0, 466],
            [124.1, 460],
            [124.2, 457],
            [124.3, 451],
            [124.4, 445],
            [124.5, 443],
            [124.6, 435],
            [124.7, 432],
            [124.8, 426],
            [124.9, 421],
            [125.0, 418],
            [125.1, 414],
            [125.2, 408],
            [125.3, 405],
            [125.4, 403],
            [125.5, 394],
            [125.6, 386],
            [125.7, 379],
            [125.8, 361],
            [125.9, 358],
            [126.0, 366],
            [126.1, 372],
            [126.2, 372],
            [126.3, 374],
            [126.4, 379],
            [126.5, 382],
            [126.6, 385],
            [126.7, 388],
            [126.8, 390],
            [126.9, 393],
            [127.0, 394],
            [127.1, 393],
            [127.2, 391],
            [127.3, 387],
            [127.4, 382],
            [127.5, 378],
            [127.6, 374],
            [127.7, 370],
            [127.8, 367],
            [127.9, 366],
            [128.0, 364],
            [128.1, 364],
            [128.2, 362],
            [128.3, 362],
            [128.4, 360],
            [128.5, 357],
            [128.6, 354],
            [128.7, 351],
            [128.8, 350],
            [128.9, 351],
            [129.0, 350],
            [129.1, 350],
            [129.2, 351],
            [129.3, 352],
            [129.4, 352],
            [129.5, 352],
            [129.6, 351],
            [129.7, 352],
            [129.8, 352],
            [129.9, 353],
            [130.0, 348],
            [130.1, 346],
            [130.2, 344],
            [130.3, 343],
            [130.4, 343],
            [130.5, 342],
            [130.6, 342],
            [130.7, 345],
            [130.8, 349],
            [130.9, 341],
            [131.0, 345],
            [131.1, 348],
            [131.2, 364],
            [131.3, 374],
            [131.4, 388],
            [131.5, 379],
            [131.6, 380],
            [131.7, 387],
            [131.8, 394],
            [131.9, 404],
            [132.0, 411],
            [132.1, 416],
            [132.2, 426],
            [132.3, 428],
            [132.4, 430],
            [132.5, 438],
            [132.6, 447],
            [132.7, 450],
            [132.8, 454],
            [132.9, 460],
            [133.0, 468],
            [133.1, 469],
            [133.2, 474],
            [133.3, 478],
            [133.4, 485],
            [133.5, 488],
            [133.6, 494],
            [133.7, 497],
            [133.8, 502],
            [133.9, 510],
            [134.0, 513],
            [134.1, 516],
            [134.2, 523],
            [134.3, 527],
            [134.4, 531],
            [134.5, 540],
            [134.6, 544],
            [134.7, 549],
            [134.8, 554],
            [134.9, 557],
            [135.0, 564],
            [135.1, 566],
            [135.2, 571],
            [135.3, 577],
            [135.4, 581],
            [135.5, 584],
            [135.6, 591],
            [135.7, 596],
            [135.8, 600],
            [135.9, 608],
            [136.0, 610],
            [136.1, 616],
            [136.2, 621],
            [136.3, 627],
            [136.4, 632],
            [136.5, 644],
            [136.6, 649],
            [136.7, 656],
            [136.8, 660],
            [136.9, 663],
            [137.0, 668],
            [137.1, 672],
            [137.2, 674],
            [137.3, 677],
            [137.4, 680],
            [137.5, 683],
            [137.6, 689],
            [137.7, 691],
            [137.8, 697],
            [137.9, 699],
            [138.0, 702],
            [138.1, 707],
            [138.2, 712],
            [138.3, 716],
            [138.4, 720],
            [138.5, 728],
            [138.6, 731],
            [138.7, 735],
            [138.8, 740],
            [138.9, 742],
            [139.0, 746],
            [139.1, 750],
            [139.2, 752],
            [139.3, 760],
            [139.4, 760],
            [139.5, 761],
            [139.6, 757],
            [139.7, 756],
            [139.8, 755],
            [139.9, 754],
            [140.0, 755],
            [140.1, 756],
            [140.2, 753],
            [140.3, 746],
            [140.4, 743],
            [140.5, 734],
            [140.6, 740],
            [140.7, 746],
            [140.8, 748],
            [140.9, 747],
            [141.0, 743],
            [141.1, 742],
            [141.2, 742],
            [141.3, 740],
            [141.4, 739],
            [141.5, 741],
            [141.6, 757],
            [141.7, 756],
            [141.8, 751],
            [141.9, 747],
            [142.0, 743],
            [142.1, 738],
            [142.2, 739],
            [142.3, 742],
            [142.4, 749],
            [142.5, 750],
            [142.6, 756],
            [142.7, 760],
            [142.8, 762],
            [142.9, 765],
            [143.0, 771],
            [143.1, 775],
            [143.2, 786],
            [143.3, 791],
            [143.4, 797],
            [143.5, 801],
            [143.6, 801],
            [143.7, 793],
            [143.8, 786],
            [143.9, 782],
            [144.0, 780],
            [144.1, 778],
            [144.2, 776],
            [144.3, 765],
            [144.4, 757],
            [144.5, 753],
            [144.6, 750],
            [144.7, 748],
            [144.8, 745],
            [144.9, 738],
            [145.0, 735],
            [145.1, 732],
            [145.2, 726],
            [145.3, 724],
            [145.4, 720],
            [145.5, 712],
            [145.6, 710],
            [145.7, 705],
            [145.8, 697],
            [145.9, 691],
            [146.0, 686],
            [146.1, 681],
            [146.2, 679],
            [146.3, 680],
            [146.4, 678],
            [146.5, 673],
            [146.6, 665],
            [146.7, 657],
            [146.8, 655],
            [146.9, 647],
            [147.0, 640],
            [147.1, 634],
            [147.2, 621],
            [147.3, 621],
            [147.4, 613],
            [147.5, 608],
            [147.6, 598],
            [147.7, 594],
            [147.8, 588],
            [147.9, 578],
            [148.0, 565],
            [148.1, 559],
            [148.2, 558],
            [148.3, 556],
            [148.4, 556],
            [148.5, 555],
            [148.6, 556],
            [148.7, 557],
            [148.8, 557],
            [148.9, 565],
            [149.0, 570],
            [149.1, 575],
            [149.2, 583],
            [149.3, 591],
            [149.4, 599],
            [149.5, 603],
            [149.6, 609],
            [149.7, 613],
            [149.8, 618],
            [149.9, 624],
            [150.0, 630],
            [150.1, 635],
            [150.2, 643],
            [150.3, 652],
            [150.4, 658],
            [150.5, 669],
            [150.6, 680],
            [150.7, 684],
            [150.8, 692],
            [150.9, 696],
            [151.0, 698],
            [151.1, 698],
            [151.2, 696],
            [151.3, 695],
            [151.4, 696],
            [151.5, 699],
            [151.6, 701],
            [151.7, 706],
            [151.8, 707],
            [151.9, 707],
            [152.0, 703],
            [152.1, 702],
            [152.2, 700],
            [152.3, 700],
            [152.4, 705],
            [152.5, 705],
            [152.6, 715],
            [152.7, 718],
            [152.8, 721],
            [152.9, 723],
            [153.0, 725],
            [153.1, 724],
            [153.2, 722],
            [153.3, 720],
            [153.4, 716],
            [153.5, 710],
            [153.6, 700],
            [153.7, 696],
            [153.8, 691],
            [153.9, 682],
            [154.0, 676],
            [154.1, 670],
            [154.2, 664],
            [154.3, 658],
            [154.4, 648],
            [154.5, 643],
            [154.6, 645],
            [154.7, 645],
            [154.8, 646],
            [154.9, 630],
            [155.0, 625],
            [155.1, 620],
            [155.2, 614],
            [155.3, 605],
            [155.4, 600],
            [155.5, 593],
            [155.6, 587],
            [155.7, 581],
            [155.8, 576],
            [155.9, 569],
            [156.0, 566],
            [156.1, 559],
            [156.2, 557],
            [156.3, 551],
            [156.4, 548],
            [156.5, 544],
            [156.6, 542],
            [156.7, 540],
            [156.8, 537],
            [156.9, 540],
            [157.0, 542],
            [157.1, 541],
            [157.2, 540],
            [157.3, 538],
            [157.4, 536],
            [157.5, 532],
            [157.6, 523],
            [157.7, 519],
            [157.8, 515],
            [157.9, 509],
            [158.0, 503],
            [158.1, 499],
            [158.2, 491],
            [158.3, 485],
            [158.4, 478],
            [158.5, 477],
            [158.6, 474],
            [158.7, 471],
            [158.8, 469],
            [158.9, 464],
            [159.0, 462],
            [159.1, 456],
            [159.2, 454],
            [159.3, 445],
            [159.4, 424],
            [159.5, 427],
            [159.6, 425],
            [159.7, 422],
            [159.8, 419],
            [159.9, 418],
            [160.0, 417],
            [160.1, 423],
            [160.2, 436],
            [160.3, 434],
            [160.4, 426],
            [160.5, 401],
            [160.6, 417],
            [160.7, 418],
            [160.8, 419],
            [160.9, 419],
            [161.0, 412],
            [161.1, 417],
            [161.2, 425],
            [161.3, 430],
            [161.4, 432],
            [161.5, 417],
            [161.6, 423],
            [161.7, 425],
            [161.8, 409],
            [161.9, 399],
            [162.0, 427],
            [162.1, 425],
            [162.2, 414],
            [162.3, 421],
            [162.4, 424],
            [162.5, 426],
            [162.6, 417],
            [162.7, 405],
            [162.8, 411],
            [162.9, 403],
            [163.0, 405],
            [163.1, 410],
            [163.2, 412],
            [163.3, 413],
            [163.4, 415],
            [163.5, 406],
            [163.6, 407],
            [163.7, 408],
            [163.8, 412],
            [163.9, 417],
            [164.0, 426],
            [164.1, 431],
            [164.2, 482],
            [164.3, 478],
            [164.4, 471],
            [164.5, 463],
            [164.6, 457],
            [164.7, 452],
            [164.8, 456],
            [164.9, 463],
            [165.0, 471],
            [165.1, 470],
            [165.2, 471],
            [165.3, 474],
            [165.4, 494],
            [165.5, 506],
            [165.6, 515],
            [165.7, 520],
            [165.8, 534],
            [165.9, 520],
            [166.0, 536],
            [166.1, 529],
            [166.2, 524],
            [166.3, 515],
            [166.4, 520],
            [166.5, 526],
            [166.6, 531],
            [166.7, 551],
            [166.8, 553],
            [166.9, 555],
            [167.0, 559],
            [167.1, 562],
            [167.2, 564],
            [167.3, 567],
            [167.4, 571],
            [167.5, 574],
            [167.6, 576],
            [167.7, 596],
            [167.8, 607],
            [167.9, 623],
            [168.0, 645],
            [168.1, 667],
            [168.2, 685],
            [168.3, 691],
            [168.4, 709],
            [168.5, 702],
            [168.6, 692],
            [168.7, 692],
            [168.8, 696],
            [168.9, 732],
            [169.0, 746],
            [169.1, 758],
            [169.2, 761],
            [169.3, 763],
            [169.4, 765],
            [169.5, 768],
            [169.6, 783],
            [169.7, 816],
            [169.8, 815],
            [169.9, 817],
            [170.0, 821],
            [170.1, 825],
            [170.2, 827],
            [170.3, 828],
            [170.4, 830],
            [170.5, 829],
            [170.6, 827],
            [170.7, 827],
            [170.8, 828],
            [170.9, 837],
            [171.0, 845],
            [171.1, 850],
            [171.2, 856],
            [171.3, 864],
            [171.4, 867],
            [171.5, 876],
            [171.6, 880],
            [171.7, 888],
            [171.8, 900],
            [171.9, 905],
            [172.0, 910],
            [172.1, 922],
            [172.2, 925],
            [172.3, 931],
            [172.4, 939],
            [172.5, 957],
            [172.6, 966],
            [172.7, 980],
            [172.8, 991],
            [172.9, 998],
            [173.0, 1008],
            [173.1, 1021],
            [173.2, 1031],
            [173.3, 1045],
            [173.4, 1059],
            [173.5, 1065],
            [173.6, 1078],
            [173.7, 1094],
            [173.8, 1092],
            [173.9, 1096],
            [174.0, 1098],
            [174.1, 1101],
            [174.2, 1104],
            [174.3, 1107],
            [174.4, 1110],
            [174.5, 1113],
            [174.6, 1114],
            [174.7, 1116],
            [174.8, 1119],
            [174.9, 1122],
            [175.0, 1125],
            [175.1, 1128],
            [175.2, 1130],
            [175.3, 1134],
            [175.4, 1137],
            [175.5, 1142],
            [175.6, 1148],
            [175.7, 1155],
            [175.8, 1162],
            [175.9, 1174],
            [176.0, 1183],
            [176.1, 1191],
            [176.2, 1196],
            [176.3, 1198],
            [176.4, 1200],
            [176.5, 1189],
            [176.6, 1183],
            [176.7, 1180],
            [176.8, 1178],
            [176.9, 1173],
            [177.0, 1171],
            [177.1, 1167],
            [177.2, 1165],
            [177.3, 1165],
            [177.4, 1165],
            [177.5, 1165],
            [177.6, 1164],
            [177.7, 1164],
            [177.8, 1164],
            [177.9, 1166],
            [178.0, 1167],
            [178.1, 1170],
            [178.2, 1177],
            [178.3, 1174],
            [178.4, 1166],
            [178.5, 1166],
            [178.6, 1164],
            [178.7, 1162],
            [178.8, 1160],
            [178.9, 1155],
            [179.0, 1152],
            [179.1, 1151],
            [179.2, 1151],
            [179.3, 1146],
            [179.4, 1144],
            [179.5, 1147],
            [179.6, 1151],
            [179.7, 1154],
            [179.8, 1153],
            [179.9, 1154],
            [180.0, 1153],
            [180.1, 1150],
            [180.2, 1147],
            [180.3, 1146],
            [180.4, 1144],
            [180.5, 1142],
            [180.6, 1140],
            [180.7, 1135],
            [180.8, 1125],
            [180.9, 1121],
            [181.0, 1113],
            [181.1, 1107],
            [181.2, 1098],
            [181.3, 1094],
            [181.4, 1087],
            [181.5, 1084],
            [181.6, 1082],
            [181.7, 1078],
            [181.8, 1073],
            [181.9, 1068],
            [182.0, 1063],
            [182.1, 1061],
            [182.2, 1060],
            [182.3, 1061],
            [182.4, 1065],
            [182.5, 1069],
            [182.6, 1072],
            [182.7, 1076],
            [182.8, 1084],
            [182.9, 1098],
            [183.0, 1110],
            [183.1, 1116],
            [183.2, 1113],
            [183.3, 1116],
            [183.4, 1122],
            [183.5, 1125],
            [183.6, 1133],
            [183.7, 1138],
            [183.8, 1146],
            [183.9, 1140],
            [184.0, 1135],
            [184.1, 1134],
            [184.2, 1131],
            [184.3, 1129],
            [184.4, 1137],
            [184.5, 1139],
            [184.6, 1144],
            [184.7, 1149],
            [184.8, 1155],
            [184.9, 1163],
            [185.0, 1164],
            [185.1, 1173],
            [185.2, 1170],
            [185.3, 1165],
            [185.4, 1157],
            [185.5, 1153],
            [185.6, 1150],
            [185.7, 1142],
            [185.8, 1141],
            [185.9, 1142],
            [186.0, 1142],
            [186.1, 1142],
            [186.2, 1142],
            [186.3, 1145],
            [186.4, 1151],
            [186.5, 1154],
            [186.6, 1155],
            [186.7, 1152],
            [186.8, 1154],
            [186.9, 1154],
            [187.0, 1155],
            [187.1, 1158],
            [187.2, 1159],
            [187.3, 1158],
            [187.4, 1158],
            [187.5, 1158],
            [187.6, 1161],
            [187.7, 1167],
            [187.8, 1170]
        ];
        return elevationData;
    }
    semiCircleDonut() {
        return [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ];
    }
};
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stats-cards .mat-card {\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n\n.table-wrapper {\n  margin-bottom: 20px;\n}\n\n.table-wrapper table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FERUU7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMtY2FyZHMge1xuICAubWF0LWNhcmQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLnN0YXRzLWNhcmRzIC5tYXQtY2FyZCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50YWJsZS13cmFwcGVyIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/modules/dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
let DashboardComponent = class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.bigChart = [];
        this.cards = [];
        this.pieChart = [];
        this.tourDeFrance = [];
        this.semiCircleDonut = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.bigChart = this.dashboardService.bigChart();
        this.cards = this.dashboardService.cards();
        this.pieChart = this.dashboardService.pieChart();
        this.tourDeFrance = this.dashboardService.tourDeFrance();
        this.semiCircleDonut = this.dashboardService.semiCircleDonut();
        this.dataSource.paginator = this.paginator;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], DashboardComponent.prototype, "paginator", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCJmb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul li {\n  list-style: none;\n}\n\n.toolbar {\n  background-color: cornflowerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuIiwidWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "toggleSideBarForMe", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n:host .profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n:host .profile-card img {\n  width: 200px;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wcm9maWxlLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAucHJvZmlsZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuOmhvc3QgLnByb2ZpbGUtY2FyZCBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/area/area.component */ "./src/app/shared/widgets/area/area.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/card/card.component */ "./src/app/shared/widgets/card/card.component.ts");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "./src/app/shared/widgets/pie/pie.component.ts");
/* harmony import */ var _widgets_line_chart_with_annotations_line_chart_with_annotations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/line-chart-with-annotations/line-chart-with-annotations.component */ "./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.ts");
/* harmony import */ var _widgets_semi_circle_donut_semi_circle_donut_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/semi-circle-donut/semi-circle-donut.component */ "./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.ts");
/* harmony import */ var _widgets_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/speedometer/speedometer.component */ "./src/app/shared/widgets/speedometer/speedometer.component.ts");
/* harmony import */ var _widgets_clock_clock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/clock/clock.component */ "./src/app/shared/widgets/clock/clock.component.ts");

















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"],
            _widgets_line_chart_with_annotations_line_chart_with_annotations_component__WEBPACK_IMPORTED_MODULE_13__["LineChartWithAnnotationsComponent"],
            _widgets_semi_circle_donut_semi_circle_donut_component__WEBPACK_IMPORTED_MODULE_14__["SemiCircleDonutComponent"],
            _widgets_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_15__["SpeedometerComponent"],
            _widgets_clock_clock_component__WEBPACK_IMPORTED_MODULE_16__["ClockComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_10__["HighchartsChartModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_9__["AreaComponent"],
            _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
            _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_12__["PieComponent"],
            _widgets_line_chart_with_annotations_line_chart_with_annotations_component__WEBPACK_IMPORTED_MODULE_13__["LineChartWithAnnotationsComponent"],
            _widgets_semi_circle_donut_semi_circle_donut_component__WEBPACK_IMPORTED_MODULE_14__["SemiCircleDonutComponent"],
            _widgets_speedometer_speedometer_component__WEBPACK_IMPORTED_MODULE_15__["SpeedometerComponent"],
            _widgets_clock_clock_component__WEBPACK_IMPORTED_MODULE_16__["ClockComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2FyZWEvYXJlYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/widgets/area/area.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let AreaComponent = class AreaComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Random DATA'
            },
            subtitle: {
                text: 'Demo'
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: this.data
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AreaComponent.prototype, "data", void 0);
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/area/area.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./area.component.scss */ "./src/app/shared/widgets/area/area.component.scss")).default]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total {\n  font-size: 3em;\n}\n\n.mat-icon,\n.description {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi56YWRvcm92L0Rlc2t0b3AvRGVza3RvcC9Bbmd1bGFyL3NhbXBsZV9wcm9qZWN0cy9kYXNoYm9hcmQvc3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvd2lkZ2V0cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tYXQtaWNvbixcbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0b3A6IDVweDtcbn1cbiIsImg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udG90YWwge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuLm1hdC1pY29uLFxuLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLm1hdC1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/widgets/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CardComponent = class CardComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "total", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "percentage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "data", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/shared/widgets/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/shared/widgets/clock/clock.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/widgets/clock/clock.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/widgets/clock/clock.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/widgets/clock/clock.component.ts ***!
  \*********************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





// import { pad } from 'highcharts';
highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
// declare var require: any;
// require('highcharts/highcharts-more')(Highcharts);
// require('highcharts/modules/solid-gauge')(Highcharts);
// require('highcharts/modules/heatmap')(Highcharts);
// require('highcharts/modules/treemap')(Highcharts);
// require('highcharts/modules/funnel')(Highcharts);
// let chartHolder;
let ClockComponent = class ClockComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
        /**
   * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
   */
        this.easeOutBounce = function (pos) {
            if ((pos) < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        };
    }
    ngOnInit() {
        let now = this.getNow();
        this.chartOptions = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                height: '80%'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'The Highcharts clock'
            },
            pane: {
                background: [{
                    // default background
                    }, {
                        // reflex for supported browsers
                        backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["SVGElement"] ? {
                            radialGradient: {
                                cx: 0.5,
                                cy: -0.4,
                                r: 1.9
                            },
                            stops: [
                                [0.5, 'rgba(255, 255, 255, 0.2)'],
                                [0.5, 'rgba(200, 200, 200, 0.2)']
                            ]
                        } : null
                    }]
            },
            yAxis: {
                labels: {
                    distance: -20
                },
                min: 0,
                max: 12,
                lineWidth: 0,
                showFirstLabel: false,
                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 5,
                minorTickPosition: 'inside',
                minorGridLineWidth: 0,
                minorTickColor: '#666',
                tickInterval: 1,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                title: {
                    text: 'Powered by<br/>Highcharts',
                    style: {
                        color: '#BBB',
                        fontWeight: 'normal',
                        fontSize: '8px',
                        lineHeight: '10px'
                    },
                    y: 10
                }
            },
            tooltip: {
                formatter: function () {
                    return this.series.chart.tooltipText;
                }
            },
            series: [{
                    data: [{
                            id: 'hour',
                            y: now.hours,
                            dial: {
                                radius: '60%',
                                baseWidth: 4,
                                baseLength: '95%',
                                rearLength: 0
                            }
                        }, {
                            id: 'minute',
                            y: now.minutes,
                            dial: {
                                baseLength: '95%',
                                rearLength: 0
                            }
                        }, {
                            id: 'second',
                            y: now.seconds,
                            dial: {
                                radius: '100%',
                                baseWidth: 1,
                                rearLength: '20%'
                            }
                        }],
                    animation: false,
                    dataLabels: {
                        enabled: false
                    }
                }]
        };
        // Move
        // setInterval(() => {
        //   debugger
        //   const now = this.getNow();
        //   if (this.chartOptions.chart.axes) { // not destroyed
        //     var hour = this.chartOptions.chart.get('hour'),
        //       minute = this.chartOptions.chart.get('minute'),
        //       second = this.chartOptions.chart.get('second'),
        //       // run animation unless we're wrapping around from 59 to 0
        //       animation = now.seconds === 0 ?
        //         false : {
        //           easing: this.easeOutBounce()
        //         };
        //     // Cache the tooltip text
        //     this.chartOptions.chart.tooltipText =
        //         this.pad(Math.floor(now.hours), 2) + ':' +
        //         this.pad(Math.floor(now.minutes * 5), 2) + ':' +
        //         this.pad(now.seconds * 5, 2);
        //     hour.update(now.hours, true, animation);
        //     minute.update(now.minutes, true, animation);
        //     second.update(now.seconds, true, animation);
        //   }
        // }, 1000);
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    // easeOutBounce(x: number): number {
    //   const n1 = 7.5625;
    //   const d1 = 2.75;
    //   if (x < 1 / d1) {
    //       return n1 * x * x;
    //   } else if (x < 2 / d1) {
    //       return n1 * (x -= 1.5 / d1) * x + 0.75;
    //   } else if (x < 2.5 / d1) {
    //       return n1 * (x -= 2.25 / d1) * x + 0.9375;
    //   } else {
    //       return n1 * (x -= 2.625 / d1) * x + 0.984375;
    //   }
    // }
    /**
   * Get the current time
   */
    getNow() {
        const now = new Date();
        return {
            hours: now.getHours() + now.getMinutes() / 60,
            minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
            seconds: now.getSeconds() * 12 / 60
        };
    }
    /**
   * Pad numbers
   */
    pad(number, length) {
        // Create an array of the remaining length + 1 and join it with 0's
        return new Array((length || 2) + 1 - String(number).length).join('0') + number;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClockComponent.prototype, "data", void 0);
ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clock',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/clock/clock.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clock.component.scss */ "./src/app/shared/widgets/clock/clock.component.scss")).default]
    })
], ClockComponent);



/***/ }),

/***/ "./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL2xpbmUtY2hhcnQtd2l0aC1hbm5vdGF0aW9ucy9saW5lLWNoYXJ0LXdpdGgtYW5ub3RhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LineChartWithAnnotationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartWithAnnotationsComponent", function() { return LineChartWithAnnotationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LineChartWithAnnotationsComponent = class LineChartWithAnnotationsComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                zoomType: 'x',
                panning: true,
                panKey: 'shift',
                scrollablePlotArea: {
                    minWidth: 600
                }
            },
            caption: {
                text: 'This chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens.'
            },
            title: {
                text: '2017 Tour de France Stage 8: Dole - Station des Rousses'
            },
            accessibility: {
                description: 'Image description: An annotated line graph illustrates the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis at increments of 500m and distance is plotted on the X-axis in increments of 25 kilometers. The line graph is interactive, and the user can trace the altitude level at every 100-meter point along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.'
            },
            credits: {
                enabled: false
            },
            annotations: [{
                    labelOptions: {
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        verticalAlign: 'top',
                        y: 15
                    },
                    labels: [{
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 27.98,
                                y: 255
                            },
                            text: 'Arbois'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 45.5,
                                y: 611
                            },
                            text: 'Montrond'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 63,
                                y: 651
                            },
                            text: 'Mont-sur-Monnet'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 84,
                                y: 789
                            },
                            x: -10,
                            text: 'Bonlieu'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 129.5,
                                y: 382
                            },
                            text: 'Chassal'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 159,
                                y: 443
                            },
                            text: 'Saint-Claude'
                        }]
                }, {
                    labels: [{
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 101.44,
                                y: 1026
                            },
                            x: -30,
                            text: 'Col de la Joux'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 138.5,
                                y: 748
                            },
                            text: 'Côte de Viry'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 176.4,
                                y: 1202
                            },
                            text: 'Montée de la Combe<br>de Laisia Les Molunes'
                        }]
                }, {
                    labelOptions: {
                        shape: 'connector',
                        align: 'right',
                        justify: false,
                        crop: true,
                        style: {
                            fontSize: '0.8em',
                            textOutline: '1px white'
                        }
                    },
                    labels: [{
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 96.2,
                                y: 783
                            },
                            text: '6.1 km climb<br>4.6% on avg.'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 134.5,
                                y: 540
                            },
                            text: '7.6 km climb<br>5.2% on avg.'
                        }, {
                            point: {
                                xAxis: 0,
                                yAxis: 0,
                                x: 172.2,
                                y: 925
                            },
                            text: '11.7 km climb<br>6.4% on avg.'
                        }]
                }],
            xAxis: {
                labels: {
                    format: '{value} km',
                    enabled: false,
                },
                minRange: 5,
                title: {
                    text: 'Distance'
                },
                accessibility: {
                    rangeDescription: 'Range: 0 to 187.8km.'
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                startOnTick: false,
                endOnTick: false,
                tickOptions: [],
                maxPadding: 0.35,
                title: {
                    text: null
                },
                labels: {
                    format: '{value} m',
                    enabled: false
                }
            },
            tooltip: {
                headerFormat: 'Distance: {point.x:.1f} km<br>',
                pointFormat: '{point.y} m a. s. l.',
                shared: true,
                animation: true,
                split: true,
                outside: true
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                    accessibility: {
                        keyboardNavigation: {
                            enabled: false
                        }
                    },
                    data: this.data,
                    lineColor: "#f56960",
                    color: "#daa588",
                    fillOpacity: 0.5,
                    name: 'Elevation',
                    marker: {
                        enabled: false
                    },
                    threshold: null,
                    showInLegend: false,
                    id: 'main'
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LineChartWithAnnotationsComponent.prototype, "data", void 0);
LineChartWithAnnotationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-line-chart-with-annotations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./line-chart-with-annotations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./line-chart-with-annotations.component.scss */ "./src/app/shared/widgets/line-chart-with-annotations/line-chart-with-annotations.component.scss")).default]
    })
], LineChartWithAnnotationsComponent);



/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3BpZS9waWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/widgets/pie/pie.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let PieComponent = class PieComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'RANDOM DATA'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            exporting: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieComponent.prototype, "data", void 0);
PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-widget-pie',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/pie/pie.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pie.component.scss */ "./src/app/shared/widgets/pie/pie.component.scss")).default]
    })
], PieComponent);



/***/ }),

/***/ "./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3NlbWktY2lyY2xlLWRvbnV0L3NlbWktY2lyY2xlLWRvbnV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SemiCircleDonutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemiCircleDonutComponent", function() { return SemiCircleDonutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let SemiCircleDonutComponent = class SemiCircleDonutComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
        this.chartOptions = {};
        this.data = [];
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Browser<br>shares<br>2017',
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SemiCircleDonutComponent.prototype, "data", void 0);
SemiCircleDonutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semi-circle-donut',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semi-circle-donut.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semi-circle-donut.component.scss */ "./src/app/shared/widgets/semi-circle-donut/semi-circle-donut.component.scss")).default]
    })
], SemiCircleDonutComponent);



/***/ }),

/***/ "./src/app/shared/widgets/speedometer/speedometer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/widgets/speedometer/speedometer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93aWRnZXRzL3NwZWVkb21ldGVyL3NwZWVkb21ldGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/widgets/speedometer/speedometer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/widgets/speedometer/speedometer.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpeedometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedometerComponent", function() { return SpeedometerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpeedometerComponent = class SpeedometerComponent {
    constructor() { }
    ngOnInit() {
    }
};
SpeedometerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speedometer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speedometer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/widgets/speedometer/speedometer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speedometer.component.scss */ "./src/app/shared/widgets/speedometer/speedometer.component.scss")).default]
    })
], SpeedometerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roman.zadorov/Desktop/Desktop/Angular/sample_projects/dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map