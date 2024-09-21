export const formatNumber = (value: number) => {
  if (window && window.innerWidth >= 768) {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + " mln";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "  tyś.";
    } else {
      return value;
    }
  } else {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "kk";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value;
    }
  }
};
