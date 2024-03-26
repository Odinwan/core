import {ChangeMethodsInterface} from "@services/collectors/ChangeMethodsCollection/interfaces";

/**
 * Сервис авторизации пользователя
 */
export class ChangeMethods implements ChangeMethodsInterface {
    StringConvertToFloat(value:string): number {
        const numberValue = Number(value)

        return Number(numberValue.toFixed(2))
    }

    NumberConvertToFloat(value:number): number {

        return Number(value.toFixed(2))
    }

    ChangeNumberToString(value: number): string {

        return String(value);
    }

    ChangeStringToString(value: string): string {

        return value;
    }

    ChangeStringToNumber(value: string): number {

        return Number(value);
    }

    ChangeNumberToNumber(value: number): number {

        return value;
    }
}
