import { InputGroup } from './inputGroup';
import { FullWidthBtn } from '../Buttons/fullWithButton';
import IconBtn from '../Buttons/btn&icon';

let FirstForm = () => {
  return (
    <div>
      <div
        className="bg-white shade"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
          borderRadius: '15px',
        }}>
        <div className="flex flex-col gap-4 p-4">
          <div
            className="Buttons-list flex items-center rounded-lg justify-between p-3"
            style={{
              borderRadius: '10px',
              backgroundColor: '#f5fbff',
            }}>
            <IconBtn label={'Car'} icon="car" style={''} />
            <IconBtn label={'Health'} icon="heartbeat" style={''} />
            <IconBtn label={'Home'} icon="home" style={''} />
            <IconBtn
              label={'Other'}
              icon="umbrella"
              style={'hover:bg-blue-400'}
            />
          </div>

          <InputGroup label="Car Year" />

          <InputGroup label="Car Type" />

          <InputGroup label="Car Model" />

          <InputGroup label="Model Details" />

          <FullWidthBtn label="YES, GIVE ME THE REST OF THE DEAL NOW!" />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
