$.mockjax({
    url: 'api/teams',
    contentType: 'application/json',
    responseTime: 100,
    responseText:  [
    {
        "team_key": "314.l.44054.t.4",
        "team_id": "4",
        "name": "Holy Hand Grenades",
        "is_owned_by_current_login": 1,
        "url": "http://football.fantasysports.yahoo.com/f1/44054/4",
        "team_logos": [
            {
                "team_logo": {
                    "size": "large",
                    "url": "http://l.yimg.com/a/i/us/sp/fn/default/full/nfl/icon_04_100.gif"
                }
            }
        ],
        "number_of_moves": 0,
        "number_of_trades": 0,
        "roster_adds": {
            "coverage_type": "week",
            "coverage_value": 2,
            "value": "0"
        },
        "managers": [
            {
                "manager": {
                    "manager_id": "4",
                    "nickname": "Jonathan Creamer",
                    "guid": "G2DTSM2IDC7ZSM3IKB6GXRPRMI",
                    "is_current_login": "1"
                }
            }
        ]
    },
    {
        "team_key": "314.l.89539.t.2",
        "team_id": "2",
        "name": "Lord Creamer",
        "is_owned_by_current_login": 1,
        "url": "http://football.fantasysports.yahoo.com/f1/89539/2",
        "team_logos": [
            {
                "team_logo": {
                    "size": "large",
                    "url": "http://l.yimg.com/dh/ap/fantasy/img/profile_96.png"
                }
            }
        ],
        "division_id": "1",
        "waiver_priority": 8,
        "faab_balance": "100",
        "number_of_moves": 0,
        "number_of_trades": 0,
        "roster_adds": {
            "coverage_type": "week",
            "coverage_value": 2,
            "value": "0"
        },
        "managers": [
            {
                "manager": {
                    "manager_id": "2",
                    "nickname": "Jonathan Creamer",
                    "guid": "G2DTSM2IDC7ZSM3IKB6GXRPRMI",
                    "is_current_login": "1"
                }
            }
        ]
    },
    {
        "team_key": "314.l.589233.t.1",
        "team_id": "1",
        "name": "Jonathan Creamer",
        "is_owned_by_current_login": 1,
        "url": "http://football.fantasysports.yahoo.com/f1/589233/1",
        "team_logos": [
            {
                "team_logo": {
                    "size": "large",
                    "url": "http://l.yimg.com/a/i/us/sp/fn/default/full/nfl/icon_01_100.gif"
                }
            }
        ],
        "waiver_priority": 5,
        "number_of_moves": 0,
        "number_of_trades": 0,
        "roster_adds": {
            "coverage_type": "week",
            "coverage_value": 2,
            "value": "0"
        },
        "managers": [
            {
                "manager": {
                    "manager_id": "1",
                    "nickname": "Jonathan Creamer",
                    "guid": "G2DTSM2IDC7ZSM3IKB6GXRPRMI",
                    "is_commissioner": "1",
                    "is_current_login": "1"
                }
            }
        ]
    }
]
});

