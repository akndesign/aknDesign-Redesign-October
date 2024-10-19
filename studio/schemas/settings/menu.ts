import { emailValidationRule } from "../rules/email";

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: emailValidationRule
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone',
        },
        {
            name: 'address',
            type: 'textComponent',
            title: 'Address',
        },
        {
            title: 'Main navigation',
            name: 'mainNav',
            description: 'Select menu for main navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
    ],
    initailValue: {
        title: 'Menu',
    },
}