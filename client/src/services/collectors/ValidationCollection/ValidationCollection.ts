import {ValidationCollectionInterface} from "@services/collectors/ValidationCollection/interfaces";

/**
 * Сервис авторизации пользователя
 */
export class ValidationCollection implements ValidationCollectionInterface {
    validateEmail(email: string, isRequired: boolean): string | null {
        if (isRequired && !email) {
            return 'Email is required';
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return 'Invalid email format';
        }

        return null;
    }

    validatePhone(phone: string, isRequired: boolean): string | null {
        if (isRequired && !phone) {
            return 'Phone is required';
        }

        return null;
    }

    validateStringField(fieldValue: string, fieldName: string, isRequired: boolean): string | null {
        if (isRequired && !fieldValue) {
            return `${fieldName} is required`;
        }

        return null;
    }

    validateDateField(dateValue: string, fieldName: string, isRequired: boolean): string | null {
        if (isRequired && !dateValue) {
            return `${fieldName} is required`;
        }

        return null;
    }

    validateEnum<T>(dateValue: T, fieldName: string, isRequired: boolean): string | null {
        if (isRequired && !dateValue) {
            return `${fieldName} is required`;
        }

        return null;
    }
}
