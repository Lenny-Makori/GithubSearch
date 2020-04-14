import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './components/github/github/github.component';
import { SearchFormComponent } from './components/search-form/search-form/search-form.component';


const routes: Routes = [
  { path: 'users', component: SearchFormComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {path: 'users/repos', component: GithubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
