import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoInterface } from '../interfaces/fotoInterface';

@Injectable({
  providedIn: 'root'
})
export class FotosAlbumPaginaService {


  carregando = true;
  fotos: FotoInterface[] = [];

  constructor(private http: HttpClient) {

    this.carregarFotos();
   }

private carregarFotos() {


  this.http.get('https://album-html.firebaseio.com/fotos.json')
  .subscribe( (resp: FotoInterface[]) => {
      console.log(resp);
      this.fotos = resp;
      this.carregando = false;
  });
}

getFotos(id: string) {
  return this.http.get(`https://album-html.firebaseio.com/descricao/${ id }.json`);
}

}
