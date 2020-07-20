import { ColombiaPlateValidator } from '../../src/Plate/colombia-plate-validator';
import { expect } from 'chai';

describe('Plate Format validation', () => {

    let validator: ColombiaPlateValidator;

    beforeEach(() => {
        validator = new ColombiaPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AAA999', 'AAA-999', 'ABC123', 'ABC-123', 'abc123', 'abc-123',
            'zyx987', 'zyx-987', '999AAA', '999-AAA', '123-ABC', '123-ABC', '123abc', '123-abc',
            'R12345', 'r-12345', 't1234', 'T-1234', 'AB1234', 'AB-1234', 'abc12', 'abc-12',
            'abc12d', 'abc-12d', '123456', '123-456'];

        // Act
        const results = plates.map(plate => validator.validate(plate));

        // Assert
        expect(results).not.contains(false);
    });
});