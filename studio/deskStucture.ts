import {GrSettingsOption} from 'react-icons/gr'
import {GrMoney} from 'react-icons/gr'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const myStructure = (S: any, context: any) =>
  S.list()
    .title('Base')
    .items([
      orderableDocumentListDeskItem({
        type: 'works',
        title: 'Works',
        icon: GrMoney,
        id: 'orderable-en-projects',
        params: {
          lang: 'en_US',
        },
        createIntent: false,
        menuItems: [],
        S,
        context,
      }),
      S.listItem()
        .title('Settings')
        .icon(GrSettingsOption)
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Metadata')
                .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
              // S.listItem()
              //   .title('Footer')
              //   .child(S.document().schemaType('footer').documentId('footer')),
              // S.listItem()
              //   .title('Header')
              //   .child(S.document().schemaType('header').documentId('header')),
              // S.listItem().title('Menu').child(S.document().schemaType('menu').documentId('menu')),
            ]),
        ),

      // ...S.documentTypeListItems().filter(
      //   (listItem: any) => !['siteSettings'].includes(listItem.getId()),
      // ),
    ])

export const myDeskToolStructure = (S: any, context: any) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'works',
        title: 'Works',
        icon: GrMoney, // Provide your own icon
        id: 'orderable-en-projects', // Required if using multiple lists of the same 'type'
        // filter: `__i18n_lang == $lang`, // Add a filter if needed
        params: {
          lang: 'en_US',
        },
        createIntent: false, // Do not add an option for item creation
        menuItems: [], // Allow an array of `S.menuItem()` to be injected to orderable document list menu
        S,
        context,
      }),
    ])
