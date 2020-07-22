export class ColombiaPlateValidator {
    private _regexTankTruckPlate: RegExp = /^T\d{4}$/i;
    private _regexTrailerPlate: RegExp = /^(R|S)\d{5}$/i;
    private _regexCarPlate: RegExp = /^[a-zA-Z]{3}\d{3}$/i;
    private _regexMotorcyclePlate: RegExp = /^[a-zA-Z]{3}\d{2}[a-zA-Z]?$/i;
    private _regexTuktukPlate: RegExp = /^\d{3}[a-zA-Z]{3}$/i;
    private _regexDiplomaticPlate: RegExp = /^[a-zA-Z]{2}\d{4}$/i;
    private _regexArmedForces: RegExp = /^\d{6}$/i;

    private _regexCheckContent = /[^A-Za-z0-9\-]/;
    private _regexAdjust = /[^A-Za-z0-9]/gi;

    private _generalValidate(plate: string | null, validSize: number): boolean {
        if (!plate)
            return false;

        if (this._regexCheckContent.test(plate))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        if (adjustedPlate.length !== validSize)
            return false;

        return true;
    }

    private _adjustContent = (plate: string | null) => plate ? plate.replace(this._regexAdjust, '') : '';

    validateArmedForces(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexArmedForces.test(adjustedPlate);
    }

    validateDiplomatic(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexDiplomaticPlate.test(adjustedPlate);
    }

    validateTuktuk(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexTuktukPlate.test(adjustedPlate);
    }

    validateTankTruck(plate: string | null): boolean {
        if (!this._generalValidate(plate, 5))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexTankTruckPlate.test(adjustedPlate);
    }

    validateTrailer(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexTrailerPlate.test(adjustedPlate);
    }

    validateCar(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexCarPlate.test(adjustedPlate);
    }

    validateMotorcycle(plate: string | null): boolean {
        if (!this._generalValidate(plate, 5) && !this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexMotorcyclePlate.test(adjustedPlate);
    }

    validate = (plate: string | null) => this.validateTankTruck(plate) || this.validateCar(plate) || this.validateMotorcycle(plate)
        || this.validateArmedForces(plate) || this.validateDiplomatic(plate) || this.validateTrailer(plate)
        || this.validateTuktuk(plate)

}
