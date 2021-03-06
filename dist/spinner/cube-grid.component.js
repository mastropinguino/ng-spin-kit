var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
var CubeGridComponent = (function (_super) {
    __extends(CubeGridComponent, _super);
    function CubeGridComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'cube-grid-spinner';
        _this.childClass = 'cube';
        _this.numItems = 9;
        return _this;
    }
    return CubeGridComponent;
}(SpinnerComponent));
CubeGridComponent = __decorate([
    Component({
        selector: 'sk-cube-grid',
        styles: ["\n    .cube-grid-spinner {\n      margin: 25px auto;\n      width: 40px;\n      height: 40px;\n    }\n    \n    .cube-grid-spinner div {\n      float: left;\n      width: 33%;\n      height: 33%;\n      \n      -webkit-animation: cubeGridScaleDelay 1.3s infinite ease-in-out;\n      animation: cubeGridScaleDelay 1.3s infinite ease-in-out;\n    }\n    \n    .cube-grid-spinner .cube1 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    .cube-grid-spinner .cube2 {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n    }\n    \n    .cube-grid-spinner .cube3 {\n      -webkit-animation-delay: 0.4s;\n      animation-delay: 0.4s;\n    }\n    \n    .cube-grid-spinner .cube4 {\n      -webkit-animation-delay: 0.1s;\n      animation-delay: 0.1s;\n    }\n    \n    .cube-grid-spinner .cube5 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    .cube-grid-spinner .cube6 {\n      -webkit-animation-delay: 0.3s;\n      animation-delay: 0.3s;\n    }\n    \n    .cube-grid-spinner .cube7 {\n      -webkit-animation-delay: 0s;\n      animation-delay: 0s;\n    }\n    \n    .cube-grid-spinner .cube8 {\n      -webkit-animation-delay: 0.1s;\n      animation-delay: 0.1s;\n    }\n    \n    .cube-grid-spinner .cube9 {\n      -webkit-animation-delay: 0.2s;\n      animation-delay: 0.2s;\n    }\n    \n    @-webkit-keyframes cubeGridScaleDelay {\n      0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n      }\n      35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n      }\n    }\n    \n    @keyframes cubeGridScaleDelay {\n      0%, 70%, 100% {\n        -webkit-transform: scale3D(1, 1, 1);\n        transform: scale3D(1, 1, 1);\n      }\n      35% {\n        -webkit-transform: scale3D(0, 0, 1);\n        transform: scale3D(0, 0, 1);\n      }\n    }\n  "],
        template: SpinnerTemplate
    })
], CubeGridComponent);
export { CubeGridComponent };
//# sourceMappingURL=cube-grid.component.js.map