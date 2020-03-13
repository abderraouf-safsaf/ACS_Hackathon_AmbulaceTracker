import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as L from "leaflet";
import { AmbulanceLocationService } from "../core/services/ambulance-location.service";
import { AmbulanceLocation } from "../core/models/ambulance-location";
@Component({
  selector: "app-ambulance-locations-viewer",
  templateUrl: "./ambulance-locations-viewer.component.html",
  styleUrls: ["./ambulance-locations-viewer.component.css"],
  providers: [AmbulanceLocationService]
})
export class AmbulanceLocationsViewerComponent
  implements OnInit, AfterViewInit {
  private map;
  layers: any = [];
  constructor(private ambulanceLocationService: AmbulanceLocationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    this.ambulanceLocationService.getAll().subscribe(locations => {
      Object.values(locations).map((l: AmbulanceLocation) => {
        const icon = {
          icon: L.icon({
            iconSize: [40, 41],
            // specify the path here
            iconUrl: "assets/images/map_pin.png"
          })
        };
        L.marker([l.lat, l.lng], icon).addTo(this.map);
      });
    });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [32.7766642, -96.7969879],
      zoom: 10,
      layers: [
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "..."
        })
      ]
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
