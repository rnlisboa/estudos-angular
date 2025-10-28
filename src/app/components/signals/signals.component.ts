import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Renan');
  public lastName = signal('Lisboa');
  public incrementoArray: number = 1;

  public fullName = computed(()=>{
    return `${this.firstName()} ${this.lastName()}`
  });

  public array = signal([this.incrementoArray]);

  /**
   * EFFECT
   * - Registro de dados sendo exibidos e quando eles mudam, seja para 
   *    análise ou como ferramenta de depuração
   * - Adicionado comportamento DOM personalizado que não pode ser expresso com sintaxe modelo
   * - Executar renderização personalizada em um <canvas>, biblioteca de gráficos ou outra 
   *    biblioteca de UI de terceiros
   */

  constructor() {

  }

  public updateName() {
    return this.firstName.set('João');
  }

  public updateArray() {
    this.lastName.set(`${this.lastName()} ${++this.incrementoArray}`)
    this.array.update( (oldValue: Array<number>) => {
      return [...oldValue, this.incrementoArray];
    })
  }
}
