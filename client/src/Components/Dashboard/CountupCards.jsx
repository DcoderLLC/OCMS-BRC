import {} from "react";
import CountUp from "react-countup";
import PropType from "prop-types";

const CountupCards = ({ title, count, icon: Icon }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex items-center w-full">
      <div className="p-3 bg-blue-500 rounded-full text-white">
        <Icon size={24} />
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">
          <CountUp end={count} duration={2} />
        </p>
      </div>
    </div>
  );
};

CountupCards.propTypes = {
  title: PropType.string.isRequired,
  count: PropType.number.isRequired,
  icon: PropType.elementType.isRequired,
};

export default CountupCards;
