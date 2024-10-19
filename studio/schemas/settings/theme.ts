export default {
    name: 'theme',
    title: 'Theme',
    type: 'document',
    fields: [
        {
            name: 'darkMode',
            title: 'Dark Mode',
            type: 'boolean',

        },
        {
            name: 'themeColor1',
            title: 'Theme Color 1',
            type: 'string',
        },
        {
            name: 'themeColor2',
            title: 'Theme Color 2',
            type: 'string',
        }
    ],
    initialValue: {
        darkMode: false,
    },
}