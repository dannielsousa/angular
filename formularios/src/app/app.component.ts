import { factoryOrValue } from 'rxjs/operator/multicast';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente: Cliente = new Cliente();

  salvar(form: NgForm) {
    form.reset( {profissao : ''});
  }

}
