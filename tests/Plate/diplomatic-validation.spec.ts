import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Diplomatic Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AA9999', 'AA-9999', 'AB1234', 'AB-1234', 'ab1234', 'ab-1234',
            'zy9876', 'zy-9876'];

        // Act
        const results = plates.map(plate => validator.validateDiplomatic(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateDiplomatic(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.9999', 'AAAA@ZZZ', 'ABC_-123'];

        // Act
        const results = plates.map(plate => validator.validateDiplomatic(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different than 6', () => {
        // Arrange
        const plates = ['AAA99999', 'AAAA-999', 'ABC1234', 'ABC-1234'];

        // Act
        const results = plates.map(plate => validator.validateDiplomatic(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9', '999AAA', 'AB12CD', '12AB34'];

        // Act
        const results = plates.map(plate => validator.validateDiplomatic(plate));

        // Assert
        expect(results).not.contains(true);
    });
});