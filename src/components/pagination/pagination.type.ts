export const MAX_ITEMS = 9;
export const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export interface PaginationProps {
  total: number;              // Total number of items
  offset: number;             // Current offset or starting index of the displayed items
  setOffset: (offset: number) => void; // Function to update the offset when a new page is selected
}

export interface PaginationWrapperProps {
  total: number;
  offset: number;
  setOffset: (offset: number) => void;
}
