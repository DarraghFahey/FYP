CREATE TABLE public.playstation_4_data (
	ugid VARCHAR(40),
	title VARCHAR(500),
	platform VARCHAR(100),
	also_on VARCHAR(200),
	released VARCHAR(100),
	developer VARCHAR(200),
	publisher VARCHAR(200),
	genres VARCHAR(100),
	metascore CHAR(15),
	userscore CHAR(15),
	age_rating CHAR(10),
	
	PRIMARY KEY (ugid)
)