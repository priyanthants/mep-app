(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metronic-views-pages-material-material-module"],{

/***/ "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js ***!
  \******************************************************************************************/
/*! exports provided: MomentDateModule, MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateModule", function() { return MomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function() { return MatMomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS", function() { return MAT_MOMENT_DATE_ADAPTER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function() { return MomentDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function() { return MAT_MOMENT_DATE_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a || moment__WEBPACK_IMPORTED_MODULE_2__;
/**
 * InjectionToken for moment date adapter to configure options.
 * @type {?}
 */
const MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts Moment.js Dates for use with Angular Material.
 */
class MomentDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"] {
    /**
     * @param {?} dateLocale
     * @param {?=} _options
     */
    constructor(dateLocale, _options) {
        super();
        this._options = _options;
        this.setLocale(dateLocale || moment.locale());
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        super.setLocale(locale);
        /** @type {?} */
        let momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, (/**
             * @param {?} i
             * @return {?}
             */
            (i) => this.createDate(2017, 0, i + 1).format('D'))),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return this.clone(date).year();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return this.clone(date).month();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return this.clone(date).date();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return this.clone(date).day();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    }
    /**
     * @return {?}
     */
    getDateNames() {
        return this._localeData.dates;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        return this.clone(date).format('YYYY');
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this._localeData.firstDayOfWeek;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.clone(date).daysInMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return date.clone().locale(this.locale);
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        const result = this._createMoment({ year, month, date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return this._createMoment().locale(this.locale);
    }
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    parse(value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.clone(date).add({ years });
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        return this.clone(date).add({ months });
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this.clone(date).add({ days });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return this.clone(date).format();
    }
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        /** @type {?} */
        let date;
        if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
        }
        else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return moment.isMoment(obj);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return this.clone(date).isValid();
    }
    /**
     * @return {?}
     */
    invalid() {
        return moment.invalid();
    }
    /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @private
     * @param {...?} args
     * @return {?}
     */
    _createMoment(...args) {
        return (this._options && this._options.useUtc) ? moment.utc(...args) : moment(...args);
    }
}
MomentDateAdapter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MomentDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
const MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MomentDateModule {
}
MomentDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    {
                        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                        useClass: MomentDateAdapter,
                        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    }
                ],
            },] },
];
const ɵ0 = MAT_MOMENT_DATE_FORMATS;
class MatMomentDateModule {
}
MatMomentDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MomentDateModule],
                providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=material-moment-adapter.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/button-toggle/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-button-toggle&gt;</code> are on/off toggles with the appearance of a button. These toggles can be configured to behave as either radio-buttons or checkboxes. While they can be standalone, they are typically part of a\r\n\t\t\t\t\t<mark>mat-button-toggle-group</mark>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-button-toggle>Toggle me!</mat-button-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleVertical\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe button-toggles can be rendered in a vertical orientation by adding the\r\n\t\t\t\t\t<mark>vertical</mark> attribute.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-button-toggle vertical=\"true\">Toggle me!</mat-button-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleList\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tDividers can be added to lists as a means of separating content into distinct sections. Inset dividers can also be added to provide the appearance of distinct elements in a list without cluttering content like avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because it will overlap with the section divider.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n\t\t\t\t\t\t<mat-button-toggle value=\"left\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_left</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"center\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_center</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"right\">\r\n\t\t\t\t\t\t\t<mat-icon>format_align_right</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t\t<mat-button-toggle value=\"justify\" disabled>\r\n\t\t\t\t\t\t\t<mat-icon>format_align_justify</mat-icon>\r\n\t\t\t\t\t\t</mat-button-toggle>\r\n\t\t\t\t\t</mat-button-toggle-group>\r\n\t\t\t\t\t<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tAngular Material buttons are native\r\n\t\t\t\t\t<code>&lt;button&gt;</code> or\r\n\t\t\t\t\t<code>&lt;a&gt;</code> elements enhanced with Material Design styling and ink ripples.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t\tNative\r\n\t\t\t\t\t\t<code>&lt;button&gt;</code> and\r\n\t\t\t\t\t\t<code>&lt;a&gt;</code> elements are always used in order to provide the most straightforward and accessible experience for users. A\r\n\t\t\t\t\t\t<code>&lt;button&gt;</code> element should be used whenever some action is performed. An\r\n\t\t\t\t\t\t<code>&lt;a&gt;</code> element should be used whenever the user will navigate to another view.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-button>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-button disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-button routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleRaised\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-raised-button>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-raised-button routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleIcon\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-icon-button>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"primary\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"accent\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button color=\"warn\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-icon-button disabled>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exmapleFab\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-fab>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-fab>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-fab routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleMiniFav\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<div class=\"button-row\">\r\n\t\t\t\t\t\t<button mat-mini-fab>Basic</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"primary\">Primary</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"accent\">Accent</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab color=\"warn\">Warn</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab disabled>Disabled</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-mini-fab>\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<a mat-mini-fab routerLink=\".\">Link</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/chips/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-chip-list&gt;</code> displays a list of values as individual, keyboard accessible, chips.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-chip-list>\r\n\t\t\t\t\t\t<mat-chip>One fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip>Two fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n\t\t\t\t\t\t<mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n\t\t\t\t\t</mat-chip-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleInput\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<mark>MatChipInput</mark> directive can be used together with a chip-list to streamline the interaction between the two components. This directive adds chip-specific behaviors to the input element within\r\n\t\t\t\t\t<code>&lt;mat-form-field&gt;</code> for adding and removing chips. The\r\n\t\t\t\t\t<code>&lt;input&gt;</code> with\r\n\t\t\t\t\t<mark>MatChipInput</mark> can be placed inside or outside the chip-list element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tAn example of chip input placed inside the chip-list element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"demo-chip-list\">\r\n\t\t\t\t\t\t<mat-chip-list #chipList>\r\n\t\t\t\t\t\t\t<mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(fruit)\">\r\n\t\t\t\t\t\t\t\t{{fruit.name}}\r\n\t\t\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t<input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\r\n\t\t\t\t\t\t</mat-chip-list>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleStacked\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t\t<mat-chip-list class=\"mat-chip-list-stacked\">\r\n\t\t\t\t\t\t\t\t<mat-chip *ngFor=\"let chip of availableColors\" selected=\"true\" [color]=\"chip.color\">\r\n\t\t\t\t\t\t\t\t  {{chip.name}}\r\n\t\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t  </mat-chip-list>\r\n\t\t\t\t\t\t\t  \r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/icon/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> makes it easier to use vector-based icons in your app. This directive supports both icon fonts and SVG icons, but not bitmap-based formats (png, jpg, etc.).\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<b>Registering icons:</b>\r\n\t\t\t\t\t<mark>MatIconRegistry</mark> is an injectable service that allows you to associate icon names with SVG URLs and define aliases for CSS font classes. Its methods are discussed below and listed in the API summary.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<b> Font icons with ligatures:</b> Some fonts are designed to show icons by using\r\n\t\t\t\t\t<a href=\"https://en.wikipedia.org/wiki/Typographic_ligature\" target=\"_blank\">ligatures</a>, for example by rendering the text \"home\" as a home image. To use a ligature icon, put its text in the content of the\r\n\t\t\t\t\t<mark>mat-icon</mark> component.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tBy default,\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> expects the\r\n\t\t\t\t\t<a href=\"http://google.github.io/material-design-icons/#icon-font-for-the-web\" target=\"_blank\">Material icons font</a>. (You will still need to include the HTML to load the font and its CSS, as described in the link). You can specify a different font by setting the\r\n\t\t\t\t\t<mark>fontSet</mark> input to either the CSS class to apply to use the desired font, or to an alias previously registered with\r\n\t\t\t\t\t<mark>MatIconRegistry.registerFontClassAlias</mark>.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-icon>home</mat-icon>\r\n\t\t\t\t\t<mat-icon>queue music</mat-icon>\r\n\t\t\t\t\t<mat-icon>call split</mat-icon>\r\n\t\t\t\t\t<mat-icon>event note</mat-icon>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleSVG\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-icon&gt;</code> \r\n\t\t\t\t\tWhen an <mark>mat-icon</mark> component displays an SVG icon, it does so by directly inlining the SVG content into the page as a child of the component. \r\n\t\t\t\t\t(Rather than using an tag or a div background image). This makes it easier to apply CSS styles to SVG icons. For example, the default color of the SVG content is the CSS \r\n\t\t\t\t\t<a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword\" target=\"_blank\">currentColor</a> value. \r\n\t\t\t\t\tThis makes SVG icons by default have the same color as surrounding text, and allows you to change the color by setting the \"color\" style on the <mark>mat-icon</mark> element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t\tIn order to prevent XSS vulnerabilities, any SVG URLs passed to the \r\n\t\t\t\t\t\t<mark>MatIconRegistry</mark> must be marked as trusted resource URLs by using Angular's \r\n\t\t\t\t\t\t<mark>DomSanitizer</mark> service.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-icon svgIcon=\"exchange\"></mat-icon>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleDeterminate\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-progress-bar&gt;</code>is a horizontal progress-bar for indicating progress and activity.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<b>Determinate:</b> Operations where the percentage of the operation complete is known should use the determinate indicator.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleIndeterminate\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tOperations where the user is asked to wait while something finishes and it’s not necessary to indicate how long it will take should use the indeterminate indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleBuffer\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tOperations where the user wants to indicate some activity or loading from the server, use the buffer indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exmapleQuery\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tFor situations where the user wants to indicate pre-loading (until the loading can actually be made), use the query indicator.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleConfig\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Progress bar configuration</h2>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Mode:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"mode\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n\t\t\t\t\t\t\t\t\t\tDeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n\t\t\t\t\t\t\t\t\t\tIndeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n\t\t\t\t\t\t\t\t\t\tBuffer\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"query\">\r\n\t\t\t\t\t\t\t\t\t\tQuery\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Buffer:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Result</h2>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\r\n\t\t\t\t\t\t\t\t</mat-progress-bar>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/progress-spinner/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-progress-spinner&gt;</code> and\r\n\t\t\t\t\t<code>&lt;mat-spinner&gt;</code> are a circular indicators of progress and activity.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-spinner></mat-spinner>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleWarn\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe color of a progress-spinner can be changed by using the\r\n\t\t\t\t\t<mark>color</mark> property. By default, progress-spinners use the theme's primary color. This can be changed to\r\n\t\t\t\t\t<mark>'accent'</mark> or\r\n\t\t\t\t\t<mark>'warn'</mark>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-spinner [color]=\"'accent'\"></mat-spinner>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-spinner [color]=\"'warn'\"></mat-spinner>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleConfig\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Mode:</label>\r\n\t\t\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"mode\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n\t\t\t\t\t\t\t\t\t\tDeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n\t\t\t\t\t\t\t\t\t\tIndeterminate\r\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</section>\r\n\r\n\t\t\t\t\t\t\t<section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\r\n\t\t\t\t\t\t\t\t<label class=\"example-margin\">Progress:</label>\r\n\t\t\t\t\t\t\t\t<mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n\t\t\t\t\t\t\t</section>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<h2 class=\"example-h2\">Result</h2>\r\n\r\n\t\t\t\t\t\t\t<mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\r\n\t\t\t\t\t\t\t</mat-progress-spinner>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/ripple/examples\" target=\"_blank\">demos &\r\n\t\tdocumentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tConnect user input to screen reactions by using ripples to both indicate the point of touch, and to\r\n\t\t\t\t\tconfirm that touch input was received. For touch or mouse, this occurs at the point of contact.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tThe <code>&lt;mat-icon&gt;</code> attribute directive defines an area in which a ripple animates on\r\n\t\t\t\t\tuser interaction.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\r\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\r\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\r\n\r\n\t\t\t\t\t<mat-form-field class=\"example-ripple-form-field\">\r\n\t\t\t\t\t\t<input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field class=\"example-ripple-form-field\">\r\n\t\t\t\t\t\t<input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\r\n\t\t\t\t\t<div class=\"example-ripple-container mat-elevation-z4\" matRipple [matRippleCentered]=\"centered\"\r\n\t\t\t\t\t\t[matRippleDisabled]=\"disabled\" [matRippleUnbounded]=\"unbounded\" [matRippleRadius]=\"radius\"\r\n\t\t\t\t\t\t[matRippleColor]=\"color\">\r\n\t\t\t\t\t\tClick me\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/material-table/material-table.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/data-table/material-table/material-table.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/table/examples\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n\r\n<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"kt-section\">\r\n\t\t<p class=\"kt-section__sub\">\r\n\t\t\tThe\r\n\t\t\t<mark>mat-table</mark> provides a Material Design styled data-table that can be used to display rows of data.\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tThis table builds on the foundation of the CDK data-table and uses a similar interface for its data input and template, except\r\n\t\t\tthat its element and attribute selectors will be prefixed with\r\n\t\t\t<mark>mat-</mark> instead of\r\n\t\t\t<mark>cdk-</mark>. For more information on the interface and a detailed look at how the table is implemented, see the\r\n\t\t\t<a href=\"https://material.angular.io/cdk/table/overview\" target=\"_blank\">guide covering the CDK data-table</a>.\r\n\t\t</p>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table1 [dataSource]=\"dataSource1\">\r\n\t\t\t\t\t<!--- Note that these columns can be defined in any order.\r\n\t\t\t\t\t\t\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns1\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"examplePagination\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table2 [dataSource]=\"dataSource2\">\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns2\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t<mat-paginator #matPaginator2 [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\r\n\t\t\t\t</mat-paginator>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleSorting\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table3 [dataSource]=\"dataSource3\" #sort3=\"matSort\" matSort>\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns3\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleFiltering\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<div class=\"example-header\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field\">\r\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter4($event.target.value)\" placeholder=\"Filter\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<mat-table #table4 [dataSource]=\"dataSource4\">\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns4\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns4;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleSelection\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table5 [dataSource]=\"dataSource5\">\r\n\t\t\t\t\t<!-- Checkbox Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef>\r\n\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle5() : null\" [checked]=\"selection.hasValue() && isAllSelected5()\" [indeterminate]=\"selection.hasValue() && !isAllSelected5()\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let row\">\r\n\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns5\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns5;\" (click)=\"selection.toggle(row)\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleHTTP\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t<div class=\"example-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n\t\t\t\t<mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\r\n\t\t\t\t<div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n\t\t\t\t\tGitHub's API rate limit has been reached. It will be reset in one minute.\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<mat-table #sort6=\"matSort\" #table6 [dataSource]=\"dataSource6\" class=\"example-table\" matSort matSortActive=\"created\" matSortDisableClear\r\n\t\t\t matSortDirection=\"asc\">\r\n\t\t\t\t<!--- Note that these columns can be defined in any order.\r\n\t\t                                The actual rendered columns are set as a property on the row definition\" -->\r\n\t\t\t\t<!-- Number Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"number\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.number }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Title Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.title }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- State Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"state\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>State</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.state }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Created Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"created\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header disableClear=\"true\">\r\n\t\t\t\t\t\tCreated\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">{{ row.created_at | date }}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns6\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns6;\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator #matPaginator6 [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleMain\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"example-header\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input matInput (keyup)=\"applyFilter7($event.target.value)\" placeholder=\"Filter\">\r\n\t\t\t</mat-form-field>\r\n\t\t</div>\r\n\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t<mat-table #sort7=\"matSort\" [dataSource]=\"dataSource7\" matSort>\r\n\t\t\t\t<!-- ID Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Progress Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"progress\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<!-- Color Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"color\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns7\"></mat-header-row>\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns7;\"></mat-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator #matPaginator7 [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/paginator/paginator.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/data-table/paginator/paginator.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/paginator/examples\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n\r\n<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"kt-section\">\r\n\t\t<p class=\"kt-section__sub\">\r\n\t\t\t<code>&lt;mat-paginator&gt;</code> provides navigation for paged information, typically used with a table.\r\n\t\t</p>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-section__content\">\r\n\r\n\t\t\t<mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleConfig\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tList length:\r\n\t\t\t\t<input matInput [(ngModel)]=\"length\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tPage size:\r\n\t\t\t\t<input matInput [(ngModel)]=\"pageSize\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<mat-form-field>\r\n\t\t\t\tPage size options:\r\n\t\t\t\t<input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\">\r\n\t\t\t</mat-form-field>\r\n\r\n\t\t\t<mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = $event\">\r\n\t\t\t</mat-paginator>\r\n\r\n\t\t\t<div *ngIf=\"pageEvent\">\r\n\t\t\t\t<h5>Page Change Event Properties</h5>\r\n\t\t\t\t<div>List length: {{pageEvent.length}}</div>\r\n\t\t\t\t<div>Page size: {{pageEvent.pageSize}}</div>\r\n\t\t\t\t<div>Page index: {{pageEvent.pageIndex}}</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/sort/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n\r\n<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t<div class=\"kt-section\">\r\n\t\t<p class=\"kt-section__sub\">\r\n\t\t\tThe\r\n\t\t\t<mark>matSort</mark> and\r\n\t\t\t<mark>mat-sort-header</mark> are used, respectively, to add sorting state and display to tabular data.\r\n\t\t</p>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<table  #sort1=\"matSort\" (matSortChange)=\"sortData($event)\" matSort>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th mat-sort-header=\"name\">Dessert (100g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"calories\">Calories</th>\r\n\t\t\t\t\t<th mat-sort-header=\"fat\">Fat (g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"carbs\">Carbs (g)</th>\r\n\t\t\t\t\t<th mat-sort-header=\"protein\">Protein (g)</th>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t\t<tr *ngFor=\"let dessert of sortedData\">\r\n\t\t\t\t\t<td>{{dessert.name}}</td>\r\n\t\t\t\t\t<td>{{dessert.calories}}</td>\r\n\t\t\t\t\t<td>{{dessert.fat}}</td>\r\n\t\t\t\t\t<td>{{dessert.carbs}}</td>\r\n\t\t\t\t\t<td>{{dessert.protein}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n<kt-material-preview [viewItem]=\"exampleConfig\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\r\n\t\t\t<div class=\"example-container mat-elevation-z8\">\r\n\t\t\t\t<mat-table #table [dataSource]=\"dataSource\" #sort2=\"matSort\" matSort>\r\n\r\n\t\t\t\t\t<!-- Position Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"position\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Name Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"name\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Weight Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"weight\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<!-- Symbol Column -->\r\n\t\t\t\t\t<ng-container matColumnDef=\"symbol\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\t\t\t\t</mat-table>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/autocomplete/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleSimpleAutocomplete\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">The autocomplete is a normal text input enhanced by a panel of suggested options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto1\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto1=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleAddingACustomFilter\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tAt this point, the autocomplete panel should be toggleable on focus and options should be selectable. But if we want our options to filter when we type, we need to add a custom filter.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl2\" [matAutocomplete]=\"auto2\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto2=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSettingSeparateControlAndDisplayValues\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tIf you want the option's control value (what is saved in the form) to be different than the option's display value (what is displayed in the text field), you'll need to set the\r\n\t\t\t\t\t<code>displayWith</code> property on your autocomplete element. A common use case for this might be if you want to save your data as an object, but display just one of the option's string properties. To make this work, create a function on your component class that maps the control value to the desired display value. Then bind it to the autocomplete's\r\n\t\t\t\t\t<code>displayWith</code> property.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl33\" [matAutocomplete]=\"auto33\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto33=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions33 | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option.name }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleAutomaticallyHighlightingTheFirstOption\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tIf your use case requires for the first autocomplete option to be highlighted when the user opens the panel, you can do so by setting the\r\n\t\t\t\t\t<code>autoActiveFirstOption</code> input on the\r\n\t\t\t\t\t<code>mat-autocomplete</code> component. This behavior can be configured globally using the\r\n\t\t\t\t\t<code>MAT_AUTOCOMPLETE_DEFAULT_OPTIONS</code> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl44\" [matAutocomplete]=\"auto44\">\r\n\t\t\t\t\t\t\t<mat-autocomplete autoActiveFirstOption #auto44=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let option of filteredOptions44 | async\" [value]=\"option\">\r\n\t\t\t\t\t\t\t\t\t{{ option }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleAutocompleteOverview\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tIf your use case requires for the first autocomplete option to be highlighted when the user opens the panel, you can do so by setting the\r\n\t\t\t\t\t<code>autoActiveFirstOption</code> input on the\r\n\t\t\t\t\t<code>mat-autocomplete</code> component. This behavior can be configured globally using the\r\n\t\t\t\t\t<code>MAT_AUTOCOMPLETE_DEFAULT_OPTIONS</code> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form class=\"example-form\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto55\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t<mat-autocomplete #auto55=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />&nbsp;\r\n\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t<mat-slide-toggle [checked]=\"stateCtrl.disabled\" (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\r\n\t\t\t\t\t\t\tDisable Input?\r\n\t\t\t\t\t\t</mat-slide-toggle>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleOptionGroupsAutocomplete\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-option</code>can be collected into groups using the mat-optgroup element:\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<form [formGroup]=\"stateForm\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<input type=\"text\" \r\n\t\t\t\t\t\t\t\tmatInput \r\n\t\t\t\t\t\t\t\tplaceholder=\"States Group\" \r\n\t\t\t\t\t\t\t\tformControlName=\"stateGroup\" \r\n\t\t\t\t\t\t\t\trequired \r\n\t\t\t\t\t\t\t\t[matAutocomplete]=\"autoGroup\" />\r\n\t\t\t\t\t\t\t<mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t<mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n\t\t\t\t\t\t\t\t\t\t{{ name }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/checkbox/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicCheckboxes\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-checkbox&gt;</code> provides the same functionality as a native\r\n\t\t\t\t\t<code>&lt;input type=\"checkbox\"&gt;</code> enhanced with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-checkbox [color]=\"'primary'\">Check me!</mat-checkbox>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleLabelPositions\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the label should appear after or before the checkbox. Defaults to 'after'\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-checkbox [labelPosition]=\"labelPosition\" [color]=\"'primary'\">Check me!</mat-checkbox>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatCheckboxChange&gt;</code> Event emitted when the checkbox's checked value changes.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-checkbox [(ngModel)]=\"myValue\" (change)=\"changeValueEvent()\" [color]=\"'primary'\">Check me!</mat-checkbox>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<span>Checked: <mark>{{ myValue }}</mark></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleConfigurableCheckbox\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tWhen user clicks on the\r\n\t\t\t\t\t<code>mat-checkbox</code>, the default behavior is toggle checked value and set indeterminate to false. This behavior can be customized by\r\n\t\t\t\t\t<a href=\"https://angular.io/guide/dependency-injection\" target=\"_blank\">providing a new value</a> of\r\n\t\t\t\t\t<code>MAT_CHECKBOX_CLICK_ACTION</code> to the checkbox.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [color]=\"'primary'\">Checked</mat-checkbox>\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\" [color]=\"'primary'\">Indeterminate</mat-checkbox>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<label class=\"example-margin\">Align:</label>\r\n\t\t\t\t\t<mat-radio-group [(ngModel)]=\"align\">\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"start\">Start</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"end\">End</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\" [color]=\"'primary'\">Disabled</mat-checkbox>\r\n\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\tResult: \r\n\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\" [(indeterminate)]=\"indeterminate\" [disabled]=\"disabled\" [color]=\"'primary'\">\r\n\t\t\t\t\t\tI'm a checkbox\r\n\t\t\t\t\t</mat-checkbox>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/datepicker/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicDatepicker\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe datepicker allows users to enter a date either through text input, or by choosing a date from the calendar. It is made up of several components and directives that work together.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerStartDate\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerSelectedValue\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker1></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker3\" placeholder=\"Angular forms (w/ deserialization)\" [formControl]=\"serializedDate\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker3></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker4\" placeholder=\"Value binding\" [value]=\"date.value\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker4></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerWithMinMaxValidation\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker5\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker5></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerWithFilterValidation\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker6\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker6></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerInputAndChangeEvents\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker7\" placeholder=\"Input & change events\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #picker7></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"events && events.length > 0\"></div>\r\n\t\t\t\t\t<div class=\"kt-demo\" *ngIf=\"events && events.length > 0\">\r\n\t\t\t\t\t\t<div class=\"kt-demo__preview\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let e of events\">{{e}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDisabledDatepicker\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp1></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp2></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerTouchUI\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker8\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker touchUi=\"true\" #picker8></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDatepickerOpenMethod\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker9\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t<mat-datepicker #picker9></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<button mat-raised-button (click)=\"picker9.open()\">Open</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleUsesMomentJsDates\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp10\" placeholder=\"Moment.js datepicker\" [formControl]=\"date10\">\r\n\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp10\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t<mat-datepicker #dp10></mat-datepicker>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t\r\n\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/form-field/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleSimpleFormField\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-form-field</code> is a component used to wrap several Angular Material components and apply common Text field styles such as the underline, floating label, and hint messages.\r\n\t\t\t\t\t<br /> The following Angular Material components are designed to work inside a\r\n\t\t\t\t\t<code>mat-form-field</code>:\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<code>input matInput & textarea matInput</code>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<code>mat-select</code>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<code>mat-chip-list</code>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Input\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<textarea matInput placeholder=\"Textarea\"></textarea>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Select\">\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alabama</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alaska</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Florida</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Illinois</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Kansas</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Michigan</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldWithLabel\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\" [formGroup]=\"options\">\r\n\t\t\t\t\t\t<mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<label>Float label: </label>\r\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"floatLabel\">\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"auto\">Auto</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"always\">Always</mat-radio-button>\r\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"never\">Never</mat-radio-button>\r\n\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Simple placeholder\" required>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<mat-label>Both a label and a placeholder</mat-label>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Simple placeholder\">\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\">\r\n\t\t\t\t\t\t<mat-select required>\r\n\t\t\t\t\t\t\t<mat-option>-- None --</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alabama</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Alaska</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Florida</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Illinois</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Kansas</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Michigan</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-placeholder>\r\n\t\t\t\t\t\t\t<!-- <mat-icon>favorite</mat-icon> -->\r\n\t\t\t\t\t\t\t<b> Fancy</b>\r\n\t\t\t\t\t\t\t<i> placeholder</i>\r\n\t\t\t\t\t\t</mat-placeholder>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldWithHints\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field hintLabel=\"Max 10 characters\">\r\n\t\t\t\t\t\t<input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\r\n\t\t\t\t\t\t<mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Select me\">\r\n\t\t\t\t\t\t\t<mat-option value=\"option\">Option</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldWithErrorMessages\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldWithPrefixSuffix\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n\t\t\t\t\t\t<i matSuffix (click)=\"hide = !hide\" class=\"la\" [ngClass]=\"{'la-toggle-on' : !hide, 'la-toggle-off': hide }\"></i>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\r\n\t\t\t\t\t\t<span matPrefix>$&nbsp;</span>\r\n\t\t\t\t\t\t<span matSuffix>.00</span>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldTheming\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\" [formGroup]=\"options2\" [style.fontSize.px]=\"getFontSize()\">\r\n\t\t\t\t\t\t<mat-form-field [color]=\"options2.value.color\">\r\n\t\t\t\t\t\t\t<mat-select placeholder=\"Color\" formControlName=\"color\">\r\n\t\t\t\t\t\t\t\t<mat-option value=\"primary\">Primary</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"accent\">Accent</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"warn\">Warn</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field [color]=\"options2.value.color\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"options2.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleFormFieldAppearanceVariants\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"legacy\">\r\n\t\t\t\t\t\t\t<mat-label>Legacy form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"standard\">\r\n\t\t\t\t\t\t\t<mat-label>Standard form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"fill\">\r\n\t\t\t\t\t\t\t<mat-label>Fill form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t<mat-label>Outline form field</mat-label>\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Placeholder\">\r\n\t\t\t\t\t\t\t<mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\r\n\t\t\t\t\t\t\t<mat-hint>Hint</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</p>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/input/input.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/input/input.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/input/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicInputs\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tmatInput is a directive that allows native\r\n\t\t\t\t\t<mark>input</mark> and\r\n\t\t\t\t\t<mark>textarea</mark> elements to work with\r\n\t\t\t\t\t<code>mat-form-field</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Leave a comment\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputWithACustomErrorStateMatcher\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t\t\t<mat-hint>Errors appear instantly!</mat-hint>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tPlease enter a valid email address\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tEmail is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleAutoResizingTextarea\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Autosize textarea\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputWithAClearButton\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field class=\"example-form-field\">\r\n\t\t\t\t\t\t<input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\" />\r\n\t\t\t\t\t\t<button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n\t\t\t\t\t\t\t<i class=\"la la-close\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputWithErrorMessages\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Email\" [formControl]=\"emailFormControl2\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl2.hasError('email') && !emailFormControl2.hasError('required')\">\r\n\t\t\t\t\t\t\t\tPlease enter a valid email address\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"emailFormControl2.hasError('required')\">\r\n\t\t\t\t\t\t\t\tEmail is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputsInAForm\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t\t<table class=\"example-full-width\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Long Last Name That Will Be Truncated\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<textarea matInput placeholder=\"Address 2\"></textarea>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t\t<table class=\"example-full-width\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"City\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\">\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t\t<input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputWithHints\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<input matInput #message maxlength=\"256\" placeholder=\"Message\">\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Don't disclose personal info</strong>\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t<mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleInputsWithPrefixesAndSuffixes\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t<span matPrefix>+1 &nbsp;</span>\r\n\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Telephone\">\r\n\t\t\t\t\t\t\t<i class=\"la la-edit\" matSuffix></i>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/radio/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicRadios\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-radio</code> provides the same functionality as a native\r\n\t\t\t\t\t<code>&lt;input type=\"radio\"&gt;</code> enhanced with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleDisabledRadios\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Input() disabled: boolean</code> Whether the radio group is disabled\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group disabled=\"true\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exmapleLabelPosition\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the labels should appear after or before the radio-buttons. Defaults to 'after'\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group [labelPosition]=\"labelPosition\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleRadiosWithNgModel\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"favoriteSeason\">\r\n\t\t\t\t\t\t<mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\r\n\t\t\t\t\t\t\t{{season}}\r\n\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<div class=\"example-selected-value\">Your favorite season is: <mark *ngIf=\"favoriteSeason\">{{favoriteSeason}}</mark></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatRadioChange&gt;</code> \r\n\t\t\t\t\t\tEvent emitted when the group value changes. Change events are only emitted when the value changes due to user interaction with a radio button (the same behavior as \r\n\t\t\t\t\t\t<code>&lt;input type-\"radio\"&gt;</code>).\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-radio-group (change)=\"changeState()\" [(ngModel)]=\"selectedState\">\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alabama\">Alabama</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Alaska\">Alaska</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Florida\">Florida</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Illinois\">Illinois</mat-radio-button>\r\n\t\t\t\t\t\t<mat-radio-button  value=\"Kansas\">Kansas</mat-radio-button>\r\n\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"state\"></div>\r\n\t\t\t\t\t<span *ngIf=\"state\">Welcome to <mark>{{ state }}</mark>!</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/select/select.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/select/select.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/select/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicSelect\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-select</code> is a form control for selecting a value from a set of options, similar to the native\r\n\t\t\t\t\t<code>&lt;select&gt;</code> element. You can read more about selects in the Material Design spec. It is designed to work inside of a\r\n\t\t\t\t\t<code>mat-form-field</code> element.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWith2WayValueBinding\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select [(value)]=\"selected\">\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option1\">Option 1</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option2\">Option 2</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"option3\">Option 3</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n\t\t\t\t\tYou selected:\r\n\t\t\t\t\t<mark *ngIf=\"selected\">{{selected}}</mark>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectInAForm\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<form class=\"example-container\">\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t{{food.viewValue}}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>Selected value:\r\n\t\t\t\t\t\t<mark *ngIf=\"selectedValue\">{{selectedValue}}</mark>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithFormFieldFeature\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Favorite animal\" [formControl]=\"animalControl\" required>\r\n\t\t\t\t\t\t\t<mat-option>--</mat-option>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\r\n\t\t\t\t\t\t\t\t{{animal.name}}\r\n\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\r\n\t\t\t\t\t\t<mat-hint>{{animalControl.value?.sound}}</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithResetOption\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"State\">\r\n\t\t\t\t\t\t\t<mat-option>None</mat-option>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithOptionGroups\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Pokemon\" [formControl]=\"pokemonControl\">\r\n\t\t\t\t\t\t\t<mat-option>-- None --</mat-option>\r\n\t\t\t\t\t\t\t<mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\" [disabled]=\"group.disabled\">\r\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\r\n\t\t\t\t\t\t\t\t\t{{ pokemon.viewValue }}\r\n\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithMultipleSelection\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithCustomTriggerText\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Toppings\" [formControl]=\"toppings2\" multiple>\r\n\t\t\t\t\t\t\t<mat-select-trigger>\r\n\t\t\t\t\t\t\t\t{{toppings2.value ? toppings2.value[0] : ''}}\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"toppings2.value?.length > 1\" class=\"example-additional-selection\">\r\n\t\t\t\t\t\t\t\t\t(+{{toppings2.value.length - 1}} others)\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</mat-select-trigger>\r\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let topping of toppingList2\" [value]=\"topping\">{{topping}}</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithCustomPanelStyling\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Panel color\" [formControl]=\"panelColor\" panelClass=\"example-panel-{{panelColor.value}}\">\r\n\t\t\t\t\t\t\t<mat-option value=\"red\">Red</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"green\">Green</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"blue\">Blue</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleSelectWithACustomErrorStateMatcher\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<mat-select placeholder=\"Choose one\" [formControl]=\"selected2\" [errorStateMatcher]=\"matcher\">\r\n\t\t\t\t\t\t\t<mat-option>Clear</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"valid\">Valid option</mat-option>\r\n\t\t\t\t\t\t\t<mat-option value=\"invalid\">Invalid option</mat-option>\r\n\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t<mat-hint>Errors appear instantly!</mat-hint>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"selected2.hasError('required')\">You must make a selection</mat-error>\r\n\t\t\t\t\t\t<mat-error *ngIf=\"selected2.hasError('pattern') && !selected2.hasError('required')\">\r\n\t\t\t\t\t\t\tYour selection is invalid\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/slider/slider.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/slider/slider.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/slider/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicSlider\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-slider</code> allows for the selection of a value from a range via mouse, touch, or keyboard, similar to\r\n\t\t\t\t\t<code>&lt;input type=\"range\"&gt;</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slider></mat-slider>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleChangeEvent\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatSliderChange&gt;</code> Event emitted when the slider value has changed.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"myValue\" min=\"0\" max=\"100\" step=\"1\"></mat-slider>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\" *ngIf=\"myValue\"></div>\r\n\t\t\t\t\t<span *ngIf=\"myValue\">Selected: <mark>{{ myValue }}</mark>%</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleConfigurableSlider\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\r\n\t\t\t\t\t\t\tAuto ticks\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t<mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\r\n\t\t\t\t\t\t\t<input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<h5>Result</h5>\r\n\t\t\t\t\t<mat-slider class=\"example-margin\" [disabled]=\"disabled\" [invert]=\"invert\" [max]=\"max\" [min]=\"min\" [step]=\"step\" [thumbLabel]=\"thumbLabel\" [tickInterval]=\"tickInterval\" [(ngModel)]=\"value\" [vertical]=\"vertical\">\r\n\t\t\t\t\t</mat-slider>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/slide-toggle/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicSlideToggles\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>mat-slide-toggle</code> is an\r\n\t\t\t\t\t<mark>on/off</mark> control that can be toggled via clicking or dragging.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleLabelPositions\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Input() labelPosition: 'before' | 'after'</code> Whether the label should appear after or before the slide-toggle. Defaults to 'after'\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>@Output() change: EventEmitter&lt;MatSlideToggleChange&gt;</code> An event will be dispatched each time the slide-toggle changes its value.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<mat-slide-toggle [labelPosition]=\"labelPosition\">Slide me!</mat-slide-toggle>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<mat-slide-toggle (change)=\"changeLablesPositions()\">Slide labels position</mat-slide-toggle>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleConfigurableSlideToggle\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"example-container\">\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<label class=\"example-margin\">Color:</label>\r\n\t\t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\">\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\r\n\t\t\t\t\t\t\t\tPrimary\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\r\n\t\t\t\t\t\t\t\tAccent\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\r\n\t\t\t\t\t\t\t\tWarn\r\n\t\t\t\t\t\t\t</mat-radio-button>\r\n\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Result</h5>\r\n\t\t\t\t\t<section class=\"example-section\">\r\n\t\t\t\t\t\t<mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">\r\n\t\t\t\t\t\t\tSlide me!\r\n\t\t\t\t\t\t</mat-slide-toggle>\r\n\t\t\t\t\t</section>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/card/card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/card/card.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/card/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicCards\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-card&gt;</code> is a content container for text, photos, and actions in the context of a single subject.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-card>Simple card</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleCardWithTitle\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tIn addition to the aforementioned sections,\r\n\t\t\t\t\t<code>&lt;mat-card-header&gt;</code> gives the ability to add a rich header to a card.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-card>\r\n\t\t\t\t\t\t<mat-card-header>\r\n\t\t\t\t\t\t\t<div mat-card-avatar class=\"example-header-image\"></div>\r\n\t\t\t\t\t\t\t<mat-card-title>Shiba Inu</mat-card-title>\r\n\t\t\t\t\t\t\t<mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n\t\t\t\t\t\t</mat-card-header>\r\n\t\t\t\t\t\t<mat-card-content>Simple card</mat-card-content>\r\n\t\t\t\t\t</mat-card>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"examplBigExample\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-card class=\"example-card\">\r\n\t\t\t\t\t\t<mat-card-header>\r\n\t\t\t\t\t\t\t<div mat-card-avatar class=\"example-header-image\"></div>\r\n\t\t\t\t\t\t\t<mat-card-title>Shiba Inu</mat-card-title>\r\n\t\t\t\t\t\t\t<mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n\t\t\t\t\t\t</mat-card-header>\r\n\t\t\t\t\t\t<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n\t\t\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t\t\t<mat-card-actions>\r\n\t\t\t\t\t\t\t<button mat-button>LIKE</button>\r\n\t\t\t\t\t\t\t<button mat-button>SHARE</button>\r\n\t\t\t\t\t\t</mat-card-actions>\r\n\t\t\t\t\t</mat-card>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/default-forms/default-forms.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/default-forms/default-forms.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-lg-6\">\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tDefault Form Layout\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n\t\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\" value=\"99.9\">\r\n\t\t\t\t\t\t\t\t<span matPrefix>$&nbsp;</span>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group\">\r\n\t\t\t\t\t\t\t<div class=\"kt-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions\">\r\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"openSnackBar()\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tHorizontal Form Layout\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput type=\"email\" placeholder=\"Enter email\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">State:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\r\n\t\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img style=\"vertical-align:middle;\" aria-hidden src=\"{{state.flag}}\" height=\"25\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{ state.name }}</span> |\r\n\t\t\t\t\t\t\t\t\t\t\t<small>Population: {{state.population}}</small>\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-autocomplete>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Progress:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-slider></mat-slider>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Contact</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<mat-icon matPrefix>local_phone</mat-icon>\r\n\t\t\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Phone number\">\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t\t<div class=\"kt-checkbox-inline\">\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-3\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-lg-6\">\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tForm Sections\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"kt-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">1. Customer Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group\">\r\n\t\t\t\t\t\t\t<label>Contact:</label>\r\n\t\t\t\t\t\t\t<div class=\"kt-input-icon kt-input-icon--left\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon matPrefix>local_phone</mat-icon>\r\n\t\t\t\t\t\t\t\t\t<input type=\"tel\" matInput placeholder=\"Phone number\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your phone number with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group\">\r\n\t\t\t\t\t\t\t<label for=\"\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"kt-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"kt-form__seperator kt-form__seperator--dashed\"></div>\r\n\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--last\">\r\n\t\t\t\t\t\t<div class=\"kt-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">2. Payment Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group\">\r\n\t\t\t\t\t\t\t<label for=\"\">Payment Method:</label>\r\n\t\t\t\t\t\t\t<div class=\"kt-radio-list\">\r\n\t\t\t\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Credit Card</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Bitcoin</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Cash</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">Please select payment method:</mat-hint>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group kt-form__group--last\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter amount</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot kt-portlet__no-border\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t\t\t<button mat-raised-button color=\"accent\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tHorizontal Form Sections\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form kt-form--label-align-right\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t\t\t\t<div class=\"kt-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">Customer Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Date of birth:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"kt-checkbox-list\">\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"kt-form__seperator kt-form__seperator--dashed\"></div>\r\n\r\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--last\">\r\n\t\t\t\t\t\t<div class=\"kt-form__heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">Payment Info:</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__group form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Payment Method:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"kt-radio-list\">\r\n\t\t\t\t\t\t\t\t\t<mat-radio-group>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"1\">Credit Card</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"2\">Bitcoin</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"3\">Cash</mat-radio-button>\r\n\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"kt-form__help\">Please select payment method</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Amount:</label>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Amount\" type=\"number\">\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter amount</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<mat-slide-toggle [(ngModel)]=\"isHuman\" (change)=\"onChange($event)\" name=\"human1\"\t>I am not a robot</mat-slide-toggle>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\" disabled=\"{{!isHuman}}\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tBorder Seperator Form Groups\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form kt-form--label-align-right kt-form--group-seperator\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Date of birth:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\r\n\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n\t\t\t\t\t\t\t\t<mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Favorite foods:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6 example-container\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"dexample-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-chip-list #chipList>\r\n\t\t\t\t\t\t\t\t\t<mat-chip *ngFor=\"let fruit of fruits\"\r\n\t\t\t\t\t\t\t\t\t\t[selectable]=\"selectable\"\r\n\t\t\t\t\t\t\t\t\t\t[removable]=\"removable\"\r\n\t\t\t\t\t\t\t\t\t\t(removed)=\"remove(fruit)\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{fruit.name}}\r\n\t\t\t\t\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n\t\t\t\t\t\t\t\t\t</mat-chip>\r\n\t\t\t\t\t\t\t\t\t<input placeholder=\"New food...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" />\r\n\t\t\t\t\t\t\t\t</mat-chip-list>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--last form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"kt-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot kt-portlet__no-border\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t\t\t\t<mat-slide-toggle [(ngModel)]=\"isHuman2\" (change)=\"onChange2($event)\" name=\"human2\">I am not a robot</mat-slide-toggle>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\" disabled=\"{{!isHuman2}}\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\r\n\t\t<div class=\"kt-portlet\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\r\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\r\n\t\t\t\t\t\t\tDashed Seperator Form Groups\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"kt-form kt-form--label-align-right kt-form--group-seperator-dashed\">\r\n\t\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Full Name:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter full name\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter your full name</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Email address:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter email\" type=\"email\">\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">We'll never share your email with anyone else</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Favorite food:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width\">\r\n\t\t\t\t\t\t\t\t<mat-select placeholder=\"Favorite food\">\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ food.viewValue }}\r\n\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--last form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">Communication:</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"kt-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Email</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>SMS</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<mat-checkbox>Phone</mat-checkbox>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"kt-portlet__foot kt-portlet__no-border\">\r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"primary\">Submit</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button mat-raised-button type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/divider/divider.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/divider/divider.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/divider\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicDivider\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-divider&gt;</code> is a component that allows for Material styling of a line separator with various orientation options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<mat-list-item>Alabama</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Alaska</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Arizona</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Arizona</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>California</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Colorado</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Connecticut</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Delaware</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Florida</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleVertical\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tAdd the\r\n\t\t\t\t\t<mark>vertical</mark> attribute in order to set whether or not the divider is vertically-oriented.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<mat-list-item>Item 1</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider [vertical]=\"true\"></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Item 2</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider [vertical]=\"true\"></mat-divider>\r\n\t\t\t\t\t\t<mat-list-item>Item 3</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleList\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tDividers can be added to lists as a means of separating content into distinct sections. Inset dividers can also be added to provide the appearance of distinct elements in a list without cluttering content like avatar images or icons. Make sure to avoid adding an inset divider to the last element in a list, because it will overlap with the section divider.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<h3 mat-subheader>Folders</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let folder of folders\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>folder</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{folder.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{folder.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<h3 mat-subheader>Notes</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let note of notes\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>note</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{note.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{note.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/expansion/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicPanel\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-expansion-panel&gt;</code> provides an expandable details-summary view.is a component that allows for Material styling of a line separator with various orientation options.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-accordion>\r\n\t\t\t\t\t\t<mat-expansion-panel>\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tPersonal data\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType your name and age\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Age\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tSelf aware panel\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tCurrently I am {{panelOpenState ? 'open' : 'closed'}}\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t<p>I'm visible because I am open</p>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\t\t\t\t\t</mat-accordion>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleDisabledPanel\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tExpansion panels can be\r\n\t\t\t\t\t<mark>disabled</mark> using the disabled attribute. A disabled expansion panel can't be toggled by the user, but can still be manipulated programmatically.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-expansion-panel [disabled]=\"isDisabled\">\r\n\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\tThis is the expansion title\r\n\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\tThis is a summary of the content\r\n\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleAccordion\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-accordion class=\"example-headers-align\">\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tPersonal data\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType your name and age\r\n\t\t\t\t\t\t\t\t\t<mat-icon>account_circle</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tDestination\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tType the country name\r\n\t\t\t\t\t\t\t\t\t<mat-icon>map</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Country\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t\t<mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\r\n\t\t\t\t\t\t\t\t<mat-panel-title>\r\n\t\t\t\t\t\t\t\t\tDay of the trip\r\n\t\t\t\t\t\t\t\t</mat-panel-title>\r\n\t\t\t\t\t\t\t\t<mat-panel-description>\r\n\t\t\t\t\t\t\t\t\tInform the date you wish to travel\r\n\t\t\t\t\t\t\t\t\t<mat-icon>date_range</mat-icon>\r\n\t\t\t\t\t\t\t\t</mat-panel-description>\r\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\r\n\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\r\n\r\n\t\t\t\t\t\t\t<mat-action-row>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n\t\t\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n\t\t\t\t\t\t\t</mat-action-row>\r\n\t\t\t\t\t\t</mat-expansion-panel>\r\n\r\n\t\t\t\t\t</mat-accordion>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/grid-list/grid-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/grid-list/grid-list.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/grid-list\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n<kt-material-preview [viewItem]=\"exampleBasicGrid\">\r\n\t<div class=\"kt-section\">\r\n\t\t<span class=\"kt-section__sub\">\r\n\t\t\t<code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec here.\r\n\t\t</span>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n\t\t\t\t<mat-grid-tile>1</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>2</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>3</mat-grid-tile>\r\n\t\t\t\t<mat-grid-tile>4</mat-grid-tile>\r\n\t\t\t</mat-grid-list>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n\r\n<kt-material-preview [viewItem]=\"exampleDynamicGrid\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n\t\t\t\t<mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n\t\t\t\t\t{{tile.text}}\r\n\t\t\t\t</mat-grid-tile>\r\n\t\t\t</mat-grid-list>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/list/list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/list/list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/list/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicList\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-list&gt;</code> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-list role=\"list\">\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n\t\t\t\t\t\t<mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleListWithSelection\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tA selection list provides an interface for selecting values, where each list item is an option.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-selection-list #shoes>\r\n\t\t\t\t\t\t<mat-list-option *ngFor=\"let shoe of typesOfShoes\">\r\n\t\t\t\t\t\t\t{{shoe}}\r\n\t\t\t\t\t\t</mat-list-option>\r\n\t\t\t\t\t</mat-selection-list>\r\n\t\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\tOptions selected: <mark>{{shoes.selectedOptions.selected.length}}</mark>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleListWithSection\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-list>\r\n\t\t\t\t\t\t<h3 mat-subheader>Folders</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let folder of folders\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>folder</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{folder.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{folder.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t<h3 mat-subheader>Notes</h3>\r\n\t\t\t\t\t\t<mat-list-item *ngFor=\"let note of notes\">\r\n\t\t\t\t\t\t\t<mat-icon mat-list-icon>note</mat-icon>\r\n\t\t\t\t\t\t\t<h4 mat-line>{{note.name}}</h4>\r\n\t\t\t\t\t\t\t<p mat-line> {{note.updated | date}} </p>\r\n\t\t\t\t\t\t</mat-list-item>\r\n\t\t\t\t\t</mat-list>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/tabs/examples\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<kt-material-preview [viewItem]=\"exampleBasicTabs\">\r\n\t<div class=\"kt-section\">\r\n\t\t<span class=\"kt-section__sub\">\r\n\t\t\tAngular Material\r\n\t\t\t<mark>tabs</mark> organize content into separate views where only one view can be visible at a time. Each tab's label is shown in the tab header and the active tab's label is designated with the animated ink bar. When the list of tab labels exceeds the width of the header, pagination controls appear to let the user scroll left and right across the labels.\r\n\t\t</span>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<mat-tab-group>\r\n\t\t\t\t<mat-tab label=\"Tab 1\">Content 1</mat-tab>\r\n\t\t\t\t<mat-tab label=\"Tab 2\">Content 2</mat-tab>\r\n\t\t\t</mat-tab-group>\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n\r\n\r\n<kt-material-preview [viewItem]=\"exampleComplex\">\r\n\t<div class=\"kt-section\">\r\n\t\t<div class=\"kt-section__content\">\r\n\t\t\t<mat-card>\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Tabs with text labels</h5>\r\n\t\t\t\t\t<mat-tab-group class=\"demo-tab-group\">\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 1\">\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 2\">\r\n\t\t\t\t\t\t\t<div \tclass=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 3\" disabled>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 4\">\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 5\">\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 6\">\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t</mat-card-content>\r\n\t\t\t</mat-card>\r\n\r\n\t\t\t<mat-card>\r\n\t\t\t\t<mat-card-content>\r\n\t\t\t\t\t<h5 class=\"example-h2\">Tabs with icon labels</h5>\r\n\t\t\t\t\t<mat-tab-group class=\"demo-tab-group\">\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 1\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>security</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 2\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>attach_file</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 3\" disabled>\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>block</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 4\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>loop</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t<div class=\"demo-tab-content\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t\t<br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 5\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>build</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t<mat-tab label=\"Tab 6\">\r\n\t\t\t\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t\t\t\t<mat-icon>thumb_down</mat-icon>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\tNo content\r\n\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t</mat-card-content>\r\n\t\t\t</mat-card>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</kt-material-preview>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/stepper/stepper.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/stepper/stepper.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/list/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicStepper\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tAngular Material's stepper provides a wizard-like workflow by dividing content into logical steps.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-vertical-stepper>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 1\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 2\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-vertical-stepper>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleHorizontalStepper\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe only difference is the orientation of stepper.\r\n\t\t\t\t\t<code>&lt;mat-horizontal-steppert&gt;</code> selector can be used to create a horizontal stepper\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-horizontal-stepper>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 1\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step label=\"Step 1\">\r\n\t\t\t\t\t\t\tContent 2\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-horizontal-stepper>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleStepperOverview\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\r\n\r\n\t\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\r\n\t\t\t\t\t\t<mat-step [stepControl]=\"firstFormGroup\">\r\n\t\t\t\t\t\t\t<form [formGroup]=\"firstFormGroup\">\r\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Fill out your name</ng-template>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperNext>Next</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step [stepControl]=\"secondFormGroup\">\r\n\t\t\t\t\t\t\t<form [formGroup]=\"secondFormGroup\">\r\n\t\t\t\t\t\t\t\t<ng-template matStepLabel>Fill out your address</ng-template>\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperPrevious>Back</button>\r\n\t\t\t\t\t\t\t\t\t<button mat-button matStepperNext>Next</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t\t<mat-step>\r\n\t\t\t\t\t\t\t<ng-template matStepLabel>Done</ng-template>\r\n\t\t\t\t\t\t\tYou are now done.\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<button mat-button matStepperPrevious>Back</button>\r\n\t\t\t\t\t\t\t\t<button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</mat-step>\r\n\t\t\t\t\t</mat-horizontal-stepper>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/tree/tree.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/layout/tree/tree.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/tree/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleTreeWithDynamicData\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<code>mat-tree</code> provides a Material Design styled tree that can be used to display hierarchy data.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t\t<mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleTreeWithFlatNodes\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource2\" [treeControl]=\"treeControl2\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.filename}} : {{node.type}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node;when: hasChild2\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl2.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.filename}} : {{node.type}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleTreeWithCheckboxes\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource3\" [treeControl]=\"treeControl3\">\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t<mat-checkbox class=\"checklist-leaf-node\" [checked]=\"checklistSelection3.isSelected(node)\" (change)=\"checklistSelection3.toggle(node);\">{{node.item}}</mat-checkbox>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent3\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<input matInput #itemValue placeholder=\"New item...\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<button mat-button (click)=\"saveNode3(node, itemValue.value)\">Save</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild3\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl3.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<mat-checkbox [checked]=\"descendantsAllSelected3(node)\" [indeterminate]=\"descendantsPartiallySelected3(node)\" (change)=\"todoItemSelectionToggle3(node)\">{{node.item}}</mat-checkbox>\r\n\t\t\t\t\t\t\t<button mat-icon-button (click)=\"addNewItem3(node)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>add</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleTreeWithPartiallyLoadedData\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-tree [dataSource]=\"dataSource4\" [treeControl]=\"treeControl4\">\r\n\t\t\t\t\t\t<!-- Leaf node -->\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button disabled></button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<!-- expandable node -->\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: hasChild4\" matTreeNodePadding>\r\n\t\t\t\t\t\t\t<button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" (click)=\"loadChildren4(node)\" matTreeNodeToggle>\r\n\t\t\t\t\t\t\t\t<mat-icon class=\"mat-icon-rtl-mirror\">\r\n\t\t\t\t\t\t\t\t\t{{treeControl4.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n\t\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t{{node.item}}\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\r\n\t\t\t\t\t\t<mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore4\">\r\n\t\t\t\t\t\t\t<button mat-button (click)=\"loadMore4(node.loadMoreParentItem)\">\r\n\t\t\t\t\t\t\t\tLoad more...\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-tree-node>\r\n\t\t\t\t\t</mat-tree>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/material.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/material.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/menu/menu.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/navigation/menu/menu.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/menu/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicMenu\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-button [matMenuTriggerFor]=\"menu10\">Menu</button>\r\n\t\t\t\t\t<mat-menu #menu10=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Item 1</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Item 2</button>\r\n\t\t\t\t\t</mat-menu>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleMenuWithIcons\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tMenus support displaying\r\n\t\t\t\t\t<code>&ltmat-icon&gt;</code> elements before the menu item text.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu32\">\r\n\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<mat-menu #menu32=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon>dialpad</mat-icon>\r\n\t\t\t\t\t\t\t<span>Redial</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button mat-menu-item disabled>\r\n\t\t\t\t\t\t\t<mat-icon>voicemail</mat-icon>\r\n\t\t\t\t\t\t\t<span>Check voicemail</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button mat-menu-item>\r\n\t\t\t\t\t\t\t<mat-icon>notifications_off</mat-icon>\r\n\t\t\t\t\t\t\t<span>Disable alerts</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleNestedMenu\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tMaterial supports the ability for an\r\n\t\t\t\t\t<mark>mat-menu-item</mark> to open a\r\n\t\t\t\t\t<mark>sub-menu</mark>. To do so, you have to define your root menu and sub-menus, in addition to setting the\r\n\t\t\t\t\t<mark>[matMenuTriggerFor]</mark> on the mat-menu-item that should trigger the sub-menu\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n\t\t\t\t\t<mat-menu #animals=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #vertebrates=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n\t\t\t\t\t\t<button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Birds</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Mammals</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #invertebrates=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Insects</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Molluscs</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Crustaceans</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Corals</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Arachnids</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Velvet worms</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Horseshoe crabs</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #fish=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Baikal oilfish</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Bala shark</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Ballan wrasse</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Bamboo shark</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Banded killifish</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #amphibians=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Sonoran desert toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Western toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Arroyo toad</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Yosemite toad</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<mat-menu #reptiles=\"matMenu\">\r\n\t\t\t\t\t\t<button mat-menu-item>Banded Day Gecko</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Banded Gila Monster</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Black Tree Monitor</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Blue Spiny Lizard</button>\r\n\t\t\t\t\t\t<button mat-menu-item disabled>Velociraptor</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleToggling\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tBy default, the menu will display below (y-axis), after (x-axis), and overlapping its trigger. The position can be changed using the\r\n\t\t\t\t\t<mark>xPosition</mark> (\r\n\t\t\t\t\t<mark>before | after</mark>) and\r\n\t\t\t\t\t<mark>yPosition</mark> (\r\n\t\t\t\t\t<mark>above | below</mark>) attributes. The menu can be be forced to not overlap the trigger using\r\n\t\t\t\t\t<code>[overlapTrigger]=\"false\"</code> attribute.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-menu #appMenu=\"matMenu\" yPosition=\"above\">\r\n\t\t\t\t\t\t<button mat-menu-item>Settings</button>\r\n\t\t\t\t\t\t<button mat-menu-item>Help</button>\r\n\t\t\t\t\t</mat-menu>\r\n\r\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n\t\t\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/sidenav/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicSidenav\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tAngular Material provides two sets of components designed to add collapsible side content (often navigation, though it can be any content) alongside some primary content. These are the sidenav and drawer components.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tThe sidenav components are designed to add side content to a fullscreen app. To set up a sidenav we use three components:\r\n\t\t\t\t\t<code>&lt;mat-sidenav-container&gt;</code> which acts as a structural container for our content and sidenav,\r\n\t\t\t\t\t<code>&lt;mat-sidenav-content&gt;</code> which represents the main content, and\r\n\t\t\t\t\t<code>&lt;mat-sidenav&gt;</code> which represents the added side content.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\r\n\t\t\t\t\t\t<mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\r\n\t\t\t\t\t\t<mat-sidenav-content>Main content</mat-sidenav-content>\r\n\t\t\t\t\t</mat-sidenav-container>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<a href=\"https://stackblitz.com/angular/vqvkrekvgga\" target=\"_blank\">\r\n\t\t\t\t\t\t\tPlease open on Stackblitz to see result\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleAutosizeSidenav\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tBy default, Material will only measure and resize the drawer container in a few key moments (on open, on window resize, on mode change) in order to avoid layout thrashing, however there are cases where this can be problematic. If your app requires for a drawer to change its width while it is open, you can use the\r\n\t\t\t\t\t<mark>autosize</mark> option to tell Material to continue measuring it. Note that you should use this option\r\n\t\t\t\t\t<b>at your own risk</b>, because it could cause performance issues.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-drawer-container class=\"example-container\" autosize>\r\n\t\t\t\t\t\t<mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\r\n\t\t\t\t\t\t\t<p>Auto-resizing sidenav</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\r\n\t\t\t\t\t\t\t<button (click)=\"showFiller = !showFiller\" mat-raised-button>\r\n\t\t\t\t\t\t\t\tToggle extra text\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-drawer>\r\n\r\n\t\t\t\t\t\t<div class=\"example-sidenav-content\">\r\n\t\t\t\t\t\t\t<button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n\t\t\t\t\t\t\t\tToggle sidenav\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</mat-drawer-container>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasicDrawer\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tThe drawer component is designed to add side content to a small section of your app. This is accomplished using the\r\n\t\t\t\t\t<code>&lt;mat-drawer-container&gt;</code>,\r\n\t\t\t\t\t<code>&lt;mat-drawer-content&gt;</code>, and\r\n\t\t\t\t\t<code>&lt;mat-drawer&gt;</code> components, which are analogous to their sidenav equivalents. Rather than adding side content to the app as a whole, these are designed to add side content to a small section of your app. They support almost all of the same features, but do not support fixed positioning.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-drawer-container class=\"example-container\">\r\n\t\t\t\t\t\t<mat-drawer mode=\"side\" opened=\"true\">Drawer content</mat-drawer>\r\n\t\t\t\t\t\t<mat-drawer-content>Main content</mat-drawer-content>\r\n\t\t\t\t\t</mat-drawer-container>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/toolbar/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleSingleRow\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<code>&lt;mat-toolbar&gt;</code> is a container for headers, titles, or actions.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\t<b>Single row:</b>\r\n\t\t\t\t\tIn the most situations, a toolbar will be placed at the top of your application and will only have a single row that includes the title of your application.\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-toolbar>\r\n\t\t\t\t\t\t<span>My Application</span>\r\n\t\t\t\t\t</mat-toolbar>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"examplMultipleRows\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe Material Design specifications describe that toolbars can also have multiple rows. Creating toolbars with multiple rows in Angular Material can be done by placing\r\n\t\t\t\t\t<code>&lt;mat-toolbar-row&gt;</code> elements inside of a\r\n\t\t\t\t\t<code>&lt;mat-toolbar&gt;</code>.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-toolbar>\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>First Row</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Second Row</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\t\t\t\t\t</mat-toolbar>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"examplMultipleRows2\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<b>Note:</b> Placing content outside of a\r\n\t\t\t\t\t<code>&lt;mat-toolbar-row&gt;</code> when multiple rows are specified is not supported.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-toolbar color=\"primary\">\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Custom Toolbar</span>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Second Line</span>\r\n\t\t\t\t\t\t\t<span class=\"example-spacer\"></span>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\r\n\t\t\t\t\t\t<mat-toolbar-row>\r\n\t\t\t\t\t\t\t<span>Third Line</span>\r\n\t\t\t\t\t\t\t<span class=\"example-spacer\"></span>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">favorite</mat-icon>\r\n\t\t\t\t\t\t\t<mat-icon class=\"example-icon\">delete</mat-icon>\r\n\t\t\t\t\t\t</mat-toolbar-row>\r\n\t\t\t\t\t</mat-toolbar>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n\t\t<a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Keep</span>\r\n\t\t  <span mat-line>Add to a note</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Docs</span>\r\n\t\t  <span mat-line>Embed in a document</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Plus</span>\r\n\t\t  <span mat-line>Share with your friends</span>\r\n\t\t</a>\r\n\t  \r\n\t\t<a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n\t\t  <span mat-line>Google Hangouts</span>\r\n\t\t  <span mat-line>Show to your coworkers</span>\r\n\t\t</a>\r\n\t  </mat-nav-list>\r\n\t  \r\n\t  \r\n\t  <!-- Copyright 2018 Google Inc. All Rights Reserved.\r\n\t\t  Use of this source code is governed by an MIT-style license that\r\n\t\t  can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation\r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/bottom-sheet/\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-12\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<code>MatBottomSheet</code> service can be used to open Material Design panels to the bottom of the screen. These panels are intended primarily as an interaction on mobile devices where they can be used as an alternative to dialogs and menus.\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t\tYou can open a bottom sheet by calling the <code>open</code> method with a component to be loaded and an optional config object. The <code>open</code> method will return an instance of <code>MatBottomSheetRef</code></span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<p>You have receive a file called \"cat-picture.jpeg\".</p>\r\n\t\t\t\t\t<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/dialog/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe\r\n\t\t\t\t\t<mark>MatDialog</mark> service can be used to open modal dialogs with Material Design styling and animations.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t  <mat-form-field>\r\n\t\t\t\t\t\t\t<input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n\t\t\t\t\t\t  </mat-form-field>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t  <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li *ngIf=\"animal$ | async as anim\">\r\n\t\t\t\t\t\t  You chose: {{anim}}\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t  </ol>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleInjecting\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tTo access the data in your dialog component, you have to use the\r\n\t\t\t\t\t<mark>MAT_DIALOG_DATA</mark> injection token\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openDialog2()\">Open dialog</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"examplHeader\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tOnce a dialog opens, the dialog will automatically focus the first tabbable element.\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"kt-section__sub\">\r\n\t\t\t\t\tYou can control which elements are tab stops with the\r\n\t\t\t\t\t<mark>tabindex</mark> attribute\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openDialog3()\">Open dialog</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/tooltip/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\tThe Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<span matTooltip=\"Tooltip!\">I have a tooltip</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t\r\n\t\t<kt-material-preview [viewItem]=\"exampleCustomPosition\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n\t\t\t\t\t\t<span>Show tooltip:</span>&nbsp;&nbsp;\r\n\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t<mat-select class=\"example-select\" [(ngModel)]=\"position\">\r\n\t\t\t\t\t\t\t\t<mat-option value=\"before\">Before</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"after\">After</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"above\">Above</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"below\">Below</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"left\">Left</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"right\">Right</mat-option>\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleShowHigh\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<b>Show and hide delays:</b>\r\n\t\t\t\t\tTo add a delay before showing or hiding the tooltip, you can use the inputs\r\n\t\t\t\t\t<mark>matTooltipShowDelay</mark> and\r\n\t\t\t\t\t<mark>matTooltipHideDelay</mark> to provide a delay time in milliseconds.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button class=\"mr-3\" color=\"primary\" mat-raised-button matTooltip=\"Tooltip!\" matTooltipShowDelay=\"1000\">\r\n\t\t\t\t\t\tMy tooltip waits one second to show\r\n\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t<button color=\"accent\" mat-raised-button matTooltip=\"Tooltip!\" matTooltipHideDelay=\"2000\">\r\n\t\t\t\t\t\tMy tooltip waits two seconds to hide\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\r\n\t<div class=\"col-xl-6\">\r\n\r\n\t\t <kt-material-preview [viewItem]=\"exampleDelay\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t\t<b>Changing the default delay behavior:</b>\r\n\t\t\t\t\t\tYou can configure your app's tooltip default show/hide delays by configuring and providing your options using the <mark>MAT_TOOLTIP_DEFAULT_OPTIONS</mark> injection token.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t\t<button mat-raised-button matTooltip=\"By default, I delay\">\r\n\t\t\t\t\t\t\t\tButton with delay-default tooltip\r\n\t\t\t\t\t\t\t  </button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\r\n\t\t<kt-material-preview [viewItem]=\"exampleManually\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t\t<b>Manually calling show() and hide():</b>\r\n\t\t\t\t\t\tTo manually cause the tooltip to show or hide, you can call the <mark>show</mark> and <mark>hide</mark> directive methods, which both accept a number in milliseconds to delay before applying the display change.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t\t<button class=\"mr-2\" mat-raised-button (click)=\"tooltip.show()\"> Show tooltip </button>\r\n\r\n\t\t\t\t\t\t<span matTooltip=\"This is the tooltip message\" #tooltip=\"matTooltip\">\r\n\t\t\t\t\t\t  I have a tooltip\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tFor more info please check the components's official demos & documentation \r\n\t<a class=\"kt-link\" href=\"https://material.angular.io/components/snack-bar/overview\" target=\"_blank\">demos & documentation</a>\r\n</kt-notice>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleBasic\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<mark>MatSnackBar</mark> is a service for displaying snack-bar notifications.\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t\t<kt-material-preview [viewItem]=\"exampleCustom\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar2()\" aria-label=\"Show an example snack-bar\">\r\n\t\t\t\t\t\tPizza party\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n\t<div class=\"col-xl-6\">\r\n\t\t<kt-material-preview [viewItem]=\"exampleDismissal\">\r\n\t\t\t<div class=\"kt-section\">\r\n\t\t\t\t<span class=\"kt-section__sub\">\r\n\t\t\t\t\t<mark>Dismissal</mark> example with 6 seconds duration\r\n\t\t\t\t</span>\r\n\t\t\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t\t\t<div class=\"kt-section__content\">\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t<input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t<button mat-button (click)=\"openSnackBar3(message.value, action.value)\">Show snack-bar</button>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-material-preview>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ButtonToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToggleComponent", function() { return ButtonToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basic = {
    beforeCodeTitle: 'Basic button-toggles',
    htmlCode: `<mat-button-toggle>Toggle me!</mat-button-toggle>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic button-toggles
*/
@Component({
  selector: 'button-toggle-overview-example',
  templateUrl: 'button-toggle-overview-example.html',
  styleUrls: ['button-toggle-overview-example.css'],
})
export class ButtonToggleOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const vertical = {
    beforeCodeTitle: 'Vertical button toggle',
    htmlCode: `<mat-button-toggle [vertical]="true">Toggle me!</mat-button-toggle>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title  Vertical button-toggles
