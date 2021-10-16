import './css/offer-card.css';

export let OffersCard = ({ icon, style, title, bg, description }) => {
  return (
    <div>
      <div
        id="offerCard"
        className="p-8 border border-gray-300"
        style={{ width: '500px', borderRadius: '10px' }}>
        <div className="flex items-start gap-4">
          <div
            className={`icon flex justify-center items-center ${
              bg ?? 'bg-blue-500'
            }`}
            style={{
              borderRadius: '24px',
              width: '10.5rem',
              height: '4.5rem',
              style,
            }}>
            <span
              className={`fal fa-${
                icon ?? 'balance-scale'
              } text-2xl text-white`}></span>
          </div>
          <div className="flex flex-col">
            <div className="blue-text text-xl font-bold">
              <strong>{title ?? 'Compare Car Insurance Rates'}</strong>
            </div>
            <h6 className="text-gray-700 pt-2">
              {description ??
                'Complete our easy form and get instant quotes from the most prominent insurance providers in Dubai and the UAE.'}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
