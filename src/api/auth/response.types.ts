type BlockType = {
  allMemberId: string;
  block_name: string;
  houseUniqueId: number;
  main_member: number;
  flat_no: string;
  wing_flat: string;
  member_title: string;
};

type DefaultCommunityType = {
  community_id: number;
  subscriber_id: number;
  community_name: string;
  short_name: string | null;
  community_pincode: string;
  community_country: string;
  society_type: string;
  property_type: string;
  office_address: string;
  direction_landmark: string;
  profile_photo: string;
  subscriber_title: number;
  blocks: BlockType[];
};

type Community = {
  community_id: number;
  subscriber_id: number;
  community_name: string;
  short_name: string | null;
  community_pincode: string;
  community_country: string;
  society_type: string;
  property_type: string;
  office_address: string;
  direction_landmark: string;
  profile_photo: string;
  subscriber_title: number;
  blocks: BlockType[] | null;
  user_type: string;
};

export type AuthLoginResType = {
  access_token: string;
  user_role: string;
  default_community: DefaultCommunityType;
  society_id: number;
  society_name: string;
};

export type AuthReloginResType = {
  access_token: string;
  user_id: number;
  user_name: string;
  user_type: string;
  default_community: {
    community_id: number;
    subscriber_id: number;
    community_name: string;
    short_name: string | null;
    community_pincode: string;
    community_country: string;
    society_type: string;
    property_type: string;
    office_address: string;
    direction_landmark: string;
    profile_photo: string;
    subscriber_title: number;
    blocks: BlockType[] | null;
  };
  all_community_details: Community[];
  permissions: any;
};
