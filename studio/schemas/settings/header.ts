import { emailValidationRule } from "../rules/email";


export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'subtitle',
        },
        {
            name: 'headerNav',
            title: 'Footer navigation',
            description: 'Select menu for footer navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
    ],
    initailValue: {
        title: 'Header',
    },
}