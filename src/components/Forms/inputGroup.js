import { OptionInput } from './options';

export let InputGroup = ({ label }) => {
  return (
    <div className="w-full">
      <div className="input-group">
        <label htmlFor="" className="text-gray-500 font-semibold">
          {label}
        </label>
        <OptionInput data={['option 1', 'option 2', 'option 3']} />
      </div>
    </div>
  );
};
