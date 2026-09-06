export type StockStatus = 'out' | 'low' | 'ok';

export interface ReportSummary {
  total: number;
  lowStock: number;
  outOfStock: number;
  inventoryValue: number;
  statuses: StockStatus[];
}

export interface ReportMatch {
  id: number;
  name: string;
  stock: number;
}
