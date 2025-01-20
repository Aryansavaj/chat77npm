## Install

```bash
npm install @chat77npm/js @chat77npm/react
```

## Standard

```tsx
import { Standard } from '@chat77npm/react'

const App = () => {
  return (
    <Standard
      chat77submodule="lead-generation-copy-3luzm6b"
      style={{ width: '100%', height: '600px' }}
    />
  )
}
```

This code is creating a container with a 100% width (will match parent width) and 600px height.

## Popup

```tsx
import { Popup } from '@chat77npm/react'

const App = () => {
  return <Popup chat77submodule="lead-generation-copy-3luzm6b" autoShowDelay={3000} />
}
```

This code will automatically trigger the popup window after 3 seconds.

### Open or Close a popup

You can use these commands:

```js
import { open } from '@chat77npm/react'

open()
```

```js
import { close } from '@chat77npm/react'

close()
```

```js
import { toggle } from '@chat77npm/react'

toggle()
```

## Bubble

```tsx
import { Bubble } from '@chat77npm/react'

const App = () => {
  return (
    <Bubble
      chat77submodule="lead-generation-copy-3luzm6b"
      previewMessage={{
        message: 'I have a question for you!',
        autoShowDelay: 5000,
        avatarUrl: 'https://avatars.githubusercontent.com/u/16015833?v=4',
      }}
      theme={{
        button: { backgroundColor: '#0042DA', iconColor: '#FFFFFF' },
        previewMessage: { backgroundColor: '#ffffff', textColor: 'black' },
      }}
    />
  )
}
```

This code will show the bubble and let a preview message appear after 5 seconds.

### Open or close the preview message

You can use these commands:

```js
import { showPreviewMessage } from '@chat77npm/react'

Chat77submodule.showPreviewMessage()
```

```js
import { hidePreviewMessage } from '@chat77npm/react'

Chat77submodule.hidePreviewMessage()
```

### Open or close the chat window

You can use these commands:

```js
import { open } from '@chat77npm/react'

open()
```

```js
import { close } from '@chat77npm/react'

close()
```

```js
import { toggle } from '@chat77npm/react'

toggle()
```

## Additional configuration

You can prefill the bot variable values in your embed code by adding the `prefilledVariables` option. Here is an example:

```tsx
import { Standard } from '@chat77npm/react'

const App = () => {
  return (
    <Standard
      chat77submodule="lead-generation-copy-3luzm6b"
      style={{ width: '100%', height: '600px' }}
      prefilledVariables={{
        'Current URL': 'https://my-site/account',
        'User name': 'John Doe',
      }}
    />
  )
}
```

It will prefill the `Current URL` variable with "https://my-site/account" and the `User name` variable with "John Doe". More info about variables: [here](/editor/variables).

Note that if your site URL contains query params (i.e. https://chat77npm?User%20name=John%20Doe), the variables will automatically be injected to the chat77submodule. So you don't need to manually transfer query params to the bot embed configuration.
