export interface Player {
  chance_of_playing_next_round: number | null;
  chance_of_playing_this_round: number | null;
  // used for picture
  code: number;
  cost_change_event: number;
  cost_change_event_fall: number;
  cost_change_start: number;
  cost_change_start_fall: number;
  dreamteam_count: number;
  element_type: number;
  ep_next: string | null;
  ep_this: string | null;
  event_points: number;
  first_name: string;
  form: string;
  id: number;
  in_dreamteam: boolean;
  news: string | null;
  news_added: string | null;
  now_cost: number;
  photo: string;
  points_per_game: string;
  second_name: string | null;
  selected_by_percent: string;
  special: false;
  squad_number: number | null;
  status: string | null;
  team: number;
  team_code: number;
  total_points: number;
  transfers_in: number;
  transfers_in_event: number;
  transfers_out: number;
  transfers_out_event: number;
  value_form: string | null;
  value_season: string | null;
  web_name: string;
  minutes: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
  goals_conceded: number;
  own_goals: number;
  penalties_saved: number;
  penalties_missed: number;
  yellow_cards: number;
  red_cards: number;
  saves: number;
  bonus: number;
  bps: number;
  influence: string | null;
  creativity: string | null;
  threat: string | null;
  ict_index: string | null;
  influence_rank: number;
  influence_rank_type: number | null;
  creativity_rank: number;
  creativity_rank_type: number;
  threat_rank: number;
  threat_rank_type: number;
  ict_index_rank: number;
  ict_index_rank_type: number;
}
