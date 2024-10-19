import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {GrMoney} from 'react-icons/gr'

export default {
  name: 'works',
  type: 'document',
  title: 'Works',
  orderings: [orderRankOrdering],
  icon: GrMoney,
  groups: [
    {
      name: 'info',
      title: 'Basic Info',
    },
    {
      name: 'quote',
      title: 'Quote',
    },
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'layout',
      title: 'Layout',
    },
  ],
  fields: [
    orderRankField({type: 'works'}),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'info',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'info',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richTextComponent',
      validation: (Rule: any) => Rule.required(),
      group: 'info',
    },
    {
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          {title: 'Neon Green', value: 'bg-neon-green'},
          {title: 'Azure', value: 'bg-azure'},
          {title: 'White', value: 'bg-white'},
          {title: 'Purple', value: 'bg-purple'},
          {title: 'Vermilion', value: 'bg-vermilion'},
          {title: 'Provincial Pink', value: 'bg-provincial-pink'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
      group: 'media',
    },
    {
      name: 'quote',
      type: 'richTextComponent',
      title: 'Quote',
      group: 'quote',
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'string',
      group: 'quote',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      group: 'info',
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      group: 'layout',
      options: {
        list: [
          {title: 'Half', value: 'half'},
          {title: 'Full', value: 'full'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'halfLayout',
      title: 'Image is right or left',
      type: 'string',
      group: 'layout',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      hidden: ({parent}: any) => parent?.layout !== 'half',
    },
  ],
}
