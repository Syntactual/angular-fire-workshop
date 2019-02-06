import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports: [ MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule ],
    exports: [ MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule ]
  })
  export class AppMaterialModule { }
