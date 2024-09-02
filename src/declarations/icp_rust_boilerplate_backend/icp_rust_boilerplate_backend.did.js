export const idlFactory = ({ IDL }) => {
  const DebtPayload = IDL.Record({
    'debtor' : IDL.Text,
    'amount' : IDL.Nat64,
    'creditor' : IDL.Text,
  });
  const Debt = IDL.Record({
    'id' : IDL.Nat64,
    'debtor' : IDL.Text,
    'created_at' : IDL.Nat64,
    'amount' : IDL.Nat64,
    'creditor' : IDL.Text,
  });
  const Error = IDL.Variant({
    'InvalidInput' : IDL.Record({ 'msg' : IDL.Text }),
    'NotFound' : IDL.Record({ 'msg' : IDL.Text }),
    'InternalError' : IDL.Record({ 'msg' : IDL.Text }),
  });
  const Result = IDL.Variant({ 'Ok' : Debt, 'Err' : Error });
  const EscrowPayload = IDL.Record({
    'debt_id' : IDL.Nat64,
    'amount' : IDL.Nat64,
  });
  const Escrow = IDL.Record({
    'debt_id' : IDL.Nat64,
    'created_at' : IDL.Nat64,
    'amount' : IDL.Nat64,
  });
  const Result_1 = IDL.Variant({ 'Ok' : Escrow, 'Err' : Error });
  const CropInsurance = IDL.Record({
    'id' : IDL.Nat64,
    'coverage_amount' : IDL.Nat64,
    'coverage_start_date' : IDL.Nat64,
    'coverage_end_date' : IDL.Nat64,
    'crop_type' : IDL.Text,
    'farmer' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'Ok' : CropInsurance, 'Err' : Error });
  const InsuranceClaim = IDL.Record({
    'insurance_id' : IDL.Nat64,
    'claim_date' : IDL.Nat64,
    'claim_amount' : IDL.Nat64,
  });
  const Result_3 = IDL.Variant({ 'Ok' : InsuranceClaim, 'Err' : Error });
  const CropInsurancePayload = IDL.Record({
    'coverage_amount' : IDL.Nat64,
    'coverage_start_date' : IDL.Nat64,
    'coverage_end_date' : IDL.Nat64,
    'crop_type' : IDL.Text,
    'farmer' : IDL.Text,
  });
  const InsuranceClaimPayload = IDL.Record({
    'insurance_id' : IDL.Nat64,
    'claim_amount' : IDL.Nat64,
  });
  return IDL.Service({
    'add_debt' : IDL.Func([DebtPayload], [Result], []),
    'create_escrow' : IDL.Func([EscrowPayload], [Result_1], []),
    'get_crop_insurance' : IDL.Func([IDL.Nat64], [Result_2], ['query']),
    'get_debt' : IDL.Func([IDL.Nat64], [Result], ['query']),
    'get_escrow' : IDL.Func([IDL.Nat64], [Result_1], ['query']),
    'get_insurance_claim' : IDL.Func([IDL.Nat64], [Result_3], ['query']),
    'purchase_crop_insurance' : IDL.Func(
        [CropInsurancePayload],
        [Result_2],
        [],
      ),
    'submit_insurance_claim' : IDL.Func(
        [InsuranceClaimPayload],
        [Result_3],
        [],
      ),
    'update_debt' : IDL.Func([IDL.Nat64, DebtPayload], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
