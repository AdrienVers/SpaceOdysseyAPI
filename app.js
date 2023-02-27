const express = require("express");
const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS",
	);
	next();
});

app.get("/bodies/mercure", (req, res) => {
	res.json({
		id: "mercure",
		name: "Mercure",
		gravity: 3.7,
		sideralOrbit: 87.969,
		meanRadius: 2439.4,
		type: "Rocheuse",
		flight: "2 ans",
		disance: "0",
		map: "https://i.imgur.com/ogCMdRj.png",
		description:
			"Planète la plus proche du Soleil et la plus petite du système solaire, avec une surface rocheuse criblée de cratères d'impact et une atmosphère presque inexistante.",
	});
});

app.get("/bodies/venus", (req, res) => {
	res.json({
		id: "venus",
		name: "Venus",
		gravity: 8.87,
		sideralOrbit: 224.701,
		meanRadius: 6051.8,
		type: "Rocheuse",
		flight: "4 mois",
		disance: "0",
		map: "https://i.imgur.com/Yb2qAzR.png",
		description: "Planète la plus chaude du système solaire.",
	});
});

app.get("/bodies/terre", (req, res) => {
	res.json({
		id: "terre",
		name: "Terre",
		gravity: 9.8,
		sideralOrbit: 365.256,
		meanRadius: 6371.0084,
		type: "Rocheuse",
		flight: "Nous y sommes déjà !",
		disance: "0",
		map: "https://i.imgur.com/QSLcJch.png",
		description: "Planète la plus abondante du système solaire.",
	});
});

app.get("/bodies/mars", (req, res) => {
	res.json({
		id: "mars",
		name: "Mars",
		gravity: 3.71,
		sideralOrbit: 686.98,
		meanRadius: 3389.5,
		type: "Rocheuse",
		flight: "9 mois",
		disance: "0",
		map: "https://i.imgur.com/xEVy0nj.png",
		description: "Planète la plus proche de la Terre.",
	});
});

app.get("/bodies/jupiter", (req, res) => {
	res.json({
		id: "jupiter",
		name: "Jupiter",
		gravity: 24.79,
		sideralOrbit: 4332.589,
		meanRadius: 69911.0,
		type: "Gazeuse",
		flight: "5 ans",
		disance: "0",
		map: "https://i.imgur.com/jA8NJ55.png",
		description: "Planète la plus massive du système solaire.",
	});
});

app.get("/bodies/saturne", (req, res) => {
	res.json({
		id: "saturne",
		name: "Saturne",
		gravity: 10.44,
		sideralOrbit: 10759.22,
		meanRadius: 58232.0,
		type: "Gazeuse",
		flight: "7 ans",
		disance: "0",
		map: "https://i.imgur.com/MHzZ399.png",
		description: "Planète avec des anneaux.",
	});
});

app.get("/bodies/uranus", (req, res) => {
	res.json({
		id: "uranus",
		name: "Uranus",
		gravity: 8.87,
		sideralOrbit: 30685.4,
		meanRadius: 25362.0,
		type: "Gazeuse",
		flight: "8 ans",
		disance: "0",
		map: "https://i.imgur.com/k6ctvDk.png",
		description: "Planète bleu clair.",
	});
});

app.get("/bodies/neptune", (req, res) => {
	res.json({
		id: "neptune",
		name: "Neptune",
		gravity: 11.15,
		sideralOrbit: 60189.0,
		meanRadius: 24622.0,
		type: "Gazeuse",
		flight: "12 ans",
		disance: "0",
		map: "https://i.imgur.com/EVk29TQ.png",
		description: "Planète bleu foncé.",
	});
});

app.get("/bodies/lune", (req, res) => {
	res.json({
		id: "lune",
		name: "Lune",
		gravity: 1.62,
		sideralOrbit: 27.3217,
		meanRadius: 1737.0,
		type: "Satellite",
		flight: "3 jours",
		disance: "0",
		map: "https://i.imgur.com/LsLp5bP.png",
		description: "Satellite de la Terre.",
	});
});

app.get("/bodies/iss", (req, res) => {
	res.json({
		id: "iss",
		name: "ISS",
		gravity: 0,
		sideralOrbit: 0,
		meanRadius: 0,
		type: "Station spatiale",
		flight: "0 ans",
		distance: "408 km",
		map: "https://i.imgur.com/ZPTOKbA.png",
		description:
			"Laboratoire en orbite terrestre, occupé en permanence par un équipage international qui se consacre à la recherche scientifique dans l'environnement spatial dans des domaines tels que la biologie, la physique et la météorologie.",
	});
});

app.get("/bodies/tess", (req, res) => {
	res.json({
		id: "tess",
		name: "TESS",
		gravity: 0,
		sideralOrbit: 0,
		meanRadius: 0,
		type: "Télescope",
		flight: "0 ans",
		distance: "200 000 km",
		map: "https://i.imgur.com/wuz8Xav.png",
		description:
			"Télescope spatial conçu pour découvrir des exoplanètes semblables à notre Terre (successeur de Kepler).",
	});
});

