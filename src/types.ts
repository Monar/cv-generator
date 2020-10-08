import type { FC } from 'react';
export type Data = {
  name: string;
  title: string;
  email: string;
  phone: string;
  photo: string;
  profiles: Array<{
    icon?: string;
    network: string;
    url: string;
    username: string;
  }>;
};

export type Template = FC<{ data: Data }>;
