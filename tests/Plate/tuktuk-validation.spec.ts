import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Tuktuk Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['999AAA', '999-AAA', '123-ABC', '123-ABC', '123abc', '123-abc',
            '987zyx', '987-zyx'];

        // Act
        const results = plates.map(plate => validator.validateTuktuk(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateTuktuk(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', '9999.DDD', 'AAAA@ZZZ', '123-ABC_'];

        // Act
        const results = plates.map(plate => validator.validateTuktuk(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different than 6', () => {
        // Arrange
        const plates = ['99999AAA', '999-AAAA', '123AB', '123-AB'];

        // Act
        const results = plates.map(plate => validator.validateTuktuk(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9A', 'AAAA999', 'AB12CD3', '12AB345'];

        // Act
        const results = plates.map(plate => validator.validateTuktuk(plate));

        // Assert
        expect(results).not.contains(true);
    });
});