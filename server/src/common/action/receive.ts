type SubscribeAction = {
  type: 'subscribe';
  key: string;
};
type UnsubscribeAction = {
  type: 'unsubscribe';
  key: string;
};

type EnterAction = {
  type: 'enter';
  channel: string;
};

type LeaveAction = {
  type: 'leave';
};

type CandidatedAciton = {
  type: 'candidate';
  to: string;
  candidate: any;
};

const actionTypes = ['subscribe', 'unsubscribe', 'enter', 'leave', 'candidate'];

export type ReceiveAction =
  | SubscribeAction
  | EnterAction
  | UnsubscribeAction
  | LeaveAction
  | CandidatedAciton;

export function isReceiveAction(object: any): object is ReceiveAction {
  if (!object?.type) return false;
  return actionTypes.includes(object.type);
}
