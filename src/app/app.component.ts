import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlowbiteService} from "./flowbite/flowbite.service";
import {AsideComponent} from "./aside/aside.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sass-ass';
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
