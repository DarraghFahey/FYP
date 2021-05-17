CREATE TABLE public.xbox_one_data (
	ugid VARCHAR(40),
	title VARCHAR(500),
	platform VARCHAR(100),
	also_on VARCHAR(200),
	released VARCHAR(100),
	developer VARCHAR(200),
	publisher VARCHAR(200),
	genres VARCHAR(250),
	metascore CHAR(15),
	userscore CHAR(15),
	age_rating CHAR(10),
	
	PRIMARY KEY (ugid)
)