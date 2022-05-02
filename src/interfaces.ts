export interface Inventory {
  totalProduction: number;
  totalDemand: number;
}

export interface Homepage {
  totalForecastNumber: number;
  totalOptimalNumber: number;
  totalSales: number;
}

type Category = {
  id: number;
  label: string;
  name: string;
};

export interface Metadata {
  categories: Array<Category>;
}
