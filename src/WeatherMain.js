import React, { useEffect, useState, useRef } from 'react';
import produce from 'immer';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import AddCity from './AddCity';
import MenuComponent from './MenuComponent';
import './WeatherMain.scss';

function WeatherMain({ match }) {
	const cityName = match.params.cityName || 'local';
	const [currentLocation, setCurrentLocation] = useState({
		latitude: 0,
		longitude: 0,
	});
	const [weather, setWeather] = useState(null);
	const [menuActive, setMenuActive] = useState(false);
	const [otherCity, setOtherCity] = useState([]);
	const menuStyle = useRef(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setCurrentLocation(
				produce((draft) => {
					draft.latitude = position.coords.latitude;
					draft.longitude = position.coords.longitude;
				})
			);
		});
		const fetchData = async () => {
			try {
				const res = await axios.get(
					cityName === 'local'
						? `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=e4477edaeda4de89e0f1c1ec47719f0b&lang=kr&units=metric`
						: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e4477edaeda4de89e0f1c1ec47719f0b&lang=kr&units=metric`
				);
				setWeather(res.data);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, [currentLocation, cityName]);

	if (!weather) {
		return null;
	}

	return (
		<div className='WeatherMain'>
			<div className='menu-box' ref={menuStyle}>
				<MenuComponent
					menuStyle={menuStyle}
					otherCity={otherCity}
					menuActive={menuActive}
					setMenuActive={setMenuActive}
					setOtherCity={setOtherCity}
				/>
			</div>
			<div className='weather-container'>
				<div className='weather-header'>
					<AddCity
						setOtherCity={setOtherCity}
						menuStyle={menuStyle}
						setMenuActive={setMenuActive}
						menuActive={menuActive}
					/>
				</div>
				<WeatherInfo weather={weather} />
			</div>
		</div>
	);
}

export default React.memo(WeatherMain);
