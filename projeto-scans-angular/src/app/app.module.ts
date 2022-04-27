import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorasComponent } from './editora/editoras/editoras.component';
import { EditorasDetalheComponent } from './editora/editoras-detalhe/editoras-detalhe.component';
import { EditorasNovoComponent } from './editora/editoras-novo/editoras-novo.component';
import { EditorasEditarComponent } from './editora/editoras-editar/editoras-editar.component';
import { IdiomasComponent } from './idioma/idiomas/idiomas.component';
import { IdiomasDetalheComponent } from './idioma/idiomas-detalhe/idiomas-detalhe.component';
import { IdiomasEditarComponent } from './idioma/idiomas-editar/idiomas-editar.component';
import { IdiomasNovoComponent } from './idioma/idiomas-novo/idiomas-novo.component';
import { TipoPublicacoesComponent } from './tipo-publicacao/tipo-publicacoes/tipo-publicacoes.component';
import { TipoPublicacoesDetalheComponent } from './tipo-publicacao/tipo-publicacoes-detalhe/tipo-publicacoes-detalhe.component';
import { TipoPublicacoesEditarComponent } from './tipo-publicacao/tipo-publicacoes-editar/tipo-publicacoes-editar.component';
import { TipoPublicacoesNovoComponent } from './tipo-publicacao/tipo-publicacoes-novo/tipo-publicacoes-novo.component';
import { PersEquipesComponent } from './pers-equipe/pers-equipes/pers-equipes.component';
import { PersEquipesDetalheComponent } from './pers-equipe/pers-equipes-detalhe/pers-equipes-detalhe.component';
import { PersEquipesEditarComponent } from './pers-equipe/pers-equipes-editar/pers-equipes-editar.component';
import { PersEquipesNovoComponent } from './pers-equipe/pers-equipes-novo/pers-equipes-novo.component';
import { HqsComponent } from './hq/hqs/hqs.component';
import { HqsDetalheComponent } from './hq/hqs-detalhe/hqs-detalhe.component';
import { HqsEditarComponent } from './hq/hqs-editar/hqs-editar.component';
import { HqsNovoComponent } from './hq/hqs-novo/hqs-novo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EditorasComponent,
    EditorasDetalheComponent,
    EditorasNovoComponent,
    EditorasEditarComponent,
    IdiomasComponent,
    IdiomasDetalheComponent,
    IdiomasEditarComponent,
    IdiomasNovoComponent,
    TipoPublicacoesComponent,
    TipoPublicacoesDetalheComponent,
    TipoPublicacoesEditarComponent,
    TipoPublicacoesNovoComponent,
    PersEquipesComponent,
    PersEquipesDetalheComponent,
    PersEquipesEditarComponent,
    PersEquipesNovoComponent,
    HqsComponent,
    HqsDetalheComponent,
    HqsEditarComponent,
    HqsNovoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
