import React from "react";
import PropTypes from "prop-types";
import { assets } from "../assets/assets";
const teamMembers = [
	{
		img: assets.rajesh,
		name: "Rajesh Srivastava",
		designation: "Founder / CEO",
	},
    {
		img: assets.ashutosh,
		name: "Ashutosh Jain",
		designation: "CTO",
	},
	{
		img: assets.badal,
		name: "Badal Sharma",
		designation: "Operations Head",
	},
	{
		img: assets.aditya,
		name: "Aditya Seth",
		designation: "Creative Head",
	},
	{
		img: assets.ashwin,
		name: "Ashwani Gupta",
		designation: "Finance Head",
	},
    {
		img: assets.udit,
		name: "Udit Verma",
		designation: "Software Developer Head",
	},
    {
		img: assets.ayush,
		name: "Ayush Singh",
		designation: "IT Head",
	},
    {
		img: assets.utki,
		name: "Utkarsh Shukla",
		designation: "Marketing Head",
	},
    
];

const TeamMemberItem = ({ member }) => (
	<div className="bg-white dark:bg-[#5f6fff] shadow-xl rounded-2xl p-4">
		<div>
			<img
				src={member.img}
				alt={member.name}
                className="w-40 h-40 object-cover rounded-full mx-auto"
			/>
			<div className="p-3">
				<h5 className="text-xl mb-1 font-bold">{member.name}</h5>
				<p className="text-sm opacity-75">{member.designation}</p>
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const OurTeam = () => {
	return (
		<section className="ezy__team20 light py-14 md:py-24 bg-white dark:bg-[#5f8cc7] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center text-center">
					<div className="sm:max-w-lg">
						<h3 className="text-3xl leading-none md:text-[45px] font-bold">
							HapScale Team
						</h3>
						<p className="font-medium opacity-80 mt-4 mb-12">
                            "One team, one mission - Your Happiness"
						</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{teamMembers.map((member, i) => (
						<div className="col-span-4 sm:col-span-2 lg:col-span-1" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}

					{/* <div className="col-span-4 text-center mt-12">
						<button className="px-7 py-3 bg-blue-600 rounded-md hover:bg-opacity-90 font-bold text-white">
							Show More
						</button>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default OurTeam;