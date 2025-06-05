// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Astro Starter Kit',
		aboutText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		logo: { src: '/logo.svg', alt: 'The tailwind astro theme', text: 'Astro Starter Kit' }
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{ subCategory: 'Features', subCategoryLink: '#' },
				{ subCategory: 'FAQ', subCategoryLink: '#' },
				{ subCategory: 'Pricing', subCategoryLink: '#' },
				{ subCategory: 'Changelog', subCategoryLink: '#' },
				{ subCategory: 'Terms', subCategoryLink: '#' }
			]
		},
		{
			category: 'About us',
			subCategories: [
				{ subCategory: 'About us', subCategoryLink: '#' },
				{ subCategory: 'News', subCategoryLink: '#' },
				{ subCategory: 'Careers', subCategoryLink: '#' }
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{ subCategory: 'Contact', subCategoryLink: '#' },
				{ subCategory: 'Support', subCategoryLink: '#' },
				{ subCategory: 'Join us', subCategoryLink: '#' }
			]
		}
	],
	subFooter: { copywriteText: '© Astro Starter Kit 2024.' }
}
