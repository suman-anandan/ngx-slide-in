# AngularSlidePanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

# ngx-slide-in (Angular slide panel)

Demo: https://codesandbox.io/s/angular-slider-panel-k4610

## Dependencies

 * Angular 11+

## Installation

To add the slide panel to your Angular project:
```
npm install @ngx-slide-in
```

Once installed, add the slide-in panel to your `app.module.ts`:
```typescript
import { NgxSlideInModule } from 'ngx-slide-in';

...

@NgModule({
   ...
   imports: [
     ...
    BrowserModule,
    NgxSlideInModule,
    BrowserAnimationsModule
    ...
   ],
   ...
})
export class AppModule {}
```

## Sample usage

Now you can use the slide panel component in your app components, for example in `app.component.ts`:
```typescript
import { NgxSlideInComponent } from 'ngx-slide-in';
...

@Component({...})
export class AppComponent {
   title = 'ngx-slde-in';
  @ViewChild('mySlide') mySlide: NgxSlideInComponent;

  OpenSlideIn() {
    this.mySlide.OpenSlide();
  }

  CloseSlideIn() {
    this.mySlide.CloseSlide();
  }
}
```

And in template file `app.component.html`:
```html
<div class="m-3">
    <button type="button" (click)="OpenSlideIn()" class="btn btn-primary">Open Slide</button>
</div>
<ngx-slide-in #mySlide [staticDrop]="false" [openOnLoad]="true" size="full">
    <angular-slide-header>
        <div class="p-2">
            <h3>Slide Heading</h3>
        </div>
    </angular-slide-header>
    <angular-slide-content>
        <div class="container">
            <h5>Slide Content</h5>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </angular-slide-content>
    <angular-slide-footer>
        <div class="p-2">
            <span class="pr-2"><button type="button" class="btn btn-primary">Save</button></span>
            <button type="button" (click)="CloseSlideIn()" class="btn btn-secondary">Close</button>
        </div>
    </angular-slide-footer>
</ngx-slide-in>
```

## License

The project is licensed under the MIT license.