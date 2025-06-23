import type { ReactNode } from "react";

// services section
  export type TCard = {
    title: string;
    image: string;
  };

// whyUs section
export interface IInfo {
    logo: string | ReactNode;
    heading: string;
    description: string;
  }
