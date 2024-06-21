export const idlFactory = ({ IDL }) => {
  const MessagePayload = IDL.Record({
    'title' : IDL.Text,
    'body' : IDL.Text,
    'attachment_url' : IDL.Text,
  });
  const Message = IDL.Record({
    'id' : IDL.Nat64,
    'title' : IDL.Text,
    'updated_at' : IDL.Opt(IDL.Nat64),
    'body' : IDL.Text,
    'created_at' : IDL.Nat64,
    'attachment_url' : IDL.Text,
  });
  const Error = IDL.Variant({ 'NotFound' : IDL.Record({ 'msg' : IDL.Text }) });
  const Result = IDL.Variant({ 'Ok' : Message, 'Err' : Error });
  return IDL.Service({
    'add_message' : IDL.Func([MessagePayload], [IDL.Opt(Message)], []),
    'delete_message' : IDL.Func([IDL.Nat64], [Result], []),
    'get_message' : IDL.Func([IDL.Nat64], [Result], ['query']),
    'update_message' : IDL.Func([IDL.Nat64, MessagePayload], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