*/
@Component({
  selector: 'button-toggle-vertical-example',
  templateUrl: 'button-toggle-vertical-example.html',
  styleUrls: ['button-toggle-vertical-example.css'],
})
export class ButtonToggleVerticalExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const listExample = {
    beforeCodeTitle: 'Exclusive selection',
    htmlCode: `
<mat-button-toggle-group #group="matButtonToggleGroup">
  <mat-button-toggle value="left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify" disabled>
    <mat-icon>format_align_justify</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>
<div class="example-selected-value">Selected value: {{group.value}}</div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Exclusive selection
*/
@Component({
  selector: 'button-toggle-exclusive-example',
  templateUrl: 'button-toggle-exclusive-example.html',
  styleUrls: ['button-toggle-exclusive-example.css'],
})
export class ButtonToggleExclusiveExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ButtonToggleComponent = class ButtonToggleComponent {
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleVertical = vertical;
        this.exampleList = listExample;
    }
};
ButtonToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-button-toggle',
        template: __webpack_require__(/*! raw-loader!./button-toggle.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t  }\n\t"]
    })
], ButtonToggleComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basic = {
    beforeCodeTitle: 'Basic buttons',
    htmlCode: `
<div class="button-row">
  <button mat-button>Basic</button>
  <button mat-button color="primary">Primary</button>
  <button mat-button color="accent">Accent</button>
  <button mat-button color="warn">Warn</button>
  <button mat-button disabled>Disabled</button>
  <a mat-button routerLink=".">Link</a>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
    cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const raised = {
    beforeCodeTitle: 'Raised buttons',
    htmlCode: `
<div class="button-row">
  <button mat-raised-button>Basic</button>
  <button mat-raised-button color="primary">Primary</button>
  <button mat-raised-button color="accent">Accent</button>
  <button mat-raised-button color="warn">Warn</button>
  <button mat-raised-button disabled>Disabled</button>
  <a mat-raised-button routerLink=".">Link</a>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
    cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const icon = {
    beforeCodeTitle: 'Icon buttons',
    htmlCode: `
<div class="button-row">
  <button mat-icon-button>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="primary">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="accent">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button color="warn">
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <button mat-icon-button disabled>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  </div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}\n\n`,
    cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const fab = {
    beforeCodeTitle: 'Fab buttons',
    htmlCode: `
<div class="button-row">
  <button mat-fab>Basic</button>
  <button mat-fab color="primary">Primary</button>
  <button mat-fab color="accent">Accent</button>
  <button mat-fab color="warn">Warn</button>
  <button mat-fab disabled>Disabled</button>
  <button mat-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-fab routerLink=".">Link</a>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
    cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const miniFab = {
    beforeCodeTitle: 'Mini Fab buttons',
    htmlCode: `
<div class="button-row">
  <button mat-mini-fab>Basic</button>
  <button mat-mini-fab color="primary">Primary</button>
  <button mat-mini-fab color="accent">Accent</button>
  <button mat-mini-fab color="warn">Warn</button>
  <button mat-mini-fab disabled>Disabled</button>
  <button mat-mini-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-mini-fab routerLink=".">Link</a>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Button varieties
*/
@Component({
  selector: 'button-types-example',
  templateUrl: 'button-types-example.html',
  styleUrls: ['button-types-example.css'],
})
export class ButtonTypesExample {}`,
    cssCode: `
.example-button-row {
  display: flex;
  align-items: center;
 justify-content: space-around;
}`,
    viewCode: ``,
    isCodeVisible: false
};
let ButtonComponent = class ButtonComponent {
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleRaised = raised;
        this.exampleIcon = icon;
        this.exmapleFab = fab;
        this.exampleMiniFav = miniFab;
    }
};
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-button-row {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t  }\n\t"]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");



