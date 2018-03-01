/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./progressbar";
import * as i3 from "./progressbar-config";
var styles_NgbProgressbar = [];
var RenderType_NgbProgressbar = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbProgressbar, data: {} });
export { RenderType_NgbProgressbar as RenderType_NgbProgressbar };
function View_NgbProgressbar_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", "%"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getPercentValue(); _ck(_v, 1, 0, currVal_0); }); }
export function View_NgbProgressbar_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 8, "div", [["class", "progress"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(3, 0, null, null, 5, "div", [["aria-valuemin", "0"], ["role", "progressbar"]], [[8, "className", 0], [4, "width", "%"], [1, "aria-valuenow", 0], [1, "aria-valuemax", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbProgressbar_1)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.showValue; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵinlineInterpolate(3, "progress-bar", (_co.type ? (" bg-" + _co.type) : ""), "", (_co.animated ? " progress-bar-animated" : ""), "", (_co.striped ? " progress-bar-striped" : ""), ""); var currVal_1 = _co.getPercentValue(); var currVal_2 = _co.getValue(); var currVal_3 = _co.max; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
export function View_NgbProgressbar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-progressbar", [], null, null, null, View_NgbProgressbar_0, RenderType_NgbProgressbar)), i0.ɵdid(1, 49152, null, 0, i2.NgbProgressbar, [i3.NgbProgressbarConfig], null, null)], null, null); }
var NgbProgressbarNgFactory = i0.ɵccf("ngb-progressbar", i2.NgbProgressbar, View_NgbProgressbar_Host_0, { max: "max", animated: "animated", striped: "striped", showValue: "showValue", type: "type", value: "value" }, {}, ["*"]);
export { NgbProgressbarNgFactory as NgbProgressbarNgFactory };
//# sourceMappingURL=progressbar.ngfactory.js.map