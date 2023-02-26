export const API_BASE_URL = "https://fantasy.premierleague.com/api/";
export const API_URLS = {
  FIXTURES: "fixtures/",
  GAMEWEEKS: "events/",
  GAMEWEEK_FIXTURES: "fixtures/?event={}",
  GAMEWEEK_LIVE: "event/{}/live",
  LEAGUE_CLASSIC: "leagues-classic/{}/standings/",
  LEAGUE_CLASSIC_RANK:
    "leagues-classic/{}/standings/?page_standings={}&page_new_entries={}&phase={}",
  LEAGUE_H2H: "leagues-h2h/{}/standings/",
  LEAGUE_H2H_FIXTURES: "leagues-h2h-matches/league/{}/?{}event={}&page={}",
  PLAYER_SUMMARY: "element-summary/{}/",
  SETTINGS: "game-settings/",
  STATIC: "bootstrap-static/",
  TEAMS: "teams/",
  TRANSFERS: "transfers/",
  USER: "entry/{}/",
  USER_CUP: "entry/{}/cup/",
  USER_HISTORY: "entry/{}/history/",
  USER_PICKS: "entry/{}/event/{}/picks/",
  USER_TEAM: "my-team/{}/",
  USER_TRANSFERS: "entry/{}/transfers/",
  USER_LATEST_TRANSFERS: "entry/{}/transfers-latest/",
  WATCHLIST: "watchlist/",
  ME: "me/",
};

const RESOURCES_BASE_URL = "https://resources.premierleague.com/premierleague/";
export const RESOURCE_URLS = {
  TEAM_BADGE_SMALL: RESOURCES_BASE_URL + "badges/50/t{}.png",
  TEAM_BADGE_LARGE: RESOURCES_BASE_URL + "badges/100/t{}.png",
  PLAYER_PHOTO: RESOURCES_BASE_URL + "photos/players/250x250/p{}.png",
};
