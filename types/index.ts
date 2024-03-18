import React, { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

import * as z from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Too short!'
  }).max(50, {
    message: 'Too long!'
  }),
  email: z.string().email({message: 'Invalid email!'}),
});

export type ReactChildrenProp = {
  children: React.ReactNode;
};

export type NavlinkType = {
  href: string;
  name?: string;
  // image?: string;
};

export type SocialImageType = {
  src: IconType;
  alt: string;
  link: string;
};

export type ButtonProps =  {
  classNames?: string
} & ReactChildrenProp &
  ComponentPropsWithoutRef<"button"> 

export type ProjectCardProps = {
  name:string,
  description:string,
  githubLink?: string,
  liveLink?:string,
  tags:string[]
  image:string
  logo:string
}

export type GetToKnowMeCardProps = {
  heading:string,
  subheading:string,
  link:string
}

export type TechCardProps = {
  name: string,
  tag:string,
  image:string
  category:string
}

export type MobileNavProps = {
  slug:string,
  id: string,
  icon: IconType
}

export type WorkCardProps =  ProjectCardProps;
