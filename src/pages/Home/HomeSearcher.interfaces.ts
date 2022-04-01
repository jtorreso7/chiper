interface IRepository {
  id: number;
  fullName: string;
  description: string;
  language: string;
  stargazersCount: number;
  openIssues: number;
  forks: number;
  htmlUrl: string;
}
interface ICase {
  date_stolen: number;
  description: string;
  external_id: null;
  frame_colors: [string];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: null;
  manufacturer_name: string;
  registry_name: null;
  registry_url: null;
  serial: string;
  status: string;
  stolen: true;
  stolen_coordinates: [];
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
}

interface IPayload {
  isLoading: boolean;
  page: number;
  appendToState: boolean;
  errorMessage?: string;
  query: string;
  items: ICase[];
}

interface IAction {
  payload: IPayload;
  type: string;
}

export type { ICase, IRepository, IAction };
