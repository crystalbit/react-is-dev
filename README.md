# Description

The library provides single function to determine environment under which a react app is started. The function returns `true` in case of react development server, `false` in case of built application.

Tested with create-react-app.

# Installation

```bash
npm i react-is-dev
```

# Import

```javascript
import isDev from 'react-is-dev';
```

# Usage

`isDev` is a simple function returning `Boolean` value and accepting your `React` instance as a parameter.

So, to determine whether react is under development or production enviroment, use:
```javascript
import React from 'react';
...
import isDev from 'react-is-dev';
...
...
const ifDevEnv = isDev(React); // true if development mode, false if production
```
