export interface Rover {
  id?: number;
  image: string;
  name: string;
  camera: Array<string>;
  landing_date?: string;
  launch_date?: string;
  status?: string;
}

export interface Photos {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface Camera {
  id: string;
  name: string;
  rover_id: number;
  full_name: string;
}
