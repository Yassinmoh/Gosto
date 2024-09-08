import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'Gosto-paginator',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})

export class PaginatorComponent {

  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalRecords: number = 0;

  @Output() pageChange = new EventEmitter<{ page: number, rows: number }>();

  first: number = 0;
  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.pageSize = event.rows;

    this.pageChange.emit({
      page: event.page,
      rows: event.rows
    });
  }
}