const basic = {
    beforeCodeTitle: 'Basic chips',
    htmlCode: `
<mat-chip-list>
  <mat-chip>One fish</mat-chip>
  <mat-chip>Two fish</mat-chip>
  <mat-chip color="primary" selected="true">Primary fish</mat-chip>
  <mat-chip color="accent" selected="true">Accent fish</mat-chip>
</mat-chip-list>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic chips
*/
@Component({
  selector: 'chips-overview-example',
  templateUrl: 'chips-overview-example.html',
  styleUrls: ['chips-overview-example.css'],
})
export class ChipsOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const input = {
    beforeCodeTitle: 'Chips with input',
    htmlCode: `
<mat-form-field class="demo-chip-list">
  <mat-chip-list #chipList>
    <mat-chip *ngFor="let fruit of fruits" [selectable]="selectable"
      [removable]="removable" (remove)="remove(fruit)">
      {{fruit.name}}
      <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
    </mat-chip>
    <input placeholder="New fruit..."
      [matChipInputFor]="chipList"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      [matChipInputAddOnBlur]="addOnBlur"
      (matChipInputTokenEnd)="add($event)" />
  </mat-chip-list>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';\n\n
/**
* @title Chips with input
*/
@Component({
  selector: 'chips-input-example',
  templateUrl: 'chips-input-example.html',
  styleUrls: ['chips-input-example.css']
})
export class ChipsInputExample {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;\n\n
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];\n\n
  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];\n\n\n\
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;\n\n
    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }\n\n
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }\n\n
  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);\n
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
`,
    cssCode: `
.demo-chip-list {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const stacked = {
    beforeCodeTitle: 'Stacked chips',
    htmlCode: `
<<mat-chip-list class="mat-chip-list-stacked">
  <mat-chip *ngFor="let chip of availableColors" selected="true" [color]="chip.color">
    {{chip.name}}
  </mat-chip>
</mat-chip-list>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Stacked chips
*/
@Component({
  selector: 'chips-stacked-example',
  templateUrl: 'chips-stacked-example.html',
  styleUrls: ['chips-stacked-example.css'],
})
export class ChipsStackedExample {
  color: string;\n\n
  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
}
`,
    cssCode: `
		mat-chip {
			max-width: 200px;
		}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ChipsComponent = class ChipsComponent {
    constructor() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' },
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleInput = input;
        this.exampleStacked = stacked;
    }
    add(event) {
        const inputText = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (inputText) {
            inputText.value = '';
        }
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
};
ChipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-chips',
        template: __webpack_require__(/*! raw-loader!./chips.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.demo-chip-list {\n\t\twidth: 100%;\n\t}\n\tmat-chip {\n\t\tmax-width: 200px;\n\t}\n\t"]
    })
], ChipsComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




const basic = {
    beforeCodeTitle: 'Basic icons',
    htmlCode: `
<mat-icon>home</mat-icon>
<mat-icon>queue music</mat-icon>
<mat-icon>call split</mat-icon>
<mat-icon>event note</mat-icon>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Basic icons
*/
@Component({
  selector: 'icon-overview-example',
  templateUrl: 'icon-overview-example.html',
  styleUrls: ['icon-overview-example.css']
})
export class IconOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const sVG = {
    beforeCodeTitle: 'SVG icons',
    htmlCode: `<mat-icon svgIcon="thumbs-up"></mat-icon>`,
    tsCode: `
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';\n\n
/**
* @title SVG icons
*/
@Component({
  selector: 'icon-svg-example',
  templateUrl: 'icon-svg-example.html',
  styleUrls: ['icon-svg-example.css'],
})
export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
    'thumbs-up',
     sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let IconComponent = class IconComponent {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('exchange', sanitizer.bypassSecurityTrustResourceUrl('./assets/media/icons/exchange.svg'));
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleSVG = sVG;
    }
};
IconComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-icon',
        template: __webpack_require__(/*! raw-loader!./icon.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], IconComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const determinate = {
    beforeCodeTitle: 'Determinate progress-bar',
    htmlCode: `<mat-progress-bar mode="determinate" value="40"></mat-progress-bar>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Determinate progress-bar
*/
@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'progress-bar-determinate-example.html',
  styleUrls: ['progress-bar-determinate-example.css'],
})
export class ProgressBarDeterminateExample {}\n\n`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const indeterminate = {
    beforeCodeTitle: 'Indeterminate progress-bar',
    htmlCode: `<mat-progress-bar mode="indeterminate"></mat-progress-bar>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Indeterminate progress-bar
*/
@Component({
  selector: 'progress-bar-indeterminate-example',
  templateUrl: 'progress-bar-indeterminate-example.html',
  styleUrls: ['progress-bar-indeterminate-example.css'],
})
export class ProgressBarIndeterminateExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const buffer = {
    beforeCodeTitle: 'Buffer progress-bar',
    htmlCode: `<mat-progress-bar mode="buffer"></mat-progress-bar>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Buffer progress-bar
*/
@Component({
  selector: 'progress-bar-buffer-example',
  templateUrl: 'progress-bar-buffer-example.html',
  styleUrls: ['progress-bar-buffer-example.css'],
})
export class ProgressBarBufferExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const query = {
    beforeCodeTitle: 'Query progress-bar',
    htmlCode: `<mat-progress-bar mode="query"></mat-progress-bar>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Query progress-bar
*/
@Component({
  selector: 'progress-bar-query-example',
  templateUrl: 'progress-bar-query-example.html',
  styleUrls: ['progress-bar-query-example.css'],
})
export class ProgressBarQueryExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const config = {
    beforeCodeTitle: 'Configurable progress-bar',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Progress bar configuration</h2>
    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>
	<section class="example-section">
      <label class="example-margin">Mode:</label>
      <mat-radio-group [(ngModel)]="mode">
        <mat-radio-button class="example-margin" value="determinate">
          Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
          Indeterminate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="buffer">
          Buffer
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="query">
          Query
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section" *ngIf="mode == 'determinate' || mode == 'buffer'">
      <label class="example-margin">Progress:</label>
      <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
    </section>
    <section class="example-section" *ngIf="mode == 'buffer'">
      <label class="example-margin">Buffer:</label>
      <mat-slider class="example-margin" [(ngModel)]="bufferValue"></mat-slider>
    </section>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
     <mat-progress-bar
        class="example-margin"
        [color]="color"
        [mode]="mode"
        [value]="value"
        [bufferValue]="bufferValue">
      </mat-progress-bar>
    </section>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Configurable progress-bar
*/
@Component({
  selector: 'progress-bar-configurable-example',
  templateUrl: 'progress-bar-configurable-example.html',
  styleUrls: ['progress-bar-configurable-example.css'],
})
export class ProgressBarConfigurableExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}`,
    cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 0 10px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
let ProgressBarComponent = class ProgressBarComponent {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ngOnInit() {
        this.exampleDeterminate = determinate;
        this.exampleIndeterminate = indeterminate;
        this.exampleBuffer = buffer;
        this.exmapleQuery = query;
        this.exampleConfig = config;
    }
};
ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-progress-bar',
        template: __webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t}\n\t.example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t}\n\n\t.example-margin {\n\t\tmargin: 0 10px;\n\t}"]
    })
], ProgressBarComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ProgressSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function() { return ProgressSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basic = {
    beforeCodeTitle: 'Basic progressbar-spinner',
    htmlCode: `<mat-spinner></mat-spinner>`,
    tsCode: `import {Component} from '@angular/core';\n\n
/**
* @title Basic progress-spinner
*/
@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: 'progress-spinner-overview-example.html',
  styleUrls: ['progress-spinner-overview-example.css'],
})
export class ProgressSpinnerOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const config = {
    beforeCodeTitle: 'Configurable progress spinner',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Progress spinner configuration</h2>
    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section">
      <label class="example-margin">Mode:</label>
      <mat-radio-group [(ngModel)]="mode">
	    <mat-radio-button class="example-margin" value="determinate">
          Determinate
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="indeterminate">
          Indeterminate
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section" *ngIf="mode == 'determinate'">
      <label class="example-margin">Progress:</label>
        <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
    </section>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <mat-progress-spinner
     class="example-margin"
     [color]="color"
     [mode]="mode"
     [value]="value">
    </mat-progress-spinner>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';\n\n
/**
* @title Configurable progress spinner
*/
@Component({
  selector: 'progress-spinner-configurable-example',
  templateUrl: 'progress-spinner-configurable-example.html',
  styleUrls: ['progress-spinner-configurable-example.css'],
})
export class ProgressSpinnerConfigurableExample {
  color = 'primary';
  mode = 'determinate';
  value = 50;
}`,
    cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 0 10px;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const warn = {
    beforeCodeTitle: 'Colorized progressbar-spinner',
    htmlCode: `
<mat-spinner [color]="'accent'"></mat-spinner>
<mat-spinner [color]="'warn'"></mat-spinner>\n`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Colorized progress-spinner
*/
@Component({
  selector: 'progress-spinner-colorized-example',
  templateUrl: 'progress-spinner-colorized-example.html',
  styleUrls: ['progress-spinner-colorized-example.css'],
})
export class ProgressSpinnerColorizedExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ProgressSpinnerComponent = class ProgressSpinnerComponent {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleWarn = warn;
        this.exampleConfig = config;
    }
};
ProgressSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-progress-spinner',
        template: __webpack_require__(/*! raw-loader!./progress-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 0 10px;\n\t  }\n\t"]
    })
], ProgressSpinnerComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RipplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RipplesComponent", function() { return RipplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const basic = {
    beforeCodeTitle: 'MatRipple basic usage',
    htmlCode: `
<mat-checkbox [(ngModel)]="centered" class="example-ripple-checkbox">Centered</mat-checkbox>
<mat-checkbox [(ngModel)]="disabled" class="example-ripple-checkbox">Disabled</mat-checkbox>
<mat-checkbox [(ngModel)]="unbounded" class="example-ripple-checkbox">Unbounded</mat-checkbox>

<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="radius" type="number" placeholder="Radius">
</mat-form-field>
<mat-form-field class="example-ripple-form-field">
  <input matInput [(ngModel)]="color" type="text" placeholder="Color">
</mat-form-field>

<div class="example-ripple-container mat-elevation-z4"
  matRipple
  [matRippleCentered]="centered"
  [matRippleDisabled]="disabled"
  [matRippleUnbounded]="unbounded"
  [matRippleRadius]="radius"
  [matRippleColor]="color">
  Click me
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
  * @title MatRipple basic usage
*/
@Component({
  selector: 'ripple-overview-example',
  templateUrl: 'ripple-overview-example.html',
  styleUrls: ['ripple-overview-example.css'],
})
export class RippleOverviewExample {
  centered = false;
  disabled = false;
  unbounded = false;\n
  radius: number;
  color: string;
}`,
    cssCode: `
.example-ripple-container {
  cursor: pointer;
  text-align: center;\n
  width: 300px;
  height: 300px;
  line-height: 300px;\n
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;\n
  -webkit-user-drag: none;
  -webkit-tap-highlight-color: transparent;
}\n
/** Styles to make the demo look better. */
.example-ripple-checkbox {
  margin: 6px 12px 6px 0;
}

.example-ripple-form-field {
  margin: 0 12px 0 0;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let RipplesComponent = class RipplesComponent {
    constructor(iconRegistry) {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    ngOnInit() {
        this.exampleBasic = basic;
    }
};
RipplesComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }
];
RipplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-ripples',
        template: __webpack_require__(/*! raw-loader!./ripples.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], RipplesComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/data-table/material-table/material-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/data-table/material-table/material-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ExampleHttpDao, MaterialTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleHttpDao", function() { return ExampleHttpDao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTableComponent", function() { return MaterialTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const basic = {
    beforeCodeTitle: 'Basic table',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!--- Note that these columns can be defined in any order.
				The actual rendered columns are set as a property on the row definition" -->
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
	</ng-container>
	<!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic table
*/
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const pagination = {
    beforeCodeTitle: 'Table with pagination',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <mat-paginator #paginator
    [pageSize]="10"
    [pageSizeOptions]="[5, 10, 20]"
    [showFirstLastButtons]="true">
  </mat-paginator>
</div>
		`,
    tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';\n
/**
* @title Table with pagination
*/
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;\n
  /**
  * Set the paginator after the view init since this component will
  * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const sorting = {
    beforeCodeTitle: 'Table with sorting',
    beforeCodeDescription: ``,
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource" matSort>
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
    tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';\n
/**
* @title Table with sorting
*/
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
})
export class TableSortingExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);\n
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n\n
  /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}\n\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}
.mat-header-cell.mat-sort-header-sorted {
  color: black;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const filtering = {
    beforeCodeTitle: 'Table with filtering',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <div class="example-header">
    <mat-form-field>
      <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
    </mat-form-field>
  </div>
  <mat-table #table [dataSource]="dataSource">
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';\n\n
/**
* @title Table with filtering
*/
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);\n\n
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    cssCode: `
/* Structure */
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.example-header {
  min-height: 64px;
  padding: 8px 24px 0;
}
.mat-form-field {
  font-size: 14px;
  width: 100%;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const selection = {
    beforeCodeTitle: 'Table with selection',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!-- Checkbox Column -->
    <ng-container matColumnDef="select">
      <mat-header-cell *matHeaderCellDef>
        <mat-checkbox (change)="$event ? masterToggle() : null"
          [checked]="selection.hasValue() && isAllSelected()"
          [indeterminate]="selection.hasValue() && !isAllSelected()">
        </mat-checkbox>
      </mat-header-cell>
      <mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
          (change)="$event ? selection.toggle(row) : null"
          [checked]="selection.isSelected(row)">
        </mat-checkbox>
      </mat-cell>
    </ng-container>
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"
      (click)="selection.toggle(row)">
    </mat-row>
  </mat-table>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';\n
/**
* @title Table with selection
*/
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);\n
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }\n
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }
}\n
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    viewCode: ``,
    isCodeVisible: false
};
const main = {
    beforeCodeTitle: 'Data table with sorting, pagination, and filtering.',
    htmlCode: `
<div class="example-header">
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
  </mat-form-field>
</div>
<div class="example-container mat-elevation-z8">
  <mat-table [dataSource]="dataSource" matSort>
    <!-- ID Column -->
    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.id}} </mat-cell>
    </ng-container>
    <!-- Progress Column -->
    <ng-container matColumnDef="progress">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.progress}}% </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let row"> {{row.name}} </mat-cell>
    </ng-container>
    <!-- Color Column -->
    <ng-container matColumnDef="color">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>
      <mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;">
    </mat-row>
  </mat-table>
  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>
</div>`,
    tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';\n
/**
* @title Data table with sorting, pagination, and filtering.
*/
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  constructor() {
    // Create 100 users
    const users: UserData[] = [];
      for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }\n
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
  }\n
  /**
  * Set the paginator and sort after the view init since this component will
  * be able to query its view for the initialized paginator and sort.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }\n
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}\n\n
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n
  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
   };
}\n\n
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.example-header {
  min-height: 64px;
  padding: 8px 24px 0;
}
.mat-form-field {
  font-size: 14px;
  width: 100%;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const hTTP = {
    beforeCodeTitle: 'Table retrieving data through HTTP',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <div class="example-loading-shade"
    *ngIf="isLoadingResults || isRateLimitReached">
    <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
    <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
	  GitHub's API rate limit has been reached. It will be reset in one minute.
    </div>
  </div>
  <mat-table #table [dataSource]="dataSource" class="example-table"
    matSort matSortActive="created" matSortDisableClear matSortDirection="asc">
    <!--- Note that these columns can be defined in any order.
    The actual rendered columns are set as a property on the row definition" -->
    <!-- Number Column -->
    <ng-container matColumnDef="number">
      <mat-header-cell *matHeaderCellDef>#</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.number}}</mat-cell>
    </ng-container>
    <!-- Title Column -->
    <ng-container matColumnDef="title">
      <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.title}}</mat-cell>
    </ng-container>
    <!-- State Column -->
    <ng-container matColumnDef="state">
      <mat-header-cell *matHeaderCellDef>State</mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.state}}</mat-cell>
    </ng-container>
    <!-- Created Column -->
    <ng-container matColumnDef="created">
      <mat-header-cell *matHeaderCellDef
        mat-sort-header
        disableClear="true">
        Created
      </mat-header-cell>
      <mat-cell *matCellDef="let row">{{row.created_at | date}}</mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
  <mat-paginator [length]="resultsLength" [pageSize]="30">
  </mat-paginator>
 </div>`,
    tsCode: `
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';\n
/**
* @title Table retrieving data through HTTP
*/
@Component({
  selector: 'table-http-example',
  styleUrls: ['table-http-example.css'],
  templateUrl: 'table-http-example.html',
})
export class TableHttpExample implements OnInit {
  displayedColumns = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();\n
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;\n
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  constructor(private http: HttpClient) {}\n\n\
  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);\n\n
    // If the user changes the sort order, reset back to the first page.
	this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
	    switchMap(() => {
          this.isLoadingResults = true;
			  return this.exampleDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
        // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;\n\n
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
            return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
  }
}\n\n
export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}\n\n\
export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}\n\n\
/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}
  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
    \`\${href}?q=repo:angular/material2&sort=\${sort}&order=\${order}&page=\${page + 1}\`;\n
    return this.http.get<GithubApi>(requestUrl);
  }
}`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  min-width: 300px;
  position: relative;
}
.example-header {
  min-height: 64px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 20px;
}
.example-table {
  overflow: auto;
  min-height: 300px;
}
.example-loading-shade {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 56px;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.example-rate-limit-reached {
  color: #980000;
  max-width: 360px;
  text-align: center;
}
/* Column Widths */
.mat-column-number,
.mat-column-state {
  max-width: 64px;
}
.mat-column-created {
  max-width: 124px;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
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
];
const ELEMENT_DATA2 = [
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
/** An example database that the data source uses to retrieve data for the table. */
class ExampleHttpDao {
    constructor(http) {
        this.http = http;
    }
    getRepoIssues(sort, order, page) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
        return this.http.get(requestUrl);
    }
}
ExampleHttpDao.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
let MaterialTableComponent = class MaterialTableComponent {
    constructor(http) {
        this.http = http;
        this.displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns2 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns3 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns4 = ['position', 'name', 'weight', 'symbol'];
        this.displayedColumns5 = ['select', 'position', 'name', 'weight', 'symbol'];
        this.displayedColumns6 = ['created', 'state', 'number', 'title'];
        this.displayedColumns7 = ['id', 'name', 'progress', 'color'];
        this.dataSource1 = ELEMENT_DATA;
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA2);
        this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource4 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource5 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource6 = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource7 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.examplePagination = pagination;
        this.exampleSorting = sorting;
        this.exampleFiltering = filtering;
        this.exampleSelection = selection;
        this.exampleHTTP = hTTP;
        this.exampleMain = main;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource3.sort = this.sort3;
        // Example 6
        this.exampleDatabase = new ExampleHttpDao(this.http);
        // If the user changes the sort order, reset back to the first page.
        this.sort6.sortChange.subscribe(() => this.paginator6.pageIndex = 0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this.sort6.sortChange, this.paginator6.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => {
            this.isLoadingResults = true;
            // tslint:disable-next-line:no-non-null-assertion
            return this.exampleDatabase.getRepoIssues(this.sort6.active, this.sort6.direction, this.paginator6.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.total_count;
            return data.items;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(() => {
            this.isLoadingResults = false;
            // Catch if the GitHub API has reached its rate limit. Return empty data.
            this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        })).subscribe(data => this.dataSource6 = data);
        // Example 7
        this.dataSource7.paginator = this.paginator7;
        this.dataSource7.sort = this.sort7;
    }
    applyFilter4(filterValue) {
        this.dataSource4.filter = filterValue.trim().toLowerCase();
    }
    applyFilter7(filterValue) {
        this.dataSource7.filter = filterValue.trim().toLowerCase();
        if (this.dataSource7.paginator) {
            this.dataSource7.paginator.firstPage();
        }
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected5() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource5.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle5() {
        this.isAllSelected5() ?
            this.selection.clear() :
            this.dataSource5.data.forEach(row => this.selection.select(row));
    }
};
MaterialTableComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matPaginator2', { static: true })
], MaterialTableComponent.prototype, "paginator2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matPaginator6', { static: true })
], MaterialTableComponent.prototype, "paginator6", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('matPaginator7', { static: true })
], MaterialTableComponent.prototype, "paginator7", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort3', { static: true })
], MaterialTableComponent.prototype, "sort3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort6', { static: true })
], MaterialTableComponent.prototype, "sort6", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort7', { static: true })
], MaterialTableComponent.prototype, "sort7", void 0);
MaterialTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-material-table',
        template: __webpack_require__(/*! raw-loader!./material-table.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/material-table/material-table.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
        styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmax-height: 500px;\n\t\tmin-width: 300px;\n\t\tposition: relative;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tpadding: 8px 24px 0;\n\t  }\n\n\t  .mat-form-field {\n\t\tfont-size: 14px;\n\t\twidth: 100%;\n\t  }\n\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-column-select {\n\t\toverflow: initial;\n\t  }\n\t  .example-header {\n\t\tmin-height: 64px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 24px;\n\t\tfont-size: 20px;\n\t  }\n\n\t  .example-table {\n\t\toverflow: auto;\n\t\tmin-height: 300px;\n\t  }\n\n.example-loading-shade {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 56px;\n\tright: 0;\n\tbackground: rgba(0, 0, 0, 0.15);\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n  }\n\n  .example-rate-limit-reached {\n\tcolor: #980000;\n\tmax-width: 360px;\n\ttext-align: center;\n  }\n\n  /* Column Widths */\n  .mat-column-number,\n  .mat-column-state {\n\tmax-width: 64px;\n  }\n\n  .mat-column-created {\n\tmax-width: 124px;\n  }\n\t"]
    })
], MaterialTableComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/data-table/paginator/paginator.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/data-table/paginator/paginator.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basic = {
    beforeCodeTitle: 'Paginator',
    htmlCode: `
<mat-paginator [length]="100"
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 25, 100]">
</mat-paginator>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Paginator
*/
@Component({
  selector: 'paginator-overview-example',
  templateUrl: 'paginator-overview-example.html',
  styleUrls: ['paginator-overview-example.css'],
})
export class PaginatorOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const config = {
    beforeCodeTitle: 'Configurable paginatorn',
    htmlCode: `
<mat-form-field>
  List length:
  <input matInput [(ngModel)]="length">
</mat-form-field>
  <mat-form-field>
    Page size:
    <input matInput [(ngModel)]="pageSize">
  </mat-form-field>
  <mat-form-field>
    Page size options:
    <input matInput
      [ngModel]="pageSizeOptions"
      (ngModelChange)="setPageSizeOptions($event)">
  </mat-form-field>
  <mat-paginator [length]="length"
    [pageSize]="pageSize"
    [pageSizeOptions]="pageSizeOptions"
    (page)="pageEvent = $event">
  </mat-paginator>
  <div *ngIf="pageEvent">
    <h5>Page Change Event Properties</h5>
    <div>List length: {{pageEvent.length}}</div>
    <div>Page size: {{pageEvent.pageSize}}</div>
    <div>Page index: {{pageEvent.pageIndex}}</div>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {PageEvent} from '@angular/material';\n
/**
* @title Configurable paginator
*/
@Component({
  selector: 'paginator-configurable-example',
  templateUrl: 'paginator-configurable-example.html',
  styleUrls: ['paginator-configurable-example.css'],
})
export class PaginatorConfigurableExample {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];\n
  // MatPaginator Output
  pageEvent: PageEvent;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
};
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-paginator',
        template: __webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/paginator/paginator.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SortHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortHeaderComponent", function() { return SortHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



