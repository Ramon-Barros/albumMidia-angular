import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { FotosAlbumPaginaService } from '../../services/fotos-album-pagina.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  constructor( public infopaginaService: InfoPaginaService,
              public fotosAlbumPaginaService: FotosAlbumPaginaService) { }

  ngOnInit() {
  }

}
