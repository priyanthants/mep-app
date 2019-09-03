(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["metronic-views-theme-content-builder-builder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/metronic/views/theme/content/builder/builder.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/metronic/views/theme/content/builder/builder.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\r\n\tThe layout builder helps to configure the layout with preferred options and preview it in real time.\r\n\tThe configured layout options will be saved until you change or reset them.\r\n\tTo use the layout builder choose the layout options and click the <code>Preview</code> button to preview the changes.\r\n</kt-notice>\r\n\r\n<form class=\"kt-form kt-form--label-right\" novalidate #form=\"ngForm\" (ngSubmit)=\"submitPreview($event)\">\r\n\t<kt-portlet [class]=\"'kt-portlet--tabs'\">\r\n\t\t<kt-portlet-header [noTitle]=\"true\">\r\n\t\t\t<ng-container ktPortletTools>\r\n\t\t\t\t<ul ktTabClickEvent class=\"nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-left nav-tabs-line-primary\" role=\"tablist\">\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-1')\" class=\"nav-link active\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tSkins\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-2')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tPage\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-3')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tHeader\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-4')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tSubheader\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-5')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tContent\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-6')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tAside\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-7')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\r\n\t\t\t\t\t\t\tFooter\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</ng-container>\r\n\t\t</kt-portlet-header>\r\n\t\t<kt-portlet-body>\r\n\t\t\t<ngb-tabset #tab=\"ngbTabset\">\r\n\t\t\t\t<ngb-tab id=\"tab-id-1\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Skin:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][self][skin]\" [(ngModel)]=\"model.header.self.skin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light (Default)</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Skin:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][menu][desktop][submenu][skin]\" [(ngModel)]=\"model.header.menu.desktop.submenu.skin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light (Default)</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Logo Bar Skin:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[brand][self][skin]\" [(ngModel)]=\"model.brand.self.skin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark (Default)</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select logo bar skin</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Aside Skin:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[aside][self][skin]\" [(ngModel)]=\"model.aside.self.skin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark (Default)</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-2\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Page Loader:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[loader][type]\" [(ngModel)]=\"model.loader.type\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Disabled</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"default\">Spinner</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-message\">Spinner & Message</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-logo\">Spinner & Logo</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select page loading indicator</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-3\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Desktop Header:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][desktop]\" [(ngModel)]=\"model.header.self.fixed.desktop\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for desktop mode</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Mobile Fixed Header:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][mobile]\" [(ngModel)]=\"model.header.self.fixed.mobile\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for mobile mode</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"kt-separator kt-separator--space-lg kt-separator--border-dashed\"></div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display Header Menu:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][menu][self][display]\" [(ngModel)]=\"model.header.menu.self.display\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display header menu</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Layout:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][menu][self][layout]\" [(ngModel)]=\"model.header.menu.self.layout\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"default\">Default</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"tab\">Tab</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header menu layout style</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"kt-separator kt-separator--space-lg kt-separator--border-dashed\"></div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Arrows:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][menu][self][root-arrow]\" [(ngModel)]=\"model.header.menu.self['root-arrow']\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable header menu root link arrows</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-4\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display Subheader:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t        <input type=\"checkbox\" name=\"builder[subheader][display]\" [(ngModel)]=\"model.subheader.display\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display subheader</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Subheader:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[subheader][fixed]\" [(ngModel)]=\"model.subheader.fixed\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed(sticky) subheader. Requires <code>Solid</code> subheader style.</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][width]\" [(ngModel)]=\"model.subheader.width\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Subheader Style:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][style]\" [(ngModel)]=\"model.subheader.style\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"transparent\">Transparent</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"solid\">Solid</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select subheader style</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Subheader Layout:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][layout]\" [(ngModel)]=\"model.subheader.layout\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v1\">Subheader 1</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v2\">Subheader 2</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v3\">Subheader 3</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select subheader layout</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-5\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[content][width]\" [(ngModel)]=\"model.content.width\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-6\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][display]\" [(ngModel)]=\"model.aside.self.display\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display aside menu</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][fixed]\" [(ngModel)]=\"model.aside.self.fixed\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set fixed aside layout</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Minimize:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][minimize][toggle]\" [(ngModel)]=\"model.aside.self.minimize.toggle\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Allow aside minimizing</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Default Minimize:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][minimize][default]\" [(ngModel)]=\"model.aside.self.minimize.default\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set aside minimized by default</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Submenu Toggle:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[aside][menu][dropdown]\" [(ngModel)]=\"model.aside.menu.dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Dropdown</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">Accordion</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select submenu toggle mode(works only when <code>Fixed Mode</code> is disabled)</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t\t<ngb-tab id=\"tab-id-7\">\r\n\t\t\t\t\t<ng-template ngbTabContent>\r\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\r\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Footer:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\r\n\t\t\t\t\t\t\t\t\t    <label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[footer][self][fixed]\" [(ngModel)]=\"model.footer.self.fixed\" value=\"true\"/>\r\n\t\t\t\t\t\t\t\t\t        <span></span>\r\n\t\t\t\t\t\t\t\t\t    </label>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set fixed footer</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[footer][self][width]\" [(ngModel)]=\"model.footer.self.width\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ngb-tab>\r\n\t\t\t</ngb-tabset>\r\n\t\t</kt-portlet-body>\r\n\t\t<kt-portlet-footer>\r\n\t\t\t<div class=\"kt-form__actions\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-4\"></div>\r\n\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t<button type=\"submit\" name=\"builder_submit\" class=\"btn btn-primary\">\r\n\t\t\t\t\t\t\t<i class=\"la la-eye\"></i>\r\n\t\t\t\t\t\t\tPreview\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"resetPreview($event)\" name=\"builder_reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t<i class=\"la la-recycle\"></i>\r\n\t\t\t\t\t\t\tReset\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</kt-portlet-footer>\r\n\t</kt-portlet>\r\n</form>\r\n\r\n<kt-portlet>\r\n\t<kt-portlet-header [title]=\"'Generated Config <small>can be used for layout config in <code>/src/app/core/_config/layout.config.ts</code></small>'\">\r\n\t</kt-portlet-header>\r\n\t<kt-portlet-body>\r\n\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '50vh', 'position': 'relative'}\">\r\n\t\t\t<pre><code [highlight]=\"model|json\"></code></pre>\r\n\t\t</div>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/metronic/views/theme/content/builder/builder.component.scss":
/*!*************************************************************************!*\
  !*** ./src/metronic/views/theme/content/builder/builder.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tZXRyb25pYy92aWV3cy90aGVtZS9jb250ZW50L2J1aWxkZXIvRDpcXGN1cnJlbnRcXG1lcmNoYW50IHBvcnRyYWxcXG5ldy12ZXJzaW9uXFwyXFx4bHMtbWVyY2hhbnQtZW5nYWdlbWVudC1wb3J0YWwvc3JjXFxtZXRyb25pY1xcdmlld3NcXHRoZW1lXFxjb250ZW50XFxidWlsZGVyXFxidWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL21ldHJvbmljL3ZpZXdzL3RoZW1lL2NvbnRlbnQvYnVpbGRlci9idWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsYUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9tZXRyb25pYy92aWV3cy90aGVtZS9jb250ZW50L2J1aWxkZXIvYnVpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHQ6Om5nLWRlZXAge1xyXG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIjpob3N0IDo6bmctZGVlcCBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/metronic/views/theme/content/builder/builder.component.ts":
/*!***********************************************************************!*\
  !*** ./src/metronic/views/theme/content/builder/builder.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/metronic/core/_base/layout/index.ts");

// Angular

// Layout

let BuilderComponent = class BuilderComponent {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    constructor(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        this.model = this.layoutConfigService.getConfig();
    }
    /**
     * Reset preview
     *
     * @param e: Event
     */
    resetPreview(e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    }
    /**
     * Submit preview
     *
     * @param e: Event
     */
    submitPreview(e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    }
};
BuilderComponent.ctorParameters = () => [
    { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: true })
], BuilderComponent.prototype, "form", void 0);
BuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kt-builder',
        template: __webpack_require__(/*! raw-loader!./builder.component.html */ "./node_modules/raw-loader/index.js!./src/metronic/views/theme/content/builder/builder.component.html"),
        styles: [__webpack_require__(/*! ./builder.component.scss */ "./src/metronic/views/theme/content/builder/builder.component.scss")]
    })
], BuilderComponent);



/***/ }),

/***/ "./src/metronic/views/theme/content/builder/builder.module.ts":
/*!********************************************************************!*\
  !*** ./src/metronic/views/theme/content/builder/builder.module.ts ***!
  \********************************************************************/
/*! exports provided: BuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModule", function() { return BuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/metronic/views/partials/partials.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/metronic/core/core.module.ts");
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builder.component */ "./src/metronic/views/theme/content/builder/builder.component.ts");

// Angular





// NgBootstrap

// Perfect Scrollbar

// Partials

// Highlight JS

// CoreModule

// Builder component

let BuilderModule = class BuilderModule {
};
BuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]
                }
            ]),
            // ng-bootstrap modules
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
        ],
        providers: [],
        declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]]
    })
], BuilderModule);



/***/ })

}]);
//# sourceMappingURL=metronic-views-theme-content-builder-builder-module-es2015.js.map