import { signUpHandler } from 'next-auth-sanity'
import { sanityClientServer } from '../../../app/sanity.server'

// @ts-ignore
export default signUpHandler(sanityClientServer)
