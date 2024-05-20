import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { NgFor } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductListComponent, NgFor, CarouselComponent]
})
export class HomeComponent {
    ligas = [
        { nombre: 'La Liga', url: '#' },
        { nombre: 'Premier League', url: '#' },
        { nombre: 'Bundesliga', url: '#' },
        { nombre: 'Serie A', url: '#' },
        { nombre: 'Ligue 1', url: '#' },
        { nombre: 'MLS', url: '#' },
        { nombre: 'LPF', url: '#' }
      ];
      
}
