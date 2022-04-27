import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorasComponent } from './editora/editoras/editoras.component';
import { EditorasDetalheComponent } from './editora/editoras-detalhe/editoras-detalhe.component';
import { EditorasNovoComponent } from './editora/editoras-novo/editoras-novo.component';
import { EditorasEditarComponent } from './editora/editoras-editar/editoras-editar.component';

import { HqsComponent } from './hq/hqs/hqs.component';
import { HqsDetalheComponent } from './hq/hqs-detalhe/hqs-detalhe.component';
import { HqsNovoComponent } from './hq/hqs-novo/hqs-novo.component';
import { HqsEditarComponent } from './hq/hqs-editar/hqs-editar.component';

import { IdiomasComponent } from './idioma/idiomas/idiomas.component';
import { IdiomasDetalheComponent } from './idioma/idiomas-detalhe/idiomas-detalhe.component';
import { IdiomasNovoComponent } from './idioma/idiomas-novo/idiomas-novo.component';
import { IdiomasEditarComponent } from './idioma/idiomas-editar/idiomas-editar.component';

import { PersEquipesComponent } from './pers-equipe/pers-equipes/pers-equipes.component';
import { PersEquipesDetalheComponent } from './pers-equipe/pers-equipes-detalhe/pers-equipes-detalhe.component';
import { PersEquipesNovoComponent } from './pers-equipe/pers-equipes-novo/pers-equipes-novo.component';
import { PersEquipesEditarComponent } from './pers-equipe/pers-equipes-editar/pers-equipes-editar.component';

import { TipoPublicacoesComponent } from './tipo-publicacao/tipo-publicacoes/tipo-publicacoes.component';
import { TipoPublicacoesDetalheComponent } from './tipo-publicacao/tipo-publicacoes-detalhe/tipo-publicacoes-detalhe.component';
import { TipoPublicacoesNovoComponent } from './tipo-publicacao/tipo-publicacoes-novo/tipo-publicacoes-novo.component';
import { TipoPublicacoesEditarComponent } from './tipo-publicacao/tipo-publicacoes-editar/tipo-publicacoes-editar.component';
const routes: Routes = [
  {
    path: 'editoras',
    component: EditorasComponent,
    data: { title: 'Lista de Editoras' }
  },
  {
    path: 'editoras-detalhe/:id',
    component: EditorasDetalheComponent,
    data: { title: 'Detalhe da Editora' }
  },
  {
    path: 'editoras-novo',
    component: EditorasNovoComponent,
    data: { title: 'Adicionar Editora' }
  },
  {
    path: 'editoras-editar/:id',
    component: EditorasEditarComponent,
    data: { title: 'Editar a Editora' }
  },
  { path: '',
    redirectTo: '/editoras',
    pathMatch: 'full'
  },
  {
    path: 'hqs',
    component: HqsComponent,
    data: { title: 'Lista de HQs' }
  },
  {
    path: 'hqs-detalhe/:id',
    component: HqsDetalheComponent,
    data: { title: 'Detalhe da HQ' }
  },
  {
    path: 'hqs-novo',
    component: HqsNovoComponent,
    data: { title: 'Adicionar HQ' }
  },
  {
    path: 'hqs-editar/:id',
    component: HqsEditarComponent,
    data: { title: 'Editar a HQ' }
  },
  { path: '',
    redirectTo: '/hqs',
    pathMatch: 'full'
  },
  {
    path: 'idiomas',
    component: IdiomasComponent,
    data: { title: 'Lista de Idiomas' }
  },
  {
    path: 'idiomas-detalhe/:id',
    component: IdiomasDetalheComponent,
    data: { title: 'Detalhe do Idioma' }
  },
  {
    path: 'idiomas-novo',
    component: IdiomasNovoComponent,
    data: { title: 'Adicionar Idioma' }
  },
  {
    path: 'idiomas-editar/:id',
    component: IdiomasEditarComponent,
    data: { title: 'Editar o Idioma' }
  },
  { path: '',
    redirectTo: '/idiomas',
    pathMatch: 'full'
  },
  {
    path: 'pers-equipes',
    component: PersEquipesComponent,
    data: { title: 'Lista de Perssonagens/Equipes' }
  },
  {
    path: 'pers-equipes-detalhe/:id',
    component: PersEquipesDetalheComponent,
    data: { title: 'Detalhe do(a) Perssonagem/Equipe' }
  },
  {
    path: 'pers-equipes-novo',
    component: PersEquipesNovoComponent,
    data: { title: 'Adicionar Perssonagem/Equipe' }
  },
  {
    path: 'pers-equipes-editar/:id',
    component: PersEquipesEditarComponent,
    data: { title: 'Editar Perssonagem/Equipe' }
  },
  { path: '',
    redirectTo: '/pers-equipes',
    pathMatch: 'full'
  },
  {
    path: 'tipo-publicacoes',
    component: TipoPublicacoesComponent,
    data: { title: 'Lista de Tipos de Publicações' }
  },
  {
    path: 'tipo-publicacoes-detalhe/:id',
    component: TipoPublicacoesDetalheComponent,
    data: { title: 'Detalhe do Tipo de Publicação' }
  },
  {
    path: 'tipo-publicacoes-novo',
    component: TipoPublicacoesNovoComponent,
    data: { title: 'Adicionar Tipo de Publicação' }
  },
  {
    path: 'tipo-publicacoes-editar/:id',
    component: TipoPublicacoesEditarComponent,
    data: { title: 'Editar Tipo de Publicação' }
  },
  { path: '',
    redirectTo: '/tipo-publicacoes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
