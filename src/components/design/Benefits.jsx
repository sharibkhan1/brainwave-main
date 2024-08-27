export const GradientLight = ({ position, size }) => {
  return (
    <div
      className={`absolute ${position} w-full ${size} bg-radial-gradient from-[#d8323c] to-[#0c0e0c]/0 to-70% pointer-events-none`}
    />
  );
};

export const WhiteGradientLight = ({ position, size }) => {
  return (
    <div
      className={`absolute ${position} w-full ${size} bg-radial-gradient from-[#eaebea] to-[#0c0e0c]/0 to-60% pointer-events-none`}
    />
  );
};
