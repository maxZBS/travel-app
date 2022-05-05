import { signUpHandler } from 'next-auth-sanity'
import { sanityClient } from '../../../app/sanity'

export default signUpHandler(sanityClient)
