import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

  return (
    <div style={{
      backgroundImage: `url(${bg})`
    }} className="hero min-h-screen banner-container">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className='banner-img' src={chair} />

        <div className='mr-[121px]'>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;