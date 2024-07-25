# Progress Indicator

There are multiple challenges involved in getting this to work.

- [x] Exterior Dashed border
- [x] Interior Radial Progress Indicator
- [x] Custom Range Slider

## Exterior Dashed border

It might look easier and out of the box border styling with something like

```css
border: 4px dashed black;
```

but this is the most further we can go with one liner border styling. We can customize the width, color and type of the border. But we cannot control the width of the dashes, gap between the dashes.

For achieving this we have different kinds of hacks available out there. Following is a list of the solutions I considered using.

### Background Image + SVG

I found a [tool](https://kovart.github.io/dashed-border-generator/) that can generate an very simple SVG with just a single `rect`. This can be used as a `background` of an element. The svg itself is very simple. It is just this.

```svg
<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100%' height='100%' fill='none'    rx='50%' ry='50%' stroke='#6eacda' stroke-width='5' stroke-dasharray='7%, 5%' stroke-dashoffset='0' stroke-linecap='butt'/>
</svg>
```

Virtually every aspect of this is customizable. Following are the possibilities

- `width` and `height`
- Desired dash and gap length using `stroke-dasharray`.(Specify dash and space pattern)
- Dash width using `stroke-width`
- Border radius using `rx` and `ry`

I went with this approach as it allows me to set the border with a single property.

```css
background-image: url("border.svg");
```

svg saved in public folder.

We can make this dynamic and customize all the above mentioned properties in runtime by using the svg directly in the url.

```css
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='50%25' ry='50%25' stroke='%236eacda' stroke-width='5' stroke-dasharray='7%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
```

This is the same svg, but url encoded. This looks a little ugly but customizable on the fly.

Checkout the rest of the options if you want to know the other options and their limitations.

### Border Image Property

Following [guide](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image) goes through how to use border image property.

To simplify it lets us set an image as the border of an element.

Challenge here is We have to come up with an image or a gradient that acts as our dashed background. I think we can use the above svg here. But the svg didn't work out of the box here. Since this doesn't offer anything more than the above way, i stopped persuing this route.

### Background Image + Gradient

This [guide](https://css-tricks.com/more-control-over-css-borders-with-background-image/) has neat explaination on the details.

We achieve different styles of border by setting multiple `repeating-linear-graident`s as `background-image`. The gradient defines a dash and space pattern. And this gradient will be set in four different starting angles by doing providing it as a comma seperated backgrounds.

Challenges with this approach are the code required is complex and bulky. And most importantly, `border-radius` is simply impossible.

## Interior Radial Progress Indicator

This used to be difficult to do but all the browsers supporting the relatively new `conic-graident` this can be done with a single style.

```css
background: conic-gradient(white 0% 70%, transparent 70% 100%);
```

We can just make the percentage of the white cone and the transparent cone dynamic based on a reactive state variable.

## Custom Range Slider

This also feels straight forward. But customizing complex native elements often prove difficult. And making the changes cross-browser compatible will make us rethink about the customization and ground up rebuild of the whole component, which we often do.

But i wanted to see how far we can go with customizing the native range input. It was possible to customize it to a satisfactory level. I just added customizations to Webkit and Mozilla. Intentionally left out IE.

Follow this [guide](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) for more details.

There's a caveat that the guide doesn't address. which is, there is no selecotor to style the filled portion of the slider track. We again have to use a `linear-gradient` here.

```css
background: linear-gradient(
  to right,
  #6eacda 0%,
  #6eacda 70%,
  white 70%,
  white 100%
);
```

We have to make the percentages dynamic just like we did for the conical gradient. Take a look at the implementation of `RangeInput` for better understanding.
