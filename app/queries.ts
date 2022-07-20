export const queries = {
	getPlaces: `*[_type == "place"]`,
	getPlace: (slug: string) =>
		`*[_type == "place" && slug.current == "${slug}"][0]{_id, location, imagePath, description, rating, duration}`,

	getFavorites: (email: string) =>
		`*[_type == "favorites" && email == "${email}"][0]{_id, places[]->{_id, slug, location, imagePath}}`,
	addToFavorites: (_id: string) => {}
}
