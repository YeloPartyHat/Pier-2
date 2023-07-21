import { SVGAttributes } from 'react'

const BurgerMenuIcon = (props: SVGAttributes<SVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 512 512'
		{...props}
	>
		<title>Menu</title>
		<path
			fill='none'
			stroke='currentColor'
			stroke-linecap='round'
			stroke-miterlimit='10'
			stroke-width='32'
			d='M80 160h352M80 256h352M80 352h352'
		/>
	</svg>
)

export default BurgerMenuIcon
