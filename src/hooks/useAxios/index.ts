import axios from "axios";

export const useAxios = () => {
	const response = (props) => {
		let {url, method = "GET", body, headers, params} = props;
		return axios({
			url: `https://api.openweathermap.org/data${url}`,
			method,
			data: body,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			params: {
				appid: "06b8da76c357a2dc13e5c8b1cfccadb6",
				...params,
			},
		})
			.then((data) => {
				return data;
			})
			.catch((error) => console.log(error));
	};
	return response;
};
