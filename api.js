export const getTournaments = () => {
    return fetch(`//foosrank.azurewebsites.net/api/tournament/GetTournaments`).then(res=>res.json());
}

export const getTournament = id => {
    return fetch(`//foosrank.azurewebsites.net/api/tournament/GetTournament?id=${id}`).then(res => res.json());
}

let usersRequest;

export const getAllUsers = () => {
    if (usersRequest) {
        return usersRequest;
    } 
    // add caching here...
    usersRequest = fetch(`//foosrank.azurewebsites.net/api/User/GetAllUsers`).then(res => res.json());
    return usersRequest;
}

export const getUserStatistics = (username, tournamentId) => {
    return fetch(`//foosrank.azurewebsites.net/api/Statistics/GetUserStatistics?tournamentId=${tournamentId}&username=${username}`).then(res => res.json());
}

export const getTournamentUserRanks = tournamentId => {
    return fetch(`//foosrank.azurewebsites.net/api/Statistics/GetTournamentUserRanks?tournamentId=${tournamentId}`).then(res => res.json());
}

export const createMatch = (tournamentId = '', match = {}) => {
    match['TournamentId'] = tournamentId;
    return fetch(`//foosrank.azurewebsites.net/api/match/creatematch`, {
        method: 'post',
        body: JSON.stringify(match),
        headers: { 'Content-Type': 'application/json' }
    }).then(res=>res.json());
}