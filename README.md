colombia-validators
==============
[![npm version](https://img.shields.io/npm/v/colombia-validators.svg)](https://www.npmjs.com/package/colombia-validators)
[![Build Status](https://travis-ci.org/jcalijurio/colombia-validators.svg)](https://travis-ci.org/jcalijurio/colombia-validators)

Colombia NIT/RUT number and Car Plate validators / Validaciones de numero NIT/RUT y Placa de vehículo.

## Instalation

### With npm

```bash
npm i colombia-validators
```

### Running tests

```bash
npm run test
```

## Validations

### NIT/RUT

Validation for NIT/RUT numbers.

```javascript
const { ColombiaValidators } = require('colombia-validators');
const validator = new ColombiaValidators();

const isValid = validator.NIT.validate('564823570');
const carPlateIsValid = validator.Plate.validate('ABC123');
const cargoPlateIsValid = validator.Plate.validate('R12345');
const tuktukPlateIsValid = validator.Plate.validate('123ABC');
```
## On Browser

### Script Reference

```html
<script src="node_modules/colombia-validators/colombia-validators.min.js"></script>
```

### Validations

```javascript
var validator = new ColombiaValidators();
var nitIsValid = validator.NIT.validate('564823570');
var carPlateIsValid = validator.Plate.validate('ABC123');
var cargoPlateIsValid = validator.Plate.validate('R12345');
var tuktukPlateIsValid = validator.Plate.validate('123ABC');
```