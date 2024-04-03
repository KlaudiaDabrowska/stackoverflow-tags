type TagsResponse = {
  items: TagItem[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  page: number;
  page_size: number;
  total: number;
};

type TagItem = {
  collectives?: Collective[];
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

type Collective = {
  tags: string[];
  external_links: ExternalLink;
  description: string;
  link: string;
  name: string;
  slug: string;
};

type ExternalLink = {
  type: string;
  link: string;
};

type ErrorResponse = {
  error_id: number;
  error_message: string;
  error_name: string;
};

export type { TagsResponse, TagItem, ErrorResponse };
