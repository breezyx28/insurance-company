export let FullWidthBtn = ({ label, bg }) => {
  return (
    <div className="w-full">
      <button
        class="w-full py-5 px-5 text-center text-sm text-white rounded-lg"
        style={{
          backgroundColor: `${bg ?? '#fd7a53'}`,
        }}>
        {label}
      </button>
    </div>
  );
};
