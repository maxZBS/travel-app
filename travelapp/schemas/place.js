export default {
	name: 'place',
	title: 'Place',
	type: 'document',
	fields: [
		{
			name: 'location',
			title: 'Location',
			type: 'object',
			fields: [
				{
					name: 'country',
					type: 'string',
					title: 'Country',
					validation: Rule => Rule.required(),
				},
				{
					name: 'city',
					type: 'string',
					title: 'City',
					validation: Rule => Rule.required(),
				},
			],
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'location.city',
				slugify: input => input.toLowerCase().replace(/\s+/g, '-'),
			},
			validation: Rule => Rule.required(),
		},
		{
			name: 'imagePath',
			title: 'Image path',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: Rule => Rule.required(),
		},
		{
			name: 'rating',
			title: 'Rating',
			type: 'number',
			validation: Rule => Rule.required().positive().max(5),
		},
		{
			name: 'duration',
			title: 'Duration (days)',
			type: 'number',
			validation: Rule => Rule.required().positive(),
		},
		{
			name: 'distance',
			title: 'Distance (km.)',
			type: 'number',
			validation: Rule => Rule.required().positive(),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'blockContent',
			validation: Rule => Rule.required(),
		},
	],

	preview: {
		select: {
			title: 'location.city',
			media: 'imagePath',
		},
	},
}