const basic = {
    beforeCodeTitle: 'Sorting overview',
    htmlCode: `
<table matSort (matSortChange)="sortData($event)">
  <tr>
    <th mat-sort-header="name">Dessert (100g)</th>
    <th mat-sort-header="calories">Calories</th>
    <th mat-sort-header="fat">Fat (g)</th>
    <th mat-sort-header="carbs">Carbs (g)</th>
    <th mat-sort-header="protein">Protein (g)</th>
  </tr>
  <tr *ngFor="let dessert of sortedData">
    <td>{{dessert.name}}</td>
    <td>{{dessert.calories}}</td>
    <td>{{dessert.fat}}</td>
    <td>{{dessert.carbs}}</td>
    <td>{{dessert.protein}}</td>
  </tr>
</table>`,
    tsCode: `
import {Component} from '@angular/core';
import {Sort} from '@angular/material';\n
/**
* @title Sorting overview
*/
@Component({
  selector: 'sort-overview-example',
  templateUrl: 'sort-overview-example.html',
  styleUrls: ['sort-overview-example.css'],
})
export class SortOverviewExample {
  desserts = [
    {name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4'},
    {name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4'},
    {name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6'},
    {name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4'},
    {name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4'},
  ];\n
  sortedData;\n
  constructor() {
    this.sortedData = this.desserts.slice();
  }\n
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }\n
    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }
}\n\n
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}`,
    cssCode: `
.mat-sort-header-container {
  align-items: center;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const config = {
    beforeCodeTitle: 'Table with sorting',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource" matSort>
  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
  </ng-container>
  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
  </ng-container>
  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
  </ng-container>
  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>
    <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
  </ng-container>
  <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
  <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>`,
    tsCode: `
import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';\n
/**
* @title Table with sorting
*/
@Component({
  selector: 'table-sorting-example',
  styleUrls: ['table-sorting-example.css'],
  templateUrl: 'table-sorting-example.html',
})
export class TableSortingExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);\n
  @ViewChild(MatSort, {static: true}) sort: MatSort;\n
  /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}\n
const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
  min-width: 300px;
}
.mat-table {
  overflow: auto;
  max-height: 500px;
}
.mat-header-cell.mat-sort-header-sorted {
  color: black;
}`,
    viewCode: ``,
    isCodeVisible: false
};
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
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
let SortHeaderComponent = class SortHeaderComponent {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.desserts = [
            { name: 'Frozen yogurt', calories: '159', fat: '6', carbs: '24', protein: '4' },
            { name: 'Ice cream sandwich', calories: '237', fat: '9', carbs: '37', protein: '4' },
            { name: 'Eclair', calories: '262', fat: '16', carbs: '24', protein: '6' },
            { name: 'Cupcake', calories: '305', fat: '4', carbs: '67', protein: '4' },
            { name: 'Gingerbread', calories: '356', fat: '16', carbs: '49', protein: '4' },
        ];
        this.sortedData = this.desserts.slice();
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleConfig = config;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort2;
    }
    sortData(_sort) {
        const data = this.desserts.slice();
        if (!_sort.active || _sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = _sort.direction === 'asc';
            switch (_sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(+a.calories, +b.calories, isAsc);
                case 'fat': return compare(+a.fat, +b.fat, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                default: return 0;
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort1', { static: true })
], SortHeaderComponent.prototype, "sort1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sort2', { static: true })
], SortHeaderComponent.prototype, "sort2", void 0);
SortHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-sort-header',
        template: __webpack_require__(/*! raw-loader!./sort-header.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.mat-sort-header-container {\n\t\talign-items: center;\n\t  }\n\t  .example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-width: 300px;\n\t  }\n\t  .mat-table {\n\t\toverflow: auto;\n\t\tmax-height: 500px;\n\t  }\n\t  .mat-header-cell.mat-sort-header-sorted {\n\t\tcolor: black;\n\t  }\n\t"]
    })
], SortHeaderComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: User, State, AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




const simpleAutocomplete = {
    beforeCodeTitle: 'Simple autocomplete',
    htmlCode: `<form class="example-full-width">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number"
      matInput [formControl]="myControl"
      [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of options" [value]="option">
          {{ option }}
        </mat-option>
       </mat-autocomplete>
  </mat-form-field>
</form>
`,
    tsCode: `
import {FormControl} from '@angular/forms';
import {Component} from '@angular/core';\n
/**
* @title Simple autocomplete
*/
@Component({
    selector: 'autocomplete-simple-example',
    templateUrl: 'autocomplete-simple-example.html',
    styleUrls: ['autocomplete-simple-example.css']
})
export class AutocompleteSimpleExample {
    myControl: FormControl = new FormControl();
    options = [
        'One',
        'Two',
        'Three'
    ];
}`,
    cssCode: `.example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
}
.example-full-width {
    width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const addingACustomFilter = {
    beforeCodeTitle: 'Adding a custom filter',
    htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{ option }}
        </mat-option>
      </mat-autocomplete>
  </mat-form-field>
</form>`,
    tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
/**
* @title Filter autocomplete
*/
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrls: ['autocomplete-filter-example.css']
})
export class AutocompleteFilterExample {\n
  myControl: FormControl = new FormControl();\n
  options = [
    'One',
    'Two',
	'Three'
  ];\n
  filteredOptions: Observable<string[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
         map(val => this.filter(val))
      );
  }\n
  filter(val: string): string[] {
    return this.options.filter(option =>
		option.toLowerCase().includes(val.toLowerCase()));
  }
}`,
    cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const settingSeparateControlAndDisplayValues = {
    beforeCodeTitle: 'Setting separate control and display valuess',
    beforeCodeDescription: ``,
    htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Assignee" aria-label="Assignee" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{ option.name }}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>`,
    tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
export class User {
  constructor(public name: string) { }
}
/**
* @title Display value autocomplete
*/
@Component({
  selector: 'autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.html',
  styleUrls: ['autocomplete-display-example.css']
})
export class AutocompleteDisplayExample {\n
  myControl = new FormControl();\n
  options = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];\n
  filteredOptions: Observable<User[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }\n
  filter(name: string): User[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }\n
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }\n
}`,
    cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const automaticallyHighlightingTheFirstOption = {
    beforeCodeTitle: 'Automatically highlighting the first option',
    htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{ option }}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>`,
    tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
/**
* @title Highlight the first autocomplete option
*/
@Component({
  selector: 'autocomplete-auto-active-first-option-example',
  templateUrl: 'autocomplete-auto-active-first-option-example.html',
  styleUrls: ['autocomplete-auto-active-first-option-example.css']
})
export class AutocompleteAutoActiveFirstOptionExample {
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );\n
  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }\n
}`,
    cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const autocompleteOverview = {
    beforeCodeTitle: 'Autocomplete overview',
    htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
        <img style="vertical-align:middle;" aria-hidden src="{{state.flag}}" height="25" />
        <span>{{ state.name }}</span> |
        <small>Population: {{state.population}}</small>
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
  <br />
  <mat-slide-toggle
    [checked]="stateCtrl.disabled"
    (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
    Disable Input?
  </mat-slide-toggle>
</form>`,
    tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}\n
/**
 * @title Autocomplete overview
*/
@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: 'autocomplete-overview-example.html',
  styleUrls: ['autocomplete-overview-example.css']
})
export class AutocompleteOverviewExample {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states: State[] = [
  {
    name: 'Arkansas',
    population: '2.978M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  },
  {
	name: 'California',
    population: '39.14M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  },
  {
    name: 'Florida',
	population: '20.27M',
	// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
	flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  },
  {
    name: 'Texas',
    population: '27.47M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  }
];
  constructor() {
    this.stateCtrl = new FormControl();
     this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
}
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
`,
    viewCode: ``,
    isCodeVisible: false
};
const optionGroupsAutocomplete = {
    beforeCodeTitle: 'Option groups autocomplete',
    htmlCode: `<form [formGroup]="stateForm">
  <mat-form-field>
    <input type="text" matInput placeholder="States Group" formControlName="stateGroup" required [matAutocomplete]="autoGroup"/>
      <mat-autocomplete #autoGroup="matAutocomplete">
        <mat-optgroup *ngFor="let group of stateGroupOptions | async" [label]="group.letter">
          <mat-option *ngFor="let name of group.names" [value]="name">
            {{ name }}
          </mat-option>
        </mat-optgroup>
      </mat-autocomplete>
  </mat-form-field>
</form>  `,
    tsCode: `import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

/**
* @title Option groups autocomplete
*/
@Component({
  templateUrl: './autocomplete-optgroup-example.html',
  styleUrls: ['./autocomplete-optgroup-example.css'],
})

export class AutocompleteOptgroupExample implements OnInit {
  stateForm: FormGroup = this.fb.group({
  stateGroup: '',
});

stateGroups: StateGroup[] = [{
  letter: 'A',
  names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
}, {
  letter: 'C',
  names: ['California', 'Colorado', 'Connecticut']
}, {
  letter: 'D',
  names: ['Delaware']
}, {
  letter: 'F',
  names: ['Florida']
}, {
  letter: 'G',
  names: ['Georgia']
}, {
  letter: 'H',
  names: ['Hawaii']
}, {
  letter: 'I',
  names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
}, {
  letter: 'K',
  names: ['Kansas', 'Kentucky']
}, {
  letter: 'L',
  names: ['Louisiana']
}, {
  letter: 'M',
  names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana']
}, {
  letter: 'N',
  names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota']
}, {
  letter: 'O',
  names: ['Ohio', 'Oklahoma', 'Oregon']
}, {
  letter: 'P',
  names: ['Pennsylvania']
}, {
  letter: 'R',
  names: ['Rhode Island']
}, {
  letter: 'S',
  names: ['South Carolina', 'South Dakota']
}, {
  letter: 'T',
  names: ['Tennessee', 'Texas']
}, {
  letter: 'U',
  names: ['Utah']
}, {
  letter: 'V',
  names: ['Vermont', 'Virginia']
}, {
  letter: 'W',
  names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
}];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
          map(val => this.filterGroup(val))
       );
  }

  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.stateGroups
      .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
      .filter(group => group.names.length > 0);
    }

     return this.stateGroups;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
      return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
class User {
    constructor(name) {
        this.name = name;
    }
}
User.ctorParameters = () => [
    { type: String }
];
class State {
    constructor(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
}
State.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];
let AutocompleteComponent = class AutocompleteComponent {
    constructor(fb) {
        this.fb = fb;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.myControl33 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options33 = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
        this.myControl44 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options44 = ['One', 'Two', 'Three'];
        this.myControl3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [{
                letter: 'A',
                names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
            }, {
                letter: 'C',
                names: ['California', 'Colorado', 'Connecticut']
            }, {
                letter: 'D',
                names: ['Delaware']
            }, {
                letter: 'F',
                names: ['Florida']
            }, {
                letter: 'G',
                names: ['Georgia']
            }, {
                letter: 'H',
                names: ['Hawaii']
            }, {
                letter: 'I',
                names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
            }, {
                letter: 'K',
                names: ['Kansas', 'Kentucky']
            }, {
                letter: 'L',
                names: ['Louisiana']
            }, {
                letter: 'M',
                names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                    'Minnesota', 'Mississippi', 'Missouri', 'Montana']
            }, {
                letter: 'N',
                names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                    'New Mexico', 'New York', 'North Carolina', 'North Dakota']
            }, {
                letter: 'O',
                names: ['Ohio', 'Oklahoma', 'Oregon']
            }, {
                letter: 'P',
                names: ['Pennsylvania']
            }, {
                letter: 'R',
                names: ['Rhode Island']
            }, {
                letter: 'S',
                names: ['South Carolina', 'South Dakota']
            }, {
                letter: 'T',
                names: ['Tennessee', 'Texas']
            }, {
                letter: 'U',
                names: ['Utah']
            }, {
                letter: 'V',
                names: ['Vermont', 'Virginia']
            }, {
                letter: 'W',
                names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
            }];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(state => state ? this.filterStates(state) : this.states.slice()));
    }
    filterStates(name) {
        return this.states.filter(state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    ngOnInit() {
        this.exampleSimpleAutocomplete = simpleAutocomplete;
        this.exampleAddingACustomFilter = addingACustomFilter;
        this.exampleSettingSeparateControlAndDisplayValues = settingSeparateControlAndDisplayValues;
        this.exampleAutomaticallyHighlightingTheFirstOption = automaticallyHighlightingTheFirstOption;
        this.exampleAutocompleteOverview = autocompleteOverview;
        this.exampleOptionGroupsAutocomplete = optionGroupsAutocomplete;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => this.filter(val)));
        this.filteredOptions33 = this.myControl33.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => typeof value === 'string' ? value : value.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(name => name ? this.filter33(name) : this.options33.slice()));
        this.filteredOptions44 = this.myControl44.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => this.filter44(val)));
        // tslint:disable-next-line:no-non-null-assertion
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(val => this.filterGroup(val)));
    }
    filter33(name) {
        return this.options33.filter(option => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    filter44(val) {
        return this.options44.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    displayFn(user) {
        return user ? user.name : undefined;
    }
    filter(val) {
        return this.options.filter(option => option.toLowerCase().includes(val.toLowerCase()));
    }
    filterGroup(val) {
        if (val) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
    _filter(opt, val) {
        const filterValue = val.toLowerCase();
        return opt.filter(item => item.toLowerCase().startsWith(filterValue));
    }
};
AutocompleteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AutocompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-autocomplete',
        template: __webpack_require__(/*! raw-loader!./autocomplete.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t}\n\t"]
    })
], AutocompleteComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicCheckboxes = {
    beforeCodeTitle: 'Basic checkboxes',
    htmlCode: `<mat-checkbox>Check me!</mat-checkbox>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic checkboxes
*/
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const configurableCheckbox = {
    beforeCodeTitle: 'Configurable checkbox',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Checkbox configuration</h2>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>
    <section class="example-section">
      <label class="example-margin">Align:</label>
      <mat-radio-group [(ngModel)]="align">
        <mat-radio-button class="example-margin" value="start">Start</mat-radio-button>
        <mat-radio-button class="example-margin" value="end">End</mat-radio-button>
      </mat-radio-group>
	</section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
      <mat-checkbox
        class="example-margin"
        [(ngModel)]="checked"
        [(indeterminate)]="indeterminate"
        [align]="align"
        [disabled]="disabled">
        I'm a checkbox
      </mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
 * @title Configurable checkbox
 */
@Component({
  selector: 'checkbox-configurable-example',
  templateUrl: 'checkbox-configurable-example.html',
  styleUrls: ['checkbox-configurable-example.css'],
})
export class CheckboxConfigurableExample {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
}`,
    viewCode: ``,
    cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 0 10px;
}`,
    isCodeVisible: false
};
const labelPositions = {
    beforeCodeTitle: 'Label positions',
    htmlCode: `<mat-checkbox>Check me!</mat-checkbox>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'checkbox-label-positions-example',
  templateUrl: 'checkbox-label-positions-example.html',
  styleUrls: ['checkbox-label-positions-example.css'],
})
export class CheckboxLabelPositionsExample {\n
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: `
<mat-checkbox [(ngModel)]="myValue" (change)="changeValueEvent()">Check me!</mat-checkbox>\n
<div class="kt-separator kt-separator--dashed"></div>\n
<span>Checked: <mark>{{ myValue }}</mark></span>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'checkbox-change-event-example',
  templateUrl: 'checkbox-change-event-example.html',
  styleUrls: ['checkbox-change-event-example.css'],
})
export class CheckboxChangeEventExample {
  myValue: boolean = true;
  changeValueEvent() {
    console.log("myValue:", this.myValue);
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.align = 'start';
        this.disabled = false;
        this.labelPosition = 'before';
        this.myValue = true;
    }
    ngOnInit() {
        this.exampleBasicCheckboxes = basicCheckboxes;
        this.exampleConfigurableCheckbox = configurableCheckbox;
        this.exampleLabelPositions = labelPositions;
        this.exampleChangeEvent = changeEvent;
    }
    changeLablesPositions() {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    }
    changeValueEvent() {
        console.log('myValue:', this.myValue);
    }
};
CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-checkbox',
        template: __webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t\t.example-h2 {\n\t\t\tmargin: 10px;\n\t\t}\n\t\t.example-section {\n\t\t\tdisplay: flex;\n\t\t\talign-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 60px;\n\t\t}\n\t\t.example-margin {\n\t\t\tmargin: 0 10px;\n\t\t}\n\t"]
    })
], CheckboxComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);





// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

// tslint:disable-next-line:no-duplicate-imports

