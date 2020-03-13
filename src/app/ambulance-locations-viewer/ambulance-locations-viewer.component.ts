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
  layerGroups: any = {};
  constructor(private ambulanceLocationService: AmbulanceLocationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    this.ambulanceLocationService.getAll().subscribe(locations => {
      Object.keys(locations).map(key => {
        const location = locations[key];
        const icon = {
          icon: L.icon({
            iconSize: [40, 41],
            iconUrl: "assets/images/map_pin.png"
          })
        };
        if (!this.layerGroups[key]) {
          this.layerGroups[key] = L.layerGroup().addTo(this.map);
        }
        this.layerGroups[key].clearLayers();
        L.marker([location.lat, location.lng], icon).addTo(
          this.layerGroups[key]
        );
      });
    });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [32.7766642, -96.7969879],
      zoom: 16,
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