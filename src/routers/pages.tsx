import loadableComponent from './loadableComponent';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface IPages {
  [key: string]: Function;
}

interface IExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const HomeContainer = () => import('../pages/HomeContainer');
const NoMatchContainer = () => import('../pages/NoMatchContainer');
const Counter = () => import('../pages/Counter');

const pages: IPages = {
  HomeContainer,
  NoMatchContainer,
  Counter,
};

const exportPages: IExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
