const makeRequestType = (resultType) => (actionType) => `${actionType}_${resultType}`;

export const requestActionType = makeRequestType("REQUEST");
export const successActionType = makeRequestType("SUCCESS");
export const failedActionType = makeRequestType("FAILED");
