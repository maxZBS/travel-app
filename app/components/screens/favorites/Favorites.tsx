import { FC } from 'react'
import Layout from '@/common/Layout'
import Meta from '../../../utils/Meta'
import { IPlace } from '@/types/place'
import PlaceItem from '@/elements/Home/PopularPlaces/PlaceItem'

const Favorites: FC<{ places: IPlace[] }> = ({ places }) => {
	return (
		<Layout>
			<Meta title="My favorites" />

			<h1 className="h1">Favorites</h1>

			<div style={{ width: '80%', margin: '0 auto' }}>
				{places.length ? (
					places.map(place => (
						<PlaceItem
							key={place._id}
							place={place}
							removeHandler={e => {
								e.preventDefault()
								alert('remove')
							}}
						/>
					))
				) : (
					<div
						style={{
							marginTop: '-2rem',
							color: '#e8e8e8',
							opacity: '.6',
							fontStyle: 'italic'
						}}
					>
						Not found!
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Favorites
