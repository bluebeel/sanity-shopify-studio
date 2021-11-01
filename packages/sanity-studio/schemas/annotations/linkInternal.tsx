import { LinkIcon } from '@sanity/icons'
import React from 'react'
import { PAGE_REFERENCES } from '../../constants'

export default {
  title: 'Internal Link',
  name: 'annotationLinkInternal',
  type: 'object',
  blockEditor: {
    icon: () => <LinkIcon />,
    render: ({ children }) => (
      <span>
        {children}
        <LinkIcon style={{ marginLeft: '0.2em', verticalAlign: 'text-bottom' }} />
      </span>
    )
  },
  fields: [
    // Reference
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: Rule => Rule.required(),
      to: PAGE_REFERENCES
    }
  ]
}
