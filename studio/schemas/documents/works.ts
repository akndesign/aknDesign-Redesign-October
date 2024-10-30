import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';
import { GrMoney } from 'react-icons/gr';

export default {
  name: 'works',
  type: 'document',
  title: 'Works',
  orderings: [orderRankOrdering],
  icon: GrMoney,
  groups: [
    { name: 'info', title: 'Basic Info' },
    { name: 'quote', title: 'Quote' },
    { name: 'media', title: 'Media' },
    { name: 'layout', title: 'Layout' },
  ],
  fields: [
    orderRankField({ type: 'works' }),
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
          { title: 'Neon Green', value: 'bg-neon-green' },
          { title: 'Azure', value: 'bg-azure' },
          { title: 'White', value: 'bg-white' },
          { title: 'Purple', value: 'bg-purple' },
          { title: 'Vermilion', value: 'bg-vermilion' },
          { title: 'Provincial Pink', value: 'bg-provincial-pink' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'banner',
      type: 'object',
      title: 'Banner',
      group: 'media',
      fields: [
        {
          title: 'Type',
          name: 'mediaType',
          type: 'string',
          options: {
            list: [
              { title: 'Image', value: 'image' },
              { title: 'Video', value: 'video' },
              { title: 'YouTube', value: 'youtube' },
            ],
            layout: 'radio',
          },
          validation: (Rule: any) => Rule.required(),
          clearOnChange: true,
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image' }],
          options: {
            hotspot: true,
          },
          hidden: ({ parent }: { parent: { mediaType: string } }) => parent?.mediaType !== 'image',
          validation: (Rule: any) =>
            Rule.custom((value: any, context: { parent: { mediaType: string } }) => {
              if (context.parent.mediaType === 'image' && !value?.length) {
                return 'You must provide an image for the banner.';
              }
              return true;
            }),
        },
        {
          title: 'Video',
          name: 'video',
          type: 'file',
          hidden: ({ parent }: { parent: { mediaType: string } }) => parent?.mediaType !== 'video',
          validation: (Rule: any) =>
            Rule.custom((value: any, context: { parent: { mediaType: string } }) => {
              if (context.parent.mediaType === 'video' && !value) {
                return 'You must provide a video for the banner.';
              }
              return true;
            }),
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
          hidden: ({ parent }: { parent: { mediaType: string } }) => parent?.mediaType !== 'youtube',
          validation: (Rule: any) =>
            Rule.custom((value: any, context: { parent: { mediaType: string } }) => {
              if (context.parent.mediaType === 'youtube' && !value) {
                return 'You must provide a YouTube link for the banner.';
              }
              return true;
            }),
        },
      ],
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
          { title: 'Half', value: 'half' },
          { title: 'Full', value: 'full' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'halfLayout',
      title: 'Image is Right or Left',
      type: 'string',
      group: 'layout',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      hidden: ({ parent }: { parent: { layout: string } }) => parent?.layout !== 'half',
    },
  ],
};
