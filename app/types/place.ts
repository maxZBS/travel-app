export type TypeLocation = {
	city: string
	country: string
}

export type TypeSlug = {
	_type: string
	current: string
}

export interface IPlace {
	_id: string
	slug: TypeSlug
	location: TypeLocation
	imagePath: string
	description: string
	rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	duration: string
	distance: number
}

export interface IFav {
	slug: string
	name: string
}
