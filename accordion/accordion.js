import { Component, ContentChild, ContentChildren, Directive, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { isString } from '../util/util';
import { NgbAccordionConfig } from './accordion-config';
var nextId = 0;
/**
 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
 */
var NgbPanelTitle = (function () {
    function NgbPanelTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelTitle.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbPanelTitle]' },] },
    ];
    /** @nocollapse */
    NgbPanelTitle.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return NgbPanelTitle;
}());
export { NgbPanelTitle };
/**
 * This directive must be used to wrap accordion panel content.
 */
var NgbPanelContent = (function () {
    function NgbPanelContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbPanelContent.decorators = [
        { type: Directive, args: [{ selector: 'ng-template[ngbPanelContent]' },] },
    ];
    /** @nocollapse */
    NgbPanelContent.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return NgbPanelContent;
}());
export { NgbPanelContent };
/**
 * The NgbPanel directive represents an individual panel with the title and collapsible
 * content
 */
var NgbPanel = (function () {
    function NgbPanel() {
        /**
           *  A flag determining whether the panel is disabled or not.
           *  When disabled, the panel cannot be toggled.
           */
        this.disabled = false;
        /**
           *  An optional id for the panel. The id should be unique.
           *  If not provided, it will be auto-generated.
           */
        this.id = "ngb-panel-" + nextId++;
    }
    NgbPanel.decorators = [
        { type: Directive, args: [{ selector: 'ngb-panel' },] },
    ];
    /** @nocollapse */
    NgbPanel.ctorParameters = function () { return []; };
    NgbPanel.propDecorators = {
        "disabled": [{ type: Input },],
        "id": [{ type: Input },],
        "title": [{ type: Input },],
        "type": [{ type: Input },],
        "contentTpl": [{ type: ContentChild, args: [NgbPanelContent,] },],
        "titleTpl": [{ type: ContentChild, args: [NgbPanelTitle,] },],
    };
    return NgbPanel;
}());
export { NgbPanel };
/**
 * The NgbAccordion directive is a collection of panels.
 * It can assure that only one panel can be opened at a time.
 */
var NgbAccordion = (function () {
    function NgbAccordion(config) {
        /**
           * A map that stores each panel state
           */
        this._states = new Map();
        /**
           * A map that stores references to all panels
           */
        this._panelRefs = new Map();
        /**
           * An array or comma separated strings of panel identifiers that should be opened
           */
        this.activeIds = [];
        /**
           * Whether the closed panels should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
           */
        this.panelChange = new EventEmitter();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }
    /**
     * Programmatically toggle a panel with a given id.
     */
    /**
       * Programmatically toggle a panel with a given id.
       */
    NgbAccordion.prototype.toggle = /**
       * Programmatically toggle a panel with a given id.
       */
    function (panelId) {
        var panel = this._panelRefs.get(panelId);
        if (panel && !panel.disabled) {
            var nextState = !this._states.get(panelId);
            var defaultPrevented_1 = false;
            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
            if (!defaultPrevented_1) {
                this._states.set(panelId, nextState);
                if (this.closeOtherPanels) {
                    this._closeOthers(panelId);
                }
                this._updateActiveIds();
            }
        }
    };
    NgbAccordion.prototype.ngAfterContentChecked = function () {
        // active id updates
        if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }
        this._updateStates();
        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);
            this._updateActiveIds();
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    NgbAccordion.prototype.isOpen = /**
       * @internal
       */
    function (panelId) { return this._states.get(panelId); };
    NgbAccordion.prototype._closeOthers = function (panelId) {
        var _this = this;
        this._states.forEach(function (state, id) {
            if (id !== panelId) {
                _this._states.set(id, false);
            }
        });
    };
    NgbAccordion.prototype._updateActiveIds = function () {
        var _this = this;
        this.activeIds =
            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
    };
    NgbAccordion.prototype._updateStates = function () {
        var _this = this;
        this._states.clear();
        this._panelRefs.clear();
        this.panels.toArray().forEach(function (panel) {
            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
            _this._panelRefs.set(panel.id, panel);
        });
    };
    NgbAccordion.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-accordion',
                    exportAs: 'ngbAccordion',
                    host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                    template: "\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\"\n          [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n          <a href (click)=\"!!toggle(panel.id)\" [class.text-muted]=\"panel.disabled\" [attr.tabindex]=\"(panel.disabled ? '-1' : null)\"\n            [attr.aria-expanded]=\"isOpen(panel.id)\" [attr.aria-controls]=\"(isOpen(panel.id) ? panel.id : null)\"\n            [attr.aria-disabled]=\"panel.disabled\">\n            {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n          </a>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" \n             class=\"card-body {{isOpen(panel.id) ? 'show' : null}}\" *ngIf=\"!destroyOnHide || isOpen(panel.id)\">\n             <ng-template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbAccordion.ctorParameters = function () { return [
        { type: NgbAccordionConfig, },
    ]; };
    NgbAccordion.propDecorators = {
        "panels": [{ type: ContentChildren, args: [NgbPanel,] },],
        "activeIds": [{ type: Input },],
        "closeOtherPanels": [{ type: Input, args: ['closeOthers',] },],
        "destroyOnHide": [{ type: Input },],
        "type": [{ type: Input },],
        "panelChange": [{ type: Output },],
    };
    return NgbAccordion;
}());
export { NgbAccordion };
//# sourceMappingURL=accordion.js.map