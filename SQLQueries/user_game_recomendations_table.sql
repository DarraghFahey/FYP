CREATE TABLE "public"."user_game_recomendations" (
	"number" INTEGER,
	uuid VARCHAR(50),
	ugid VARCHAR(50),
	game_name VARCHAR(500),
	PRIMARY KEY("number"),
	FOREIGN KEY(uuid) REFERENCES user_genre_score,
	FOREIGN KEY(ugid) REFERENCES game_console_data
)
