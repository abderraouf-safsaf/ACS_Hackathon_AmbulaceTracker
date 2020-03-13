import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable()
export class AmbulanceLocationService {
  constructor(private socket: Socket) {}

  getAll() {
    this.socket.emit("getAllLocations");
    return this.socket.fromEvent<string[]>("locations");
  }
}
