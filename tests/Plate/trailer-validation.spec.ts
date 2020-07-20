import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Trailer Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['R99999', 'R-99999', 'R12345', 'R-12345', 'r12345', 'r-12345'];

        // Act
        const results = plates.map(plate => validator.validateTrailer(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateTrailer(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.9999', 'AAAA@ZZZ', 'ABC_-123'];

        // Act
        const results = plates.map(plate => validator.validateTrailer(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different than 5', () => {
        // Arrange
        const plates = ['R999999', 'R-9999', 'R123', 'r-123456'];

        // Act
        const results = plates.map(plate => validator.validateTrailer(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9', '999AAR', 'AB12CR', '12AB3R', 'A12345'];

        // Act
        const results = plates.map(plate => validator.validateTrailer(plate));

        // Assert
        expect(results).not.contains(true);
    });
});