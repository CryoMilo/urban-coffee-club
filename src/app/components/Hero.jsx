const Hero = () => {
	return (
		<section className="relative h-[80vh] xl:h-screen text-center">
			<div className="bg-black z-10 absolute w-full h-full opacity-75 grid place-items-center">
				<div className="flex gap-5 flex-col">
					<h1 className="h1 uppercase md:normal-case">
						Urban <span className="text-light hidden md:inline">.</span>{" "}
						<span className="text-light">Coffee</span>
					</h1>
					<p className="text-secondary font-secondary">
						Start your busy day with a cup of our freshly brewed coffee
					</p>
				</div>
			</div>

			<video
				className="object-cover absolute top-0 left-0 w-full h-full opacity-20"
				autoPlay
				loop
				muted
				src="/assets/hero/urban-coffee-club-hero.mp4"></video>
		</section>
	);
};

export default Hero;
