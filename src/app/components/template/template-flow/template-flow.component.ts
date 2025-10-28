import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-flow.component.html',
  styleUrl: './template-flow.component.scss',
})
export class TemplateFlowComponent {
  public isTrue = true;
  public switchCondition = "A";

  public itens: Array<{ name: string }> = [];
  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public addName(name: string) {
    this.itens.push({
      name,
    });
  }
}
