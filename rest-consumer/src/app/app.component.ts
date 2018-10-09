import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    emptySearchTitle = 'List of Products';
    title = this.emptySearchTitle;
    products = [];
    searchParam = "";
    limit = 10;
    page = 0;
    total = 0;

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.getProducts(this.searchParam, this.limit, this.page);
    }

    getProducts(searchParam: string, limit: number, page: number) {
        this.appService.getProducts(searchParam, limit, page)
                .subscribe(response => {
                    this.products = response.data;
                    this.total = response.total;
                });
    }

    loadData(event) {
        this.limit = event.rows;
        this.page = (event.first / event.rows) + 1;
        this.getProducts(this.searchParam, this.limit, this.page);
    }

    searchByName(searchParam) {
        this.searchParam = searchParam;
        this.searchParam ? this.title = this.searchParam : this.title = this.emptySearchTitle;

        this.search();
    }

    search() {
        this.getProducts(this.searchParam, this.limit, this.page);
    }
}
