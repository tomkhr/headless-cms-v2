export default {
    name: 'projects',        // Unique name for the schema type
    title: 'Projects',       // Title shown in Sanity Studio
    type: 'document',    // This defines it as a document type
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      }
    ]
  }
  