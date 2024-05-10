import { Component } from '@angular/core';

import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [TreeTableModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss'
})
export class TableViewComponent {

}
