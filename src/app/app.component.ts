import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostareComponent } from './components/postare/postare.component';
import { PostariService } from './services/postari.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostareComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public postariSVC = inject(PostariService)

  // constructor(public postariSVC: PostariService){}
}
