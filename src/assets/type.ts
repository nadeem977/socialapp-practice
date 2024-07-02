export interface Tranddings {
    title: string;
    followers: string;
    img: string;
}


export interface SidebarItem {
    icon: React.ReactNode;
    title: string;
    link?: string;
  }
  
export interface TrandingVideos {
  title:string;
  name:string;
  profile:string;
  img:string;
  oscr:string;
}


export interface PostType {
  username: string;
  postsimg:{
    img:string;
  }[];
  desc: string;
  shared: number;
  time:string;
  deslike:number;
  likes: number;
  profileimg:string;
  followers:number;

  comments: {
    comment: string;
    username: string;
    img: string;
    time: string;
  }[];
}

export interface menuoptions{
  option:string;
  icon:React.ReactNode;
}

export interface communityItem {
  title: string;
  followers:number;
  img:string;
}

export interface UserType {
  name:string;
  username:string;
  profile:string;
  followers:number;
  following:number;
  about:string;
  communities: number;
}