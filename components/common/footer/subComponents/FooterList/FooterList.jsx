import PropTypes from 'prop-types'
import Link from "next/link";
import { hrefResolver } from '../../../../../prismicio';
import { FooterListContainer } from './FooterListStyles';

// eslint-disable-next-line no-unused-vars
const FooterList = ({ title = "", items = [], socialLinks }) => {
	const { data: { linkgroup } } = items
	return (
		<FooterListContainer>
			<h3>{title}</h3>
			<ul>
				{Array.isArray(linkgroup) && linkgroup.map((item, id) => (
					<li key={id}>
						{item?.link?.slug &&
							<>
								<svg width="8" height="12" style={{ marginRight: "20px" }} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="white" />
								</svg>

								<Link href={hrefResolver(item.link)} scroll={false} passHref>
									{item.label}
								</Link>
							</>
						}
					</li>
				))
				}
			</ul>
		</FooterListContainer>
	)
}


FooterList.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array
};

FooterList.defaultProps = {
	title: "Company",
	items: [
		{ name: "item-1", url: "/url-1" },
		{ name: "item-2", url: "/url-2" },
		{ name: "item-3", url: "/url-3" },
		{ name: "item-4", url: "/url-4" }
	]
};

export default FooterList