const basicDatepicker = {
    beforeCodeTitle: 'Basic datepicker',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
export class DatepickerOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const datepickerSelectedValue = {
    beforeCodeTitle: 'Datepicker selected value',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Checkbox configuration</h2>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
    </section>
    <section class="example-section">
      <label class="example-margin">Align:</label>
      <mat-radio-group [(ngModel)]="align">
        <mat-radio-button class="example-margin" value="start">Start</mat-radio-button>
          <mat-radio-button class="example-margin" value="end">End</mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
      <mat-checkbox
        class="example-margin"
        [(ngModel)]="checked"
        [(indeterminate)]="indeterminate"
        [align]="align"
        [disabled]="disabled">
        I'm a checkbox
      </mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value-example',
  templateUrl: 'datepicker-value-example.html',
  styleUrls: ['datepicker-value-example.css'],
})
export class DatepickerValueExample {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerStartDate = {
    beforeCodeTitle: 'Datepicker start date',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker start date */
@Component({
  selector: 'datepicker-start-view-example',
  templateUrl: 'datepicker-start-view-example.html',
  styleUrls: ['datepicker-start-view-example.css'],
})
export class DatepickerStartViewExample {
  startDate = new Date(1990, 0, 1);
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerWithMinMaxValidation = {
    beforeCodeTitle: 'Datepicker with min & max validation',
    htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker with min & max validation */
@Component({
  selector: 'datepicker-min-max-example',
  templateUrl: 'datepicker-min-max-example.html',
  styleUrls: ['datepicker-min-max-example.css'],
})
export class DatepickerMinMaxExample {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerWithFilterValidation = {
    beforeCodeTitle: 'Datepicker with filter validation',
    htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker with filter validation */
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: 'datepicker-filter-example.html',
  styleUrls: ['datepicker-filter-example.css'],
})
export class DatepickerFilterExample {
  myFilter = (d: Date): boolean => {
    const day = d.day();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerInputAndChangeEvents = {
    beforeCodeTitle: 'Datepicker input and change events',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Input & change events"
    (dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<div class="example-events">
  <div *ngFor="let e of events">{{e}}</div>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';\n
/** @title Datepicker input and change events */
@Component({
  selector: 'datepicker-events-example',
  templateUrl: 'datepicker-events-example.html',
  styleUrls: ['datepicker-events-example.css'],
})
export class DatepickerEventsExample {
  events: string[] = [];\n
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.events.push(\`$\{type\}: $\{event.value\}\`);
  }
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const disabledDatepicker = {
    beforeCodeTitle: 'Disabled datepicker',
    htmlCode: `
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp1" placeholder="Completely disabled" disabled>
    <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
    <mat-datepicker #dp1></mat-datepicker>
  </mat-form-field>
</p>
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp2" placeholder="Popup disabled">
    <mat-datepicker-toggle matSuffix [for]="dp2" disabled></mat-datepicker-toggle>
    <mat-datepicker #dp2></mat-datepicker>
  </mat-form-field>
</p>
<p>
  <mat-form-field>
    <input matInput [matDatepicker]="dp3" placeholder="Input disabled" disabled>
	<mat-datepicker-toggle matSuffix [for]="dp3">
  </mat-datepicker-toggle>
  <mat-datepicker #dp3 disabled="false"></mat-datepicker>
    </mat-form-field>
</p>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Disabled datepicker */
@Component({
  selector: 'datepicker-disabled-example',
  templateUrl: 'datepicker-disabled-example.html',
  styleUrls: ['datepicker-disabled-example.css'],
})
export class DatepickerDisabledExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerTouchUI = {
    beforeCodeTitle: 'Datepicker touch UI',
    htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker touchUi="true" #picker></mat-datepicker>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker touch UI */
@Component({
  selector: 'datepicker-touch-example',
  templateUrl: 'datepicker-touch-example.html',
  styleUrls: ['datepicker-touch-example.css'],
})
export class DatepickerTouchExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerOpenMethod = {
    beforeCodeTitle: 'Datepicker open method',
    htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open</button>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker open method */
@Component({
  selector: 'datepicker-api-example',
  templateUrl: 'datepicker-api-example.html',
  styleUrls: ['datepicker-api-example.css'],
})
export class DatepickerApiExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerWithDifferentLocale = {
    beforeCodeTitle: 'Datepicker with different locale',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Different locale">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>
<button mat-button (click)="french()">Dynamically switch to French</button>`,
    tsCode: `
import {Component} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrls: ['datepicker-locale-example.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},\n
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
	// here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerLocaleExample {
  constructor(private adapter: DateAdapter<any>) {}
  french() {
    this.adapter.setLocale('fr');
  }
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Moment.js datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;\n
/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
  providers: [
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerMomentExample {
// Datepicker takes \`Moment\` objects instead of \`Date\` objects.
  date = new FormControl(moment([2017, 0, 1]));
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerWithCustomFormats = {
    beforeCodeTitle: 'Datepicker with custom formats',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Verbose datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
/** @title Datepicker with custom formats */
@Component({
  selector: 'datepicker-formats-example',
  templateUrl: 'datepicker-formats-example.html',
  styleUrls: ['datepicker-formats-example.css'],
  providers: [
  // \`MomentDateAdapter\` can be automatically provided by importing \`MomentDateModule\` in your
  // application's root module. We provide it at the component level here, due to limitations of
  // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
	{provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DatepickerFormatsExample {
  date = new FormControl(moment());
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const usesMomentJsDates = {
    beforeCodeTitle: 'Datepicker uses Moment.js dates',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Moment.js datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
  providers: [
  // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
  // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
  // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerMomentExample {
  // Datepicker takes \`Moment\` objects instead of \`Date\` objects.
  date = new FormControl(moment([2017, 0, 1]));
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const moment = moment__WEBPACK_IMPORTED_MODULE_5___default.a || moment__WEBPACK_IMPORTED_MODULE_5__;
let DatepickerComponent = class DatepickerComponent {
    constructor() {
        this.startDate = new Date(1990, 0, 1);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.date10 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment([2017, 0, 1]));
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        this.minDate = new Date(2011, 0, 1);
        this.maxDate = new Date(2018, 11, 1);
        this.events = [];
        this.myFilter = (d) => {
            const day = d.day();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    ngOnInit() {
        this.exampleBasicDatepicker = basicDatepicker;
        this.exampleDatepickerStartDate = datepickerStartDate;
        this.exampleDatepickerSelectedValue = datepickerSelectedValue;
        this.exampleDatepickerWithMinMaxValidation = datepickerWithMinMaxValidation;
        this.exampleDatepickerWithFilterValidation = datepickerWithFilterValidation;
        this.exampleDatepickerInputAndChangeEvents = datepickerInputAndChangeEvents;
        this.exampleDisabledDatepicker = disabledDatepicker;
        this.exampleDatepickerTouchUI = datepickerTouchUI;
        this.exampleDatepickerOpenMethod = datepickerOpenMethod;
        this.exampleDatepickerWithDifferentLocale = datepickerWithDifferentLocale;
        this.exampleDatepickerThatUsesMomentJsDates = datepickerThatUsesMomentJsDates;
        this.exampleDatepickerWithCustomFormats = datepickerWithCustomFormats;
        this.exampleUsesMomentJsDates = usesMomentJsDates;
    }
    addEvent(type, event) {
        this.events.push(`${type}: ${event.value}`);
    }
};
DatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-datepicker',
        template: __webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        providers: [
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MAT_MOMENT_DATE_FORMATS"] },
        ],
        styles: ["\n\t.example-events {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tborder: 1px solid #555;\n\t\toverflow: auto;\n\t  }\n\t"]
    })
], DatepickerComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormfieldComponent", function() { return FormfieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const simpleFormField = {
    beforeCodeTitle: 'Simple form field',
    htmlCode: `
<div class="example-container">
  <mat-form-field>
     <input matInput placeholder="Input">
  </mat-form-field>

  <mat-form-field>
    <textarea matInput placeholder="Textarea"></textarea>
  </mat-form-field>

  <mat-form-field>
    <mat-select placeholder="Select">
      <mat-option value="option">Option</mat-option>
    </mat-select>
  </mat-form-field>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Simple form field */
=@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css']
})
export class FormFieldOverviewExample {}`,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const formFieldAppearanceVariants = {
    beforeCodeTitle: 'Form field appearance variants',
    htmlCode: `
<p>
  <mat-form-field appearance="legacy">
    <mat-label>Legacy form field</mat-label>
      <input matInput placeholder="Placeholder">
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="standard">
    <mat-label>Standard form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="fill">
    <mat-label>Fill form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
     <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
<p>
  <mat-form-field appearance="outline">
    <mat-label>Outline form field</mat-label>
    <input matInput placeholder="Placeholder">
    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    <mat-hint>Hint</mat-hint>
  </mat-form-field>
</p>
  `,
    tsCode: `
import {Component} from '@angular/core';\n

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  styleUrls: ['form-field-appearance-example.css'],
})
export class FormFieldAppearanceExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const formFieldWithLabel = {
    beforeCodeTitle: 'Form field with label',
    htmlCode: `
<div class="example-container">
  <form class="example-container" [formGroup]="options">
    <mat-checkbox formControlName="hideRequired">Hide required marker</mat-checkbox>
    <div>
      <label>Float label: </label>
      <mat-radio-group formControlName="floatLabel">
        <mat-radio-button value="auto">Auto</mat-radio-button>
        <mat-radio-button value="always">Always</mat-radio-button>
        <mat-radio-button value="never">Never</mat-radio-button>
      </mat-radio-group>
    </div>
  </form>
  <mat-form-field
    [hideRequiredMarker]="options.value.hideRequired"
    [floatLabel]="options.value.floatLabel">
    <input matInput placeholder="Simple placeholder" required>
  </mat-form-field>
  <mat-form-field [floatLabel]="options.value.floatLabel">
    <mat-label>Both a label and a placeholder</mat-label>
    <input matInput placeholder="Simple placeholder">
  </mat-form-field>
  <mat-form-field
    [hideRequiredMarker]="options.value.hideRequired"
    [floatLabel]="options.value.floatLabel">
    <mat-select required>
      <mat-option>-- None --</mat-option>
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-placeholder><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> placeholder</i></mat-placeholder>
  </mat-form-field>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrls: ['form-field-label-example.css']
})
export class FormFieldLabelExample {
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}`,
    viewCode: ``,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}
.example-container form {
  margin-bottom: 20px;
}
.example-container form > * {
  margin: 5px 0;
}
.example-container .mat-radio-button {
  margin: 0 5px;
}`,
    isCodeVisible: false
};
const formFieldWithHints = {
    beforeCodeTitle: 'Form field with hints',
    htmlCode: `
<div class="example-container">
  <mat-form-field hintLabel="Max 10 characters">
    <input matInput #input maxlength="10" placeholder="Enter some input">
    <mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
  </mat-form-field>
  <mat-form-field>
    <mat-select placeholder="Select me">
      <mat-option value="option">Option</mat-option>
    </mat-select>
    <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
  </mat-form-field>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Form field with hints */
@Component({
  selector: 'form-field-hint-example',
  templateUrl: 'form-field-hint-example.html',
  styleUrls: ['form-field-hint-example.css']
})
export class FormFieldHintExample {}`,
    viewCode: ``,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
    isCodeVisible: false
};
const formFieldWithErrorMessages = {
    beforeCodeTitle: 'Form field with error messages',
    htmlCode: `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your email" [formControl]="email" required>
      <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
  </mat-form-field>
</div>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: 'form-field-error-example.html',
  styleUrls: ['form-field-error-example.css']
})
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);\n
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
    '';
  }
}`,
    viewCode: ``,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
    isCodeVisible: false
};
const formFieldWithPrefixSuffix = {
    beforeCodeTitle: 'Form field with prefix & suffix',
    htmlCode: `
<div class="example-container">
  <mat-form-field>
    <input matInput placeholder="Enter your password" [type]="hide ? 'password' : 'text'">
    <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>
  </mat-form-field>
  <mat-form-field>
    <input matInput placeholder="Amount" type="number" class="example-right-align">
    <span matPrefix>$&nbsp;</span>
    <span matSuffix>.00</span>
  </mat-form-field>
</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Form field with prefix & suffix */
@Component({
  selector: 'form-field-prefix-suffix-example',
  templateUrl: 'form-field-prefix-suffix-example.html',
  styleUrls: ['form-field-prefix-suffix-example.css']
})
export class FormFieldPrefixSuffixExample {
  hide = true;
}`,
    viewCode: ``,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}
.example-right-align {
  text-align: right;
}
input.example-right-align::-webkit-outer-spin-button,
input.example-right-align::-webkit-inner-spin-button {
  display: none;
}
input.example-right-align {
  -moz-appearance: textfield;
}`,
    isCodeVisible: false
};
const formFieldTheming = {
    beforeCodeTitle: 'Form field theming',
    htmlCode: `
<form class="example-container" [formGroup]="options" [style.fontSize.px]="getFontSize()">
  <mat-form-field [color]="options.value.color">
    <mat-select placeholder="Color" formControlName="color">
      <mat-option value="primary">Primary</mat-option>
      <mat-option value="accent">Accent</mat-option>
      <mat-option value="warn">Warn</mat-option>
    </mat-select>
  </mat-form-field>
  <mat-form-field [color]="options.value.color">
    <input matInput type="number" placeholder="Font size (px)" formControlName="fontSize" min="10">
     <mat-error *ngIf="options.get('fontSize')?.invalid">Min size: 10px</mat-error>
  </mat-form-field>
 </form>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';\n
/** @title Form field theming */
@Component({
  selector: 'form-field-theming-example',
  templateUrl: 'form-field-theming-example.html',
  styleUrls: ['form-field-theming-example.css']
})
export class FormFieldThemingExample {
  options: FormGroup;\n
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'color': 'primary',
      'fontSize': [16, Validators.min(10)],
    });
  }
  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }
}`,
    viewCode: ``,
    cssCode: `
.example-container {
  display: flex;
  flex-direction: column;
}
.example-container > * {
  width: 100%;
}`,
    isCodeVisible: false
};
const formFieldWithCustomTelephoneNumberInputControl = {
    beforeCodeTitle: 'Form field with custom telephone number input control.',
    htmlCode: `
<div [formGroup]="parts">
  <input class="area" formControlName="area" size="3">
  <span>&ndash;</span>
  <input class="exchange" formControlName="exchange" size="3">
  <span>&ndash;</span>
  <input class="subscriber" formControlName="subscriber" size="4">
</div>`,
    tsCode: `
import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Component, ElementRef, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material';
import {Subject} from 'rxjs/Subject';\n
/** Data structure for holding telephone number. */
export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}
/** Custom \`MatFormFieldControl\` for telephone number input. */
@Component({
  selector: 'my-tel-input',
  templateUrl: 'form-field-custom-control-example.html',
  styleUrls: ['form-field-custom-control-example.css'],
  providers: [{provide: MatFormFieldControl, useExisting: MyTelInput}],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class MyTelInput implements MatFormFieldControl<MyTel>, OnDestroy {
  static nextId = 0;
  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'my-tel-input';
  get empty() {
    let n = this.parts.value;
    return !n.area && !n.exchange && !n.subscriber;
  }
  get shouldLabelFloat() { return this.focused || !this.empty; }
  id = \`my-tel-input-\${MyTelInput.nextId++}\`;
  describedBy = '';\n
  @Input()
  get placeholder() { return this._placeholder; }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }\n
  private _placeholder: string;
  @Input()
  get required() { return this._required; }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }\n
  private _required = false;\n
  @Input()
  get disabled() { return this._disabled; }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }\n
  private _disabled = false;\n
  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (n.area.length == 3 && n.exchange.length == 3 && n.subscriber.length == 4) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
    this.stateChanges.next();
  }\n
  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef) {
    this.parts = fb.group({
      'area': '',
      'exchange': '',
     'subscriber': '',
    });\n
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }\n
  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }\n
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }\n
  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }
}\n\n
/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'form-field-custom-control-example',
  template: \`
    <mat-form-field>
      <my-tel-input placeholder="Phone number" required></my-tel-input>
      <mat-icon matSuffix>phone</mat-icon>
      <mat-hint>Include area code</mat-hint>
    </mat-form-field>
  \`
})
export class FormFieldCustomControlExample {}`,
    viewCode: ``,
    cssCode: `
div {
  display: flex;
}\n
input {
  border: none;
  background: none;
  padding: 0;
  outline: none;
  font: inherit;
  text-align: center;
}\n
span {
  opacity: 0;
  transition: opacity 200ms;
}\n
:host.floating span {
  opacity: 1;
}`,
    isCodeVisible: false
};
let FormfieldComponent = class FormfieldComponent {
    constructor(fb) {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.hide = true;
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.options2 = fb.group({
            // tslint:disable-next-line:object-literal-key-quotes
            'color': 'primary',
            // tslint:disable-next-line:object-literal-key-quotes
            'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10)],
        });
    }
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }
    getFontSize() {
        return Math.max(10, this.options2.value.fontSize);
    }
    ngOnInit() {
        this.exampleSimpleFormField = simpleFormField;
        this.exampleFormFieldWithLabel = formFieldWithLabel;
        this.exampleFormFieldWithHints = formFieldWithHints;
        this.exampleFormFieldWithErrorMessages = formFieldWithErrorMessages;
        this.exampleFormFieldWithPrefixSuffix = formFieldWithPrefixSuffix;
        this.exampleFormFieldTheming = formFieldTheming;
        this.exampleFormFieldWithCustomTelephoneNumberInputControl = formFieldWithCustomTelephoneNumberInputControl;
        this.exampleFormFieldAppearanceVariants = formFieldAppearanceVariants;
    }
};
FormfieldComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
FormfieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-formfield',
        template: __webpack_require__(/*! raw-loader!./formfield.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-container > * {\n\t\twidth: 100%;\n\t  }\n\n\t  .example-container form {\n\t  \tmargin-bottom: 20px;\n  \t  }\n  \t  .example-container form > * {\n\t    margin: 5px 0;\n      }\n  \t  .example-container .mat-radio-button {\n\t    margin: 0 5px;\n\t  }\n\t  .example-right-align {\n\t\ttext-align: right;\n\t  }\n\t  input.example-right-align::-webkit-outer-spin-button,\n\t  input.example-right-align::-webkit-inner-spin-button {\n\t\tdisplay: none;\n\t  }\n\t  input.example-right-align {\n\t\t-moz-appearance: textfield;\n\t  }\n\t"]
    })
], FormfieldComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/input/input.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/input/input.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyErrorStateMatcher, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const basicInputs = {
    beforeCodeTitle: 'Basic Inputs',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Favorite food" value="Sushi">
  </mat-form-field>
  <mat-form-field class="example-full-width">
    <textarea matInput placeholder="Leave a comment"></textarea>
  </mat-form-field>
</form>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic Inputs
*/
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample {}`,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const inputWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Input with a custom ErrorStateMatcher',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Email" [formControl]="emailFormControl"
      [errorStateMatcher]="matcher">
    <mat-hint>Errors appear instantly!</mat-hint>
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
</form>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';\n
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'input-error-state-matcher-example',
  templateUrl: './input-error-state-matcher-example.html',
  styleUrls: ['./input-error-state-matcher-example.css'],
})
export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
  matcher = new MyErrorStateMatcher();
}`,
    viewCode: ``,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    isCodeVisible: false
};
const autoResizingTextarea = {
    beforeCodeTitle: 'Auto-resizing textarea',
    htmlCode: `
<mat-form-field>
  <textarea matInput placeholder="Autosize textarea" matTextareaAutosize matAutosizeMinRows="2"
    matAutosizeMaxRows="5"></textarea>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';'n
/** @title Auto-resizing textarea */
@Component({
  selector: 'input-autosize-textarea-example',
  templateUrl: './input-autosize-textarea-example.html',
  styleUrls: ['./input-autosize-textarea-example.css'],
})
export class InputAutosizeTextareaExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const inputWithAClearButton = {
    beforeCodeTitle: 'Input with a clear button',
    htmlCode: `
<mat-form-field class="example-form-field">
  <input matInput type="text" placeholder="Clearable input" [(ngModel)]="value"/>
  <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
    <mat-icon>close</mat-icon>
  </button>
 </mat-form-field>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Input with a clear button
*/
@Component({
  selector: 'input-clearable-example',
  templateUrl: './input-clearable-example.html',
  styleUrls: ['./input-clearable-example.css'],
})
export class InputClearableExample {
  value = 'Clear me';
}`,
    viewCode: ``,
    cssCode: `
.example-form-field {
  width: 200px;
}`,
    isCodeVisible: false
};
const inputWithErrorMessages = {
    beforeCodeTitle: 'Input with error messages',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Email" [formControl]="emailFormControl">
    <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
      Please enter a valid email address
    </mat-error>
    <mat-error *ngIf="emailFormControl.hasError('required')">
      Email is <strong>required</strong>
    </mat-error>
  </mat-form-field>
 </form>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/**
* @title Input with error messages
*/
@Component({
  selector: 'input-errors-example',
  templateUrl: 'input-errors-example.html',
  styleUrls: ['input-errors-example.css'],
})
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}`,
    viewCode: ``,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    isCodeVisible: false
};
const inputsInAForm = {
    beforeCodeTitle: 'Inputs in a form',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Google">
  </mat-form-field>
  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="First name">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="Long Last Name That Will Be Truncated">
    </mat-form-field></td>
  </tr></table>
  <p>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address 2"></textarea>
    </mat-form-field>
  </p>
  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="City">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="State">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
      <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
    </mat-form-field></td>
  </tr></table>
</form>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Inputs in a form
*/
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {}`,
    viewCode: ``,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    isCodeVisible: false
};
const inputWithHints = {
    beforeCodeTitle: 'Input with hints',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput #message maxlength="256" placeholder="Message">
    <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
    <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
  </mat-form-field>
</form>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Input with hints
*/
@Component({
  selector: 'input-hint-example',
  templateUrl: 'input-hint-example.html',
  styleUrls: ['input-hint-example.css'],
})
export class InputHintExample {}`,
    viewCode: ``,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    isCodeVisible: false
};
const inputsWithPrefixesAndSuffixes = {
    beforeCodeTitle: 'Inputs with prefixes and suffixes',
    htmlCode: `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <span matPrefix>+1 &nbsp;</span>
    <input type="tel" matInput placeholder="Telephone">
    <mat-icon matSuffix>mode_edit</mat-icon>
  </mat-form-field>
</form>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Inputs with prefixes and suffixes
*/
@Component({
  selector: 'input-prefix-suffix-example',
  templateUrl: 'input-prefix-suffix-example.html',
 styleUrls: ['input-prefix-suffix-example.css'],
})
export class InputPrefixSuffixExample {}`,
    viewCode: ``,
    cssCode: `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
    isCodeVisible: false
};
const datepickerOpenMethod = {
    beforeCodeTitle: 'Datepicker open method',
    htmlCode: `
<mat-form-field class="example-full-width">
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
    <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-raised-button (click)="picker.open()">Open</button>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Datepicker open method */
@Component({
  selector: 'datepicker-api-example',
  templateUrl: 'datepicker-api-example.html',
  styleUrls: ['datepicker-api-example.css'],
})
export class DatepickerApiExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const datepickerWithDifferentLocale = {
    beforeCodeTitle: 'Datepicker with different locale',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Different locale">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>
<button mat-button (click)="french()">Dynamically switch to French</button>`,
    tsCode: `
import {Component} from '@angular/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrls: ['datepicker-locale-example.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
	// here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerLocaleExample {
  constructor(private adapter: DateAdapter<any>) {}
  french() {
    this.adapter.setLocale('fr');
  }
}`,
    viewCode: ``,
    cssCode: `
		`,
    isCodeVisible: false
};
const datepickerThatUsesMomentJsDates = {
    beforeCodeTitle: 'Datepicker that uses Moment.js dates',
    htmlCode: `
<mat-form-field>
  <input matInput [matDatepicker]="dp" placeholder="Moment.js datepicker" [formControl]="date">
  <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
  <mat-datepicker #dp></mat-datepicker>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';\n
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the \`* as\`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the \`default as\` syntax.
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
const moment = _rollupMoment || _moment;\n
/** @title Datepicker that uses Moment.js dates */
@Component({
  selector: 'datepicker-moment-example',
  templateUrl: 'datepicker-moment-example.html',
  styleUrls: ['datepicker-moment-example.css'],
  providers: [
    // \`MomentDateAdapter\` and \`MAT_MOMENT_DATE_FORMATS\` can be automatically provided by importing
    // \`MatMomentDateModule\` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DatepickerMomentExample {
// Datepicker takes \`Moment\` objects instead of \`Date\` objects.
  date = new FormControl(moment([2017, 0, 1]));
}`,
    viewCode: ``,
    cssCode: `
		`,
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let InputComponent = class InputComponent {
    constructor() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.emailFormControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.value = 'Clear me';
    }
    ngOnInit() {
        this.exampleBasicInputs = basicInputs;
        this.exampleInputWithACustomErrorStateMatcher = inputWithACustomErrorStateMatcher;
        this.exampleAutoResizingTextarea = autoResizingTextarea;
        this.exampleInputWithAClearButton = inputWithAClearButton;
        this.exampleInputWithErrorMessages = inputWithErrorMessages;
        this.exampleInputsInAForm = inputsInAForm;
        this.exampleInputWithHints = inputWithHints;
        this.exampleInputsWithPrefixesAndSuffixes = inputsWithPrefixesAndSuffixes;
    }
};
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/input/input.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-form {\n\t\tmin-width: 150px;\n\t\tmax-width: 500px;\n\t\twidth: 100%;\n\t  }\n\t  .example-full-width {\n\t\twidth: 100%;\n\t  }\n\t  .example-form-field {\n\t\twidth: 200px;\n\t  }\n\t"]
    })
], InputComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicRadios = {
    beforeCodeTitle: 'Basic radios',
    htmlCode: `
<mat-radio-group>
  <mat-radio-button value="1">Option 1</mat-radio-button>
  <mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic radios
*/
@Component({
  selector: 'radio-overview-example',
  templateUrl: 'radio-overview-example.html',
 styleUrls: ['radio-overview-example.css'],
})
export class RadioOverviewExample {}`,
    cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const radiosWithNgModel = {
    beforeCodeTitle: 'Radios with ngModel',
    htmlCode: `
<mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
  <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
    {{season}}
  </mat-radio-button>
</mat-radio-group>
<div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Radios with ngModel
*/
@Component({
  selector: 'radio-ng-model-example',
  templateUrl: 'radio-ng-model-example.html',
  styleUrls: ['radio-ng-model-example.css'],
})
export class RadioNgModelExample {
  favoriteSeason: string;\n
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}`,
    viewCode: ``,
    cssCode: `
.example-radio-group {
  display: inline-flex;
  flex-direction: column;
}
.example-radio-button {
  margin: 5px;
}
.example-selected-value {
  margin: 15px 0;
}
		`,
    isCodeVisible: false
};
const disabledRadios = {
    beforeCodeTitle: 'Disabled radios',
    htmlCode: `
<mat-radio-group disabled="true">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'radio-disabled-example',
  templateUrl: 'radio-disabled-example.html',
 styleUrls: ['radio-disabled-example.css'],
})
export class RadioDisabledExample {}`,
    cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const labelPosition = {
    beforeCodeTitle: 'Label position',
    htmlCode: `
<mat-radio-group [labelPosition]="labelPosition">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>
<div class="kt-separator kt-separator--dashed"></div>
<mat-slide-toggle (change)="changeLablesPositions()">Slide labels position</mat-slide-toggle>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'radio-label-position-example',
  templateUrl: 'radio-lablel-position.html',
 styleUrls: ['radio-label-position-example.css'],
})
export class RadioLabelPositionExample {
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
    cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: `
<mat-radio-group (change)="changeState()" [(ngModel)]="selectedState">
  <mat-radio-button  value="Alabama">Alabama</mat-radio-button>
  <mat-radio-button  value="Alaska">Alaska</mat-radio-button>
  <mat-radio-button  value="Florida">Florida</mat-radio-button>
  <mat-radio-button  value="Illinois">Illinois</mat-radio-button>
  <mat-radio-button  value="Kansas">Kansas</mat-radio-button>
</mat-radio-group>
<div class="kt-separator kt-separator--dashed" *ngIf="state"></div>
<span *ngIf="state">Welcome to <mark>{{ state }}</mark>!</span>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
selector: 'radio-change-event-example',
templateUrl: 'radio-change-event.html',
styleUrls: ['radio-change-event-example.css'],
})
export class RadioChangeEventExample {
  state: string = "";
  selectedState: string = "";

  changeState() {
    this.state = this.selectedState;
  }
}`,
    cssCode: `
.mat-radio-button ~ .mat-radio-button {
  padding-right: 16px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
let RadiobuttonComponent = class RadiobuttonComponent {
    constructor() {
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
        this.state = '';
        this.selectedState = '';
        this.labelPosition = 'before';
    }
    changeLablesPositions() {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    }
    ngOnInit() {
        this.exampleBasicRadios = basicRadios;
        this.exampleRadiosWithNgModel = radiosWithNgModel;
        this.exampleDisabledRadios = disabledRadios;
        this.exmapleLabelPosition = labelPosition;
        this.exampleChangeEvent = changeEvent;
    }
    changeState() {
        this.state = this.selectedState;
    }
};
RadiobuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-radiobutton',
        template: __webpack_require__(/*! raw-loader!./radiobutton.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\tmat-radio-button {\n\t\tpadding-right: 16px;\n\t}\n\t.example-radio-group {\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t  }\n\t  .example-radio-button {\n\t\tmargin: 15px;\n\t  }\n\t.example-selected-value {\n\t\tmargin: 15px 0;\n\t}\n\t"]
    })
], RadiobuttonComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/select/select.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/select/select.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MyErrorStateMatcher, SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const basicSelect = {
    beforeCodeTitle: 'Basic select',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Favorite food">
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{ food.viewValue }}
    </mat-option>
  </mat-select>
</mat-form-field>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic select
*/
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const selectWith2WayValueBinding = {
    beforeCodeTitle: 'Select with 2-way value binding',
    htmlCode: `
<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
<p>You selected: {{selected}}</p>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  styleUrls: ['select-value-binding-example.css'],
})
export class SelectValueBindingExample {
  selected = 'option2';
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectInAForm = {
    beforeCodeTitle: 'Select in a form',
    htmlCode: `
<form>
  <mat-form-field>
    <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">
      <mat-option *ngFor="let food of foods" [value]="food.value">
        {{food.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>
	<p> Selected value: {{selectedValue}} </p>
</form>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Select in a form
*/
@Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
  styleUrls: ['select-form-example.css'],
})
export class SelectFormExample {
 selectedValue: string;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithFormFieldFeature = {
    beforeCodeTitle: 'Select with form field features',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
    <mat-option>--</mat-option>
    <mat-option *ngFor="let animal of animals" [value]="animal">
      {{animal.name}}
	</mat-option>
  </mat-select>
  <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
  <mat-hint>{{animalControl.value?.sound}}</mat-hint>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/** @title Select with form field features */
@Component({
  selector: 'select-hint-error-example',
  templateUrl: 'select-hint-error-example.html',
  styleUrls: ['select-hint-error-example.css'],
})
export class SelectHintErrorExample {
  animalControl = new FormControl('', [Validators.required]);
  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithResetOption = {
    beforeCodeTitle: 'Select with reset option',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="State">
    <mat-option>None</mat-option>
    <mat-option *ngFor="let state of states" [value]="state">{{state}}</mat-option>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with reset option */
@Component({
  selector: 'select-reset-example',
  templateUrl: 'select-reset-example.html',
  styleUrls: ['select-reset-example.css'],
})
export class SelectResetExample {
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
}
`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithOptionGroups = {
    beforeCodeTitle: 'Select with option groups',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Pokemon" [formControl]="pokemonControl">
    <mat-option>-- None --</mat-option>
    <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
      [disabled]="group.disabled">
      <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
         {{ pokemon.viewValue }}
        </mat-option>
    </mat-optgroup>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with option groups */
@Component({
  selector: 'select-optgroup-example',
  templateUrl: 'select-optgroup-example.html',
  styleUrls: ['select-optgroup-example.css'],
})
export class SelectOptgroupExample {
  pokemonControl = new FormControl();
  pokemonGroups = [
  {
    name: 'Grass',
    pokemon: [
    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
    { value: 'oddish-1', viewValue: 'Oddish' },
    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
  ]
  },
  {
    name: 'Water',
    pokemon: [
    { value: 'squirtle-3', viewValue: 'Squirtle' },
    { value: 'psyduck-4', viewValue: 'Psyduck' },
    { value: 'horsea-5', viewValue: 'Horsea' }
  ]
  },
  {
    name: 'Fire',
    disabled: true,
    pokemon: [
    { value: 'charmander-6', viewValue: 'Charmander' },
    { value: 'vulpix-7', viewValue: 'Vulpix' },
    { value: 'flareon-8', viewValue: 'Flareon' }
  ]
  },
  {
    name: 'Psychic',
    pokemon: [
    { value: 'mew-9', viewValue: 'Mew' },
    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
  ]
  }
  ];
}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithMultipleSelection = {
    beforeCodeTitle: 'Select with multiple selection',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
		`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithCustomTriggerText = {
    beforeCodeTitle: 'Select with custom trigger text',
    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-select-trigger>
      {{toppings.value ? toppings.value[0] : ''}}
      <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">
        (+{{toppings.value.length - 1}} others)
       </span>
    </mat-select-trigger>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}`,
    viewCode: ``,
    cssCode: `
.example-additional-selection {
  opacity: 0.75;
  font-size: 0.75em;
}`,
    isCodeVisible: false
};
const selectWithNoOptionRipple = {
    beforeCodeTitle: 'Select with no option ripple',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Select an option" disableRipple>
    <mat-option value="1">Option 1</mat-option>
    <mat-option value="2">Option 2</mat-option>
    <mat-option value="3">Option 3</mat-option>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with no option ripple */
@Component({
  selector: 'select-no-ripple-example',
  templateUrl: 'select-no-ripple-example.html',
  styleUrls: ['select-no-ripple-example.css'],
})
export class SelectNoRippleExample {}`,
    viewCode: ``,
    cssCode: ``,
    isCodeVisible: false
};
const selectWithCustomPanelStyling = {
    beforeCodeTitle: 'Select with custom panel styling',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Panel color" [formControl]="panelColor"
    panelClass="example-panel-{{panelColor.value}}">
    <mat-option value="red">Red</mat-option>
    <mat-option value="green">Green</mat-option>
    <mat-option value="blue">Blue</mat-option>
  </mat-select>
</mat-form-field>`,
    tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/**
* @title Select with custom panel styling
*/
@Component({
  selector: 'select-panel-class-example',
  templateUrl: 'select-panel-class-example.html',
  styleUrls: ['select-panel-class-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectPanelClassExample {
  panelColor = new FormControl('red');
}`,
    viewCode: ``,
    cssCode: `
.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}
.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}
.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`,
    isCodeVisible: false
};
const selectWithACustomErrorStateMatcher = {
    beforeCodeTitle: 'Select with a custom ErrorStateMatcher',
    htmlCode: `
<mat-form-field>
  <mat-select placeholder="Choose one" [formControl]="selected" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  <mat-error *ngIf="selected.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="selected.hasError('pattern') && !selected.hasError('required')">
    Your selection is invalid
  </mat-error>
</mat-form-field>
	  	`,
    tsCode: `
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';\n
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}\n
/** @title Select with a custom ErrorStateMatcher */
@Component({
  selector: 'select-error-state-matcher-example',
  templateUrl: 'select-error-state-matcher-example.html',
  styleUrls: ['select-error-state-matcher-example.css'],
})
export class SelectErrorStateMatcherExample {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);\n
  matcher = new MyErrorStateMatcher();
}`,
    viewCode: ``,
    cssCode: `
		`,
    isCodeVisible: false
};
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let SelectComponent = class SelectComponent {
    constructor() {
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppings2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('red');
        this.toppingList2 = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
        this.selected = 'option2';
        this.pokemonControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
        this.animalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
        this.selected2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('valid', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.exampleBasicSelect = basicSelect;
        this.exampleSelectWith2WayValueBinding = selectWith2WayValueBinding;
        this.exampleSelectInAForm = selectInAForm;
        this.exampleSelectWithFormFieldFeature = selectWithFormFieldFeature;
        this.exampleSelectWithResetOption = selectWithResetOption;
        this.exampleSelectWithOptionGroups = selectWithOptionGroups;
        this.exampleSelectWithMultipleSelection = selectWithMultipleSelection;
        this.exampleSelectWithCustomTriggerText = selectWithCustomTriggerText;
        this.exampleSelectWithCustomPanelStyling = selectWithCustomPanelStyling;
        this.exampleSelectWithACustomErrorStateMatcher = selectWithACustomErrorStateMatcher;
    }
};
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-select',
        template: __webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/select/select.component.html"),
        styles: ["\n\t.example-additional-selection {\n\t\topacity: 0.75;\n\t\tfont-size: 0.75em;\n\t  }\n\t  .example-panel-red .mat-select-content {\n\t\tbackground: rgba(255, 0, 0, 0.5);\n\t  }\n\t  .example-panel-green .mat-select-content {\n\t\tbackground: rgba(0, 255, 0, 0.5);\n\t  }\n\t  .example-panel-blue .mat-select-content {\n\t\tbackground: rgba(0, 0, 255, 0.5);\n\t  }\n\t"]
    })
], SelectComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/slider/slider.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/slider/slider.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicSlider = {
    beforeCodeTitle: 'Basic slider',
    htmlCode: `<mat-slider></mat-slider>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
 * @title Basic slider
 */
@Component({
  selector: 'slider-overview-example',
  templateUrl: 'slider-overview-example.html',
  styleUrls: ['slider-overview-example.css'],
})
export class SliderOverviewExample {}
		`,
    cssCode: `
/** No CSS for this example */
.mat-slider {
  width: 300px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
const configurableSlider = {
    beforeCodeTitle: 'Configurable slider',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>
    <section class="example-section">
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Value" [(ngModel)]="value">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Min value" [(ngModel)]="min">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Max value" [(ngModel)]="max">
      </mat-form-field>
      <mat-form-field class="example-margin">
        <input matInput type="number" placeholder="Step size" [(ngModel)]="step">
      </mat-form-field>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="showTicks">Show ticks</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="autoTicks" *ngIf="showTicks">
        Auto ticks
      </mat-checkbox>
      <mat-form-field class="example-margin" *ngIf="showTicks && !autoTicks">
        <input matInput type="number" placeholder="Tick interval" [(ngModel)]="tickInterval">
      </mat-form-field>
     </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="thumbLabel">Show thumb label</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="vertical">Vertical</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="invert">Inverted</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <mat-slider
      class="example-margin"
      [disabled]="disabled"
      [invert]="invert"
      [max]="max"
      [min]="min"
      [step]="step"
      [thumb-label]="thumbLabel"
      [tick-interval]="tickInterval"
      [(ngModel)]="value"
      [vertical]="vertical">
    </mat-slider>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';\n
/**
* @title Configurable slider
*/
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.html',
  styleUrls: ['slider-configurable-example.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SliderConfigurableExample {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;\n
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
}`,
    viewCode: ``,
    cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 10px;
}
.mat-slider-horizontal {
  width: 300px;
}
.mat-slider-vertical {
  height: 300px;
}`,
    isCodeVisible: false
};
const changeEvent = {
    beforeCodeTitle: 'Change event binding',
    htmlCode: `
<mat-slider (change)="changeSlider()" [(ngModel)]="myValue" min="0" max="100" step="1"></mat-slider>
<div class="kt-separator kt-separator--dashed" *ngIf="myValue"></div>
<span *ngIf="myValue">Selected: <mark>{{ myValue }}</mark>%</span>
`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'slider-change-event-example',
  templateUrl: 'slider-change-event-example.html',
  styleUrls: ['slider-change-event-example.css'],
})
export class SliderChangeEventExample {\n
  myValue = 50;
  changeSlider() {
    console.log('myValue:', this.myValue);
  }
}`,
    cssCode: `
.mat-slider {
  width: 300px;
}`,
    viewCode: ``,
    isCodeVisible: false
};
let SliderComponent = class SliderComponent {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
        this.myValue = 50;
    }
    get tickInterval() {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
    ngOnInit() {
        this.exampleBasicSlider = basicSlider;
        this.exampleConfigurableSlider = configurableSlider;
        this.exampleChangeEvent = changeEvent;
    }
    changeSlider() {
        console.log('myValue', this.myValue);
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/slider/slider.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        preserveWhitespaces: false,
        styles: ["\n\t.mat-slider {\n\t\twidth: 300px;\n\t}\n\t.example-margin {\n\t\t  margin: 15px;\n\t  }\n\t"]
    })
], SliderComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: SlidertoggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidertoggleComponent", function() { return SlidertoggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicSlideToggles = {
    beforeCodeTitle: 'Basic slide-toggles',
    htmlCode: `<mat-slide-toggle>Slide me!</mat-slide-toggle>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic slide-toggles
*/
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideToggleOverviewExample {}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const configurableSlideToggle = {
    beforeCodeTitle: 'Configurable slide-toggle',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Slider configuration</h2>
    <section class="example-section">
      <label class="example-margin">Color:</label>
      <mat-radio-group [(ngModel)]="color">
        <mat-radio-button class="example-margin" value="primary">
          Primary
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="accent">
          Accent
        </mat-radio-button>
        <mat-radio-button class="example-margin" value="warn">
          Warn
        </mat-radio-button>
      </mat-radio-group>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
    </section>
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
    </section>
  </mat-card-content>
</mat-card>
<mat-card class="result">
  <mat-card-content>
    <h2 class="example-h2">Result</h2>
    <section class="example-section">
      <mat-slide-toggle
        class="example-margin"
        [color]="color"
        [checked]="checked"
        [disabled]="disabled">
        Slide me!
      </mat-slide-toggle>
    </section>
  </mat-card-content>
</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Configurable slide-toggle
*/
@Component({
  selector: 'slide-toggle-configurable-example',
  templateUrl: 'slide-toggle-configurable-example.html',
  styleUrls: ['slide-toggle-configurable-example.css'],
})
export class SlideToggleConfigurableExample {
  color = 'accent';
  checked = false;
  disabled = false;
}
		`,
    viewCode: ``,
    cssCode: `
.example-h2 {
  margin: 10px;
}
.example-section {
  display: flex;
  align-content: center;
  align-items: center;
  height: 60px;
}
.example-margin {
  margin: 10px;
}
		`,
    isCodeVisible: false
};
const labelPositions = {
    beforeCodeTitle: 'Label positions and \'Change\' event binding examples',
    htmlCode: `
<mat-slide-toggle [labelPosition]="labelPosition">Slide me!</mat-slide-toggle>
<div class="kt-separator kt-separator--dashed"></div>
<mat-slide-toggle (change)="changeLablesPositions()">Slide labels position</mat-slide-toggle>`,
    tsCode: `
import {Component} from '@angular/core';\n
@Component({
  selector: 'slide-toggle-label-positions-example',
  templateUrl: 'slide-toggle-lable-positions-example.html',
  styleUrls: ['slide-toggle-label-positions--example.css'],
})
export class SlideToggleLabelPositionsExample {\n
  labelPosition: string = "before";\n
  changeLablesPositions() {
    this.labelPosition = this.labelPosition == "before" ? "after" : "before";
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
let SlidertoggleComponent = class SlidertoggleComponent {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
        this.labelPosition = 'before';
    }
    ngOnInit() {
        this.exampleBasicSlideToggles = basicSlideToggles;
        this.exampleConfigurableSlideToggle = configurableSlideToggle;
        this.exampleLabelPositions = labelPositions;
    }
    changeLablesPositions() {
        this.labelPosition = this.labelPosition === 'before' ? 'after' : 'before';
    }
};
SlidertoggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-slidertoggle',
        template: __webpack_require__(/*! raw-loader!./slidertoggle.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-h2 {\n\t\tmargin: 10px;\n\t  }\n\t  .example-section {\n\t\tdisplay: flex;\n\t\talign-content: center;\n\t\talign-items: center;\n\t\theight: 60px;\n\t  }\n\t  .example-margin {\n\t\tmargin: 10px;\n\t  }\n\t"]
    })
], SlidertoggleComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/card/card.component.ts":
/*!*************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/card/card.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicCards = {
    beforeCodeTitle: 'Basic cards',
    htmlCode: `<mat-card>Simple card</mat-card>`,
    tsCode: `
import {Component} from '@angular/core';
/**
* @title Basic cards
*/
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
  styleUrls: ['card-overview-example.css'],
})
export class CardOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const cardWithTitle = {
    beforeCodeTitle: 'Card header',
    htmlCode: `
<mat-toolbar>
  <mat-toolbar-row>
    <span>First Row</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Row</span>
  </mat-toolbar-row>
</mat-toolbar>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Card with title
*/
@Component({
selector: 'card-title-example',
templateUrl: 'card-title-example.html',
styleUrls: ['card-title-example.css'],
})
export class CardTitleExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const bigExample = {
    beforeCodeTitle: 'Example with image',
    htmlCode: `
<mat-card class="example-card">
  <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Shiba Inu</mat-card-title>
    <mat-card-subtitle>Dog Breed</mat-card-subtitle>
  </mat-card-header>
  <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
  <mat-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
  </p>
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>LIKE</button>
    <button mat-button>SHARE</button>
  </mat-card-actions>
</mat-card>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Card with iamge
*/
@Component({
selector: 'card-image-example',
templateUrl: 'card-image-example.html',
styleUrls: ['card-image-example.css'],
})
export class CardImageExample {}
`,
    cssCode: `
.example-card {
  max-width: 400px;
}
.example-header-image {
  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
  background-size: cover;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let CardComponent = class CardComponent {
    ngOnInit() {
        this.exampleBasicCards = basicCards;
        this.exampleCardWithTitle = cardWithTitle;
        this.examplBigExample = bigExample;
    }
};
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-card',
        template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/card/card.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-card {\n\t\tmax-width: 400px;\n\t  }\n\t.example-header-image {\n\t\tbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n\t\tbackground-size: cover;\n\t  }\n\t"]
    })
], CardComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/default-forms/default-forms.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/default-forms/default-forms.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: State, DefaultFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFormsComponent", function() { return DefaultFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../popups-and-modals/snackbar/pizza-party.component */ "./src/metronic/views/pages/material/popups-and-modals/snackbar/pizza-party.component.ts");







class State {
    constructor(name, population, flag) {
        this.name = name;
        this.population = population;
        this.flag = flag;
    }
}
State.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String }
];
let DefaultFormsComponent = class DefaultFormsComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
            }
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.isHuman = true;
        this.isHuman2 = true;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.fruits = [
            { name: 'Pizza' },
            { name: 'Steak' },
            { name: 'Tacos' },
        ];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(state => state ? this.filterStates(state) : this.states.slice()));
    }
    ngOnInit() { }
    onChange(value) {
        this.isHuman = value.checked === true;
    }
    onChange2(value) {
        this.isHuman2 = value.checked === true;
    }
    filterStates(name) {
        return this.states.filter(state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    }
    openSnackBar() {
        this.snackBar.openFromComponent(_popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_6__["PizzaPartyComponent"], {
            duration: 500,
        });
    }
};
DefaultFormsComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
DefaultFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-default-forms',
        template: __webpack_require__(/*! raw-loader!./default-forms.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/default-forms/default-forms.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.example-full-width {\n\t\twidth: 100%;\n\t  }\n\n\t .kt-checkbox-inline > mat-checkbox {\n\t\t padding-right: 20px;\n\t }\n\t"]
    })
], DefaultFormsComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/divider/divider.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/divider/divider.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DividerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DividerComponent", function() { return DividerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicDivider = {
    beforeCodeTitle: 'Basic divider',
    htmlCode: `
		<mat-list>
		<mat-list-item>Item 1</mat-list-item>
		<mat-divider></mat-divider>
		<mat-list-item>Item 2</mat-list-item>
		<mat-divider></mat-divider>
		<mat-list-item>Item 3</mat-list-item>
	  </mat-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic divider
*/
@Component({
  selector: 'divider-overview-example',
  templateUrl: 'divider-overview-example.html',
  styleUrls: ['divider-overview-example.css'],
})
export class DividerOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const verticalDivider = {
    beforeCodeTitle: 'Vertical divider',
    htmlCode: `
<mat-divider [vertical]="true"></mat-divider>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title vertical divider
*/
@Component({
  selector: 'divider-vertical-example',
  templateUrl: 'divider-vertical-example.html',
  styleUrls: ['divider-vertical-example.css'],
})
export class DividerVerticalExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const listExample = {
    beforeCodeTitle: 'Lists with inset dividers',
    htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders; last as last">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{folder.name}}</h4>
    <p mat-line class="demo-2"> {{folder.updated}} </p>
    <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 md-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon md-list-icon>note</mat-icon>
    <h4 md-line>{{note.name}}</h4>
    <p md-line class="demo-2"> {{note.updated}} </p>
  </mat-list-item>
</mat-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title list divider
*/
@Component({
  selector: 'divider-list-example',
  templateUrl: 'divider-list-example.html',
  styleUrls: ['divider-list-example.css'],
})
export class DividerListExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let DividerComponent = class DividerComponent {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    ngOnInit() {
        this.exampleBasicDivider = basicDivider;
        this.exampleVertical = verticalDivider;
        this.exampleList = listExample;
    }
};
DividerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-divider',
        template: __webpack_require__(/*! raw-loader!./divider.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/divider/divider.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t  .mat-toolbar > * + .mat-divider-vertical {\n\t\tmargin-right: 16px;\n\t}\n\t.mat-toolbar > .mat-divider-vertical + * {\n\t\tmargin-right: 24px;\n\t\tmargin-left: -1px;\n\t}\n\t"]
    })
], DividerComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicPanel = {
    beforeCodeTitle: 'Basic expansion panel',
    htmlCode: `
<mat-accordion>
  <mat-expansion-panel>
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
	  <mat-panel-description>
        Type your name and age
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>
    <mat-form-field>
      <input matInput placeholder="Age">
    </mat-form-field>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true"
    (closed)="panelOpenState = false">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Self aware panel
      </mat-panel-title>
      <mat-panel-description>
        Currently I am {{panelOpenState ? 'open' : 'closed'}}
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>I'm visible because I am open</p>
  </mat-expansion-panel>
</mat-accordion>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic expansion panel
*/
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState: boolean = false;
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const disabledPanel = {
    beforeCodeTitle: 'Disabling a panel',
    htmlCode: `
<mat-expansion-panel [disabled]="isDisabled">
  <mat-expansion-panel-header>
	This is the expansion title
  </mat-expansion-panel-header>
  <mat-panel-description>
    This is a summary of the content
  </mat-panel-description>
</mat-expansion-panel>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Disabled expansion panel
*/
@Component({
  selector: 'expansion-disabled-example',
  templateUrl: 'expansion-disabled-example.html',
  styleUrls: ['expansion-disabled-example.css'],
})
export class ExpansionDisabledExample {
  isDisabled: boolean = true;
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const accordion = {
    beforeCodeTitle: 'Expansion panel as accordion',
    htmlCode: `
<mat-accordion class="example-headers-align">
  <mat-expansion-panel [expanded]="step === 0" (opened)="setStep(0)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Personal data
      </mat-panel-title>
	  <mat-panel-description>
		Type your name and age
        <mat-icon>account_circle</mat-icon>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="First name">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="number" min="1" placeholder="Age">
    </mat-form-field>
    <mat-action-row>
      <button mat-button color="primary" (click)="nextStep()">Next</button>
    </mat-action-row>
  </mat-expansion-panel>
  <mat-expansion-panel [expanded]="step === 1" (opened)="setStep(1)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Destination
      </mat-panel-title>
      <mat-panel-description>
        Type the country name
        <mat-icon>map</mat-icon>
      </mat-panel-description>
    </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="Country">
    </mat-form-field>
    <mat-action-row>
      <button mat-button color="warn" (click)="prevStep()">Previous</button>
      <button mat-button color="primary" (click)="nextStep()">Next</button>
    </mat-action-row>
   </mat-expansion-panel>
  <mat-expansion-panel [expanded]="step === 2" (opened)="setStep(2)" hideToggle="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Day of the trip
	  </mat-panel-title>
      <mat-panel-description>
        Inform the date you wish to travel
        <mat-icon>date_range</mat-icon>
      </mat-panel-description>
     </mat-expansion-panel-header>
    <mat-form-field>
      <input matInput placeholder="Date" [matDatepicker]="picker" (focus)="picker.open()" readonly>
    </mat-form-field>
    <mat-datepicker #picker></mat-datepicker>
    <mat-action-row>
      <button mat-button color="warn" (click)="prevStep()">Previous</button>
      <button mat-button color="primary" (click)="nextStep()">End</button>
    </mat-action-row>
  </mat-expansion-panel>
</mat-accordion>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Expansion panel as accordion
*/
@Component({
  selector: 'expansion-steps-example',
  templateUrl: 'expansion-steps-example.html',
  styleUrls: ['expansion-steps-example.css']
})
export class ExpansionStepsExample {
  step = 0;\n
  setStep(index: number) {
    this.step = index;
  }\n
  nextStep() {
    this.step++;
   }\n
  prevStep() {
    this.step--;
  }
}
`,
    cssCode: `
.example-headers-align .mat-expansion-panel-header-title,
.example-headers-align .mat-expansion-panel-header-description {
  flex-basis: 0;
}\n
.example-headers-align .mat-expansion-panel-header-description {
  justify-content: space-between;
  align-items: center;
}
`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ExpansionPanelComponent = class ExpansionPanelComponent {
    constructor() {
        this.panelOpenState = false;
        this.isDisabled = true;
        this.step = 0;
    }
    ngOnInit() {
        this.exampleBasicPanel = basicPanel;
        this.exampleDisabledPanel = disabledPanel;
        this.exampleAccordion = accordion;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
ExpansionPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-expansion-panel',
        template: __webpack_require__(/*! raw-loader!./expansion-panel.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\t"]
    })
], ExpansionPanelComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/grid-list/grid-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/grid-list/grid-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GridListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListComponent", function() { return GridListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const dynamicGrid = {
    beforeCodeTitle: 'Dynamic grid-list',
    htmlCode: `
<mat-grid-list cols="4" rowHeight="100px">
<mat-grid-tile
*ngFor="let tile of tiles"
[colspan]="tile.cols"
[rowspan]="tile.rows"
[style.background]="tile.color">
{{tile.text}}
</mat-grid-tile>
</mat-grid-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Dynamic grid-list
*/
@Component({
selector: 'grid-list-dynamic-example',
templateUrl: 'grid-list-dynamic-example.html',
styleUrls: ['grid-list-dynamic-example.css'],
})
export class GridListDynamicExample {
tiles = [
{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const basicGrid = {
    beforeCodeTitle: 'Basic grid-list',
    htmlCode: `
<mat-grid-list cols="2" rowHeight="2:1">
<mat-grid-tile>1</mat-grid-tile>
<mat-grid-tile>2</mat-grid-tile>
<mat-grid-tile>3</mat-grid-tile>
<mat-grid-tile>4</mat-grid-tile>
</mat-grid-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic grid-list
*/
@Component({
selector: 'grid-list-overview-example',
styleUrls: ['grid-list-overview-example.css'],
templateUrl: 'grid-list-overview-example.html',
})
export class GridListOverviewExample {}
`,
    cssCode: `
mat-grid-tile {
background: lightblue;
}
	`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let GridListComponent = class GridListComponent {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    ngOnInit() {
        this.exampleBasicGrid = basicGrid;
        this.exampleDynamicGrid = dynamicGrid;
    }
};
GridListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-grid-list',
        template: __webpack_require__(/*! raw-loader!./grid-list.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/grid-list/grid-list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\tmat-grid-tile {\n\t\tbackground: lightblue;\n\t  }\n\t"]
    })
], GridListComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/list/list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/list/list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicList = {
    beforeCodeTitle: 'Basic list',
    htmlCode: `
<mat-list role="list">
  <mat-list-item role="listitem">Item 1</mat-list-item>
  <mat-list-item role="listitem">Item 2</mat-list-item>
  <mat-list-item role="listitem">Item 3</mat-list-item>
</mat-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic list
*/
@Component({
  selector: 'list-overview-example',
  templateUrl: 'list-overview-example.html',
  styleUrls: ['list-overview-example.css'],
})
export class ListOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const listWithSelection = {
    beforeCodeTitle: 'List with selection',
    htmlCode: `
<mat-selection-list #shoes>
  <mat-list-option *ngFor="let shoe of typesOfShoes">
    {{shoe}}
  </mat-list-option>
</mat-selection-list>
<p>
  Options selected: {{shoes.selectedOptions.selected.length}}
</p>
`,
    tsCode: `
import {Component} from '@angular/core';

/**
* @title List with selection
*/
@Component({
  selector: 'list-selection-example',
  styleUrls: ['list-selection-example.css'],
  templateUrl: 'list-selection-example.html',
})
export class ListSelectionExample {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const listWithSection = {
    beforeCodeTitle: 'List with sections',
    htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders">
    <mat-icon mat-list-icon>folder</mat-icon>
	<h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated | date}} </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{note.name}}</h4>
    <p mat-line> {{note.updated | date}} </p>
  </mat-list-item>
</mat-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title List with sections
*/
@Component({
  selector: 'list-sections-example',
  styleUrls: ['list-sections-example.css'],
templateUrl: 'list-sections-example.html',
})
export class ListSectionsExample {
  folders = [
  {
    name: 'Photos',
    updated: new Date('1/1/16'),
  },
  {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  },
  {
    name: 'Work',
    updated: new Date('1/28/16'),
  }
  ];
  notes = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }
  ];
}
`,
    cssCode: `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ListComponent = class ListComponent {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    ngOnInit() {
        this.exampleBasicList = basicList;
        this.exampleListWithSelection = listWithSelection;
        this.exampleListWithSection = listWithSection;
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/list/list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.mat-list-icon {\n\t\tcolor: rgba(0, 0, 0, 0.54);\n\t  }\n\t"]
    })
], ListComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MaterialTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTabsComponent", function() { return MaterialTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicTabs = {
    beforeCodeTitle: 'Basic tabs',
    htmlCode: `
<mat-tab-group>
  <mat-tab label="Tab 1">Content 1</mat-tab>
  <mat-tab label="Tab 2">Content 2</mat-tab>
</mat-tab-group>
`,
    tsCode: `
import {Component} from '@angular/core';

/**
* @title Basic tabs
*/
@Component({
  selector: 'tabs-overview-example',
  templateUrl: 'tabs-overview-example.html',
  styleUrls: ['tabs-overview-example.css'],
})
export class TabsOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const complex = {
    beforeCodeTitle: 'Complex Example',
    htmlCode: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with text labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        No content
      </mat-tab>
      <mat-tab label="Tab 4">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 5">
        No content
      </mat-tab>
      <mat-tab label="Tab 6">
        No content
      </mat-tab>
    </mat-tab-group>
  </mat-card-content>
</mat-card>
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with icon labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <ng-template mat-tab-label>
          <mat-icon>security</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
		  In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <ng-template mat-tab-label>
          <mat-icon>attach_file</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        <ng-template mat-tab-label>
          <mat-icon>block</mat-icon>
        </ng-template>
        No content
      </mat-tab>
      <mat-tab label="Tab 4">
        <ng-template mat-tab-label>
          <mat-icon>loop</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
		</div>
      </mat-tab>
      <mat-tab label="Tab 5">
        <ng-template mat-tab-label>
          <mat-icon>build</mat-icon>
        </ng-template>
        No content
      </mat-tab>
	  <mat-tab label="Tab 6">
        <ng-template mat-tab-label>
          <mat-icon>thumb_down</mat-icon>
        </ng-template>
        No content
	  </mat-tab>
	</mat-tab-group>
  </mat-card-content>
</mat-card>
`,
    tsCode: `
import {Component} from '@angular/core';

/**
* @title Complex Example
*/
@Component({
  selector: 'tabs-template-label-example',
  templateUrl: 'tabs-template-label-example.html',
  styleUrls: ['./tabs-template-label-example.css']
  })
export class TabsTemplateLabelExample {}
`,
    cssCode: `
.demo-tab-group {
  border: 1px solid #e8e8e8;
}
.demo-tab-content {
  padding: 16px;
}
		`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let MaterialTabsComponent = class MaterialTabsComponent {
    ngOnInit() {
        this.exampleBasicTabs = basicTabs;
        this.exampleComplex = complex;
    }
};
MaterialTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-material-tabs',
        template: __webpack_require__(/*! raw-loader!./material-tabs.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.demo-tab-group {\n\t\tborder: 1px solid #e8e8e8;\n\t  }\n\t  .demo-tab-content {\n\t\tpadding: 16px;\n\t  }\n\t"]
    })
], MaterialTabsComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/stepper/stepper.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/stepper/stepper.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const basicStepper = {
    beforeCodeTitle: 'Basic stepper',
    htmlCode: `
<button mat-raised-button (click)="isLinear = true" id="toggle-linear">Enable linear mode</button>
<mat-horizontal-stepper [linear]="isLinear" #stepper="matHorizontalStepper">
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup">
    <form [formGroup]="secondFormGroup">
      <ng-template matStepLabel>Fill out your address</ng-template>
      <mat-form-field>
        <input matInput placeholder="Address" formControlName="secondCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    You are now done.
     <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-horizontal-stepper>
`,
    tsCode: `
import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
* @title Stepper overview
*/
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css']
})
export class StepperOverviewExample {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const horizontalStepper = {
    beforeCodeTitle: 'Horizontal stepper',
    htmlCode: `
<mat-horizontal-stepper>
  <mat-step label="Step 1">
    Content 1
  </mat-step>
  <mat-step label="Step 1">
    Content 2
  </mat-step>
</mat-horizontal-stepper>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Horizontal stepper
*/
@Component({
  selector: 'stepper-horizontal-example',
  styleUrls: ['stepper-horizontal-example.css'],
  templateUrl: 'stepper-horizontal-example.html',
})
export class StepperHorizontalExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const stepperOverview = {
    beforeCodeTitle: 'Stepper overview',
    htmlCode: `
<mat-list>
  <h3 mat-subheader>Folders</h3>
  <mat-list-item *ngFor="let folder of folders">
    <mat-icon mat-list-icon>folder</mat-icon>
	<h4 mat-line>{{folder.name}}</h4>
    <p mat-line> {{folder.updated | date}} </p>
  </mat-list-item>
  <mat-divider></mat-divider>
  <h3 mat-subheader>Notes</h3>
  <mat-list-item *ngFor="let note of notes">
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{note.name}}</h4>
    <p mat-line> {{note.updated | date}} </p>
  </mat-list-item>
</mat-list>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title List with sections
*/
@Component({
  selector: 'list-sections-example',
  styleUrls: ['list-sections-example.css'],
templateUrl: 'list-sections-example.html',
})
export class ListSectionsExample {
  folders = [
  {
    name: 'Photos',
    updated: new Date('1/1/16'),
  },
  {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  },
  {
    name: 'Work',
    updated: new Date('1/28/16'),
  }
  ];
  notes = [
  {
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  },
  {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }
  ];
}
`,
    cssCode: `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let StepperComponent = class StepperComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.exampleBasicStepper = basicStepper;
        this.exampleHorizontalStepper = horizontalStepper;
        this.exampleStepperOverview = stepperOverview;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
};
StepperComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-stepper',
        template: __webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/stepper/stepper.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], StepperComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/layout/tree/tree.component.ts":
/*!*************************************************************************!*\
  !*** ./src/metronic/views/pages/material/layout/tree/tree.component.ts ***!
  \*************************************************************************/
/*! exports provided: FileNode, FileFlatNode, FileDatabase, DynamicFlatNode, DynamicDatabase, DynamicDataSource, TodoItemNode, TodoItemFlatNode, ChecklistDatabase, LoadmoreNode, LoadmoreFlatNode, LoadmoreDatabase, TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFlatNode", function() { return FileFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemNode", function() { return TodoItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemFlatNode", function() { return TodoItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreNode", function() { return LoadmoreNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreFlatNode", function() { return LoadmoreFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadmoreDatabase", function() { return LoadmoreDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







const treeWithDynamicData = {
    beforeCodeTitle: 'Tree with dynamic data',
    htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
    <button mat-icon-button disabled></button>
    {{node.item}}
  </mat-tree-node>
  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button
      [attr.aria-label]="'toggle ' + node.filename" matTreeNodeToggle>
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    {{node.item}}
    <mat-progress-bar *ngIf="node.isLoading"
      mode="indeterminate"
      class="example-tree-progress-bar"></mat-progress-bar>
  </mat-tree-node>
</mat-tree>`,
    tsCode: `
import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
    public isLoading = false) {}
  }\n
  /**
  * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
  * the descendants data from the database.
  */
  export class DynamicDatabase {
    dataMap = new Map<string, string[]>([
      ['Vegetables', ['Tomato', 'Potato', 'Onion']],
      ['Apple', ['Fuji', 'Macintosh']],
      ['Onion', ['Yellow', 'White', 'Purple']]
    ]);

    rootLevelNodes: string[] = ['Fruits', 'Vegetables'];
    /** Initial data from database */
    initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}\n
/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of \`FileNode\` with nested
* structure.
*/
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.treeControl.expansionModel.onChange!.subscribe(change => {
    if ((change as SelectionChange<DynamicFlatNode>).added ||
      (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }\n

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }\n

  /**
  * Toggle the node, remove from display list
  */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this.database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }\n

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
          this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++, count++) {}
          this.data.splice(index + 1, count);
        }\n

        // notify the change
        this.dataChange.next(this.data);
        node.isLoading = false;
    }, 1000);
  }
}\n

/**
* @title Tree with dynamic data
*/
@Component({
  selector: 'tree-dynamic-example',
  templateUrl: 'tree-dynamic-example.html',
  styleUrls: ['tree-dynamic-example.css'],
  providers: [DynamicDatabase]
})
export class TreeDynamicExample {
  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const treeWithFlatNodes = {
    beforeCodeTitle: 'Tree with flat nodes',
    htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
    <button mat-icon-button disabled></button>
    {{node.filename}} : {{node.type}}
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>
    <button mat-icon-button matTreeNodeToggle
      [attr.aria-label]="'toggle ' + node.filename">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    {{node.filename}} : {{node.type}}
  </mat-tree-node>
</mat-tree>`,
    tsCode: `
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

/**
* File node data with nested structure.
* Each node has a filename, and a type or a list of children.
*/
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/** Flat node with expandable and level information */
  export class FileFlatNode {
  constructor(
  public expandable: boolean, public filename: string, public level: number, public type: any) {}\n
}

/**
* The file structure tree data in string. The data could be parsed into a Json object
*/
const TREE_DATA = JSON.stringify({
  Applications: {
    Calendar: 'app',
    Chrome: 'app',
    Webstorm: 'app'
  },
  Documents: {
    angular: {
      src: {
        compiler: 'ts',
        core: 'ts'
      }
    },
    material2: {
      src: {
        button: 'ts',
        checkbox: 'ts',
        input: 'ts'
      }
    }
  },
  Downloads: {
    October: 'pdf',
    November: 'pdf',
    Tutorial: 'html'
  },
  Pictures: {
    'Photo Booth Library': {
      Contents: 'dir',
      Pictures: 'dir'
    },
    Sun: 'png',
    Woods: 'jpg'
   }
});

/**
* File database, it can build a tree structured Json object from string.
* Each node in Json object represents a file or a directory. For a file, it has filename and type.
* For a directory, it has filename and children (a list of files or directories).
* The input will be a json object string, and the output is a list of \`FileNode\` with nested
* structure.
*/
@Injectable()
  export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of \`FileNode\` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
  * Build the file structure tree. The \`value\` is the Json object, or a sub-tree of a Json object.
  * The return value is the list of \`FileNode\`.
  */
  buildFileTree(obj: object, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
    const value = obj[key];
    const node = new FileNode();
    node.filename = key;

     if (value != null) {
       if (typeof value === 'object') {
         node.children = this.buildFileTree(value, level + 1);
       } else {
         node.type = value;
       }
      }

      return accumulator.concat(node);
    }, []);
  }
}\n

/**
* @title Tree with flat nodes
*/
@Component({
  selector: 'tree-flat-overview-example',
  templateUrl: 'tree-flat-overview-example.html',
  styleUrls: ['tree-flat-overview-example.css'],
  providers: [FileDatabase]
})
export class TreeFlatOverviewExample {
  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor(database: FileDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
    this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: FileNode, level: number) => {
    return new FileFlatNode(!!node.children, node.filename, level, node.type);
  }

  private _getLevel = (node: FileFlatNode) => node.level;
  private _isExpandable = (node: FileFlatNode) => node.expandable;
  private _getChildren = (node: FileNode): Observable<FileNode[]> => observableOf(node.children);
  hasChild = (_: number, _nodeData: FileFlatNode) => _nodeData.expandable;
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const treeWithCheckboxes = {
    beforeCodeTitle: 'Tree with checkboxes',
    htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle matTreeNodePadding>
    <button mat-icon-button disabled></button>
    <mat-checkbox class="checklist-leaf-node"
      [checked]="checklistSelection.isSelected(node)"
      (change)="checklistSelection.toggle(node);">{{node.item}}</mat-checkbox>
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: hasNoContent" matTreeNodePadding>
     <button mat-icon-button disabled></button>
     <mat-form-field>
       <input matInput #itemValue placeholder="New item...">
     </mat-form-field>
     <button mat-button (click)="saveNode(node, itemValue.value)">Save</button>
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button matTreeNodeToggle
      [attr.aria-label]="'toggle ' + node.filename">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    <mat-checkbox [checked]="descendantsAllSelected(node)"
      [indeterminate]="descendantsPartiallySelected(node)"
      (change)="todoItemSelectionToggle(node)">{{node.item}}</mat-checkbox>
    <button mat-icon-button (click)="addNewItem(node)"><mat-icon>add</mat-icon></button>
  </mat-tree-node>
</mat-tree>`,
    tsCode: `
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';\n
/**
* Node for to-do item
*/
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

/**
* The Json object for to-do list data.
*/
const TREE_DATA = {
  Groceries: {
    'Almond Meal flour': null,
    'Organic eggs': null,
    'Protein Powder': null,
    Fruits: {
      Apple: null,
      Berries: ['Blueberry', 'Raspberry'],
      Orange: null
    }
  },
  Reminders: [
    'Cook dinner',
    'Read the Material Design spec',
    'Upgrade Application to Angular'
  ]
};

/**
* Checklist database, it can build a tree structured Json object.
* Each node in Json object represents a to-do item or a category.
* If a node is a category, it has children items and new items can be added under the category.
*/
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of \`TodoItemNode\` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
  * Build the file structure tree. The \`value\` is the Json object, or a sub-tree of a Json object.
  * The return value is the list of \`TodoItemNode\`.
  */
  buildFileTree(obj: object, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

/** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
	this.dataChange.next(this.data);
  }
}

/**
* @title Tree with checkboxes
*/
@Component({
  selector: 'tree-checklist-example',
  templateUrl: 'tree-checklist-example.html',
  styleUrls: ['tree-checklist-example.css'],
  providers: [ChecklistDatabase]
)
export class TreeChecklistExample {
  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  /** A selected parent node to be inserted */
  selectedParent: TodoItemFlatNode | null = null;

  /** The new item's name */
  newItemName = '';

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
    this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';

  /**
  * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
  */
  transformer = (node: TodoItemNode, level: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode = existingNode && existingNode.item === node.item
      ? existingNode
      : new TodoItemFlatNode();
    flatNode.item = node.item;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /** Whether all the descendants of the node are selected */
  descendantsAllSelected(node: TodoItemFlatNode): boolean {
  const descendants = this.treeControl.getDescendants(node);
     return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
  const descendants = this.treeControl.getDescendants(node);
  const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: TodoItemFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node) ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
  }

  /** Select the category so we can insert the new item. */
  addNewItem(node: TodoItemFlatNode) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.insertItem(parentNode!, '');
    this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TodoItemFlatNode, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const treeWithPartiallyLoadedData = {
    beforeCodeTitle: 'Tree with partially loaded data',
    htmlCode: `
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <!-- Leaf node -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
    <button mat-icon-button disabled></button>
      {{node.item}}
  </mat-tree-node>

  <!-- expandable node -->
  <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding>
    <button mat-icon-button
      [attr.aria-label]="'toggle ' + node.filename"
      (click)="loadChildren(node)"
      matTreeNodeToggle>
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
   </button>
   {{node.item}}
  </mat-tree-node>

  <mat-tree-node *matTreeNodeDef="let node; when: isLoadMore">
    <button mat-button (click)="loadMore(node.loadMoreParentItem)">
      Load more...
    </button>
  </mat-tree-node>
</mat-tree>`,
    tsCode: `
/**
* @license
* Copyright Google LLC All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable} from 'rxjs';

const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(public item: string,
  public hasChildren = false,
  public loadMoreParentItem: string | null = null) {}
}

/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(public item: string,
  public level = 1,
  public expandable = false,
  public loadMoreParentItem: string | null = null) {}
}

/**
* A database that only load part of the data initially. After user clicks on the \`Load more\`
* button, more data will be loaded.
*/
@Injectable()
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<string, LoadmoreNode>();

  /** The data */
  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
  ]);

  initialize() {
    const data = this.rootLevelNodes.map(name => this._generateNode(name));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: string, onlyFirstTime = false) {
    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
      return;
    }
    const parent = this.nodeMap.get(item)!;
    const children = this.dataMap.get(item)!;
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }
    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));
    if (newChildrenNumber < children.length) {
    // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: string): LoadmoreNode {
    if (this.nodeMap.has(item)) {
      return this.nodeMap.get(item)!;
    }
    const result = new LoadmoreNode(item, this.dataMap.has(item));
    this.nodeMap.set(item, result);
    return result;
  }
}

/**
* @title Tree with partially loaded data
*/
Component({
  selector: 'tree-loadmore-example',
  templateUrl: 'tree-loadmore-example.html',
  styleUrls: ['tree-loadmore-example.css'],
  providers: [LoadmoreDatabase]
})
export class TreeLoadmoreExample {
  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;

  constructor(private database: LoadmoreDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
    this.isExpandable, this.getChildren);

    this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });

    database.initialize();
  }

  getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
    this.nodeMap.set(node.item, newNode);
    return newNode;
  }

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;

  /** Load more nodes from data source */
  loadMore(item: string) {
    this.database.loadMore(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this.database.loadMore(node.item, true);
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
/**
 * File node data with nested structure.
 * Each node has a filename, and a type or a list of children.
 */
class FileNode {
}
/** Flat node with expandable and level information */
class FileFlatNode {
    constructor(expandable, filename, level, type) {
        this.expandable = expandable;
        this.filename = filename;
        this.level = level;
        this.type = type;
    }
}
FileFlatNode.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: Number },
    { type: undefined }
];
/**
 * The file structure tree data in string. The data could be parsed into a Json object
 */
const TREE_DATA = JSON.stringify({
    Applications: {
        Calendar: 'app',
        Chrome: 'app',
        Webstorm: 'app'
    },
    Documents: {
        angular: {
            src: {
                compiler: 'ts',
                core: 'ts'
            }
        },
        material2: {
            src: {
                button: 'ts',
                checkbox: 'ts',
                input: 'ts'
            }
        }
    },
    Downloads: {
        October: 'pdf',
        November: 'pdf',
        Tutorial: 'html'
    },
    Pictures: {
        'Photo Booth Library': {
            Contents: 'dir',
            Pictures: 'dir'
        },
        Sun: 'png',
        Woods: 'jpg'
    }
});
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
let FileDatabase = class FileDatabase {
    constructor() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    get data() {
        if (this.dataChange) {
            return this.dataChange.value;
        }
        return undefined;
    }
    initialize() {
        // Parse the string to json object.
        const dataObject = JSON.parse(TREE_DATA);
        // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
        //     file node as children.
        const data = this.buildFileTree(dataObject, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
            const node = new FileNode();
            node.filename = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.type = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
};
FileDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], FileDatabase);

/** Flat node with expandable and level information */
class DynamicFlatNode {
    constructor(item, level = 1, expandable = false, isLoading = false) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
}
DynamicFlatNode.ctorParameters = () => [
    { type: String },
    null,
    null,
    null
];
/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
class DynamicDatabase {
    constructor() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    initialData() {
        return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
    getChildren(node) {
        return this.dataMap.get(node);
    }
    isExpandable(node) {
        return this.dataMap.has(node);
    }
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
let DynamicDataSource = class DynamicDataSource {
    constructor(treeControl, database, cdr) {
        this.treeControl = treeControl;
        this.database = database;
        this.cdr = cdr;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
    }
    get data() { return this.dataChange.value; }
    set data(value) {
        this.treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        // tslint:disable-next-line:no-non-null-assertion
        this.treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => this.data));
    }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
        const children = this.database.getChildren(node.item);
        const index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(() => {
            if (expand) {
                const nodes = children.map(name => new DynamicFlatNode(name, node.level + 1, this.database.isExpandable(name)));
                this.data.splice(index + 1, 0, ...nodes);
            }
            else {
                let count = 0;
                for (let i = index + 1; i < this.data.length
                    && this.data[i].level > node.level; i++, count++) { }
                this.data.splice(index + 1, count);
            }
            // notify the change
            this.dataChange.next(this.data);
            node.isLoading = false;
            this.cdr.markForCheck();
        }, 500);
    }
};
DynamicDataSource.ctorParameters = () => [
    { type: _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"] },
    { type: DynamicDatabase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
DynamicDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], DynamicDataSource);

/**
 * Node for to-do item
 */
class TodoItemNode {
}
/** Flat to-do item node with expandable and level information */
class TodoItemFlatNode {
}
/**
 * The Json object for to-do list data.
 */
const TREE_DATA_3 = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
let ChecklistDatabase = class ChecklistDatabase {
    constructor() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.initialize();
    }
    get data() {
        if (this.dataChange) {
            return this.dataChange.value;
        }
        return undefined;
    }
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA_3, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    /** Add an item to to-do list */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    }
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
};
ChecklistDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], ChecklistDatabase);

const LOAD_MORE = 'LOAD_MORE';
/** Nested node */
class LoadmoreNode {
    constructor(item, hasChildren = false, loadMoreParentItem = null) {
        this.item = item;
        this.hasChildren = hasChildren;
        this.loadMoreParentItem = loadMoreParentItem;
        this.childrenChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
    }
    get children() {
        return this.childrenChange.value;
    }
}
LoadmoreNode.ctorParameters = () => [
    { type: String },
    null,
    { type: undefined }
];
/** Flat node with expandable and level information */
class LoadmoreFlatNode {
    constructor(item, level = 1, expandable = false, loadMoreParentItem = null) {
        this.item = item;
        this.level = level;
        this.expandable = expandable;
        this.loadMoreParentItem = loadMoreParentItem;
    }
}
LoadmoreFlatNode.ctorParameters = () => [
    { type: String },
    null,
    null,
    { type: undefined }
];
/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
let LoadmoreDatabase = class LoadmoreDatabase {
    /**
     * A database that only load part of the data initially. After user clicks on the `Load more`
     * button, more data will be loaded.
     */
    constructor() {
        this.batchNumber = 5;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.nodeMap = new Map();
        /** The data */
        this.rootLevelNodes = ['Vegetables', 'Fruits'];
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
        ]);
    }
    initialize() {
        const data = this.rootLevelNodes.map(name => this._generateNode(name));
        this.dataChange.next(data);
    }
    /** Expand a node whose children are not loaded */
    loadMore(item, onlyFirstTime = false) {
        if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        const parent = this.nodeMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        const children = this.dataMap.get(item);
        // tslint:disable-next-line:no-non-null-assertion
        if (onlyFirstTime && parent.children.length > 0) {
            return;
        }
        // tslint:disable-next-line:no-non-null-assertion
        const newChildrenNumber = parent.children.length + this.batchNumber;
        const nodes = children.slice(0, newChildrenNumber)
            .map(name => this._generateNode(name));
        if (newChildrenNumber < children.length) {
            // Need a new load more node
            nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
        }
        parent.childrenChange.next(nodes);
        this.dataChange.next(this.dataChange.value);
    }
    _generateNode(item) {
        if (this.nodeMap.has(item)) {
            // tslint:disable-next-line:no-non-null-assertion
            return this.nodeMap.get(item);
        }
        const result = new LoadmoreNode(item, this.dataMap.has(item));
        this.nodeMap.set(item, result);
        return result;
    }
};
LoadmoreDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], LoadmoreDatabase);

