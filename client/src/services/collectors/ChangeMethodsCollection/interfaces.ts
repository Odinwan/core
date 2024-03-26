/**
 * Сервис авторизации пользователя
 */
export interface ChangeMethodsInterface {
    StringConvertToFloat(value: string): number

    NumberConvertToFloat(value: number): number

    ChangeNumberToString(value: number): string

    ChangeStringToString(value: string): string

    ChangeStringToNumber(value: string): number

    ChangeNumberToNumber(value: number): number
}
