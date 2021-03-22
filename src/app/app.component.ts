import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit, OnDestroy{
  title = 'SampleApp';
  private mediaSub: Subscription;
  deviceXs: boolean;
  constructor(private cdf: ChangeDetectorRef, private mediaObserver: MediaObserver){

  }

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        console.log(change.mqAlias);
        this.deviceXs = change.mqAlias === 'xs'? true: false;
        //console.log(change.mediaQuery);
      }
    );
  }
  ngAfterViewInit(){

  }

  ngOnDestroy(){
    if(this.mediaSub){
      this.mediaSub.unsubscribe();
    }
  }
}