/**
 * @title Tree with dynamic data
 */
let TreeComponent = class TreeComponent {
    constructor(database, database2, database3, database4, cdr) {
        this.database3 = database3;
        this.database4 = database4;
        this.cdr = cdr;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap3 = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap3 = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent3 = null;
        /** The new item's name */
        this.newItemName3 = '';
        /** The selection for checklist */
        this.checklistSelection3 = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true /* multiple */);
        this.nodeMap4 = new Map();
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.transformer2 = (node, level) => {
            return new FileFlatNode(!!node.children, node.filename, level, node.type);
        };
        this._getLevel2 = (node) => node.level;
        this._isExpandable2 = (node) => node.expandable;
        this._getChildren2 = (node) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(node.children);
        this.hasChild2 = (_, _nodeData) => _nodeData.expandable;
        this.getLevel3 = (node) => node.level;
        this.isExpandable3 = (node) => node.expandable;
        this.getChildren3 = (node) => node.children;
        this.hasChild3 = (_, _nodeData) => _nodeData.expandable;
        this.hasNoContent3 = (_, _nodeData) => _nodeData.item === '';
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer3 = (node, level) => {
            const existingNode = this.nestedNodeMap3.get(node);
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            this.flatNodeMap3.set(flatNode, node);
            this.nestedNodeMap3.set(node, flatNode);
            return flatNode;
        };
        this.getChildren4 = (node) => node.childrenChange;
        this.transformer4 = (node, level) => {
            const existingNode = this.nodeMap4.get(node.item);
            if (existingNode) {
                return existingNode;
            }
            const newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
            this.nodeMap4.set(node.item, newNode);
            return newNode;
        };
        this.getLevel4 = (node) => node.level;
        this.isExpandable4 = (node) => node.expandable;
        this.hasChild4 = (_, _nodeData) => _nodeData.expandable;
        this.isLoadMore4 = (_, _nodeData) => _nodeData.item === LOAD_MORE;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database, this.cdr);
        this.dataSource.data = database.initialData();
        this.treeFlattener2 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer2, this._getLevel2, this._isExpandable2, this._getChildren2);
        this.treeControl2 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this._getLevel2, this._isExpandable2);
        this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl2, this.treeFlattener2);
        database2.dataChange.subscribe(data => this.dataSource2.data = data);
        this.treeFlattener3 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer3, this.getLevel3, this.isExpandable3, this.getChildren3);
        this.treeControl3 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel3, this.isExpandable3);
        this.dataSource3 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl3, this.treeFlattener3);
        database3.dataChange.subscribe(data => {
            this.dataSource3.data = data;
        });
        this.treeFlattener4 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this.transformer4, this.getLevel4, this.isExpandable4, this.getChildren4);
        this.treeControl4 = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](this.getLevel4, this.isExpandable4);
        this.dataSource4 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl4, this.treeFlattener4);
        database4.dataChange.subscribe(data => {
            this.dataSource4.data = data;
        });
        database4.initialize();
    }
    ngOnInit() {
        this.exampleTreeWithDynamicData = treeWithDynamicData;
        this.exampleTreeWithFlatNodes = treeWithFlatNodes;
        this.exampleTreeWithCheckboxes = treeWithCheckboxes;
        this.exampleTreeWithPartiallyLoadedData = treeWithPartiallyLoadedData;
    }
    /** Whether all the descendants of the node are selected */
    descendantsAllSelected3(node) {
        const descendants = this.treeControl3.getDescendants(node);
        return descendants.every(child => this.checklistSelection3.isSelected(child));
    }
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected3(node) {
        const descendants = this.treeControl3.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection3.isSelected(child));
        return result && !this.descendantsAllSelected3(node);
    }
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle3(node) {
        this.checklistSelection3.toggle(node);
        const descendants = this.treeControl3.getDescendants(node);
        this.checklistSelection3.isSelected(node)
            ? this.checklistSelection3.select(...descendants)
            : this.checklistSelection3.deselect(...descendants);
    }
    /** Select the category so we can insert the new item. */
    addNewItem3(node) {
        const parentNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.insertItem(parentNode, '');
        this.treeControl3.expand(node);
    }
    /** Save the node to database */
    saveNode3(node, itemValue) {
        const nestedNode = this.flatNodeMap3.get(node);
        // tslint:disable-next-line:no-non-null-assertion
        this.database3.updateItem(nestedNode, itemValue);
    }
    /** Load more nodes from data source */
    loadMore4(item) {
        this.database4.loadMore(item);
    }
    loadChildren4(node) {
        this.database4.loadMore(node.item, true);
    }
};
TreeComponent.ctorParameters = () => [
    { type: DynamicDatabase },
    { type: FileDatabase },
    { type: ChecklistDatabase },
    { type: LoadmoreDatabase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'kt-tree',
        template: __webpack_require__(/*! raw-loader!./tree.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/layout/tree/tree.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
        providers: [DynamicDatabase, FileDatabase, ChecklistDatabase, LoadmoreDatabase],
        styles: ["\n\t.example-tree-progress-bar {\n\t\tmargin-left: 30px;\n\t  }\n\t"]
    })
], TreeComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/material.component.ts":
/*!*****************************************************************!*\
  !*** ./src/metronic/views/pages/material/material.component.ts ***!
  \*****************************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MaterialComponent = class MaterialComponent {
};
MaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-material',
        template: __webpack_require__(/*! raw-loader!./material.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/material.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], MaterialComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/material.module.ts":
/*!**************************************************************!*\
  !*** ./src/metronic/views/pages/material/material.module.ts ***!
  \**************************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.component */ "./src/metronic/views/pages/material/material.component.ts");
/* harmony import */ var _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formcontrols/autocomplete/autocomplete.component */ "./src/metronic/views/pages/material/formcontrols/autocomplete/autocomplete.component.ts");
/* harmony import */ var _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formcontrols/checkbox/checkbox.component */ "./src/metronic/views/pages/material/formcontrols/checkbox/checkbox.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/metronic/views/partials/partials.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/core.module */ "./src/metronic/core/core.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/metronic/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formcontrols/datepicker/datepicker.component */ "./src/metronic/views/pages/material/formcontrols/datepicker/datepicker.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formcontrols/formfield/formfield.component */ "./src/metronic/views/pages/material/formcontrols/formfield/formfield.component.ts");
/* harmony import */ var _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formcontrols/input/input.component */ "./src/metronic/views/pages/material/formcontrols/input/input.component.ts");
/* harmony import */ var _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./formcontrols/radiobutton/radiobutton.component */ "./src/metronic/views/pages/material/formcontrols/radiobutton/radiobutton.component.ts");
/* harmony import */ var _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./formcontrols/select/select.component */ "./src/metronic/views/pages/material/formcontrols/select/select.component.ts");
/* harmony import */ var _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./formcontrols/slider/slider.component */ "./src/metronic/views/pages/material/formcontrols/slider/slider.component.ts");
/* harmony import */ var _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./formcontrols/slidertoggle/slidertoggle.component */ "./src/metronic/views/pages/material/formcontrols/slidertoggle/slidertoggle.component.ts");
/* harmony import */ var _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./navigation/menu/menu.component */ "./src/metronic/views/pages/material/navigation/menu/menu.component.ts");
/* harmony import */ var _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./navigation/sidenav/sidenav.component */ "./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.ts");
/* harmony import */ var _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./navigation/toolbar/toolbar.component */ "./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _layout_card_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./layout/card/card.component */ "./src/metronic/views/pages/material/layout/card/card.component.ts");
/* harmony import */ var _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./layout/divider/divider.component */ "./src/metronic/views/pages/material/layout/divider/divider.component.ts");
/* harmony import */ var _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./layout/expansion-panel/expansion-panel.component */ "./src/metronic/views/pages/material/layout/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./layout/grid-list/grid-list.component */ "./src/metronic/views/pages/material/layout/grid-list/grid-list.component.ts");
/* harmony import */ var _layout_list_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./layout/list/list.component */ "./src/metronic/views/pages/material/layout/list/list.component.ts");
/* harmony import */ var _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./layout/material-tabs/material-tabs.component */ "./src/metronic/views/pages/material/layout/material-tabs/material-tabs.component.ts");
/* harmony import */ var _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layout/stepper/stepper.component */ "./src/metronic/views/pages/material/layout/stepper/stepper.component.ts");
/* harmony import */ var _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./layout/tree/tree.component */ "./src/metronic/views/pages/material/layout/tree/tree.component.ts");
/* harmony import */ var _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./layout/default-forms/default-forms.component */ "./src/metronic/views/pages/material/layout/default-forms/default-forms.component.ts");
/* harmony import */ var _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./buttons-and-indicators/button/button.component */ "./src/metronic/views/pages/material/buttons-and-indicators/button/button.component.ts");
/* harmony import */ var _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./buttons-and-indicators/button-toggle/button-toggle.component */ "./src/metronic/views/pages/material/buttons-and-indicators/button-toggle/button-toggle.component.ts");
/* harmony import */ var _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./buttons-and-indicators/chips/chips.component */ "./src/metronic/views/pages/material/buttons-and-indicators/chips/chips.component.ts");
/* harmony import */ var _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./buttons-and-indicators/icon/icon.component */ "./src/metronic/views/pages/material/buttons-and-indicators/icon/icon.component.ts");
/* harmony import */ var _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./buttons-and-indicators/progress-bar/progress-bar.component */ "./src/metronic/views/pages/material/buttons-and-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./buttons-and-indicators/progress-spinner/progress-spinner.component */ "./src/metronic/views/pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component.ts");
/* harmony import */ var _buttons_and_indicators_ripples_ripples_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./buttons-and-indicators/ripples/ripples.component */ "./src/metronic/views/pages/material/buttons-and-indicators/ripples/ripples.component.ts");
/* harmony import */ var _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./popups-and-modals/dialog/dialog.component */ "./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.ts");
/* harmony import */ var _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./popups-and-modals/snackbar/snackbar.component */ "./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.ts");
/* harmony import */ var _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./popups-and-modals/material-tooltip/material-tooltip.component */ "./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.ts");
/* harmony import */ var _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./popups-and-modals/bottom-sheet/bottom-sheet.component */ "./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component */ "./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts");
/* harmony import */ var _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./popups-and-modals/snackbar/pizza-party.component */ "./src/metronic/views/pages/material/popups-and-modals/snackbar/pizza-party.component.ts");
/* harmony import */ var _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./data-table/paginator/paginator.component */ "./src/metronic/views/pages/material/data-table/paginator/paginator.component.ts");
/* harmony import */ var _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./data-table/sort-header/sort-header.component */ "./src/metronic/views/pages/material/data-table/sort-header/sort-header.component.ts");
/* harmony import */ var _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./data-table/material-table/material-table.component */ "./src/metronic/views/pages/material/data-table/material-table/material-table.component.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");

















