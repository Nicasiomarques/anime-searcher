interface ButtonIndicatorProps {
  label: string;
  disabled: boolean;
  onPageChange: () => void;
}

export const BtnIndicator = ({ label, disabled, onPageChange }: ButtonIndicatorProps) => (
  <button
    className='py-1 px-4 text-md rounded-full bg-purple-600 hover:bg-purple-700: text-white disabled:bg-purple-400'
    onClick={onPageChange}
    disabled={disabled}
  >
    {label}
  </button>
);
