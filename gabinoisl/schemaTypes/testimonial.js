import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'array',
      name: 'testimonial',
      of: [{type: 'block'}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  },
})
