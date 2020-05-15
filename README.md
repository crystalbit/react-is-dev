[![Build Status](https://travis-ci.org/crystalbit/react-is-dev.svg?branch=master)](https://travis-ci.org/crystalbit/async-delay-planner) [![Coverage Status](https://coveralls.io/repos/github/crystalbit/react-is-dev/badge.svg?branch=master)](https://coveralls.io/github/crystalbit/async-delay-planner?branch=master)

# Description

The library provides a single function to determine the environment under which a react app is started. The function returns `true` in case of react development server, `false` in case of built application.

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

So, to determine whether your app is under development or production enviroment, use:
```javascript
import React from 'react';
...
import isDev from 'react-is-dev';
...
...
const ifDevEnv = isDev(React); // true if development mode, false if production
```
