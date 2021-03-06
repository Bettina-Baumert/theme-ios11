# AddToCartButton
---

The add to cart button component renders a rounded button that will put the current product in to the cart.
When clicked a bounce animation is triggered that will bounce in the checkmark icon and bounce out the cart icon and vice versa.

## Getting Started

```
import { AddToCartButton } from 'Templates/components';

<AddToCartButton handleAddToCart={() => {}} isLoading isOrderable={false} />
```

## Props

### handleAddToCart (required)

_Type_: `function`<br>

This function will be called when the user clicks the button and `isOrderable` is `true` and `isLoading` is `false`

###### Usage:

```
<AddToCartButton handleAddToCart={() => { console.log('addToCart'); }} isLoading={false} isOrderable />
```

### isLoading (required)

_Type_: `boolean`<br>

Should be `true` to indicate that the product or related data is currently loading.
If `true` the button will contain a spinning loading icon.

###### Usage:

```
<AddToCartButton handleAddToCart={() => { console.log('addToCart'); }} isLoading isOrderable={false} />
```

### isOrderable (required)

_Type_: `boolean`<br>

Should be `true` to indicate that the current product is orderable, if not orderable the button won't trigger the checkmark animation when clicked.
`handleAddToCart` will be still called though to handle missing variant selection..

###### Usage:

```
<AddToCartButton handleAddToCart={() => { console.log('addToCart'); }} isLoading isOrderable />
```
---
