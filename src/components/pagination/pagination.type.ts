export const MAX_ITEMS = 9;
export const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export interface PaginationProps {
  setOffset: (offset: number) => void; // Function to update the offset when a new page is selected
  offset: number;             // Current offset or starting index of the displayed items
  total: number;              // Total number of items
}

export interface PaginationWrapperProps {
  setOffset: (offset: number) => void;
  offset: number;
  total: number;
}
