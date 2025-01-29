import {useAxios} from "../../hooks/useAxios";
import {Info} from "./info";

export const HomeComponent = () => {
	// const axios = useAxios();
	// axios({
	// 	url: `/weather?q=fargona`,
	// })
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.log(error));
	return (
		<section className="bg-[url('/src/assets/imgs/bg-weather.png')] bg-no-repeat bg-center bg-cover w-screen h-screen">
			<div className="flex items-start justify-between gap-4">
				<div className="mt-8 pl-[6em] flex flex-col items-start">
					<div className="cursor-pointer">
						<img src="/src/assets/imgs/logo.svg" alt="logo" />
					</div>
					<div className="text-white flex items-end gap-3 mt-[23em]">
						<h1 className="text-[7.5em]">16°</h1>
						<div className="mb-9">
							<p className="text-[2.5em]">London</p>
							<p className="text-[1.1em]">06:09 - Monday, 9 Sep ‘23</p>
						</div>
						<img
							className="mb-8"
							src="/src/assets/imgs/Cloudy.svg"
							alt="cloudy"
						/>
					</div>
				</div>
				<Info />
			</div>
		</section>
	);
};
