import { emailValidationRule } from "../rules/email";


export default {
    name: 'footer',
    title: 'Footer',
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
            name: 'footerNav',
            title: 'Footer navigation',
            description: 'Select menu for footer navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
        {
            title: 'Social navigation',
            name: 'socialNav',
            description: 'Select menu for social navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
    ],
    initailValue: {
        title: 'Footer',
    },
}