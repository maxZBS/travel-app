import { FC } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup
} from 'react-simple-maps'
import { TypeLocation } from '@/types/place'

import styles from './Information.module.scss'

const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

const Map: FC<{ location: TypeLocation }> = ({ location }) => {
	return (
		<div className={styles.map}>
			<ComposableMap
				projectionConfig={{
					center: [120, 80]
				}}
				width={240}
				height={140}
			>
				<ZoomableGroup zoom={0.35}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => {
								const isCurrent =
									geo.properties.name === location.country ||
									geo.id === location.country

								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill={isCurrent ? '#eb601e' : '#39373B'}
										stroke={isCurrent ? 'transparent' : '#2D2B2F'}
										style={{
											default: { outline: 'none' },
											hover: { outline: 'none' },
											pressed: { outline: 'none' }
										}}
									/>
								)
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</div>
	)
}

export default Map
