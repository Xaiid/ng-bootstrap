/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./datepicker-navigation-select.ngfactory";
import * as i2 from "./datepicker-navigation-select";
import * as i3 from "./datepicker-i18n";
import * as i4 from "./ngb-calendar";
import * as i5 from "@angular/common";
import * as i6 from "./datepicker-navigation";
var styles_NgbDatepickerNavigation = ["[_nghost-%COMP%] {\n      height: 2rem;\n      line-height: 1.85rem;\n    }\n    .collapsed[_nghost-%COMP%] {\n      margin-bottom: -2rem;        \n    }\n    .ngb-dp-navigation-chevron[_ngcontent-%COMP%]::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n      width: 0.75em;\n      margin: 0 0 0 0.5rem;\n    }    \n    .ngb-dp-navigation-chevron.right[_ngcontent-%COMP%]:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n      margin: 0 0.5rem 0 0;\n    }\n    .btn-link[_ngcontent-%COMP%] {\n      cursor: pointer;\n      outline: 0;\n    }\n    .btn-link[disabled][_ngcontent-%COMP%] {\n      cursor: not-allowed;\n      opacity: .65;\n    }"];
var RenderType_NgbDatepickerNavigation = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepickerNavigation, data: {} });
export { RenderType_NgbDatepickerNavigation as RenderType_NgbDatepickerNavigation };
function View_NgbDatepickerNavigation_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-datepicker-navigation-select", [["class", "d-block"]], [[4, "width", "rem"]], [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.selectDate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i1.View_NgbDatepickerNavigationSelect_0, i1.RenderType_NgbDatepickerNavigationSelect)), i0.ɵdid(1, 573440, null, 0, i2.NgbDatepickerNavigationSelect, [i3.NgbDatepickerI18n, i4.NgbCalendar], { date: [0, "date"], disabled: [1, "disabled"], maxDate: [2, "maxDate"], minDate: [3, "minDate"] }, { select: "select" }), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.date; var currVal_2 = _co.disabled; var currVal_3 = _co.maxDate; var currVal_4 = _co.minDate; _ck(_v, 1, 0, currVal_1, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.months * 9); _ck(_v, 0, 0, currVal_0); }); }
export function View_NgbDatepickerNavigation_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 3, "button", [["class", "btn-link"], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.doNavigate(_co.navigation.PREV) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["    \n    "])), (_l()(), i0.ɵted(-1, null, ["\n    \n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepickerNavigation_1)), i0.ɵdid(7, 16384, null, 0, i5.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    \n    "])), (_l()(), i0.ɵeld(9, 0, null, null, 3, "button", [["class", "btn-link"], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (!!_co.doNavigate(_co.navigation.NEXT) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(11, 0, null, null, 0, "span", [["class", "ngb-dp-navigation-chevron right"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.showSelect; _ck(_v, 7, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prevDisabled(); _ck(_v, 1, 0, currVal_0); var currVal_2 = _co.nextDisabled(); _ck(_v, 9, 0, currVal_2); }); }
export function View_NgbDatepickerNavigation_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-datepicker-navigation", [["class", "d-flex justify-content-between"]], [[2, "collapsed", null]], null, null, View_NgbDatepickerNavigation_0, RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i6.NgbDatepickerNavigation, [i3.NgbDatepickerI18n, i4.NgbCalendar], null, null)], null, function (_ck, _v) { var currVal_0 = !i0.ɵnov(_v, 1).showSelect; _ck(_v, 0, 0, currVal_0); }); }
var NgbDatepickerNavigationNgFactory = i0.ɵccf("ngb-datepicker-navigation", i6.NgbDatepickerNavigation, View_NgbDatepickerNavigation_Host_0, { date: "date", disabled: "disabled", maxDate: "maxDate", minDate: "minDate", months: "months", showSelect: "showSelect", showWeekNumbers: "showWeekNumbers" }, { navigate: "navigate", select: "select" }, []);
export { NgbDatepickerNavigationNgFactory as NgbDatepickerNavigationNgFactory };
//# sourceMappingURL=datepicker-navigation.ngfactory.js.map