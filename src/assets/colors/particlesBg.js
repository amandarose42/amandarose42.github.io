export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#18476e' : '#d6bfbf');
  const particle = (darkMode = false) => (darkMode ? '#8c0707' : '#074a8c');
  const links = (darkMode = false) => (darkMode ? '#d6bfbf' : '#6abdfc');

  return {
    background,
    particle,
    links,
  };
};