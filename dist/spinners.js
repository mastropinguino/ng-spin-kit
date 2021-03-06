var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { RotatingPlaneComponent } from './spinner/rotating-plane.component';
import { DoubleBounceComponent } from './spinner/double-bounce.component';
import { WaveComponent } from './spinner/wave.component';
import { WanderingCubesComponent } from './spinner/wandering-cubes.component';
import { PulseComponent } from './spinner/pulse.component';
import { ChasingDotsComponent } from './spinner/chasing-dots.component';
import { CircleComponent } from './spinner/circle.component';
import { ThreeBounceComponent } from './spinner/three-bounce.component';
import { CubeGridComponent } from './spinner/cube-grid.component';
import { WordPressComponent } from './spinner/word-press.component';
import { FadingCircleComponent } from './spinner/fading-circle.component';
import { FoldingCubeComponent } from './spinner/folding-cube.component';
export { SpinnerComponent, RotatingPlaneComponent, DoubleBounceComponent, WaveComponent, WanderingCubesComponent, PulseComponent, ChasingDotsComponent, CircleComponent, ThreeBounceComponent, CubeGridComponent, WordPressComponent, FadingCircleComponent, FoldingCubeComponent };
var NG_SPIN_KIT_COMPONENTS = [
    SpinnerComponent,
    RotatingPlaneComponent,
    DoubleBounceComponent,
    WaveComponent,
    WanderingCubesComponent,
    PulseComponent,
    ChasingDotsComponent,
    CircleComponent,
    ThreeBounceComponent,
    CubeGridComponent,
    WordPressComponent,
    FadingCircleComponent,
    FoldingCubeComponent
];
var NgSpinKitModule = (function () {
    function NgSpinKitModule() {
    }
    return NgSpinKitModule;
}());
NgSpinKitModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: NG_SPIN_KIT_COMPONENTS,
        exports: NG_SPIN_KIT_COMPONENTS,
    })
], NgSpinKitModule);
export { NgSpinKitModule };
//# sourceMappingURL=spinners.js.map