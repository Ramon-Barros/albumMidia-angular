import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpoComponent } from './pages/corpo/corpo.component';
import { DescricaoComponent } from './pages/descricao/descricao.component';


const app_routes: Routes = [
    {path: 'home', component: CorpoComponent},
    {path: 'sobre/:id', component: DescricaoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule ({

        imports: [
            RouterModule.forRoot( app_routes, {useHash: true})
        ],

        exports: [
            RouterModule
        ]

})

export class AppRoutingModule {}
