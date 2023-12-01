import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { WorkInProgressComponent } from "../../components/work-in-progress/work-in-progress.component";

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.css',
    imports: [CommonModule, MenuBarComponent, WorkInProgressComponent]
})
export class SettingsComponent {

}
