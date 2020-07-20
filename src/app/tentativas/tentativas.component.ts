import { Component } from '@angular/core';
import { CORACOES } from "../shared/coracao.model.mock";
import {Coracao} from "../shared/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent{

  public coracoes: Coracao[] = CORACOES;

  public coracaoVazio: string = "/assets/coracao_vazio.png";
  public coracaoCheio: string = "/assets/coracao_cheio.png";
}
