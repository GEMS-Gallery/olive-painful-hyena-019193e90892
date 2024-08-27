export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({ 'read_file' : IDL.Func([], [Result], []) });
};
export const init = ({ IDL }) => { return []; };
