import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogoComponent } from "../logo/logo.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, LogoComponent]
})
export class HeaderComponent {
   
}
