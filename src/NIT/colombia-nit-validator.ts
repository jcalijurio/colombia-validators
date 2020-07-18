export class ColombiaNITValidator {
    private _regexFormat: RegExp = /^(\d|\.|\-)+$/;
    private _regexAdjust: RegExp = /\D/gi;
    private _baseMod = 11;
    private _multipliers = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];


    validate(nit: string | null): boolean {
        if (!nit)
            return false;

        if (!this._regexFormat.test(nit))
            return false;

        const adjustedNit = nit.replace(this._regexAdjust, '');
        if (![9, 10].includes(adjustedNit.length))
            return false;

        const digit = adjustedNit.substr(adjustedNit.length - 1);
        const sequence = adjustedNit.substr(0, adjustedNit.length - 1).split('').reverse();

        let v = 0;
        let index = 0;
        for (; index < sequence.length; index++)
            v += parseInt(sequence[index], 10) * this._multipliers[index];

        let check = v % this._baseMod;
        if (check >= 2)
            check = this._baseMod - check;

        return check === parseInt(digit, 10);
    }
}