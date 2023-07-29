interface ButtonPropsToggle {
  isOn: boolean;
  toggle: () => void;
}

export const ButtonToggle: React.FC<ButtonPropsToggle> = ({ isOn, toggle }) => {
  return (
    <button
      className={`py-2 px-4 font-bold border-2 rounded cursor-pointer ${isOn ? 'bg-purple-600 text-white' : 'text-purple-600 border-purple-600'}`}
      onClick={toggle}
    >
      {isOn ? 'Ascendente' : 'Descendente'}
    </button>
  );
};
