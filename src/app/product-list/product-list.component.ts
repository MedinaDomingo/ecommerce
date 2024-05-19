import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
   products = [
    {
      "liga": "La Liga",
      "club": "FC Barcelona",
      "price": "$16.00",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20230625/c1e5600d085153d4fe1836e0047a993a.png=z-250,250_f-webp"
    },
    {
      "liga": "Premier League",
      "club": "Manchester United",
      "price": "$21.15",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20230627/6fe5752631cdcfe2458f18d7b56e2d75.png=z-250,250_f-webp"
    },
    {
      "liga": "Bundesliga",
      "club": "Bayern Munich",
      "price": "$12.00",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20230529/7295ae311caa45766d414bdf14c3b805.png=z-621,621_f-webp"
    },
    {
      "liga": "Serie A",
      "club": "Juventus",
      "price": "$18.40",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20230513/ce7eb9610f50416650681256138a783b.png=z-250,250_f-webp"
    },
    {
      "liga": "Ligue 1",
      "club": "Paris Saint-Germain",
      "price": "$16.00",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20230601/89a76bc57e4a91eb0857eb72cb37452b.png=z-250,250_f-webp"
    },
    {
      "liga": "MLS",
      "club": "Inter Miami",
      "price": "$21.15",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20240123/f6d4571e5af159f9fbbbd4ca4428304c.JPG=z-621,621_f-webp"
    },
    {
      "liga": "Liga Argentina",
      "club": "River Plate",
      "price": "$912.00",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20231215/2923e017ade530ffd5ba883372fa981a.png=z-250,250_f-webp"
    },
    {
      "liga": "La Liga",
      "club": "Real Madrid",
      "price": "$18.40",
      "image": "https://cf.projerseyshop.cc/upload/ttmall/img/20240516/0f254205fd9d68019e7790a114f9ce8a.png=z-621,621_f-webp"
    }
  ];

}
