import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertMsgComponent } from "../alert-msg/alert-msg.component";
import { DropdownDirective } from "./dropdown.directive";
import { SpinnerLoadingComponent } from "./spinner-loading/spinner-loading.component";

@NgModule({
    declarations: [
        AlertMsgComponent,
        SpinnerLoadingComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AlertMsgComponent,
        SpinnerLoadingComponent,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [
        AlertMsgComponent
    ]

})
export class SharedModule {
    
}