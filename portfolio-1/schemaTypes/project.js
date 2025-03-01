export default {
    name: 'project',        // Unique name for the schema type
    title: 'Projects',       // Title shown in Sanity Studio
    type: 'document',    // This defines it as a document type
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail Image',
        type: 'image'
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
  