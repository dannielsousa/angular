import { CidadesService } from './cidades.service';
import { Component, OnInit } from '@angular/core';
import { promise } from '../../node_modules/protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(
    private cidadeService: CidadesService
  ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
      .then(cidades => this.cidades = cidades);
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome: nome })
      .then(cidade => {
        alert(`Cidade cadastrada com o nome "${cidade.nome}" com código ${cidade.id}`);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade Excluida com sucesso!')
        this.consultar()
      });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(() => {
        alert('Cidade atualizada com sucesso!');
      })
      .catch( erro => {
        alert(erro);
      })
  }

}
