import React from "react";

import PropTypes from "prop-types";
import { assets } from "../assets/assets";

const teamMembers = [
	{
		picture: assets.finland,
		fullName: "Session in Finland-World's Happiest Country",
	},
	{
		picture: assets.ssr,
		fullName: "With Sri Sri Ravishankar",
	},
	{
		picture: assets.police,
		fullName: "Session with Delhi Police",
	},
	{
		picture: assets.manish,
		fullName: "Glimpses with Manish Paul",
	},
	{
		picture: assets.sessionitm,
		fullName: "Glimpses of sessions",
	},
	{
		picture: assets.isf,
		fullName: "At Indian Staffing Federation",
		
	},
	{
		picture: assets.ilc,
		fullName: "One of the four finalists at India's Laughter Challenge (UK)",
		
	},
	
	{
		picture: assets.kavi,
		fullName: "With Kavi Surendra Kumar Sharma",
	},
	{
		picture: assets.arun,
		fullName: "With Arundhati Bhattacharya",
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="group rounded-xl overflow-hidden duration-500 relative h-full hover:-translate-y-1 pt-16 flex flex-col items-center">
		<img
			src={member.picture}
			alt={member.fullName}
			className="w-64 h-64 object-cover rounded-lg" // Fixed image size with consistent aspect ratio
		/>
		<div className="text-white absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-blue-600 bg-opacity-60 backdrop-blur scale-90 transition duration-500 opacity-0 flex flex-col justify-center items-center group-hover:scale-100 group-hover:opacity-100 text-center p-6 lg:px-12">
			<h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
		</div>
	</div>
);


TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const Gallery = () => {
	return (
		<section className="ezy__team7 light py-14 md:py-24 bg-primary text-white pt-20">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="max-w-lg text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Our Gallery
						</h2>
						<p>
							Explore the HapScale Gallery, where happiness meets innovation.
							Each image captures breakthroughs, dedication, and a
							future-focused approach to individual's HapScale!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
					{teamMembers.map((member, i) => (
						<div key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
