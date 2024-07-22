export const servicesQuery = `
*[_type == 'service'] {
    'serviceSlug': slug.current,
    title,
    _updatedAt,
  }
`

export const projectsQuery =  `
 *[_type == 'projects'] {
    'projectSlug': slug.current,
    title,
    _updatedAt,
  }
`