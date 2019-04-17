import React from "react";

export default React.createContext({
    alreadyVoted: [],
    updateContext: (item) => {},
    timesVoted: 0,
    updateTimesVoted: () => {},
});
