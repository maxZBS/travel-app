export default {
	name: 'favorites',
	title: 'Favorites',
	type: 'document',
	fields: [
		{
			name: 'email',
			title: 'Email',
			type: 'email',
			validation: Rule => Rule.required()
		},
		{
			name: 'places',
			title: 'Places',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'place' }]
				}
			],
			validation: Rule => Rule.required()
		}
	],

	preview: {
		select: {
			title: 'user.email'
		}
	}
}
