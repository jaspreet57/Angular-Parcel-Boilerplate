import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from "@angular/core";

@Component({
  selector: "talk-cmp",
  directives: [FormattedRating, WatchButton, RateButton],
  templateUrl: "talk_cmp.html"
})

export class TalkCmp implements OnInit, OnChanges {
  @Input() talk: Talk;
  @Output() rate: EventEmitter<any>;

  ngOnInit() {
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
}
