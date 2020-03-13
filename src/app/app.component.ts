import { Component, OnInit } from "@angular/core";
import { AmbulanceLocationService } from "./core/services/ambulance-location.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AmbulanceLocationService]
})
export class AppComponent {
  title = "ng-ambulance-tracker";
  nbAvailable: number = 0;
  constructor(private ambulanceLocationService: AmbulanceLocationService) {
    ambulanceLocationService.getAll().subscribe(locations => {
      this.nbAvailable = Object.keys(locations).length;
    });
  }
}
