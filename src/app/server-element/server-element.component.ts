import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  ContentChild,
  ElementRef,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //None
})
export class ServerElementComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit {
  @Input("element101") element: { type: string; content: string; name: string };
  @Input() sname: string;
  @ViewChild("headingName", { static: true }) headingName: string;
  @ContentChild("para", { static: true }) para: ElementRef;
  constructor() {
    console.log("constCalled");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchangeCalled");

    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInitCalled");
    console.log("headingName ", this.headingName);
    console.log("contentchild ", this.para);
  }

  ngAfterViewInit() {
    console.log("headingName in view ", this.headingName);
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log("contentchild ", this.para.nativeElement.textContent);
  }
}
