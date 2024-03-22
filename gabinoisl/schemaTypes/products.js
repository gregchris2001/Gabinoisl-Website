import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'features',
      title: 'features',
      type: 'array',
      of: [
        {
          title: 'features',
          type: 'object',
          fields: [
            {type: 'string', name: 'name'},
            {type: 'string', name: 'value'},
          ],
        },
      ],
    }),
    defineField({
      name: 'total_quantity',
      title: 'Total Quantity',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
    }),
    defineField({
      name: 'room',
      title: 'Room',
      type: 'string',
    }),
    defineField({
      name: 'class',
      title: 'Class',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
