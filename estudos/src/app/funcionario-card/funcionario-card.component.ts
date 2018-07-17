import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstiloCartao() {
    return {
      'border-width.px' : this.funcionario.id,
      'background-color': this.funcionario.id % 2 === 0 ? 'gray' : 'transparent'
    }
  }
  getClassesCss() {
    return ['badge', 'badge-default'];
  }

  isAdmin() {
    if (this.funcionario.nome.startsWith('D')) {
      return true;
    };
  }
}
