/**
 * Сервис авторизации пользователя
 */
export interface ValidationCollectionInterface {
    validateEmail(email: string, isRequired: boolean): string | null

    validatePhone(phone: string, isRequired: boolean): string | null

    validateStringField(fieldValue: string, fieldName: string, isRequired: boolean): string | null

    validateDateField(dateValue: string, fieldName: string, isRequired: boolean): string | null

    validateEnum<T>(dateValue: T, fieldName: string, isRequired: boolean): string | null
}
