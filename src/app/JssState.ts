import {
  RouteData,
  LayoutServiceContextData,
} from '@sitecore-jss/sitecore-jss-angular';
import { LayoutServiceError } from './layout/jss-layout.service';

export class JssState<Fields = Record<string, unknown>> {
  language: string;
  serverRoute: string;
  routeFetchError?: LayoutServiceError;
  sitecore?: LayoutServiceContextData & {
    route: RouteData<Fields>;
  };
  viewBag: { [key: string]: unknown };
}
