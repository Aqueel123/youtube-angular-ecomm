import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route: Router) { }

  menuType: string = "default";
  sellerName: string = "";

  ngOnInit(): void {
    this.route.events.subscribe((res: any) => {
      if (res.url) {
        if(localStorage.getItem('seller') && res.url.includes('seller')){
          this.menuType = "seller";
          let sellerData = localStorage.getItem('seller');
          let sellerParseData = sellerData && JSON.parse(sellerData)[0];
          this.sellerName = sellerParseData.name;
        } else {
          this.menuType = "default";
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
