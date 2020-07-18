import { ColombiaNITValidator } from '../../src/NIT/colombia-nit-validator';
import { expect } from 'chai';

describe('NIT Individual and Company validation', () => {
    let validator: ColombiaNITValidator;
    beforeEach(() => {
        validator = new ColombiaNITValidator();
    });

    it('Must be a valid NIT when the value is OK', () => {
        // Arrange
        const nitList = ['412615332', '8110079918','124499654', '12.449.965-4', '830080150-1', '700602703'];

        // Act
        const results = nitList.map(nit => validator.validate(nit));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is empty or null', () => {
        // Arrange
        const nitList = ['', null];

        // Act
        const results = nitList.map(nit => validator.validate(nit));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value contains non digit, dash or dot', () => {
        // Arrange
        const nitList = ['80@10-77.29A0', '2.2Z334J45-59', '23@344555', '74U38T915X7'];

        // Act
        const results = nitList.map(nit => validator.validate(nit));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the length is not between 9 and 10 digits', () => {
        // Arrange
        const nitList = ['123', '801077290153', '3344555', '74389157001'];

        // Act
        const results = nitList.map(nit => validator.validate(nit));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the digit is invalid', () => {
        // Arrange
        const nitList = ['801077291', '223344550', '2334455201', '7438915864'];

        // Act
        const results = nitList.map(nit => validator.validate(nit));

        // Assert
        expect(results).not.contains(true);
    });
});