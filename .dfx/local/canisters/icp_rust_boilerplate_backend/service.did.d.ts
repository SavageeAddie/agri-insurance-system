import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface CropInsurance {
  'id' : bigint,
  'coverage_amount' : bigint,
  'coverage_start_date' : bigint,
  'coverage_end_date' : bigint,
  'crop_type' : string,
  'farmer' : string,
}
export interface CropInsurancePayload {
  'coverage_amount' : bigint,
  'coverage_start_date' : bigint,
  'coverage_end_date' : bigint,
  'crop_type' : string,
  'farmer' : string,
}
export interface Debt {
  'id' : bigint,
  'debtor' : string,
  'created_at' : bigint,
  'amount' : bigint,
  'creditor' : string,
}
export interface DebtPayload {
  'debtor' : string,
  'amount' : bigint,
  'creditor' : string,
}
export type Error = { 'InvalidInput' : { 'msg' : string } } |
  { 'NotFound' : { 'msg' : string } } |
  { 'InternalError' : { 'msg' : string } };
export interface Escrow {
  'debt_id' : bigint,
  'created_at' : bigint,
  'amount' : bigint,
}
export interface EscrowPayload { 'debt_id' : bigint, 'amount' : bigint }
export interface InsuranceClaim {
  'insurance_id' : bigint,
  'claim_date' : bigint,
  'claim_amount' : bigint,
}
export interface InsuranceClaimPayload {
  'insurance_id' : bigint,
  'claim_amount' : bigint,
}
export type Result = { 'Ok' : Debt } |
  { 'Err' : Error };
export type Result_1 = { 'Ok' : Escrow } |
  { 'Err' : Error };
export type Result_2 = { 'Ok' : CropInsurance } |
  { 'Err' : Error };
export type Result_3 = { 'Ok' : InsuranceClaim } |
  { 'Err' : Error };
export interface _SERVICE {
  'add_debt' : ActorMethod<[DebtPayload], Result>,
  'create_escrow' : ActorMethod<[EscrowPayload], Result_1>,
  'get_crop_insurance' : ActorMethod<[bigint], Result_2>,
  'get_debt' : ActorMethod<[bigint], Result>,
  'get_escrow' : ActorMethod<[bigint], Result_1>,
  'get_insurance_claim' : ActorMethod<[bigint], Result_3>,
  'purchase_crop_insurance' : ActorMethod<[CropInsurancePayload], Result_2>,
  'submit_insurance_claim' : ActorMethod<[InsuranceClaimPayload], Result_3>,
  'update_debt' : ActorMethod<[bigint, DebtPayload], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