// Form controls








// Navigation



// Layout









// Buttons & indicators







// Popups & modals






// Data table




const routes = [
    {
        path: '',
        component: _material_component__WEBPACK_IMPORTED_MODULE_4__["MaterialComponent"],
        children: [
            {
                path: 'form-controls/autocomplete',
                component: _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]
            },
            {
                path: 'form-controls/checkbox',
                component: _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]
            },
            {
                path: 'form-controls/datepicker',
                component: _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerComponent"]
            },
            {
                path: 'form-controls/formfield',
                component: _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_19__["FormfieldComponent"]
            },
            {
                path: 'form-controls/input',
                component: _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_20__["InputComponent"]
            },
            {
                path: 'form-controls/radiobutton',
                component: _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_21__["RadiobuttonComponent"]
            },
            {
                path: 'form-controls/select',
                component: _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_22__["SelectComponent"]
            },
            {
                path: 'form-controls/slider',
                component: _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__["SliderComponent"]
            },
            {
                path: 'form-controls/slidertoggle',
                component: _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_24__["SlidertoggleComponent"]
            },
            {
                path: 'navigation/menu',
                component: _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"]
            },
            {
                path: 'navigation/sidenav',
                component: _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__["SidenavComponent"]
            },
            {
                path: 'navigation/toolbar',
                component: _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarComponent"]
            },
            {
                path: 'layout/card',
                component: _layout_card_card_component__WEBPACK_IMPORTED_MODULE_28__["CardComponent"]
            },
            {
                path: 'layout/divider',
                component: _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_29__["DividerComponent"]
            },
            {
                path: 'layout/expansion-panel',
                component: _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_30__["ExpansionPanelComponent"]
            },
            {
                path: 'layout/grid-list',
                component: _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_31__["GridListComponent"]
            },
            {
                path: 'layout/list',
                component: _layout_list_list_component__WEBPACK_IMPORTED_MODULE_32__["ListComponent"]
            },
            {
                path: 'layout/tabs',
                component: _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_33__["MaterialTabsComponent"]
            },
            {
                path: 'layout/stepper',
                component: _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__["StepperComponent"]
            },
            {
                path: 'layout/default-forms',
                component: _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_36__["DefaultFormsComponent"]
            },
            {
                path: 'layout/tree',
                component: _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_35__["TreeComponent"]
            },
            {
                path: 'buttons-and-indicators/button',
                component: _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_37__["ButtonComponent"]
            },
            {
                path: 'buttons-and-indicators/button-toggle',
                component: _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_38__["ButtonToggleComponent"]
            },
            {
                path: 'buttons-and-indicators/chips',
                component: _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_39__["ChipsComponent"]
            },
            {
                path: 'buttons-and-indicators/icon',
                component: _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_40__["IconComponent"]
            },
            {
                path: 'buttons-and-indicators/progress-bar',
                component: _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_41__["ProgressBarComponent"]
            },
            {
                path: 'buttons-and-indicators/progress-spinner',
                component: _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_42__["ProgressSpinnerComponent"]
            },
            {
                path: 'buttons-and-indicators/ripples',
                component: _buttons_and_indicators_ripples_ripples_component__WEBPACK_IMPORTED_MODULE_43__["RipplesComponent"]
            },
            {
                path: 'popups-and-modals/bottom-sheet',
                component: _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_47__["BottomSheetComponent"]
            },
            {
                path: 'popups-and-modals/dialog',
                component: _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["DialogComponent"]
            },
            {
                path: 'popups-and-modals/snackbar',
                component: _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_45__["SnackbarComponent"]
            },
            {
                path: 'popups-and-modals/tooltip',
                component: _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_46__["MaterialTooltipComponent"]
            },
            {
                path: 'data'
            },
            {
                path: 'data-table/paginator',
                component: _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_50__["PaginatorComponent"]
            },
            {
                path: 'data-table/sort-header',
                component: _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_51__["SortHeaderComponent"]
            },
            {
                path: 'data-table/table',
                component: _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_52__["MaterialTableComponent"]
            }
        ]
    }
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // material modules
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
            _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_10__["MaterialPreviewModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        entryComponents: [
            _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_49__["PizzaPartyComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["DialogComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["ModalComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["Modal2Component"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["Modal3Component"],
            _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_40__["IconComponent"],
            _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_35__["TreeComponent"],
            _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_48__["BottomSheetExampleComponent"]
        ],
        providers: [
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"],
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetRef"], useValue: {} },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MAT_BOTTOM_SHEET_DATA"], useValue: {} },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
            { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_53__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } },
        ],
        declarations: [
            _material_component__WEBPACK_IMPORTED_MODULE_4__["MaterialComponent"],
            _formcontrols_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"],
            _formcontrols_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"],
            _formcontrols_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_17__["DatepickerComponent"],
            _formcontrols_formfield_formfield_component__WEBPACK_IMPORTED_MODULE_19__["FormfieldComponent"],
            _formcontrols_input_input_component__WEBPACK_IMPORTED_MODULE_20__["InputComponent"],
            _formcontrols_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_21__["RadiobuttonComponent"],
            _formcontrols_select_select_component__WEBPACK_IMPORTED_MODULE_22__["SelectComponent"],
            _formcontrols_slider_slider_component__WEBPACK_IMPORTED_MODULE_23__["SliderComponent"],
            _formcontrols_slidertoggle_slidertoggle_component__WEBPACK_IMPORTED_MODULE_24__["SlidertoggleComponent"],
            _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__["MenuComponent"],
            _navigation_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_26__["SidenavComponent"],
            _navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_27__["ToolbarComponent"],
            _layout_card_card_component__WEBPACK_IMPORTED_MODULE_28__["CardComponent"],
            _layout_divider_divider_component__WEBPACK_IMPORTED_MODULE_29__["DividerComponent"],
            _layout_expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_30__["ExpansionPanelComponent"],
            _layout_grid_list_grid_list_component__WEBPACK_IMPORTED_MODULE_31__["GridListComponent"],
            _layout_list_list_component__WEBPACK_IMPORTED_MODULE_32__["ListComponent"],
            _layout_material_tabs_material_tabs_component__WEBPACK_IMPORTED_MODULE_33__["MaterialTabsComponent"],
            _layout_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_34__["StepperComponent"],
            _buttons_and_indicators_button_button_component__WEBPACK_IMPORTED_MODULE_37__["ButtonComponent"],
            _buttons_and_indicators_button_toggle_button_toggle_component__WEBPACK_IMPORTED_MODULE_38__["ButtonToggleComponent"],
            _buttons_and_indicators_chips_chips_component__WEBPACK_IMPORTED_MODULE_39__["ChipsComponent"],
            _buttons_and_indicators_icon_icon_component__WEBPACK_IMPORTED_MODULE_40__["IconComponent"],
            _buttons_and_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_41__["ProgressBarComponent"],
            _buttons_and_indicators_progress_spinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_42__["ProgressSpinnerComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["DialogComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["ModalComponent"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["Modal2Component"],
            _popups_and_modals_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_44__["Modal3Component"],
            _popups_and_modals_snackbar_pizza_party_component__WEBPACK_IMPORTED_MODULE_49__["PizzaPartyComponent"],
            _popups_and_modals_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_45__["SnackbarComponent"],
            _popups_and_modals_material_tooltip_material_tooltip_component__WEBPACK_IMPORTED_MODULE_46__["MaterialTooltipComponent"],
            _data_table_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_50__["PaginatorComponent"],
            _data_table_sort_header_sort_header_component__WEBPACK_IMPORTED_MODULE_51__["SortHeaderComponent"],
            _data_table_material_table_material_table_component__WEBPACK_IMPORTED_MODULE_52__["MaterialTableComponent"],
            _layout_default_forms_default_forms_component__WEBPACK_IMPORTED_MODULE_36__["DefaultFormsComponent"],
            _layout_tree_tree_component__WEBPACK_IMPORTED_MODULE_35__["TreeComponent"],
            _popups_and_modals_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_47__["BottomSheetComponent"],
            _popups_and_modals_bottom_sheet_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_48__["BottomSheetExampleComponent"],
            _buttons_and_indicators_ripples_ripples_component__WEBPACK_IMPORTED_MODULE_43__["RipplesComponent"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/metronic/views/pages/material/navigation/menu/menu.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/metronic/views/pages/material/navigation/menu/menu.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicMenu = {
    beforeCodeTitle: 'Basic menu',
    htmlCode: `
<button mat-button [matMenuTriggerFor]="menu">Menu</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>Item 1</button>
  <button mat-menu-item>Item 2</button>
</mat-menu>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic menu
 */
@Component({
  selector: 'menu-overview-example',
  templateUrl: 'menu-overview-example.html',
  styleUrls: ['menu-overview-example.css'],
})
export class MenuOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const nestedMenu = {
    beforeCodeTitle: 'Nested menu',
    htmlCode: `
<button mat-button [matMenuTriggerFor]="animals">Animal index</button>
<mat-menu #animals="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
  <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
</mat-menu>
<mat-menu #vertebrates="matMenu">
  <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
  <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
  <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
  <button mat-menu-item>Birds</button>
  <button mat-menu-item>Mammals</button>
</mat-menu>
<mat-menu #invertebrates="matMenu">
  <button mat-menu-item>Insects</button>
  <button mat-menu-item>Molluscs</button>
  <button mat-menu-item>Crustaceans</button>
  <button mat-menu-item>Corals</button>
  <button mat-menu-item>Arachnids</button>
  <button mat-menu-item>Velvet worms</button>
  <button mat-menu-item>Horseshoe crabs</button>
</mat-menu>
<mat-menu #fish="matMenu">
  <button mat-menu-item>Baikal oilfish</button>
  <button mat-menu-item>Bala shark</button>
  <button mat-menu-item>Ballan wrasse</button>
  <button mat-menu-item>Bamboo shark</button>
  <button mat-menu-item>Banded killifish</button>
</mat-menu>
<mat-menu #amphibians="matMenu">
  <button mat-menu-item>Sonoran desert toad</button>
  <button mat-menu-item>Western toad</button>
  <button mat-menu-item>Arroyo toad</button>
  <button mat-menu-item>Yosemite toad</button>
</mat-menu>
<mat-menu #reptiles="matMenu">
  <button mat-menu-item>Banded Day Gecko</button>
  <button mat-menu-item>Banded Gila Monster</button>
  <button mat-menu-item>Black Tree Monitor</button>
  <button mat-menu-item>Blue Spiny Lizard</button>
  <button mat-menu-item disabled>Velociraptor</button>
</mat-menu>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Nested menu
*/
@Component({
  selector: 'nested-menu-example',
  templateUrl: 'nested-menu-example.html',
  styleUrls: ['nested-menu-example.css']
})
export class NestedMenuExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const menuWithIcons = {
    beforeCodeTitle: 'Menu with icons',
    htmlCode: `
<button mat-icon-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>
`,
    tsCode: `
import {Component} from '@angular/core';

/**
* @title Menu with icons
*/
@Component({
  selector: 'menu-icons-example',
  templateUrl: 'menu-icons-example.html',
  styleUrls: ['menu-icons-example.css'],
})
export class MenuIconsExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const toggling = {
    beforeCodeTitle: 'Customizing menu position',
    htmlCode: `
<mat-menu #appMenu="matMenu" yPosition="above">
  <button mat-menu-item>Settings</button>
  <button mat-menu-item>Help</button>
</mat-menu>
<button mat-icon-button [matMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @Customizing menu position
 */
@Component({
  selector: 'menu-customizing-example',
  templateUrl: 'menu-customizing-example.html',
  styleUrls: ['menu-customizing-example.css'],
})
export class MenuCustomizingExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let MenuComponent = class MenuComponent {
    ngOnInit() {
        this.exampleBasicMenu = basicMenu;
        this.exampleNestedMenu = nestedMenu;
        this.exampleMenuWithIcons = menuWithIcons;
        this.exampleToggling = toggling;
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/menu/menu.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], MenuComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basicSidenav = {
    beforeCodeTitle: 'Basic sidenav',
    htmlCode: `
<mat-sidenav-container class="example-container" *ngIf="shouldRun">
  <mat-sidenav mode="side" opened>Sidenav content</mat-sidenav>
  <mat-sidenav-content>Main content</mat-sidenav-content>
</mat-sidenav-container>
<div *ngIf="!shouldRun">Please open on Stackblitz to see result</div>`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic sidenav */
@Component({
  selector: 'sidenav-overview-example',
  templateUrl: 'sidenav-overview-example.html',
  styleUrls: ['sidenav-overview-example.css'],
})
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const basicDrawer = {
    beforeCodeTitle: 'Basic drawer',
    htmlCode: `
<mat-drawer-container class="example-container">
  <mat-drawer mode="side" opened="true">Drawer content</mat-drawer>
  <mat-drawer-content>Main content</mat-drawer-content>
</mat-drawer-container>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/** @title Basic drawer */
@Component({
  selector: 'sidenav-drawer-overview-example',
  templateUrl: 'sidenav-drawer-overview-example.html',
  styleUrls: ['sidenav-drawer-overview-example.css'],
})
export class SidenavDrawerOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const autosizeSidenav = {
    beforeCodeTitle: 'Autosize sidenav',
    htmlCode: `
<mat-drawer-container class="example-container" autosize>
  <mat-drawer #drawer class="example-sidenav" mode="side">
    <p>Auto-resizing sidenav</p>
    <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
    <button (click)="showFiller = !showFiller" mat-raised-button>
      Toggle extra text
    </button>
  </mat-drawer>\n
  <div class="example-sidenav-content">
    <button type="button" mat-button (click)="drawer.toggle()">
      Toggle sidenav
    </button>
  </div>
</mat-drawer-container>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Autosize sidenav
*/
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrls: ['sidenav-autosize-example.css'],
})
export class SidenavAutosizeExample {
  showFiller = false;
}
`,
    cssCode: `
.example-container {
  width: 500px;
  height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.example-sidenav-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.example-sidenav {
  padding: 20px;
}
			`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let SidenavComponent = class SidenavComponent {
    constructor() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.showFiller = false;
    }
    ngOnInit() {
        this.exampleBasicSidenav = basicSidenav;
        this.exampleBasicDrawer = basicDrawer;
        this.exampleAutosizeSidenav = autosizeSidenav;
    }
};
SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-sidenav',
        template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/sidenav/sidenav.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-container {\n\t\twidth: 400px;\n\t\theight: 200px;\n\t\tmargin: 10px;\n\t\tborder: 1px solid #555;\n\t  }\n\t  .example-container {\n\t\twidth: 500px;\n\t\theight: 300px;\n\t\tborder: 1px solid rgba(0, 0, 0, 0.5);\n\t  }\n\t  .example-sidenav-content {\n\t\tdisplay: flex;\n\t\theight: 100%;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t  }\n\t  .example-sidenav {\n\t\tpadding: 20px;\n\t  }\n\t"]
    })
], SidenavComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const singleRow = {
    beforeCodeTitle: 'Single row',
    htmlCode: `
<mat-toolbar>
  <span>My Application</span>
</mat-toolbar>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : single row
*/
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'toolbar-overview-example.html',
  styleUrls: ['toolbar-overview-example.css'],
})
export class ToolbarOverviewExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const multipleRows = {
    beforeCodeTitle: 'Multiple rows',
    htmlCode: `
<mat-toolbar>
  <mat-toolbar-row>
    <span>First Row</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Row</span>
  </mat-toolbar-row>
</mat-toolbar>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : multiple rows
*/
@Component({
selector: 'toolbar-multi-example',
templateUrl: 'toolbar-multi-example.html',
styleUrls: ['toolbar-multi-example.css'],
})
export class ToolbarMultiExample {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const multipleRows2 = {
    beforeCodeTitle: 'Multi-row toolbar',
    htmlCode: `
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span>Custom Toolbar</span>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Second Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">verified_user</mat-icon>
  </mat-toolbar-row>
  <mat-toolbar-row>
    <span>Third Line</span>
    <span class="example-spacer"></span>
    <mat-icon class="example-icon">favorite</mat-icon>
    <mat-icon class="example-icon">delete</mat-icon>
  </mat-toolbar-row>
</mat-toolbar>
`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic toolbar : Multi-row toolbar
*/
@Component({
selector: 'toolbar-multi-example',
templateUrl: 'toolbar-multi-example.html',
styleUrls: ['toolbar-multi-example.css'],
})
export class ToolbarMultiExample {}
`,
    cssCode: `
.example-icon {
  padding: 0 14px;
}
.example-spacer {
  flex: 1 1 auto;
}`,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let ToolbarComponent = class ToolbarComponent {
    ngOnInit() {
        this.exampleSingleRow = singleRow;
        this.examplMultipleRows = multipleRows;
        this.examplMultipleRows2 = multipleRows2;
    }
};
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/navigation/toolbar/toolbar.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: ["\n\t.example-icon {\n\t\tpadding: 0 14px;\n\t}\n\t.example-spacer {\n\t\tflex: 1 1 auto;\n\t}\n\t"]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BottomSheetExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetExampleComponent", function() { return BottomSheetExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let BottomSheetExampleComponent = class BottomSheetExampleComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    openLink(event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
};
BottomSheetExampleComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }
];
BottomSheetExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-bottom-sheet-example',
        template: __webpack_require__(/*! raw-loader!./bottom-sheet-example.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.html")
    })
], BottomSheetExampleComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: BottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottom-sheet-example/bottom-sheet-example.component */ "./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component.ts");




const basic = {
    beforeCodeTitle: 'Bottom Sheet Overview',
    htmlCode: `
import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';\n
/**
* @title Bottom Sheet Overview
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExample {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}\n

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let BottomSheetComponent = class BottomSheetComponent {
    constructor(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    openBottomSheet() {
        this.bottomSheet.open(_bottom_sheet_example_bottom_sheet_example_component__WEBPACK_IMPORTED_MODULE_3__["BottomSheetExampleComponent"]);
    }
    ngOnInit() {
        this.exampleBasic = basic;
    }
};
BottomSheetComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }
];
BottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-bottom-sheet',
        template: __webpack_require__(/*! raw-loader!./bottom-sheet.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/bottom-sheet/bottom-sheet.component.html")
    })
], BottomSheetComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: Modal3Component, Modal2Component, ModalComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal3Component", function() { return Modal3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal2Component", function() { return Modal2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let Modal3Component = class Modal3Component {
};
Modal3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-modal3',
        template: `
		<div class="col-xl-12">
			<div class="col-xl-12">
				<div class="kt-modal3__container">
					<h1 mat-dialog-title>Favorite Animal</h1>
					<h2 mat-dialog-title>Install Angular</h2>
					<mat-dialog-content>
						<h3>DEVELOP ACROSS ALL PLATFORMS</h3>
						<p>Learn one way to build applications with Angular and reuse your code and abilities to build
							apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>
						<h3>SPEED &amp; PERFORMANCE</h3>
						<p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
							Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements
							by building data models on RxJS, Immutable.js or another push-model.</p>
						<h3>INCREDIBLE TOOLING</h3>
						<p>Build features quickly with simple, declarative templates. Extend the template language with your own
							components and use a wide array of existing components. Get immediate Angular-specific help and feedback
							with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather
							than trying to make the code work.</p>
						<h3>LOVED BY MILLIONS</h3>
						<p>From prototype through global deployment, Angular delivers the productivity and scalable infrastructure
							that supports Google's largest applications.</p>
					</mat-dialog-content>
					<mat-dialog-actions>
						<button mat-button mat-dialog-close>Cancel</button>
						<button mat-button [mat-dialog-close]="true" cdkFocusInitial>Install</button>
					</mat-dialog-actions>
				</div>
			</div>
		</div>`,
    })
], Modal3Component);

let Modal2Component = class Modal2Component {
    constructor(data) {
        this.data = data;
    }
};
Modal2Component.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
Modal2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-modal2',
        template: `
		<div class="col-xl-12">
			<div class="col-xl-12">
				<div class="kt-modal2__container">
					<h1 mat-dialog-title>Favorite Animal</h1>
					<div mat-dialog-content>
						My favorite animal is:
						<ul>
							<li>
								<span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
							</li>
							<li>
								<span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
							</li>
							<li>
								<span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], Modal2Component);

let ModalComponent = class ModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-modal',
        template: `
		<div class="col-xl-12">
			<div class="col-xl-12">
				<br/>
				<h1 mat-dialog-title>Hi {{data.name}}</h1>
				<div mat-dialog-content>
					<p>What's your favorite animal?</p>
					<mat-form-field>
						<input matInput [(ngModel)]="data.animal">
					</mat-form-field>
				</div>
				<div mat-dialog-actions>
					<button mat-button (click)="onNoClick()">No Thanks</button>
					<button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
				</div>
				<br/>
			</div>
		</div>`,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ModalComponent);

const basic = {
    beforeCodeTitle: 'Dialog Overview',
    htmlCode: `
		<h1 mat-dialog-title>Hi {{data.name}}</h1>
		<div mat-dialog-content>
		  <p>What's your favorite animal?</p>
		  <mat-form-field>
			<input matInput [(ngModel)]="data.animal">
		  </mat-form-field>
		</div>
		<div mat-dialog-actions>
		  <button mat-button (click)="onNoClick()">No Thanks</button>
		  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
		</div>
`,
    tsCode: `
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';\n
/**
* @title Dialog Overview
*/
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {\n
  animal: string;
  name: string;\n
  constructor(public dialog: MatDialog) {}\n
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });\n
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}\n
@Component({
  selector: 'dialog-overview-example-dialog',
  template: \`
    <h1 mat-dialog-title>Hi {{data.name}}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>\`
})
export class DialogOverviewExampleDialog {\n
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }\n
  onNoClick(): void {
    this.dialogRef.close();
  }\n
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const injecting = {
    beforeCodeTitle: 'Injecting data when opening a dialog',
    htmlCode: '<button mat-button (click)="openDialog()">Open dialog</button>',
    tsCode: `
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';\n
/**
* @title Injecting data when opening a dialog
*/
@Component({
  selector: 'dialog-data-example',
  templateUrl: 'dialog-data-example.html',
  styleUrls: ['dialog-data-example.css']
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}\n
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
     }
    });
  }
}\n
@Component({
  selector: 'dialog-data-example-dialog',
  template: \`
    <h1 mat-dialog-title>Favorite Animal</h1>
    <div mat-dialog-content>
      My favorite animal is:
      <ul>
        <li>
          <span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
        </li>
        <li>
          <span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
        </li>
        <li>
          <span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
        </li>
      </ul>
    </div>
	\`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const header = {
    beforeCodeTitle: 'Dialog with header, scrollable content and actions',
    htmlCode: `
<button mat-button (click)="openDialog()">Open dialog</button>
`,
    tsCode: `
import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';\n
/**
* @title Dialog with header, scrollable content and actions
*/
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['dialog-content-example.css'],
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}\n
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });\n
    dialogRef.afterClosed().subscribe(result => {
      console.log(\`Dialog result: \${result}\`);
    });
  }
}\n
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let DialogComponent = class DialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.animal2 = '';
        this.animalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    ngOnInit() {
        this.animal$ = this.animalSubject.asObservable();
        this.animal$.subscribe(result => {
            this.animal = result;
        });
        this.exampleBasic = basic;
        this.exampleInjecting = injecting;
        this.examplHeader = header;
    }
    openDialog() {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '280px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.animalSubject.next(result);
            }
        });
    }
    openDialog2() {
        this.dialog.open(Modal2Component, {
            data: {
                animal: 'panda'
            }
        });
    }
    openDialog3() {
        const dialogRef = this.dialog.open(Modal3Component, {
            height: '350px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
};
DialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-dialog',
        template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/dialog/dialog.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
    })
], DialogComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MaterialTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTooltipComponent", function() { return MaterialTooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const basic = {
    beforeCodeTitle: 'Basic table',
    htmlCode: `
<div class="example-container mat-elevation-z8">
  <mat-table #table [dataSource]="dataSource">
    <!--- Note that these columns can be defined in any order.
				The actual rendered columns are set as a property on the row definition" -->
    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
    </ng-container>
    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>
    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
    </ng-container>
    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
    </ng-container>
    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>
</div>
`,
    tsCode: `
import {Component} from '@angular/core';
/**
* @title Basic tooltip
*/
@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.html',
  styleUrls: ['tooltip-overview-example.css'],
})
export class TooltipOverviewExample {}
		`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const customPosition = {
    beforeCodeTitle: 'Tooltip with custom position',
    htmlCode: `
<div class="example-tooltip-host" matTooltip="Tooltip!" [matTooltipPosition]="position">
  <span>Show tooltip</span>
  <mat-form-field>
    <mat-select class="example-select" [(ngModel)]="position">
      <mat-option value="before">Before</mat-option>
      <mat-option value="after">After</mat-option>
      <mat-option value="above">Above</mat-option>
      <mat-option value="below">Below</mat-option>
      <mat-option value="left">Left</mat-option>
      <mat-option value="right">Right</mat-option>
    </mat-select>
  </mat-form-field>
</div>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip with custom position
*/
@Component({
  selector: 'tooltip-position-example',
  templateUrl: 'tooltip-position-example.html',
  styleUrls: ['tooltip-position-example.css'],
})
export class TooltipPositionExample {
  position = 'before';
}
		`,
    cssCode: `
.example-tooltip-host {
  display: inline-flex;
  align-items: center;
  margin: 50px;
}
.example-select {
  margin: 0 10px;
}
		`,
    viewCode: ``,
    isCodeVisible: false
};
const showHigh = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    beforeCodeDescription: ``,
    htmlCode: `
<button mat-raised-button matTooltip="Tooltip!" matTooltipShowDelay="1000">
  My tooltip waits one second to show
</button>
<button mat-raised-button matTooltip="Tooltip!" matTooltipHideDelay="2000">
  My tooltip waits two seconds to hide
</button>`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip with a show and hide delay
*/
@Component({
  selector: 'tooltip-delay-example',
  templateUrl: 'tooltip-delay-example.html',
  styleUrls: ['tooltip-delay-example.css'],
})
export class TooltipDelayExample {}
`,
    cssCode: `
button {
  margin: 8px;
}
		`,
    viewCode: ``,
    isCodeVisible: false
};
const delay = {
    beforeCodeTitle: 'Tooltip with a show and hide delay',
    htmlCode: `
<button mat-raised-button matTooltip="By default, I delay">
  Button with delay-default tooltip
</button>
		`,
    tsCode: `
import {Component} from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';\n
/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};\n
/**
* @title Tooltip with a show and hide delay
*/
@Component({
  selector: 'tooltip-modified-defaults-example',
  templateUrl: 'tooltip-modified-defaults-example.html',
  styleUrls: ['tooltip-modified-defaults-example.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
})
export class TooltipModifiedDefaultsExample {}
		`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false
};
const manually = {
    beforeCodeTitle: 'Tooltip that can be manually shown/hidden.',
    htmlCode: `
<button mat-raised-button (click)="tooltip.show()"> Show tooltip </button>
<span matTooltip="This is the tooltip message" #tooltip="matTooltip">
  I have a tooltip
</span>
		`,
    tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Tooltip that can be manually shown/hidden.
*/
@Component({
  selector: 'tooltip-manual-example',
  templateUrl: 'tooltip-manual-example.html',
  styleUrls: ['tooltip-manual-example.css'],
})
export class TooltipManualExample {}
		`,
    viewCode: ``,
    isCodeVisible: false
};
let MaterialTooltipComponent = class MaterialTooltipComponent {
    constructor() {
        this.position = 'before';
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleCustomPosition = customPosition;
        this.exampleShowHigh = showHigh;
        this.exampleDelay = delay;
        this.exampleManually = manually;
    }
};
MaterialTooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-material-tooltip',
        template: __webpack_require__(/*! raw-loader!./material-tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/material-tooltip/material-tooltip.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], MaterialTooltipComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/snackbar/pizza-party.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/snackbar/pizza-party.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PizzaPartyComponent = class PizzaPartyComponent {
};
PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-snack-bar-component-example-snack',
        template: `
	<span class="example-pizza-party">Pizza party!!! 🍕</span>
	`,
        styles: [".example-pizza-party { color: hotpink; }"]
    })
], PizzaPartyComponent);



/***/ }),

/***/ "./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pizza_party_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizza-party.component */ "./src/metronic/views/pages/material/popups-and-modals/snackbar/pizza-party.component.ts");




const basic = {
    beforeCodeTitle: 'Basic snack-bar',
    htmlCode: `
<mat-form-field>
  <input matInput value="Disco party!" placeholder="Message" #message>
</mat-form-field>
<mat-form-field>
  <input matInput value="Dance" placeholder="Action" #action>
</mat-form-field>
<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
`,
    tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Basic snack-bar
*/
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const custom = {
    beforeCodeTitle: 'Snack-bar with a custom component',
    htmlCode: `
<button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
  Pizza party
</button>
`,
    tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Snack-bar with a custom component
*/
@Component({
  selector: 'snack-bar-component-example',
  templateUrl: 'snack-bar-component-example.html',
})
export class SnackBarComponentExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
}\n
@Component({
  selector: 'snack-bar-component-example-snack',
  template: \`
	<span _ngcontent-c3="" class="example-pizza-party">
      Pizza party!!! 🍕
    </span>\`,
  styles: [\`.example-pizza-party { color: hotpink; }\`],
})
export class PizzaPartyComponent {}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
const dismissal = {
    beforeCodeTitle: 'Dismissal example with 6 seconds duration',
    htmlCode: `
<mat-form-field>
  <input matInput value="Disco party!" placeholder="Message" #message>
</mat-form-field>
<mat-form-field>
  <input matInput value="Dance" placeholder="Action" #action>
</mat-form-field>
<button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>
`,
    tsCode: `
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';\n
/**
* @title Basic snack-bar
*/
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css'],
})
export class SnackBarOverviewExample {
  constructor(public snackBar: MatSnackBar) {}\n
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
`,
    cssCode: ``,
    viewCode: ``,
    isCodeVisible: false,
    isExampleExpanded: true
};
let SnackbarComponent = class SnackbarComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    openSnackBar2() {
        this.snackBar.openFromComponent(_pizza_party_component__WEBPACK_IMPORTED_MODULE_3__["PizzaPartyComponent"], {
            duration: 500,
        });
    }
    openSnackBar3(message, action) {
        this.snackBar.open(message, action, {
            duration: 6500,
        });
    }
    ngOnInit() {
        this.exampleBasic = basic;
        this.exampleCustom = custom;
        this.exampleDismissal = dismissal;
    }
};
SnackbarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-snackbar',
        template: __webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/pages/material/popups-and-modals/snackbar/snackbar.component.html"),
        styles: ["\n\t"]
    })
], SnackbarComponent);



/***/ })

}]);
//# sourceMappingURL=metronic-views-pages-material-material-module-es2015.js.map