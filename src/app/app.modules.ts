import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// This project bootstraps a standalone `App` component via `bootstrapApplication` in `main.ts`.
// Keep an (unused) AppModule file but make it syntactically valid so the compiler is happy.
@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  bootstrap: []
})
export class AppModule { }
