import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Tank Truck Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['T9999', 'T-9999', 'T1234', 'T-1234', 't1234', 't-1234'];

        // Act
        const results = plates.map(plate => validator.validateTankTruck(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateTankTruck(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.9999', 'AAAA@ZZZ', 'ABC_-123'];

        // Act
        const results = plates.map(plate => validator.validateTankTruck(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different than 5', () => {
        // Arrange
        const plates = ['T99999', 'T-999', 'T12345', 't-12345'];

        // Act
        const results = plates.map(plate => validator.validateTankTruck(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A', '999AA', 'AB12C', '12AB3', 'A1234'];

        // Act
        const results = plates.map(plate => validator.validateTankTruck(plate));

        // Assert
        expect(results).not.contains(true);
    });
});