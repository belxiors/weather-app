export type Units = {
  metric: UnitSystem;
  imperial: UnitSystem;
  standard: UnitSystem;
};

export type UnitSystem = {
  temperature: string;
  wind: string;
};

export type UnitType = keyof Units;
