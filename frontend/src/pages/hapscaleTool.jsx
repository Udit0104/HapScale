import React from "react";
import ContactForm from "./PersonalDetailsForm";
import { assets } from "../assets/assets";
const Shapes = () => (
	<>
		<img
			src="https://cdn.easyfrontend.com/pictures/hero/header34-svg1.png"
			alt=""
			className="absolute top-0 left-0 max-w-full h-auto hidden md:block"
		/>
	</>
);

const HeroHeader40 = () => {
	return (
		<header className="ezy__header40 gray py-14 md:py-24 bg-white dark:bg-[#3b82f6] text-zinc-900 dark:text-white relative overflow-hidden z-10 pt-20">
			<Shapes />

			<div className="container px-4 mx-auto relative pt-20">
				<div className="grid grid-cols-12 gap-6 items-center">
					<div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
						<h2 className="text-2xl font-bold leading-tight md:text-7xl mb-6">
							Learn more about our HapScale Product
						</h2>
						<p className="text-xl leading-relaxed opacity-80 mb-12">
						We use AI-driven algorithms to measure employee happiness by analyzing their responses to life-related questions. Our intuitive dashboard provides Leaders of the organisations with real-time insights, enabling them to enhance employee well-being and overall productivity.

							<br />
							
							Try the HapScale Product demo today—contact us using the button below!
						</p>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<img
							src={assets.haptool1}
							alt=""
							className="rounded-xl max-w-full h-auto mx-auto mt-4 md:mt-0"
						/>
					</div>
				</div>
				
				{/* Contact Us Button */}
				<div className="text-center mt-12">
					<a href="/contact-form" className="inline-block py-3 px-6 text-white bg-blue-600 hover:bg-opacity-90 rounded">
						Contact Us
					</a>
				</div>
			</div>
		</header>
	);
};

export default HeroHeader40;