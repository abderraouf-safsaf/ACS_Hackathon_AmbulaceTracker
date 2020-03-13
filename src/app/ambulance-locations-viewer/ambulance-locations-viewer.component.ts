import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
import { AmbulanceLocationService } from "../core/services/ambulance-location.service";

@Component({
  selector: "app-ambulance-locations-viewer",
  templateUrl: "./ambulance-locations-viewer.component.html",
  styleUrls: ["./ambulance-locations-viewer.component.css"],
  providers: [AmbulanceLocationService]
})
export class AmbulanceLocationsViewerComponent
  implements OnInit, AfterViewInit {
  private map;

  constructor(private ambulanceLocationService: AmbulanceLocationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    this.ambulanceLocationService.getAll().subscribe(locations => {
      console.log({ locations });
    });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );
    tiles.addTo(this.map);
  }
}
