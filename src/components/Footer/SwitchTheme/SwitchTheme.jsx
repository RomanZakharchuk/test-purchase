import { useTheme } from '../../../hooks/useTheme';

const SwitchTheme = () => {
  const { setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  };

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }

  return (
    <div>
      <button className='inline-block border-[1px] border-[#2E7D32] text-green-600 py-[5px] px-[10px] mr-[15px] bg-btn' onClick={handleLightThemeClick}>Light</button>
      <button className='inline-block border-[1px] border-[#2E7D32] bg-[#2E7D32] text-white py-[5px] px-[10px]' onClick={handleDarkThemeClick}>Dark</button>
    </div>
  )
}

export { SwitchTheme };