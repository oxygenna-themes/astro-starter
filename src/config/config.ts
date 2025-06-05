// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Astro Starter Kit',
	siteDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	ogImage: '/og.jpg',
	logo: { src: '/logo.svg', alt: 'Astro Starter Kit logo' },
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
