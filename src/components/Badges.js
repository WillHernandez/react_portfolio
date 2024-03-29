import { badges } from './Data';

const Badges = () => (
	<div className="outerContainer container badges">
		<div className="innerContainer">
			<h3>Certifications - Badges</h3>
			<RenderBadges badges={badges}/>
		</div>
	</div>
)

const RenderBadges = ({badges}) => (
	badges.map(badge => (
		<div key={badge.key} className="badge">
			<a href={badge.href} target='_blank' rel='noreferrer'>
				<img src={badge.img} alt="" />
			</a>
			<a href={badge.href} target='_blank' rel='noreferrer'><p>{badge.title}</p></a>
		</div>
	))
)

export default Badges;