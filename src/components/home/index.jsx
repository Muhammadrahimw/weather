import {useEffect, useRef, useState} from "react";
import {useAxios} from "../../hooks/useAxios";

export const HomeComponent = () => {
	const [data, setData] = useState();
	const [address, setAddress] = useState("Fergana");
	const searchRef = useRef();
	const axios = useAxios();
	const searchFunc = () => {
		setAddress(searchRef.current.value);
		searchRef.current.value = "";
	};
	useEffect(() => {
		axios({
			url: `/2.5/weather`,
			params: {
				q: `${address}`,
			},
		})
			.then((data) => {
				setData(data.data);
			})
			.catch((error) => console.log(error));
	}, [address]);

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
							<p className="text-[2.5em]">{data?.name}</p>
							<p className="text-[1.1em]">06:09 - Monday, 9 Sep ‘23</p>
						</div>
						<img
							className="mb-8"
							src="/src/assets/imgs/Cloudy.svg"
							alt="cloudy"
						/>
					</div>
				</div>
				<div className="w-[32em] pt-8 pl-8 backdrop-blur-md h-screen">
					<div className="w-[23em] text-white">
						<div className="flex items-center justify-between gap-1 border-b-2 pr-3">
							<input
								ref={searchRef}
								className="w-full h-12 bg-transparent outline-none"
								placeholder="Search Location..."
								type="text"
							/>
							<img
								onClick={() => searchFunc()}
								className="cursor-pointer"
								src="/src/assets/imgs/fa_search.svg"
								alt="search icon"
							/>
						</div>
						<p className="mt-8 opacity-75">Weather Details...</p>
						<p className="uppercase tracking-wide mt-10">
							thunderstorm with light drizzle
						</p>
						<div className="flex items-center justify-between gap-4 text-xl mt-6">
							<p>Temp max</p>
							<div className="flex items-center gap-5">
								<p>{data?.main?.temp_max} °</p>
								<img src="/src/assets/imgs/Vector.svg" alt="" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 text-xl mt-6">
							<p>Temp min</p>
							<div className="flex items-center gap-5">
								<p>{data?.main?.temp_min} °</p>
								<img src="/src/assets/imgs/Vector-1.svg" alt="" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 text-xl mt-6">
							<p>Humadity</p>
							<div className="flex items-center gap-5">
								<p>{data?.main?.humidity} %</p>
								<img src="/src/assets/imgs/outline.svg" alt="" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 text-xl mt-6">
							<p>Cloudy </p>
							<div className="flex items-center gap-5">
								<p>{data?.clouds?.all} %</p>
								<img src="/src/assets/imgs/outline-1.svg" alt="" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-4 text-xl mt-6">
							<p>Wind</p>
							<div className="flex items-center gap-5">
								<p>{data?.wind?.speed} km/h</p>
								<img src="/src/assets/imgs/outline-2.svg" alt="" />
							</div>
						</div>
						<hr className="mt-[5em] border" />
					</div>
				</div>
			</div>
		</section>
	);
};