app.get("/bodies/jwst", (req, res) => {
	res.json({
		id: "jwst",
		name: "James Webb",
		gravity: 11.15,
		sideralOrbit: 60189.0,
		meanRadius: 24622.0,
		type: "Télescope",
		flight: "12 ans",
		distance: "1 500 000 km",
		map: "https://i.imgur.com/LJC5TCE.png",
		description:
			"Télescope spatial conçu pour pour fournir des images de l'univers et analyser la formation d'étoiles et de galaxies (successeur de Hubble).",
	});
});

app.get("/bodies", (req, res) => {
	res.json({
		bodies: [
			{
				id: "mercure",
				name: "Mercure",
				gravity: 3.7,
				sideralOrbit: 87.969,
				meanRadius: 2439.4,
				type: "Rocheuse",
				flight: "2 ans",
				disance: "0",
				map: "https://i.imgur.com/ogCMdRj.png",
				description:
					"Planète la plus proche du Soleil et la plus petite du système solaire, avec une surface rocheuse criblée de cratères d'impact et une atmosphère presque inexistante.",
			},
			{
				id: "venus",
				name: "Venus",
				gravity: 8.87,
				sideralOrbit: 224.701,
				meanRadius: 6051.8,
				type: "Rocheuse",
				flight: "4 mois",
				disance: "0",
				map: "https://i.imgur.com/Yb2qAzR.png",
				description: "Planète la plus chaude du système solaire.",
			},
			{
				id: "terre",
				name: "Terre",
				gravity: 9.8,
				sideralOrbit: 365.256,
				meanRadius: 6371.0084,
				type: "Rocheuse",
				flight: "Nous y sommes déjà !",
				disance: "0",
				map: "https://i.imgur.com/QSLcJch.png",
				description: "Planète la plus abondante du système solaire.",
			},
			{
				id: "mars",
				name: "Mars",
				gravity: 3.71,
				sideralOrbit: 686.98,
				meanRadius: 3389.5,
				type: "Rocheuse",
				flight: "9 mois",
				disance: "0",
				map: "https://i.imgur.com/xEVy0nj.png",
				description: "Planète la plus proche de la Terre.",
			},
			{
				id: "jupiter",
				name: "Jupiter",
				gravity: 24.79,
				sideralOrbit: 4332.589,
				meanRadius: 69911.0,
				type: "Gazeuse",
				flight: "5 ans",
				disance: "0",
				map: "https://i.imgur.com/jA8NJ55.png",
				description: "Planète la plus massive du système solaire.",
			},
			{
				id: "saturne",
				name: "Saturne",
				gravity: 10.44,
				sideralOrbit: 10759.22,
				meanRadius: 58232.0,
				type: "Gazeuse",
				flight: "7 ans",
				disance: "0",
				map: "https://i.imgur.com/MHzZ399.png",
				description: "Planète avec des anneaux.",
			},
			{
				id: "uranus",
				name: "Uranus",
				gravity: 8.87,
				sideralOrbit: 30685.4,
				meanRadius: 25362.0,
				type: "Gazeuse",
				flight: "8 ans",
				disance: "0",
				map: "https://i.imgur.com/k6ctvDk.png",
				description: "Planète bleu clair.",
			},
			{
				id: "neptune",
				name: "Neptune",
				gravity: 11.15,
				sideralOrbit: 60189.0,
				meanRadius: 24622.0,
				type: "Gazeuse",
				flight: "12 ans",
				disance: "0",
				map: "https://i.imgur.com/EVk29TQ.png",
				description: "Planète bleu foncé.",
			},
			{
				id: "lune",
				name: "Lune",
				gravity: 1.62,
				sideralOrbit: 27.3217,
				meanRadius: 1737.0,
				type: "Satellite",
				flight: "3 jours",
				disance: "0",
				map: "https://i.imgur.com/LsLp5bP.png",
				description: "Satellite de la Terre.",
			},
			{
				id: "iss",
				name: "ISS",
				gravity: 0,
				sideralOrbit: 0,
				meanRadius: 0,
				type: "Station spatiale",
				flight: "0 ans",
				distance: "408 km",
				map: "https://i.imgur.com/ZPTOKbA.png",
				description:
					"Laboratoire en orbite terrestre, occupé en permanence par un équipage international qui se consacre à la recherche scientifique en biologie, physique et météorologie.",
			},
			{
				id: "tess",
				name: "TESS",
				gravity: 0,
				sideralOrbit: 0,
				meanRadius: 0,
				type: "Télescope",
				flight: "0 ans",
				distance: "200 000 km",
				map: "https://i.imgur.com/wuz8Xav.png",
				description:
					"Télescope spatial conçu pour découvrir des exoplanètes semblables à notre Terre (successeur de Kepler).",
			},
			{
				id: "jwst",
				name: "James Webb",
				gravity: 11.15,
				sideralOrbit: 60189.0,
				meanRadius: 24622.0,
				type: "Télescope",
				flight: "12 ans",
				distance: "1 500 000 km",
				map: "https://i.imgur.com/LJC5TCE.png",
				description:
					"Télescope spatial conçu pour pour fournir des images de l'univers et analyser la formation d'étoiles et de galaxies (successeur de Hubble).",
			},
		],
	});
});

module.exports = app;
