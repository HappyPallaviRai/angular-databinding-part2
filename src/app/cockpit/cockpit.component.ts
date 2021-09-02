import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("blueprintCreated101") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = "";
  // newServerContent = "";
  @ViewChild("newServerContentInput") newServerContentInput: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onAddServer(ServerNameInput) {
    this.serverCreated.emit({
      serverName: ServerNameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }

  onAddBlueprint(ServerNameInput) {
    this.blueprintCreated.emit({
      serverName: ServerNameInput.value,
      serverContent: this.newServerContentInput.nativeElement.value
    });
  }
}
