import { createClient } from 'next-sanity'
import { config } from './sanity'

export const sanityClientServer = createClient(config)