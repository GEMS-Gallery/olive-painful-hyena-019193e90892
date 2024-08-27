export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({ 'processPrompt' : IDL.Func([IDL.Text], [Result], []) });
};
export const init = ({ IDL }) => { return []; };
