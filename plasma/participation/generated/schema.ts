// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Epoch extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Epoch entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Epoch entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Epoch", id.toString(), this);
  }

  static load(id: string): Epoch | null {
    return store.get("Epoch", id) as Epoch | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _declared(): boolean {
    let value = this.get("_declared");
    return value.toBoolean();
  }

  set _declared(value: boolean) {
    this.set("_declared", Value.fromBoolean(value));
  }

  get _registered(): boolean {
    let value = this.get("_registered");
    return value.toBoolean();
  }

  set _registered(value: boolean) {
    this.set("_registered", Value.fromBoolean(value));
  }

  get _finalized(): boolean {
    let value = this.get("_finalized");
    return value.toBoolean();
  }

  set _finalized(value: boolean) {
    this.set("_finalized", Value.fromBoolean(value));
  }

  get _nUsers(): BigInt {
    let value = this.get("_nUsers");
    return value.toBigInt();
  }

  set _nUsers(value: BigInt) {
    this.set("_nUsers", Value.fromBigInt(value));
  }

  get _participationMiningRewards(): Array<string> | null {
    let value = this.get("_participationMiningRewards");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set _participationMiningRewards(value: Array<string> | null) {
    if (value === null) {
      this.unset("_participationMiningRewards");
    } else {
      this.set(
        "_participationMiningRewards",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get _timeStamp(): BigInt {
    let value = this.get("_timeStamp");
    return value.toBigInt();
  }

  set _timeStamp(value: BigInt) {
    this.set("_timeStamp", Value.fromBigInt(value));
  }

  get _updatedAt(): BigInt {
    let value = this.get("_updatedAt");
    return value.toBigInt();
  }

  set _updatedAt(value: BigInt) {
    this.set("_updatedAt", Value.fromBigInt(value));
  }
}

export class ParticipationMiningReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ParticipationMiningReward entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ParticipationMiningReward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ParticipationMiningReward", id.toString(), this);
  }

  static load(id: string): ParticipationMiningReward | null {
    return store.get(
      "ParticipationMiningReward",
      id
    ) as ParticipationMiningReward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _rewardsWei(): BigInt | null {
    let value = this.get("_rewardsWei");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set _rewardsWei(value: BigInt | null) {
    if (value === null) {
      this.unset("_rewardsWei");
    } else {
      this.set("_rewardsWei", Value.fromBigInt(value as BigInt));
    }
  }

  get _user(): string {
    let value = this.get("_user");
    return value.toString();
  }

  set _user(value: string) {
    this.set("_user", Value.fromString(value));
  }

  get _timeStamp(): BigInt {
    let value = this.get("_timeStamp");
    return value.toBigInt();
  }

  set _timeStamp(value: BigInt) {
    this.set("_timeStamp", Value.fromBigInt(value));
  }

  get _epoch(): string {
    let value = this.get("_epoch");
    return value.toString();
  }

  set _epoch(value: string) {
    this.set("_epoch", Value.fromString(value));
  }
}

export class Meta extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Meta entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Meta entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Meta", id.toString(), this);
  }

  static load(id: string): Meta | null {
    return store.get("Meta", id) as Meta | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _version(): i32 {
    let value = this.get("_version");
    return value.toI32();
  }

  set _version(value: i32) {
    this.set("_version", Value.fromI32(value));
  }

  get _nUsers(): i32 {
    let value = this.get("_nUsers");
    return value.toI32();
  }

  set _nUsers(value: i32) {
    this.set("_nUsers", Value.fromI32(value));
  }

  get _contracts(): Array<Bytes> | null {
    let value = this.get("_contracts");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set _contracts(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("_contracts");
    } else {
      this.set("_contracts", Value.fromBytesArray(value as Array<Bytes>));
    }
  }

  get _timeStamp(): BigInt {
    let value = this.get("_timeStamp");
    return value.toBigInt();
  }

  set _timeStamp(value: BigInt) {
    this.set("_timeStamp", Value.fromBigInt(value));
  }

  get _updatedAt(): BigInt {
    let value = this.get("_updatedAt");
    return value.toBigInt();
  }

  set _updatedAt(value: BigInt) {
    this.set("_updatedAt", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _participationMiningRewards(): Array<string> | null {
    let value = this.get("_participationMiningRewards");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set _participationMiningRewards(value: Array<string> | null) {
    if (value === null) {
      this.unset("_participationMiningRewards");
    } else {
      this.set(
        "_participationMiningRewards",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get _timeStamp(): BigInt {
    let value = this.get("_timeStamp");
    return value.toBigInt();
  }

  set _timeStamp(value: BigInt) {
    this.set("_timeStamp", Value.fromBigInt(value));
  }

  get _updatedAt(): BigInt {
    let value = this.get("_updatedAt");
    return value.toBigInt();
  }

  set _updatedAt(value: BigInt) {
    this.set("_updatedAt", Value.fromBigInt(value));
  }
}