$.mockjax({
    url: 'api/teams/*',
    contentType: 'application/json',
    responseText: {
        "team_key": "314.l.44054.t.4",
        "team_id": "4",
        "name": "Holy Hand Grenades",
        "is_owned_by_current_login": 1,
        "url": "http://football.fantasysports.yahoo.com/f1/44054/4",
        "team_logos": [
            {
                "team_logo": {
                    "size": "large",
                    "url": "http://l.yimg.com/a/i/us/sp/fn/default/full/nfl/icon_04_100.gif"
                }
            }
        ],
        "number_of_moves": 0,
        "number_of_trades": 0,
        "roster_adds": {
            "coverage_type": "week",
            "coverage_value": 2,
            "value": "0"
        },
        "managers": [
            {
                "manager": {
                    "manager_id": "4",
                    "nickname": "Jonathan Creamer",
                    "guid": "G2DTSM2IDC7ZSM3IKB6GXRPRMI",
                    "is_current_login": "1"
                }
            }
        ],
        "players": [
            {
                "player_key": "314.p.5228",
                "player_id": "5228",
                "name": {
                    "full": "Tom Brady",
                    "first": "Tom",
                    "last": "Brady",
                    "ascii_first": "Tom",
                    "ascii_last": "Brady"
                },
                "editorial_player_key": "nfl.p.5228",
                "editorial_team_key": "nfl.t.17",
                "editorial_team_full_name": "New England Patriots",
                "editorial_team_abbr": "NE",
                "bye_weeks": {
                    "week": "10"
                },
                "uniform_number": "12",
                "display_position": "QB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/A5wtPUnkCXh7wIs3iLFJug--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/5228.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/A5wtPUnkCXh7wIs3iLFJug--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/5228.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "QB"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.6763",
                "player_id": "6763",
                "name": {
                    "full": "Philip Rivers",
                    "first": "Philip",
                    "last": "Rivers",
                    "ascii_first": "Philip",
                    "ascii_last": "Rivers"
                },
                "editorial_player_key": "nfl.p.6763",
                "editorial_team_key": "nfl.t.24",
                "editorial_team_full_name": "San Diego Chargers",
                "editorial_team_abbr": "SD",
                "bye_weeks": {
                    "week": "8"
                },
                "uniform_number": "17",
                "display_position": "QB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/m16IdyuD9R2ujoyJEyBWbA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/6763.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/m16IdyuD9R2ujoyJEyBWbA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/6763.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "QB"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.7434",
                "player_id": "7434",
                "name": {
                    "full": "Rob Bironas",
                    "first": "Rob",
                    "last": "Bironas",
                    "ascii_first": "Rob",
                    "ascii_last": "Bironas"
                },
                "editorial_player_key": "nfl.p.7434",
                "editorial_team_key": "nfl.t.10",
                "editorial_team_full_name": "Tennessee Titans",
                "editorial_team_abbr": "Ten",
                "bye_weeks": {
                    "week": "8"
                },
                "uniform_number": "2",
                "display_position": "K",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/9UHtaQVK.3Hl.sXMw7zB9g--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7434.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/9UHtaQVK.3Hl.sXMw7zB9g--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7434.jpg",
                "is_undroppable": "0",
                "position_type": "K",
                "eligible_positions": [
                    {
                        "position": "K"
                    }
                ]
            },
            {
                "player_key": "314.p.7754",
                "player_id": "7754",
                "name": {
                    "full": "A.J. Hawk",
                    "first": "A.J.",
                    "last": "Hawk",
                    "ascii_first": "A.J.",
                    "ascii_last": "Hawk"
                },
                "editorial_player_key": "nfl.p.7754",
                "editorial_team_key": "nfl.t.9",
                "editorial_team_full_name": "Green Bay Packers",
                "editorial_team_abbr": "GB",
                "bye_weeks": {
                    "week": "4"
                },
                "uniform_number": "50",
                "display_position": "D",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/k7Nry4HkNkK472hh_MRmGA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7754.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/k7Nry4HkNkK472hh_MRmGA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7754.jpg",
                "is_undroppable": "0",
                "position_type": "DP",
                "eligible_positions": [
                    {
                        "position": "D"
                    }
                ]
            },
            {
                "player_key": "314.p.7792",
                "player_id": "7792",
                "name": {
                    "full": "Roman Harper",
                    "first": "Roman",
                    "last": "Harper",
                    "ascii_first": "Roman",
                    "ascii_last": "Harper"
                },
                "status": "Q",
                "editorial_player_key": "nfl.p.7792",
                "editorial_team_key": "nfl.t.18",
                "editorial_team_full_name": "New Orleans Saints",
                "editorial_team_abbr": "NO",
                "bye_weeks": {
                    "week": "7"
                },
                "uniform_number": "41",
                "display_position": "D",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/1HuGrA_iVDK.eDf.BDtKnw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7792.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/1HuGrA_iVDK.eDf.BDtKnw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7792.jpg",
                "is_undroppable": "0",
                "position_type": "DP",
                "eligible_positions": [
                    {
                        "position": "D"
                    }
                ]
            },
            {
                "player_key": "314.p.7964",
                "player_id": "7964",
                "name": {
                    "full": "Cortland Finnegan",
                    "first": "Cortland",
                    "last": "Finnegan",
                    "ascii_first": "Cortland",
                    "ascii_last": "Finnegan"
                },
                "editorial_player_key": "nfl.p.7964",
                "editorial_team_key": "nfl.t.14",
                "editorial_team_full_name": "St. Louis Rams",
                "editorial_team_abbr": "StL",
                "bye_weeks": {
                    "week": "11"
                },
                "uniform_number": "31",
                "display_position": "D",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/cB2l5lwvCUL9MW1jozO3BQ--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7964.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/cB2l5lwvCUL9MW1jozO3BQ--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/7964.jpg",
                "is_undroppable": "0",
                "position_type": "DP",
                "eligible_positions": [
                    {
                        "position": "D"
                    }
                ]
            },
            {
                "player_key": "314.p.8285",
                "player_id": "8285",
                "name": {
                    "full": "Greg Olsen",
                    "first": "Greg",
                    "last": "Olsen",
                    "ascii_first": "Greg",
                    "ascii_last": "Olsen"
                },
                "editorial_player_key": "nfl.p.8285",
                "editorial_team_key": "nfl.t.29",
                "editorial_team_full_name": "Carolina Panthers",
                "editorial_team_abbr": "Car",
                "bye_weeks": {
                    "week": "4"
                },
                "uniform_number": "88",
                "display_position": "TE",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/W6KXU6XAXzbHeLXwl.kapg--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8285.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/W6KXU6XAXzbHeLXwl.kapg--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8285.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "TE"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.8298",
                "player_id": "8298",
                "name": {
                    "full": "Sidney Rice",
                    "first": "Sidney",
                    "last": "Rice",
                    "ascii_first": "Sidney",
                    "ascii_last": "Rice"
                },
                "status": "P",
                "editorial_player_key": "nfl.p.8298",
                "editorial_team_key": "nfl.t.26",
                "editorial_team_full_name": "Seattle Seahawks",
                "editorial_team_abbr": "Sea",
                "bye_weeks": {
                    "week": "12"
                },
                "uniform_number": "18",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/xs.tV4CZNJAHHtRvepP39A--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8298.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/xs.tV4CZNJAHHtRvepP39A--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8298.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1,
                "has_recent_player_notes": 1
            },
            {
                "player_key": "314.p.8801",
                "player_id": "8801",
                "name": {
                    "full": "Chris Johnson",
                    "first": "Chris",
                    "last": "Johnson",
                    "ascii_first": "Chris",
                    "ascii_last": "Johnson"
                },
                "editorial_player_key": "nfl.p.8801",
                "editorial_team_key": "nfl.t.10",
                "editorial_team_full_name": "Tennessee Titans",
                "editorial_team_abbr": "Ten",
                "bye_weeks": {
                    "week": "8"
                },
                "uniform_number": "28",
                "display_position": "RB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/ADNdCxV8V_jDu.JDtBHMEw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8801.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/ADNdCxV8V_jDu.JDtBHMEw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8801.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "RB"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.8810",
                "player_id": "8810",
                "name": {
                    "full": "Donnie Avery",
                    "first": "Donnie",
                    "last": "Avery",
                    "ascii_first": "Donnie",
                    "ascii_last": "Avery"
                },
                "editorial_player_key": "nfl.p.8810",
                "editorial_team_key": "nfl.t.12",
                "editorial_team_full_name": "Kansas City Chiefs",
                "editorial_team_abbr": "KC",
                "bye_weeks": {
                    "week": "10"
                },
                "uniform_number": "17",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/wN_l9vsJy.nelG_Z9v_qRw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8810.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/wN_l9vsJy.nelG_Z9v_qRw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8810.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.8850",
                "player_id": "8850",
                "name": {
                    "full": "Jamaal Charles",
                    "first": "Jamaal",
                    "last": "Charles",
                    "ascii_first": "Jamaal",
                    "ascii_last": "Charles"
                },
                "status": "P",
                "editorial_player_key": "nfl.p.8850",
                "editorial_team_key": "nfl.t.12",
                "editorial_team_full_name": "Kansas City Chiefs",
                "editorial_team_abbr": "KC",
                "bye_weeks": {
                    "week": "10"
                },
                "uniform_number": "25",
                "display_position": "RB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/084uD0cG9qCYdPSjJLX9.A--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8850.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/084uD0cG9qCYdPSjJLX9.A--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/8850.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "RB"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1,
                "has_recent_player_notes": 1
            },
            {
                "player_key": "314.p.9293",
                "player_id": "9293",
                "name": {
                    "full": "Hakeem Nicks",
                    "first": "Hakeem",
                    "last": "Nicks",
                    "ascii_first": "Hakeem",
                    "ascii_last": "Nicks"
                },
                "editorial_player_key": "nfl.p.9293",
                "editorial_team_key": "nfl.t.19",
                "editorial_team_full_name": "New York Giants",
                "editorial_team_abbr": "NYG",
                "bye_weeks": {
                    "week": "9"
                },
                "uniform_number": "88",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/zKUtCUVt0Q4tla5XksFAjw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9293.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/zKUtCUVt0Q4tla5XksFAjw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9293.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.9294",
                "player_id": "9294",
                "name": {
                    "full": "Kenny Britt",
                    "first": "Kenny",
                    "last": "Britt",
                    "ascii_first": "Kenny",
                    "ascii_last": "Britt"
                },
                "editorial_player_key": "nfl.p.9294",
                "editorial_team_key": "nfl.t.10",
                "editorial_team_full_name": "Tennessee Titans",
                "editorial_team_abbr": "Ten",
                "bye_weeks": {
                    "week": "8"
                },
                "uniform_number": "18",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/aPuja9xRSvAsiiBkCAI3zA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9294.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/aPuja9xRSvAsiiBkCAI3zA--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9294.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1,
                "has_recent_player_notes": 1
            },
            {
                "player_key": "314.p.9560",
                "player_id": "9560",
                "name": {
                    "full": "Danny Woodhead",
                    "first": "Danny",
                    "last": "Woodhead",
                    "ascii_first": "Danny",
                    "ascii_last": "Woodhead"
                },
                "editorial_player_key": "nfl.p.9560",
                "editorial_team_key": "nfl.t.24",
                "editorial_team_full_name": "San Diego Chargers",
                "editorial_team_abbr": "SD",
                "bye_weeks": {
                    "week": "8"
                },
                "uniform_number": "39",
                "display_position": "RB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/8FKbDegcc5sZ4s0MAr.L_Q--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9560.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/8FKbDegcc5sZ4s0MAr.L_Q--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/9560.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "RB"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.24057",
                "player_id": "24057",
                "name": {
                    "full": "Emmanuel Sanders",
                    "first": "Emmanuel",
                    "last": "Sanders",
                    "ascii_first": "Emmanuel",
                    "ascii_last": "Sanders"
                },
                "editorial_player_key": "nfl.p.24057",
                "editorial_team_key": "nfl.t.23",
                "editorial_team_full_name": "Pittsburgh Steelers",
                "editorial_team_abbr": "Pit",
                "bye_weeks": {
                    "week": "5"
                },
                "uniform_number": "88",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/ESk_GEMKNmgjeGpVIIeMig--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24057.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/ESk_GEMKNmgjeGpVIIeMig--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24057.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.24076",
                "player_id": "24076",
                "name": {
                    "full": "Mike Williams",
                    "first": "Mike",
                    "last": "Williams",
                    "ascii_first": "Mike",
                    "ascii_last": "Williams"
                },
                "editorial_player_key": "nfl.p.24076",
                "editorial_team_key": "nfl.t.27",
                "editorial_team_full_name": "Tampa Bay Buccaneers",
                "editorial_team_abbr": "TB",
                "bye_weeks": {
                    "week": "5"
                },
                "uniform_number": "19",
                "display_position": "WR",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/lRsJUY5BHOQCXkmwQJ_fpg--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24076.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/lRsJUY5BHOQCXkmwQJ_fpg--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24076.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "WR"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.24892",
                "player_id": "24892",
                "name": {
                    "full": "Roy Helu Jr.",
                    "first": "Roy",
                    "last": "Helu Jr.",
                    "ascii_first": "Roy",
                    "ascii_last": "Helu Jr."
                },
                "editorial_player_key": "nfl.p.24892",
                "editorial_team_key": "nfl.t.28",
                "editorial_team_full_name": "Washington Redskins",
                "editorial_team_abbr": "Was",
                "bye_weeks": {
                    "week": "5"
                },
                "uniform_number": "29",
                "display_position": "RB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/hH8h09po77iT6dbZMGzIOw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24892.jpg",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/hH8h09po77iT6dbZMGzIOw--/YXBwaWQ9eXZpZGVvO2NoPTg2MDtjcj0xO2N3PTY1OTtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/j/assets/i/us/sp/v/nfl/players_l/20120913/24892.jpg",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "RB"
                    },
                    {
                        "position": "W/R"
                    }
                ],
                "has_player_notes": 1
            },
            {
                "player_key": "314.p.26681",
                "player_id": "26681",
                "name": {
                    "full": "Montee Ball",
                    "first": "Montee",
                    "last": "Ball",
                    "ascii_first": "Montee",
                    "ascii_last": "Ball"
                },
                "editorial_player_key": "nfl.p.26681",
                "editorial_team_key": "nfl.t.7",
                "editorial_team_full_name": "Denver Broncos",
                "editorial_team_abbr": "Den",
                "bye_weeks": {
                    "week": "9"
                },
                "uniform_number": "28",
                "display_position": "RB",
                "headshot": {
                    "url": "http://l.yimg.com/iu/api/res/1.2/rHwmff7kVS0f_S1amFMEwQ--/YXBwaWQ9eXZpZGVvO2NoPTIxNTtjcj0xO2N3PTE2NDtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/a/i/us/sp/v/blank_player2.gif",
                    "size": "small"
                },
                "image_url": "http://l.yimg.com/iu/api/res/1.2/rHwmff7kVS0f_S1amFMEwQ--/YXBwaWQ9eXZpZGVvO2NoPTIxNTtjcj0xO2N3PTE2NDtkeD0xO2R5PTE7Zmk9dWxjcm9wO2g9NjA7cT0xMDA7dz00Ng--/http://l.yimg.com/a/i/us/sp/v/blank_player2.gif",
                "is_undroppable": "0",
                "position_type": "O",
                "eligible_positions": [
                    {
                        "position": "RB"
                    },
                    {
                        "position": "W/R"
                    }
                ]
            }
        ]
    }
})