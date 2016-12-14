/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './label';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_Label = (function () {
    function Wrapper_Label(p0, p1, p2, p3, p4, p5, p6) {
        this._changed = false;
        this.context = new import0.Label(p0, p1, p2, p3, p4, p5, p6);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
    }
    Wrapper_Label.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Label.prototype.ngOnDestroy = function () {
    };
    Wrapper_Label.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Label.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Label.prototype.check_id = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.id = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Label.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Label.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Label.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Label.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Label;
}());
//# sourceMappingURL=label.ngfactory.js.map