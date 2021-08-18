import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 12, 10]).subscribe(
      item => console.log(`resulting item ... ${item}`),
      err => console.error(`error occurred ${err}`),
      () => console.log('complete')
    );

    of('Apple1', 'Apple2', 'Apple3').subscribe(
      apple => console.log(`Apple was emitted ${apple}`),
      err => console.error(`Error ocurred: ${err}`),
      () => console.log(`Nom more apples, go home`)
    );
  }
}
