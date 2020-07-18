import { ColombiaNITValidator } from './NIT/colombia-nit-validator';

declare global {
    interface Window {
        ColombiaNITValidator: any;
    }
}

declare interface MyProps {
    ColombiaNITValidator: any;
}

(window as MyProps).ColombiaNITValidator = ColombiaNITValidator;