import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor(){
    console.log('PriceComponent: Constructor');
  }
  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PriceComponent: ngOnChanges');
    console.log('PriceComponent: ',{ changes });
  }

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
