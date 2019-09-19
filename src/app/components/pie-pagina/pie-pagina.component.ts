import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-pie-pagina",
  templateUrl: "./pie-pagina.component.html",
  styleUrls: ["./pie-pagina.component.css"]
})
export class PiePaginaComponent implements OnInit {
  year: number;
  constructor() {}
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
