import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-biding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-biding.component.html',
  styleUrl: './template-biding.component.scss'
})
export class TemplateBidingComponent {
  public name = "Teste template binding";
  public age: number = 40;
  public condition: string = this.age < 60 ? "Still young" : "Too old";
  public isDisabled = true;
  public srcValue = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSFoVP7qxtfG-2ANjewxJvwmZgnfvbTGDDg&s";
  public skyIsBlue = true;
  public showdHaveUnderline = this.age < 60 ? "underline" : "none";
  public num = 0;

  constructor() {
    setTimeout(()=>{
      this.name = "Joao e maria";
    }, 1000)
  }

  public sum(): void {
    this.num++;
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    })
  }
}
