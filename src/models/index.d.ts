import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Profile {
  readonly id: string;
  readonly name?: string | null;
  readonly job?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}