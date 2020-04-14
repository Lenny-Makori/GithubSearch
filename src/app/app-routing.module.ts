import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';
import { RepoDisplayComponent } from './components/repo-display/repo-display.component';


const routes: Routes = [
  { path: 'users', component: SearchFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'repos', component: RepoDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
