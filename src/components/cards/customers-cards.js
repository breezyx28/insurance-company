import './css/customer-card.css';

export let CustomerCard = ({ src, position, objective, personName }) => {
  return (
    <div>
      <div
        className="customer-card p-8 bg-white rounded shade cursor-pointer"
        style={{
          borderRadius: '10px',
        }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-start gap-4">
            <div>
              <img src={src} className="w-16 h-16 object-cover rounded-full" />
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold blue-text text-xl leading-none">
                {personName ?? 'Glenn Horca'}
              </div>
              <small className="text-sm text-gray-700 mt-2">
                {position ?? 'UI UX Designer'}
              </small>
              <div className="flex gap-1 mt-2">
                <span className="fa fa-star text-yellow-300"></span>
                <span className="fa fa-star text-yellow-300"></span>
                <span className="fa fa-star text-yellow-300"></span>
                <span className="fa fa-star text-yellow-300"></span>
                <span className="fa fa-star text-yellow-300"></span>
              </div>
            </div>
          </div>
          <div>
            <div
              className="text-xl text-gray-700 font-normal"
              style={{ width: '450px' }}>
              {objective ??
                'Super user friendly, simple and smart design, intelligently thought of each step.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
