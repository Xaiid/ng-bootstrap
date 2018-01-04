"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var modal_dismiss_reasons_1 = require("./modal-dismiss-reasons");
var NgbModalWindow = /** @class */ (function () {
    function NgbModalWindow(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new core_1.EventEmitter();
    }
    NgbModalWindow.prototype.backdropClick = function ($event) {
        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.BACKDROP_CLICK);
        }
    };
    NgbModalWindow.prototype.escKey = function ($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.ESC);
        }
    };
    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
    NgbModalWindow.prototype.ngOnInit = function () {
        this._elWithFocus = document.activeElement;
        this._renderer.addClass(document.body, 'modal-open');
    };
    NgbModalWindow.prototype.ngAfterViewInit = function () {
        if (!this._elRef.nativeElement.contains(document.activeElement)) {
            this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
        }
    };
    NgbModalWindow.prototype.ngOnDestroy = function () {
        var body = document.body;
        var elWithFocus = this._elWithFocus;
        var elementToFocus;
        if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
        }
        else {
            elementToFocus = body;
        }
        elementToFocus['focus'].apply(elementToFocus, []);
        this._elWithFocus = null;
        this._renderer.removeClass(body, 'modal-open');
    };
    __decorate([
        core_1.Input()
    ], NgbModalWindow.prototype, "backdrop");
    __decorate([
        core_1.Input()
    ], NgbModalWindow.prototype, "keyboard");
    __decorate([
        core_1.Input()
    ], NgbModalWindow.prototype, "size");
    __decorate([
        core_1.Input()
    ], NgbModalWindow.prototype, "windowClass");
    __decorate([
        core_1.Output('dismiss')
    ], NgbModalWindow.prototype, "dismissEvent");
    NgbModalWindow = __decorate([
        core_1.Component({
            selector: 'ngb-modal-window',
            host: {
                '[class]': '"modal fade show animated fadeIn" + (windowClass ? " " + windowClass : "")',
                'role': 'dialog',
                'tabindex': '-1',
                'style': 'display: block;',
                '(keyup.esc)': 'escKey($event)',
                '(click)': 'backdropClick($event)'
            },
            template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
        })
    ], NgbModalWindow);
    return NgbModalWindow;
}());
exports.NgbModalWindow = NgbModalWindow;
