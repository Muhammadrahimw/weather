import {useEffect} from "react";
import {useAxios} from "../../../hooks/useAxios";

export const Info = (props) => {
	const axios = useAxios();

	useEffect(() => {
		axios({
			url: `/weather?q=fargona`,
			params: {
				q: "Kokand",
			},
		})
			.then((data) => {})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="w-[32em] pt-8 pl-8 backdrop-blur-md h-screen">
			<div className="w-[23em] text-white">
				<div className="flex items-center justify-between gap-1 border-b-2 pr-3">
					<input
						className="w-full h-12 bg-transparent outline-none"
						placeholder="Search Location..."
						type="text"
					/>
					<img src="/src/assets/imgs/fa_search.svg" alt="search icon" />
				</div>
				<p className="mt-8 opacity-75">Weather Details...</p>
				<p className="uppercase tracking-wide mt-10">
					thunderstorm with light drizzle
				</p>
				<div className="flex items-center justify-between gap-4 text-xl mt-6">
					<p>Temp max</p>
					<div className="flex items-center gap-5">
						<p>{props?.main?.temp_max} °</p>
						<img src="/src/assets/imgs/Vector.svg" alt="" />
					</div>
				</div>
				<div className="flex items-center justify-between gap-4 text-xl mt-6">
					<p>Temp min</p>
					<div className="flex items-center gap-5">
						<p>{props?.main?.temp_min} °</p>
						<img src="/src/assets/imgs/Vector-1.svg" alt="" />
					</div>
				</div>
				<div className="flex items-center justify-between gap-4 text-xl mt-6">
					<p>Humadity</p>
					<div className="flex items-center gap-5">
						<p>{props?.main?.humidity} %</p>
						<img src="/src/assets/imgs/outline.svg" alt="" />
					</div>
				</div>
				<div className="flex items-center justify-between gap-4 text-xl mt-6">
					<p>Cloudy </p>
					<div className="flex items-center gap-5">
						<p>{props?.clouds?.all} %</p>
						<img src="/src/assets/imgs/outline-1.svg" alt="" />
					</div>
				</div>
				<div className="flex items-center justify-between gap-4 text-xl mt-6">
					<p>Wind</p>
					<div className="flex items-center gap-5">
						<p>{props?.wind?.speed} km/h</p>
						<img src="/src/assets/imgs/outline-2.svg" alt="" />
					</div>
				</div>
				<hr className="mt-[5em] border" />
			</div>
		</div>
	);
};
