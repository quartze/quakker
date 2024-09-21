export interface ITabsProps {
  tabs: ITabsPropsTabs[];
  modelValue: string | number | boolean;
}

export interface ITabsPropsTabs {
  label: string;
  value: string | number | boolean;
}

export interface IUserPostProps {
  reply?: IPostReply;
  viewSwitcher?: boolean
  placeholder?: string,
  buttonText?: string
}

export interface IPostCommentsTypeProps {
    modelValue: number;
}

export interface IUploadProps {
  modelValue: IUploadImages[];
  multiple?: boolean;
  max?: number;
  size?: number;
  accept?: string;
}

export interface IUploadImages {
  id: number;
  file: File;
}

export interface IUploadImagesPreview {
  id: number;
  name: string;
  type: string;
  url: string;
}

export interface IPost {
  id: string;
  user: {
    id: string;
    displayname: string;
    username: string;
    avatarUrl: string;
  };
  content?: string;
  images?: IUploadImagesPreview[];
  stats: {
    comments: number;
    likes: number;
    shares: number;
    views: number;
  };
  reply?: IPostReply;
  createdAt: string;
  status: {
    liked: boolean;
    shared: boolean;
    commented: boolean;
  };
}

export interface IPostReply {
  id: string;
  user: {
    id: string;
    displayname: string;
    username: string;
    avatarUrl: string;
  };
  content?: string;
  images?: IUploadImagesPreview[];
  reply?: IPostReply;
  createdAt: string;
}

export interface IUserProfileShortProps {
  displayname: string;
  username: string;
  avatarUrl: string;
  createdAt?: string;
  observe?: boolean;
}

export interface IWidgetProps {
  title: string;
}

export interface IPostTagsProps {
  tag: string;
  categories: string[];
  position?: number;
  count: number;
}

export interface ISearchInputProps {
  modelValue: string;
  placeholder?: string;
}

export enum INotifyBlockType {
  LIKED = 'liked',
  MENTIONED = 'mentioned',
  COMMENTED = 'commented',
  PROPOSITION = 'proposition',
}

export interface INotifyBlockProps {
  user?: {
    id: string,
    avatarUrl: string,
    displayname: string,
    username: string
  },
  type: INotifyBlockType,
  content?: string
  reply?: string
}

export enum IUserBadgeType {
  VERIFIED = 'verified',
  ADMIN = 'admin'
}

export interface IUserBadgeProps {
  type: IUserBadgeType
}

export interface IInputProps {
  modelValue: string;
  placeholder ?: string;
  icon?: string,
  type: string,
  required?: boolean,
  "aria-label"?: string
  "aria-describedby"?: string
  max?: number
}

export interface ITextAreaProps {
  clear?: boolean,
  modelValue: string;
  placeholder?: string;
  max?: number
}

export interface IButtonProps {
  ariaLabel?: string
}

export interface IGalleryProps {
  images: IUploadImagesPreview[]
}