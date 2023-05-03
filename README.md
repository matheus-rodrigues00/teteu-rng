# @matheus-rodrigues00/sanitize
[![npm (scoped)](https://img.shields.io/npm/v/@matheus-rodrigues00/sanitize?label=sanitize&logo=sanitize)](https://www.npmjs.com/package/@matheus-rodrigues00/sanitize)

Sanitizes a string removing sql keywords

## Install

```bash
npm install @matheus-rodrigues00/sanitize
```

## Usage

```js
const sanitize = require("@matheus-rodrigues00/sanitize");

const input = "login: drop table";

const str = sanitize(input);

console.log(str);
//=> "login:"
```