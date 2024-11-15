import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {GrMoney} from 'react-icons/gr'

export default {
  name: 'about',
  type: 'document',
  title: 'About',
  orderings: [orderRankOrdering],
  icon: GrMoney,
  fields: [
    {
      name: 'about',
      title: 'about',
      type: 'richTextComponent',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
