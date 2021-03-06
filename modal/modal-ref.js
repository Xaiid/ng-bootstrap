import { Injectable, ComponentRef } from '@angular/core';
import { ContentRef } from '../util/popup';
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var NgbActiveModal = (function () {
    function NgbActiveModal() {
    }
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbActiveModal.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) { };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbActiveModal.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) { };
    NgbActiveModal.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgbActiveModal.ctorParameters = function () { return []; };
    return NgbActiveModal;
}());
export { NgbActiveModal };
/**
 * A reference to a newly opened modal.
 */
var NgbModalRef = (function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () { });
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: /**
           * The instance of component used as modal's content.
           * Undefined when a TemplateRef is used as modal's content.
           */
        function () {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set: 
        // only needed to keep TS1.8 compatibility
        function (instance) { },
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbModalRef.prototype.close = /**
       * Can be used to close a modal, passing an optional result.
       */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbModalRef.prototype.dismiss = /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    function (reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var _this = this;
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.classList.remove('fadeIn');
        windowNativeEl.classList.add('fadeOut');
        setTimeout(function () {
            if (windowNativeEl && windowNativeEl.parentNode) {
                windowNativeEl.parentNode.removeChild(windowNativeEl);
            }
            if (_this._windowCmptRef && _this._windowCmptRef.destroy) {
                _this._windowCmptRef.destroy();
            }
            _this._windowCmptRef = null;
        }, 500);
        if (this._backdropCmptRef) {
            var backdropNativeEl_1 = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl_1.classList.remove('fadeIn');
            backdropNativeEl_1.classList.add('fadeOut');
            setTimeout(function () {
                if (backdropNativeEl_1 && backdropNativeEl_1.parentNode) {
                    backdropNativeEl_1.parentNode.removeChild(backdropNativeEl_1);
                }
                if (_this._backdropCmptRef && _this._backdropCmptRef.destroy) {
                    _this._backdropCmptRef.destroy();
                }
                _this._backdropCmptRef = null;
            }, 800);
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
    };
    NgbModalRef.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgbModalRef.ctorParameters = function () { return [
        { type: ComponentRef, },
        { type: ContentRef, },
        { type: ComponentRef, },
        { type: Function, },
    ]; };
    return NgbModalRef;
}());
export { NgbModalRef };
//# sourceMappingURL=modal-ref.js.map