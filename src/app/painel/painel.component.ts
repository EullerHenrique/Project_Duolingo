import { Component, EventEmitter, Output } from '@angular/core';

import {Frase} from "../shared/frase.model";
import {FRASES} from "../shared/frase.model.mock";
import {CORACOES} from "../shared/coracao.model.mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase: ";
  public resposta: string = '';
  public i: number = 0;
  public frase: Frase;
  public progresso: number = 0;
  public tentativas: number = CORACOES.length;

  //O decorator output decora o atributo encerrarJogo (possui como valor a instância de um emissor de eventos),
  //tal decoração transforma esse atributo em um evento.

  //Dessa maneira, o evento pode ser utilizado no componente pai.

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  public atualizarResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void{

    if(this.resposta.trim() == this.frase.frasePtBr){

      //Adiciona um acerto

      this.i++;

      //Avança para a próxima frase

      this.atualizarFrase();

      //Troca o progresso

      this.progresso+=(100/this.frases.length);

      //Vitória

      if(this.i == this.frases.length){
        this.encerrarJogo.emit('Vitoria'); // O evento encerrarJgo é emitido para o componente pai com a string Vitória como valor
      }

    }else{

      //Elimina uma tentativa

      this.tentativas--;

      // Derrota

      if(this.tentativas == 0){
        this.encerrarJogo.emit('Derrota'); //O evento encerarJogo é emitido para o componente pai com a string Derrota como valor
      }

    }

  }

  public atualizarFrase():void {

    this.frase = this.frases[this.i];

    //Limpar a resposta

    this.resposta = '';
  }


  constructor() {
    this.atualizarFrase();
  }

}


