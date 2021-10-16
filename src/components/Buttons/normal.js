let NormalBtn = ({ label, bg = '#fd7a53', color, size }) => {
  return (
    <div>
      <button
        class={`${size ?? 'py-3 px-8'} ${bg ?? 'bg-blue-500'} text-sm ${
          color ?? 'text-white'
        } rounded-lg`}
        style={{
          // height: '42px',
          minWidth: '64px',
          backgroundColor: `${bg}`,
          color: `${color}`,
        }}>
        {label}
      </button>
    </div>
  );
};

export default NormalBtn;
