import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Injectable, Injector, Inject, ReflectiveInjector, ComponentFactoryResolver, TemplateRef } from '@angular/core';
import { ContentRef } from '../util/popup';
import { isDefined, isString } from '../util/util';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbModalWindow } from './modal-window';
import { NgbActiveModal, NgbModalRef } from './modal-ref';
var NgbModalStack = (function () {
    function NgbModalStack(document, _applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._windowAttributes = ['backdrop', 'keyboard', 'size', 'windowClass'];
        this._document = document;
    }
    NgbModalStack.prototype.open = function (content, options) {
        this._buildFactories();
        var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
        if (!containerEl) {
            throw new Error("The specified modal container \"" + options.container + "\" was not found in the DOM.");
        }
        var activeModal = new NgbActiveModal();
        var contentRef = this._getContentRef(options.injector || this._injector, content, activeModal);
        var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
        var windowCmptRef = this._attachWindowComponent(containerEl, contentRef);
        var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = function (result) { ngbModalRef.close(result); };
        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    // Cant build factories on constructor when using lazy loading
    // Cant build factories on constructor when using lazy loading
    NgbModalStack.prototype._buildFactories = 
    // Cant build factories on constructor when using lazy loading
    function () {
        this._buildBackdropFactory();
        this._buildWindowFactory();
    };
    NgbModalStack.prototype._buildBackdropFactory = function () {
        if (this._backdropFactory == null) {
            this._backdropFactory = this._componentFactoryResolver.resolveComponentFactory(NgbModalBackdrop);
        }
    };
    NgbModalStack.prototype._buildWindowFactory = function () {
        if (this._windowFactory == null) {
            this._windowFactory = this._windowFactory =
                this._componentFactoryResolver.resolveComponentFactory(NgbModalWindow);
        }
    };
    NgbModalStack.prototype._attachBackdrop = function (containerEl) {
        var backdropCmptRef = this._backdropFactory.create(this._injector);
        this._applicationRef.attachView(backdropCmptRef.hostView);
        containerEl.appendChild(backdropCmptRef.location.nativeElement);
        return backdropCmptRef;
    };
    NgbModalStack.prototype._attachWindowComponent = function (containerEl, contentRef) {
        var windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        return windowCmptRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        this._windowAttributes.forEach(function (optionName) {
            if (isDefined(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (contentInjector, content, context) {
        if (!content) {
            return new ContentRef([]);
        }
        else if (content instanceof TemplateRef) {
            return this._createFromTemplateRef(content, context);
        }
        else if (isString(content)) {
            return this._createFromString(content);
        }
        else {
            return this._createFromComponent(contentInjector, content, context);
        }
    };
    NgbModalStack.prototype._createFromTemplateRef = function (content, context) {
        var viewRef = content.createEmbeddedView(context);
        this._applicationRef.attachView(viewRef);
        return new ContentRef([viewRef.rootNodes], viewRef);
    };
    NgbModalStack.prototype._createFromString = function (content) {
        var component = this._document.createTextNode("" + content);
        this._document.body.appendChild(component);
        return new ContentRef([[component]]);
    };
    NgbModalStack.prototype._createFromComponent = function (contentInjector, content, context) {
        var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
        var modalContentInjector = ReflectiveInjector.resolveAndCreate([{ provide: NgbActiveModal, useValue: context }], contentInjector);
        var componentRef = contentCmptFactory.create(modalContentInjector);
        this._applicationRef.attachView(componentRef.hostView);
        return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    };
    NgbModalStack.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgbModalStack.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: ApplicationRef, },
        { type: Injector, },
        { type: ComponentFactoryResolver, },
    ]; };
    return NgbModalStack;
}());
export { NgbModalStack };
//# sourceMappingURL=modal-stack.js.map