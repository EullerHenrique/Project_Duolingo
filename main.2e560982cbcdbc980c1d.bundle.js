webpackJsonp([1],{"/h4y":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e,n){void 0===t&&(t=!0),void 0===e&&(e="assets/coracao_cheio.png"),void 0===n&&(n="assets/coracao_vazio.png"),this.cheio=t,this.urlCoracaoCheio=e,this.urlCoracaoVazio=n}return t.prototype.exibeCoracao=function(){return this.cheio?this.urlCoracaoCheio:this.urlCoracaoVazio},t}()},"/vhx":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".progress{background:#eef8da;border:1px solid #99ce28}.progress-bar{background:#99ce28}",""]),t.exports=t.exports.toString()},0:function(t,e,n){t.exports=n("x35b")},"5qNl":function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=function(){function t(){}return t}();a=r([n.i(o._0)({selector:"app-topo",template:n("JrP7"),styles:[n("9vdk")]})],a)},"5xMp":function(t,e){t.exports='\n<app-topo> </app-topo>\n\n<div *ngIf="jogoEmAndamento; else Derrota">\n\n  \x3c!--\n\n   Assim que o evento encerrarJogo for detectado (ou seja, assim que ele for emitido no componente filho),\n   ele será enviado para função encerrarJogo\n\n   Obs: No caso, o valor do evento é uma string\n\n    --\x3e\n  <app-painel (encerrarJogo)="encerrarJogo($event)"></app-painel>\n\n</div>\n\n\n<ng-template #Derrota>\n\n  <div *ngIf="status === \'Derrota\'; else Vitoria">\n    <div class="container">\n\n      <div class="painel-derrota row align-items-center justify-content-center">\n\n        <div class="col-9 jumbotron pt-3 pb-3">\n\n          <h3 class="derrota text-center">Fim de Jogo</h3>\n\n            <div class="col d-flex justify-content-center">\n\n              <img class="duo-defeat" src="assets/duo_defeat.png">\n\n            </div>\n\n            <div class="col d-flex justify-content-center mt-2">\n\n              <button (click)="reiniciarJogo()" type="button" class="btn btn-primary"> Reinicar </button>\n\n            </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n\n</ng-template>\n\n<ng-template #Vitoria>\n\n  <div class="container">\n\n    <div class="painel-derrota row align-items-center justify-content-center">\n\n      <div class="col-9 jumbotron pt-3 pb-3">\n\n        <h3 class="vitoria text-center">Perfeito!! </h3>\n\n        <div class="col d-flex justify-content-center">\n\n          <img class="duo-defeat" src="assets/duo_victory.png">\n\n        </div>\n\n        <div class="col d-flex justify-content-center mt-2">\n\n          <button (click)="reiniciarJogo()" type="button" class="btn btn-primary"> Reinicar </button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n</ng-template>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\x3c!-- Seletor --\x3e\n\n  \x3c!-- Tag --\x3e\n\n  \x3c!-- <app-topo> </app-topo> --\x3e\n\n  \x3c!-- ou --\x3e\n\n  \x3c!-- Atributo --\x3e\n\n  \x3c!-- <div app-topo> </div> --\x3e\n\n  \x3c!-- ou --\x3e\n\n  \x3c!-- Classe --\x3e\n\n  \x3c!-- <div class="app-topo"></div> --\x3e\n\n\n\n'},"9vdk":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".navbar{background:#1cb0f6}.topo{min-width:224px}.navbar{min-width:148px}.duo-logo{width:116px}",""]),t.exports=t.exports.toString()},Iksp:function(t,e,n){"use strict";var o=n("Qbdm"),r=n("3j3K"),a=n("YWx4"),i=n("5qNl"),s=n("LUK1"),c=n("perG"),p=n("K4sj");n.d(e,"a",function(){return f});var u=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},f=function(){function t(){}return t}();f=u([n.i(r.b)({declarations:[a.a,i.a,s.a,c.a,p.a],imports:[o.a],providers:[],bootstrap:[a.a]})],f)},JrP7:function(t,e){t.exports='<div class="topo mt-2 mb-2 d-flex justify-content-center">\n  <nav class="navbar rounded-pill w-50 mb-0 justify-content-center" >\n\n      <img class="duo-logo" src="assets/duo_logo.png">\n\n  </nav>\n</div>\n'},K4sj:function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.progresso=0}return t}();r([n.i(o.O)(),a("design:type",Number)],i.prototype,"progresso",void 0),i=r([n.i(o._0)({selector:"app-progresso",template:n("Wni3"),styles:[n("/vhx")]})],i)},Kp02:function(t,e,n){"use strict";var o=n("/h4y");n.d(e,"a",function(){return r});var r=[new o.a,new o.a,new o.a]},LUK1:function(t,e,n){"use strict";var o=n("3j3K"),r=n("eaXj"),a=n("Kp02");n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.frases=r.a,this.instrucao="Traduza a frase: ",this.resposta="",this.i=0,this.progresso=0,this.tentativas=a.a.length,this.encerrarJogo=new o.F,this.atualizarFrase()}return t.prototype.atualizarResposta=function(t){this.resposta=t.target.value},t.prototype.verificarResposta=function(){this.resposta.trim()==this.frase.frasePtBr?(this.i++,this.atualizarFrase(),this.progresso+=100/this.frases.length,this.i==this.frases.length&&this.encerrarJogo.emit("Vitoria")):0==--this.tentativas&&this.encerrarJogo.emit("Derrota")},t.prototype.atualizarFrase=function(){this.frase=this.frases[this.i],this.resposta=""},t}();i([n.i(o._1)(),s("design:type","function"==typeof(p=void 0!==o.F&&o.F)&&p||Object)],c.prototype,"encerrarJogo",void 0),c=i([n.i(o._0)({selector:"app-painel",template:n("WCcU"),styles:[n("n6vO")]}),s("design:paramtypes",[])],c);var p},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},WCcU:function(t,e){t.exports='\n<div class="container">\n\n  <div class="painel row align-items-center justify-content-center">\n\n    <div class="col-9 jumbotron pt-3 pb-3">\n\n      <div class="row">\n\n        <div class="col-sm-6">\n          <app-progresso [progresso]="progresso"></app-progresso>\n        </div>\n\n        <div class="col-sm-6 mt-2 mt-sm-0">\n          <div class="d-flex justify-content-end">\n            <app-tentativas [tentativas] = "tentativas"></app-tentativas>\n          </div>\n        </div>\n\n      </div>\n\n      <div class="row">\n\n        <div class="col-6 d-flex justify-content-center">\n           <img class="duo-translate" src="assets/duo_translate.png">\n        </div>\n\n        <div class="col-6 text-center mt-3">\n          <p>{{frase.fraseEng}}</p>\n        </div>\n\n      </div>\n\n      <div class="row">\n        <div class="col-6 text-center mb-2">\n          <p>{{instrucao}}</p>\n        </div>\n      </div>\n\n\n\n    <div class="row">\n\n      <div class="col">\n\n        <div class="form-group">\n\n          <textarea\n            class="form-control"\n            rows="3"\n             (input)="atualizarResposta($event)"\n             [value]="resposta"\n          ></textarea>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="row">\n\n      <div class="col d-flex justify-content-end">\n        <button type="button" class="btn shadow-none btn-primary rounded-pill" (click)="verificarResposta()" >Verificar</button>\n      </div>\n\n    </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n'},Wni3:function(t,e){t.exports='<div class="progress">\n\n  <div class="progress-bar" [style.width.%]="progresso"></div>\n\n</div>\n'},Xgx6:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},YWx4:function(t,e,n){"use strict";var o=n("3j3K"),r=n("Kp02");n.d(e,"a",function(){return i});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=function(){function t(){this.jogoEmAndamento=!0}return t.prototype.encerrarJogo=function(t){this.jogoEmAndamento=!1,this.status=t},t.prototype.reiniciarJogo=function(){this.jogoEmAndamento=!0,r.a[0].cheio=!0,r.a[1].cheio=!0,r.a[2].cheio=!0},t}();i=a([n.i(o._0)({selector:"app-root",template:n("5xMp"),styles:[n("okgc")]})],i)},eaXj:function(t,e,n){"use strict";var o=n("qo8N");n.d(e,"a",function(){return r});var r=[new o.a("I like to learn","Eu gosto de aprender"),new o.a("I watch tv","Eu assisto tv"),new o.a("How are you? ","Como você está?"),new o.a("I eat bread","Eu como pão"),new o.a("I have an important exam","Eu tenho uma prova importante"),new o.a("A table for two, please","Uma mesa para dois, por favor"),new o.a("He has a car","Ele tem um carro"),new o.a("A white shirt","Uma camisa branca"),new o.a("I live in a big house","Eu moro em uma casa grande"),new o.a("They do not work here","Eles não trabalham aqui")]},iKKf:function(t,e){t.exports='<img *ngFor="let coracao of coracoes " [src]="coracao.exibeCoracao()">\n'},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},n6vO:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".jumbotron{border-radius:40px}.container{min-width:224px}.duo-translate{width:100px}.form-control{border-radius:15px}.painel{height:88vh}p{font-weight:700;color:#fff;text-shadow:1px 1px #000}",""]),t.exports=t.exports.toString()},okgc:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".container{min-width:224px}.painel-derrota{height:88vh}.jumbotron{border-radius:40px}.duo-defeat{width:100px}.derrota{text-shadow:1px 1px red}.derrota,.vitoria{font-weight:700;color:#fff}.vitoria{text-shadow:1px 1px green}",""]),t.exports=t.exports.toString()},perG:function(t,e,n){"use strict";var o=n("3j3K"),r=n("Kp02");n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.coracoes=r.a}return t.prototype.ngOnChanges=function(){if(this.coracoes.length!==this.tentativas){var t=this.coracoes.length-this.tentativas;this.coracoes[t-1].cheio=!1}},t}();a([n.i(o.O)(),i("design:type",Number)],s.prototype,"tentativas",void 0),s=a([n.i(o._0)({selector:"app-tentativas",template:n("iKKf"),styles:[n("Xgx6")]})],s)},qo8N:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e){this.fraseEng=t,this.frasePtBr=e}return t}()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("3j3K"),r=n("O61y"),a=n("Iksp");n("kZql").a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(a.a)}},[0]);