import {DOCUMENT} from '@angular/common';
import {
  ApplicationRef,
  Injectable,
  Injector,
  Inject,
  ReflectiveInjector,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef
} from '@angular/core';

import {ContentRef} from '../util/popup';
import {isDefined, isString} from '../util/util';

import {NgbModalBackdrop} from './modal-backdrop';
import {NgbModalWindow} from './modal-window';
import {NgbActiveModal, NgbModalRef} from './modal-ref';

@Injectable()
export class NgbModalStack {
  private _backdropFactory: ComponentFactory<NgbModalBackdrop>;
  private _windowFactory: ComponentFactory<NgbModalWindow>;
  private _document: any;
  private _windowAttributes = ['backdrop', 'keyboard', 'size', 'windowClass'];

  constructor(
      @Inject(DOCUMENT) document, private _applicationRef: ApplicationRef, private _injector: Injector,
      private _componentFactoryResolver: ComponentFactoryResolver) {
    this._document = document;
  }

  open(content: any, options): NgbModalRef {
    this._buildFactories();
    const containerEl =
        isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;

    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container}" was not found in the DOM.`);
    }

    const activeModal = new NgbActiveModal();
    const contentRef = this._getContentRef(options.injector || this._injector, content, activeModal);

    let backdropCmptRef: ComponentRef<NgbModalBackdrop> =
        options.backdrop !== false ? this._attachBackdrop(containerEl) : null;
    let windowCmptRef: ComponentRef<NgbModalWindow> = this._attachWindowComponent(containerEl, contentRef);
    let ngbModalRef: NgbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

    activeModal.close = (result: any) => { ngbModalRef.close(result); };
    activeModal.dismiss = (reason: any) => { ngbModalRef.dismiss(reason); };

    this._applyWindowOptions(windowCmptRef.instance, options);
    return ngbModalRef;
  }

  // Cant build factories on constructor when using lazy loading
  private _buildFactories() {
    this._buildBackdropFactory();
    this._buildWindowFactory();
  }

  private _buildBackdropFactory() {
    if (this._backdropFactory == null) {
      this._backdropFactory = this._componentFactoryResolver.resolveComponentFactory(NgbModalBackdrop);
    }
  }

  private _buildWindowFactory() {
    if (this._windowFactory == null) {
      this._windowFactory = this._windowFactory =
          this._componentFactoryResolver.resolveComponentFactory(NgbModalWindow);
    }
  }

  private _attachBackdrop(containerEl: any): ComponentRef<NgbModalBackdrop> {
    let backdropCmptRef = this._backdropFactory.create(this._injector);
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }

  private _attachWindowComponent(containerEl: any, contentRef: any): ComponentRef<NgbModalWindow> {
    let windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }

  private _applyWindowOptions(windowInstance: NgbModalWindow, options: Object): void {
    this._windowAttributes.forEach((optionName: string) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }

  private _getContentRef(contentInjector: Injector, content: any, context: NgbActiveModal): ContentRef {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, context);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, content, context);
    }
  }

  private _createFromTemplateRef(content: TemplateRef<any>, context: NgbActiveModal): ContentRef {
    const viewRef = content.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }

  private _createFromString(content: string): ContentRef {
    const component = this._document.createTextNode(`${content}`);
    this._document.body.appendChild(component);
    return new ContentRef([[component]]);
  }

  private _createFromComponent(contentInjector: Injector, content: any, context: NgbActiveModal): ContentRef {
    const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
    const modalContentInjector =
        ReflectiveInjector.resolveAndCreate([{provide: NgbActiveModal, useValue: context}], contentInjector);
    const componentRef = contentCmptFactory.create(modalContentInjector);
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
  }
}
