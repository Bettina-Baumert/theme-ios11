# ZoomPanSlider 
---

A slider component that can be used for zooming and panning of images.

> **Dependencies:** <br> `<ImageSlider />` <br /> `<ZoomPanContainer />`

## Getting Started

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```

## Styling

An object with following keys can be passed as the classNames property.

### slider (optional)
Appends styling to the outer wrapper of the slider

### indicator (optional)
Appends styling to the outer wrapper of the 

### activeIndicator (optional)
Appends styling to the currently active dot

### inactiveIndicator (optional)
Appends styling to all other dots

## Props

### children (required)

_Type_: `React.Node`<br>

Each children element is treated as a single slider item

### disabled (optional)

_Type_: `bool`<br />
_Default_: `false`<br />

Whether swiping for this slider should be allowed.

###### Usage:

```
<ZoomPanSlider disabled>
  ...
</ZoomPanSlider>

### autoplay (optional) 

_Type_: `bool`<br>
_Default_: `false`<br>

If autoplay is enabled, the next slider item will appear automatically after `interval`ms

###### Usage:

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider autoplay>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```

### interval (optional) 

_Type_: `number`<br>
_Default_: `3000`<br>

The time specifies how many ms the autoplay needs to wait.
If autoplay is false, this prop is ignored.

###### Usage:

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider autoplay interval={3000}>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```
### controls (optional)

_Type_: `bool`<br>
_Default_: `false`<br>

Whether to display the control buttons or not

###### Usage:

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider controls>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```

### indicators (optional)

_Type_: `bool`<br>
_Default_: `false`<br>

Whether to display the indicators (little dots)

###### Usage:

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider indicators>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```

### loop (optional)

_Type_: `bool`<br>
_Default_: `false`<br>

If true then after the last item the first will appear again. 
And therefore allow swiping infinitely.

###### Usage:

```
import { Image } from 'Library/components';
import { ZoomPanSlider } from 'Templates/components';

<ZoomPanSlider loop>
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
  <Image src="/foo/bar" />
</ZoomPanSlider>
```
