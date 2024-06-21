import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Error = { 'NotFound' : { 'msg' : string } };
export interface Message {
  'id' : bigint,
  'title' : string,
  'updated_at' : [] | [bigint],
  'body' : string,
  'created_at' : bigint,
  'attachment_url' : string,
}
export interface MessagePayload {
  'title' : string,
  'body' : string,
  'attachment_url' : string,
}
export type Result = { 'Ok' : Message } |
  { 'Err' : Error };
export interface _SERVICE {
  'add_message' : ActorMethod<[MessagePayload], [] | [Message]>,
  'delete_message' : ActorMethod<[bigint], Result>,
  'get_message' : ActorMethod<[bigint], Result>,
  'update_message' : ActorMethod<[bigint, MessagePayload], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
