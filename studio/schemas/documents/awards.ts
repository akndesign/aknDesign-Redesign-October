import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {GrMoney} from 'react-icons/gr'

export default {
  name: 'awards',
  type: 'document',
  title: 'awards',
  orderings: [orderRankOrdering],
  icon: GrMoney,

  fields: [
    orderRankField({type: 'awards'}),
    {
      name: 'title',
      title: 'Award Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richTextComponent',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
