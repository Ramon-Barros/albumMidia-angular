import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosAlbumPaginaService } from '../../services/fotos-album-pagina.service';
import { DescricaoInterface } from '../../interfaces/descricaoInterface';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  fotos: DescricaoInterface;
  id: string;

  constructor(private route: ActivatedRoute,
              public fotosAlbumPaginaService: FotosAlbumPaginaService) { }

  ngOnInit() {


    this.route.params.subscribe( parametros => {

      // console.log(parametros['id']);

      this.fotosAlbumPaginaService.getFotos( parametros ['id'])
      .subscribe( (fotos: DescricaoInterface) => {
        this.id = parametros['id'];
        this.fotos = fotos;
        console.log(fotos);
      });
    });
  }

}
