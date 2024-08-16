import ReactCountryFlag from "react-country-flag";

const Nationality = ({ nationalityCode }) => {
  return (
    <div className='flex items-center'>
        <div className="h-[12px] w-[12px] -mt-6 -mr-1">
      <ReactCountryFlag
        countryCode={nationalityCode}
        svg
        title={nationalityCode}
      />
      </div>
      <span className='ml-2 -mt-1 text-lg'>{nationalityCode}</span>
    </div>
  );
};

export default Nationality;
