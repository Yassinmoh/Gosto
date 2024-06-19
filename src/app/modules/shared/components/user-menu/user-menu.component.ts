import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Gosto-user-menu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  menuItems= [
    {id:1,label:'Menu',icon:'menu-icon',url:'home'},
    {id:2,label:'Cart',icon:'cart-icon',url:'cart'},
    {id:3,label:'Home',icon:'home-icon',url:'home'},
    {id:4,label:'Wishlist',icon:'heart-icon',url:'wishlist'},
    {id:5,label:'Account',icon:'account-icon',url:'account'},
  ];

  currentIndex=2;
  setIndex(index:number){
    this.currentIndex =index
  }
}
