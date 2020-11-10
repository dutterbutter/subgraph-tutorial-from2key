// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ConversionPaid extends ethereum.Event {
  get params(): ConversionPaid__Params {
    return new ConversionPaid__Params(this);
  }
}

export class ConversionPaid__Params {
  _event: ConversionPaid;

  constructor(event: ConversionPaid) {
    this._event = event;
  }

  get campaignAddressPlasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get conversionID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AddedPendingRewards extends ethereum.Event {
  get params(): AddedPendingRewards__Params {
    return new AddedPendingRewards__Params(this);
  }
}

export class AddedPendingRewards__Params {
  _event: AddedPendingRewards;

  constructor(event: AddedPendingRewards) {
    this._event = event;
  }

  get contractAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get influencer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get rewards(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class PaidPendingRewards extends ethereum.Event {
  get params(): PaidPendingRewards__Params {
    return new PaidPendingRewards__Params(this);
  }
}

export class PaidPendingRewards__Params {
  _event: PaidPendingRewards;

  constructor(event: PaidPendingRewards) {
    this._event = event;
  }

  get influencer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nonRebalancedRewards(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewards(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get campaignsPaid(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get earningsPerCampaign(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get feePerReferrer2KEY(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PaidPendingRewards1 extends ethereum.Event {
  get params(): PaidPendingRewards1__Params {
    return new PaidPendingRewards1__Params(this);
  }
}

export class PaidPendingRewards1__Params {
  _event: PaidPendingRewards1;

  constructor(event: PaidPendingRewards1) {
    this._event = event;
  }

  get influencer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nonRebalancedRewards(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get rewards(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get campaignsPaid(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get earningsPerCampaign(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class Plasma2Ethereum extends ethereum.Event {
  get params(): Plasma2Ethereum__Params {
    return new Plasma2Ethereum__Params(this);
  }
}

export class Plasma2Ethereum__Params {
  _event: Plasma2Ethereum;

  constructor(event: Plasma2Ethereum) {
    this._event = event;
  }

  get plasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get eth(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Plasma2Handle extends ethereum.Event {
  get params(): Plasma2Handle__Params {
    return new Plasma2Handle__Params(this);
  }
}

export class Plasma2Handle__Params {
  _event: Plasma2Handle;

  constructor(event: Plasma2Handle) {
    this._event = event;
  }

  get plasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get handle(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class ConversionCreated extends ethereum.Event {
  get params(): ConversionCreated__Params {
    return new ConversionCreated__Params(this);
  }
}

export class ConversionCreated__Params {
  _event: ConversionCreated;

  constructor(event: ConversionCreated) {
    this._event = event;
  }

  get campaignAddressPlasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get campaignAddressPublic(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get conversionID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get contractor(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get converter(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class ConversionExecuted extends ethereum.Event {
  get params(): ConversionExecuted__Params {
    return new ConversionExecuted__Params(this);
  }
}

export class ConversionExecuted__Params {
  _event: ConversionExecuted;

  constructor(event: ConversionExecuted) {
    this._event = event;
  }

  get campaignAddressPlasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get conversionID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ConversionRejected extends ethereum.Event {
  get params(): ConversionRejected__Params {
    return new ConversionRejected__Params(this);
  }
}

export class ConversionRejected__Params {
  _event: ConversionRejected;

  constructor(event: ConversionRejected) {
    this._event = event;
  }

  get campaignAddressPlasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get conversionID(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get statusCode(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CPCCampaignCreated extends ethereum.Event {
  get params(): CPCCampaignCreated__Params {
    return new CPCCampaignCreated__Params(this);
  }
}

export class CPCCampaignCreated__Params {
  _event: CPCCampaignCreated;

  constructor(event: CPCCampaignCreated) {
    this._event = event;
  }

  get proxyCPCCampaignPlasma(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractorPlasma(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PlasmaMirrorCampaigns extends ethereum.Event {
  get params(): PlasmaMirrorCampaigns__Params {
    return new PlasmaMirrorCampaigns__Params(this);
  }
}

export class PlasmaMirrorCampaigns__Params {
  _event: PlasmaMirrorCampaigns;

  constructor(event: PlasmaMirrorCampaigns) {
    this._event = event;
  }

  get proxyPlasmaAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proxyPublicAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class HandleChanged extends ethereum.Event {
  get params(): HandleChanged__Params {
    return new HandleChanged__Params(this);
  }
}

export class HandleChanged__Params {
  _event: HandleChanged;

  constructor(event: HandleChanged) {
    this._event = event;
  }

  get userPlasmaAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newHandle(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class TwoKeyPlasmaEventSource extends ethereum.SmartContract {
  static bind(address: Address): TwoKeyPlasmaEventSource {
    return new TwoKeyPlasmaEventSource("TwoKeyPlasmaEventSource", address);
  }

  PROXY_STORAGE_CONTRACT(): Address {
    let result = super.call(
      "PROXY_STORAGE_CONTRACT",
      "PROXY_STORAGE_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_PROXY_STORAGE_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "PROXY_STORAGE_CONTRACT",
      "PROXY_STORAGE_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TWO_KEY_PLASMA_SINGLETON_REGISTRY(): Address {
    let result = super.call(
      "TWO_KEY_PLASMA_SINGLETON_REGISTRY",
      "TWO_KEY_PLASMA_SINGLETON_REGISTRY():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_TWO_KEY_PLASMA_SINGLETON_REGISTRY(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "TWO_KEY_PLASMA_SINGLETON_REGISTRY",
      "TWO_KEY_PLASMA_SINGLETON_REGISTRY():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class SetInitialParamsCall extends ethereum.Call {
  get inputs(): SetInitialParamsCall__Inputs {
    return new SetInitialParamsCall__Inputs(this);
  }

  get outputs(): SetInitialParamsCall__Outputs {
    return new SetInitialParamsCall__Outputs(this);
  }
}

export class SetInitialParamsCall__Inputs {
  _call: SetInitialParamsCall;

  constructor(call: SetInitialParamsCall) {
    this._call = call;
  }

  get _twoKeyPlasmaSingletonRegistry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _proxyStorage(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetInitialParamsCall__Outputs {
  _call: SetInitialParamsCall;

  constructor(call: SetInitialParamsCall) {
    this._call = call;
  }
}

export class EmitConversionCreatedEventCall extends ethereum.Call {
  get inputs(): EmitConversionCreatedEventCall__Inputs {
    return new EmitConversionCreatedEventCall__Inputs(this);
  }

  get outputs(): EmitConversionCreatedEventCall__Outputs {
    return new EmitConversionCreatedEventCall__Outputs(this);
  }
}

export class EmitConversionCreatedEventCall__Inputs {
  _call: EmitConversionCreatedEventCall;

  constructor(call: EmitConversionCreatedEventCall) {
    this._call = call;
  }

  get campaignAddressPublic(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get conversionID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get contractor(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get converter(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class EmitConversionCreatedEventCall__Outputs {
  _call: EmitConversionCreatedEventCall;

  constructor(call: EmitConversionCreatedEventCall) {
    this._call = call;
  }
}

export class EmitConversionExecutedEventCall extends ethereum.Call {
  get inputs(): EmitConversionExecutedEventCall__Inputs {
    return new EmitConversionExecutedEventCall__Inputs(this);
  }

  get outputs(): EmitConversionExecutedEventCall__Outputs {
    return new EmitConversionExecutedEventCall__Outputs(this);
  }
}

export class EmitConversionExecutedEventCall__Inputs {
  _call: EmitConversionExecutedEventCall;

  constructor(call: EmitConversionExecutedEventCall) {
    this._call = call;
  }

  get conversionID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmitConversionExecutedEventCall__Outputs {
  _call: EmitConversionExecutedEventCall;

  constructor(call: EmitConversionExecutedEventCall) {
    this._call = call;
  }
}

export class EmitConversionRejectedEventCall extends ethereum.Call {
  get inputs(): EmitConversionRejectedEventCall__Inputs {
    return new EmitConversionRejectedEventCall__Inputs(this);
  }

  get outputs(): EmitConversionRejectedEventCall__Outputs {
    return new EmitConversionRejectedEventCall__Outputs(this);
  }
}

export class EmitConversionRejectedEventCall__Inputs {
  _call: EmitConversionRejectedEventCall;

  constructor(call: EmitConversionRejectedEventCall) {
    this._call = call;
  }

  get conversionID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get statusCode(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EmitConversionRejectedEventCall__Outputs {
  _call: EmitConversionRejectedEventCall;

  constructor(call: EmitConversionRejectedEventCall) {
    this._call = call;
  }
}

export class EmitCPCCampaignCreatedEventCall extends ethereum.Call {
  get inputs(): EmitCPCCampaignCreatedEventCall__Inputs {
    return new EmitCPCCampaignCreatedEventCall__Inputs(this);
  }

  get outputs(): EmitCPCCampaignCreatedEventCall__Outputs {
    return new EmitCPCCampaignCreatedEventCall__Outputs(this);
  }
}

export class EmitCPCCampaignCreatedEventCall__Inputs {
  _call: EmitCPCCampaignCreatedEventCall;

  constructor(call: EmitCPCCampaignCreatedEventCall) {
    this._call = call;
  }

  get proxyCPCCampaignPlasma(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contractorPlasma(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EmitCPCCampaignCreatedEventCall__Outputs {
  _call: EmitCPCCampaignCreatedEventCall;

  constructor(call: EmitCPCCampaignCreatedEventCall) {
    this._call = call;
  }
}

export class EmitCPCCampaignMirroredCall extends ethereum.Call {
  get inputs(): EmitCPCCampaignMirroredCall__Inputs {
    return new EmitCPCCampaignMirroredCall__Inputs(this);
  }

  get outputs(): EmitCPCCampaignMirroredCall__Outputs {
    return new EmitCPCCampaignMirroredCall__Outputs(this);
  }
}

export class EmitCPCCampaignMirroredCall__Inputs {
  _call: EmitCPCCampaignMirroredCall;

  constructor(call: EmitCPCCampaignMirroredCall) {
    this._call = call;
  }

  get proxyAddressPlasma(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proxyAddressPublic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EmitCPCCampaignMirroredCall__Outputs {
  _call: EmitCPCCampaignMirroredCall;

  constructor(call: EmitCPCCampaignMirroredCall) {
    this._call = call;
  }
}

export class EmitPlasma2EthereumEventCall extends ethereum.Call {
  get inputs(): EmitPlasma2EthereumEventCall__Inputs {
    return new EmitPlasma2EthereumEventCall__Inputs(this);
  }

  get outputs(): EmitPlasma2EthereumEventCall__Outputs {
    return new EmitPlasma2EthereumEventCall__Outputs(this);
  }
}

export class EmitPlasma2EthereumEventCall__Inputs {
  _call: EmitPlasma2EthereumEventCall;

  constructor(call: EmitPlasma2EthereumEventCall) {
    this._call = call;
  }

  get _plasma(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ethereum(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class EmitPlasma2EthereumEventCall__Outputs {
  _call: EmitPlasma2EthereumEventCall;

  constructor(call: EmitPlasma2EthereumEventCall) {
    this._call = call;
  }
}

export class EmitPlasma2HandleEventCall extends ethereum.Call {
  get inputs(): EmitPlasma2HandleEventCall__Inputs {
    return new EmitPlasma2HandleEventCall__Inputs(this);
  }

  get outputs(): EmitPlasma2HandleEventCall__Outputs {
    return new EmitPlasma2HandleEventCall__Outputs(this);
  }
}

export class EmitPlasma2HandleEventCall__Inputs {
  _call: EmitPlasma2HandleEventCall;

  constructor(call: EmitPlasma2HandleEventCall) {
    this._call = call;
  }

  get _plasma(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _handle(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class EmitPlasma2HandleEventCall__Outputs {
  _call: EmitPlasma2HandleEventCall;

  constructor(call: EmitPlasma2HandleEventCall) {
    this._call = call;
  }
}

export class EmitHandleChangedEventCall extends ethereum.Call {
  get inputs(): EmitHandleChangedEventCall__Inputs {
    return new EmitHandleChangedEventCall__Inputs(this);
  }

  get outputs(): EmitHandleChangedEventCall__Outputs {
    return new EmitHandleChangedEventCall__Outputs(this);
  }
}

export class EmitHandleChangedEventCall__Inputs {
  _call: EmitHandleChangedEventCall;

  constructor(call: EmitHandleChangedEventCall) {
    this._call = call;
  }

  get _userPlasmaAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newHandle(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class EmitHandleChangedEventCall__Outputs {
  _call: EmitHandleChangedEventCall;

  constructor(call: EmitHandleChangedEventCall) {
    this._call = call;
  }
}
