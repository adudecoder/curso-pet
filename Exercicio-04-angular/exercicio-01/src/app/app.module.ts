import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarColorComponent } from './mat-toolbar-color/mat-toolbar-color.component';
import { MatToolbarRowComponent } from './mat-toolbar-row/mat-toolbar-row.component';
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IconsComponent } from './icons/icons.component';
import { ButtonComponent } from './button/button.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CardsComponent } from './cards/cards.component';
import { ListsComponent } from './lists/lists.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    MatToolbarColorComponent,
    MatToolbarRowComponent,
    MatMenuComponent,
    SidebarComponent,
    IconsComponent,
    ButtonComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    CardsComponent,
    ListsComponent,
    ExpansionPanelComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule, // Todos os módulos do Angular Material devem ser importados após o módulo BrowserModule, que acompanha toda aplicação Angular. Nesse caso, a ordem importa.
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
