# Content Projection

This exercise helps you in understanding the usage of composition and content projection to write flexible and extendible UI-components.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Tasks

1. Take a look at the slider component and understand the configuration possibilities provided by the `@Input`-parameters.

2. Extract a __slide-component__ which will be rendered by the __slider-component__ via `<ng-content></ng-content>`. Provided the slide to the __slider-component__ by using constructor injection. 

```
class SlideComponent implements OnInit {
    @Input();
    public slide: SlideDefinition;

    constructor(private sliderComponent: SliderComponent){ }

    public ngOnInit(){
        this.sliderComponent.registerSlide(this.slide);
    }
}
```

3. Extract the rotation logic into a __vertical-rotator__ and a __horizontal-rotator__. These two components should handle the changing of the offset and should update the currently selected slide which is still held in the __slider-component__. 

_At this point the, slider should contain the information of the currently given __slides__ and the currently __selected-slide__._

4. Extract the navigation and remove the position-attribute, as it should be possible to move the navigation itself, below or above the rotator. 

5. Use Content-Children with a `QueryList` instead of the Constructor Injection. 

6. Introduce an overview-navigation, which gets the label to show for a specific slide via an `ng-template`. This template should be marked with and marker-directive: 

```
<app-slide>
    <ng-template overviewTemplate>The <b>wonderful</b> Testslide</ng-template>
    <h1>A Testslide</h1>
    <p>The description for it</p>
</app-slide>
```
