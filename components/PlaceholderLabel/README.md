# PlaceholderLabel
---

A simple colored block that represents a loading text.

## Getting Started

```
import { PlaceholderLabel } from 'Templates/components';

<PlaceholderLabel>
  Hello World
</PlaceholderLabel>
```

## Props

### children

_Type_: `node`<br>

Children that will ONLY be rendered when ready is true.

###### Usage:

```
<PlaceholderLabel>
  <h1>foobar</h1>
</PlaceholderLabel>
```

### ready

_Default_: `false`<br>
_Type_: `boolean`<br>

When ready children will be rendered, otherwise the placeholder will be shown.

###### Usage:

```
<PlaceholderLabel ready>
  <h1>foobar</h1>
</PlaceholderLabel>
```
---
