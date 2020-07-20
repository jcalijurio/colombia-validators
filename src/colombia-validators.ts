import { ColombiaNITValidator } from './NIT/colombia-nit-validator';
import { ColombiaPlateValidator } from './Plate/colombia-plate-validator';

export class ColombiaValidators {

    NIT: ColombiaNITValidator = new ColombiaNITValidator();
    Plate: ColombiaPlateValidator = new ColombiaPlateValidator();

}