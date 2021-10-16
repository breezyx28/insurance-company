export let OptionInput = ({ data }) => {
  return (
    <div className="p-3 mt-2 border border-grey-500 rounded-lg">
      <select className="w-full">
        <option value="Please Choose" defaultValue="please choose">
          Please Choose
        </option>
        {data.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
