import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/main.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/heroesDetail/heroes-detail.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    bootstrap: [MainComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        MainComponent,
        HeroesComponent,
        TestComponent,
        HeroDetailComponent
    ]
})

export class AppModule {
}