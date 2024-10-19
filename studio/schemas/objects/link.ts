// //File name: link.js
// //File location: schemas/objects

// export default {
//     name: 'link',
//     type: 'object',
//     title: 'Link',
//     fields: [
//         {
//             name: 'externalUrl',
//             title: 'External URL',
//             description: "Use fully qualified URLS for external link",
//             type: 'url',
//         },
//     ]
// };

import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'linkComponent',
    title: 'Link Component',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string',
        }),
    ],
});