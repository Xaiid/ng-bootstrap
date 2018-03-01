import { ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { NgbModalRef } from './modal-ref';
export declare class NgbModalStack {
    private _applicationRef;
    private _injector;
    private _componentFactoryResolver;
    private _backdropFactory;
    private _windowFactory;
    private _document;
    private _windowAttributes;
    constructor(document: any, _applicationRef: ApplicationRef, _injector: Injector, _componentFactoryResolver: ComponentFactoryResolver);
    open(content: any, options: any): NgbModalRef;
    private _buildFactories();
    private _buildBackdropFactory();
    private _buildWindowFactory();
    private _attachBackdrop(containerEl);
    private _attachWindowComponent(containerEl, contentRef);
    private _applyWindowOptions(windowInstance, options);
    private _getContentRef(contentInjector, content, context);
    private _createFromTemplateRef(content, context);
    private _createFromString(content);
    private _createFromComponent(contentInjector, content, context);
}
