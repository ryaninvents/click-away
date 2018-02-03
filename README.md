# click-away

Perform an action when the user clicks away from an element of interest, such as a popup, dropdown, or modal.

<!-- demo links here -->

## Installation

```bash
# npm
npm install --save click-away

# yarn
yarn add click-away
```

## Usage

Suppose you're working on a `Modal` component that renders a dialog box, and you wish to close the modal if the user clicks away.

```js
import React from 'react';

// Not shown: CSS rules for `.modal`, `.modal-open`, `.modal-closed`

export default function Modal({isOpen, onClose, children}) {
    const className = `modal modal-${isOpen ? 'open' : 'closed'}`;
    return (
        <div className={className}>
            {children}
        </div>
    );
}
```

Adding behavior to close the modal is as easy as passing `click-away` as a `ref`, with a reference to the callback you wish to use:

```js
import React from 'react';
import callOnClickAway from 'click-away';

export default function Modal({isOpen, onClose, children}) {
    const className = `modal modal-${isOpen ? 'open' : 'closed'}`;
    return (
        <div className={className} ref={callOnClickAway(onClose)}>
            {children}
        </div>
    );
}
```

## Documentation

### callOnClickAway(callback)

Returns a function you can pass as a React or Preact `ref`, which calls the given callback when the user clicks anywhere outside the rendered element.

For instance, if you render this:

```js
<div ref={callOnClickAway(handler)}>Hello!</div>
```

then the `handler` function will be called any time the use clicks outside the div.

## Caveats

### Using component style libraries with `click-away`

If you're using `emotion`, `styled-components`, `glamorous`, or similar, keep in mind you need to pass the callback to `innerRef` instead of `ref`.

## Contributing

This project uses [ESLint-style commit messages](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-eslint/readme.md).