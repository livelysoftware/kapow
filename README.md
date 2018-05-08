kapow
======

[![Build Status](https://travis-ci.com/livelysoftware/kapow.svg?branch=master)](https://travis-ci.com/livelysoftware/kapow) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/0380ed069ab24ed393dc3f82d7dcd7a8)](https://www.codacy.com/app/andrew-lively2/kapow?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=livelysoftware/kapow&amp;utm_campaign=Badge_Grade)

Runtime function input validation using decorators and [ow](https://github.com/sindresorhus/ow)

## Installation

```
npm install --save @livelysoftware/kapow
```

## Example

```typescript

import { kapow, validate } from "@livelysoftware/kapow";

class MyClass {

  constructor() {}

  @validate
  add(
    @kapow({
      required: true,
      type: "number"
    }) a,
    @kapow({
      required: true,
      type: "number"
    }) b
  ) {
    /*
      If a and/or b are not provided and/or
      not of type "number" then an error will be thrown
    */
    return a + b;
  }

}

```

## Supported Options

- `required`
  - Type: `boolean`
  - Default: `false`
  - When set to true, throws an error if the parameter does not exist

- `type`
  - Type: `string`
  - Default: `any`
  - Validates provided input based on type

## TODO

- [ ] Full (or as much as possible) API support for [ow](https://github.com/sindresorhus/ow)
- [ ] Tests for all available options
- [ ] Reduce required syntax if possible (looking at you, `@validate`)
