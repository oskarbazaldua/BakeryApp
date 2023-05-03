import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
// import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';





@NgModule({
  exports: [
    //MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    ImageModule,
    MenubarModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
    DividerModule,
  ]
})
export class PrimeNgModule { }

