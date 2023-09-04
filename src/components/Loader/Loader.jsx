import ScaleLoader from 'react-spinners/ScaleLoader';

export const Loader = () => {
  return (
    <div>
      <ScaleLoader color="#36d7b7" size={35} data-testid="loader" />
    </div>
  );
};
