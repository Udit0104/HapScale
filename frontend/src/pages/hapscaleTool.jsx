import React from "react";
import PopupWidget from "./PopupWidget";
import { assets } from "../assets/assets";
const Shapes = () => (
	<>
		<img
			src="https://cdn.easyfrontend.com/pictures/hero/header34-svg1.png"
			alt=""
			className="absolute top-0 left-0 max-w-full h-auto hidden md:block"
		/>
		{/* <img
			src="https://cdn.easyfrontend.com/pictures/hero/header34-svg2.png"
			alt=""
			className="absolute bottom-0 left-0 max-w-full h-auto hidden md:block"
		/> */}

		{/* <div className="absolute top-0 right-[8%] h-full w-64 bg-slate-100 dark:bg-slate-800 rounded-3xl hidden md:block -z-10">
			<img
				src="https://cdn.easyfrontend.com/pictures/hero/header34-svg3.png"
				alt=""
				className="absolute top-[10%] left-0 text-blue-600 max-w-full h-auto hidden md:block"
			/>
			<img
				src="https://cdn.easyfrontend.com/pictures/hero/header34-svg4.png"
				alt=""
				className="absolute bottom-0 right-0 max-w-full h-auto hidden md:block"
			/>
		</div> */}
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
							We have  AI driven algorithms that help to measure the happiness level of an employee in an enterprise.
							You can take your HapScale Product  demo now by contacting us via contact section or the popoup widget given at the bottom right side of the page
						</p>

						{/* <a
							href="#!"
							className="py-3 px-8 text-white bg-blue-600 hover:bg-opacity-90 rounded"
						>
							Learn More
						</a> */}
					</div>
					<div className="col-span-12 lg:col-span-6">
						<img
							src={assets.haptool1}
							alt=""
							className="rounded-xl max-w-full h-auto mx-auto mt-4 md:mt-0"
						/>
					</div>
				</div>
                <PopupWidget />
			</div>
		</header>
	);
};
export default HeroHeader40;