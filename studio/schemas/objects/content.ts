import { defineType } from "sanity";

export default defineType(
    {
        name: 'contentComponent',
        type: 'array',
        title: 'Content Component',
        of: [
            {
                type: 'block',
            },
            {
                type: 'imageComponent',
            },
        ],
    });