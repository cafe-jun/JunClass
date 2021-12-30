type connectedAction = {
  type: 'connected';
  id: string;
};

type SubscriptionMessageAction = {
  type: 'subscriptionMessage';
  key: string;
  message: any;
};

type SubscriptionSuccess = {
  type: 'subscriptionSuccess';
  key: string;
};
type EnteredAction = {
  type: 'entered';
};

type AnsweredAction = {
  type: 'answered';
  from: string;
};

type CandidatedAction = {
  type: 'candidated';
  from: string;
  candidate: any;
};

export type sendAction =
  | connectedAction
  | SubscriptionMessageAction
  | SubscriptionSuccess
  | EnteredAction
  | AnsweredAction
  | CandidatedAction;

const actionCreator = {
  connected: (id: string): connectedAction => ({
    type: 'connected',
    id
  }),
  subscriptionSuccess: (key: string): SubscriptionSuccess => ({
    type: 'subscriptionSuccess',
    key
  })
};

export default actionCreator;
