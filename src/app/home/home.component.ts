import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ProductListComponent, NgFor]
})
export class HomeComponent {
    ligas = [
        { nombre: 'La Liga', url: '#https://www.laliga.com/en-GB' },
        { nombre: 'Premier League', url: '#https://www.premierleague.com/' },
        { nombre: 'Bundesliga', url: '#https://www.bundesliga.com/en/bundesliga' },
        { nombre: 'Serie A', url: '#https://www.legaseriea.it/en' },
        { nombre: 'Ligue 1', url: '#https://www.ligue1.com/' },
        { nombre: 'MLS', url: '#https://www.mlssoccer.com/' },
        { nombre: 'LPF', url: '#https://www.afa.com.ar/' }
      ];
      
}
