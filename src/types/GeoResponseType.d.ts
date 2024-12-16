export type GeoResponseType = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  local_names?: {
    [key: string]: string;
  };
};
