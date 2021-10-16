let IconBtn = ({ label, icon, style = null }) => {
  return (
    <div>
      <button
        class={`py-3 px-5 text-gray-600 font-semibold flex items-center text-sm hover:bg-blue-400 hover:text-white ${style}`}
        style={{
          // height: '42px',
          minWidth: '64px',
          borderRadius: '10px',
        }}>
        <span className={`text-gray-600 fas fa-${icon} fa-2x pr-2`}></span>

        {label}
      </button>
    </div>
  );
};

export default IconBtn;
