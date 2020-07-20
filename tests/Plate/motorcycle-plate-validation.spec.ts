import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Motorcycle Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AAA99A', 'AAA-99A', 'ABC12D', 'ABC-12D', 'abc12d', 'abc-12d',
            'zyx98v', 'zyx-98v', 'AAA-99', 'ABC-12D'];

        // Act
        const results = plates.map(plate => validator.validateMotorcycle(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateMotorcycle(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.9999', 'AAAA@ZZZ', 'ABC_-123'];

        // Act
        const results = plates.map(plate => validator.validateMotorcycle(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different than 5 or 6', () => {
        // Arrange
        const plates = ['AA9999','AAA99999', 'AAAA-999', 'ABC1234', 'ABC-1234'];

        // Act
        const results = plates.map(plate => validator.validateMotorcycle(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9A', '999AAAA', 'AB12CD3', '12AB345'];

        // Act
        const results = plates.map(plate => validator.validateMotorcycle(plate));

        // Assert
        expect(results).not.contains(true);
    });
});