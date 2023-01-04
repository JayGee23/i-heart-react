import HeartLogo from '../assets/heart.svg';

const Heart = (props) => {
    return (
      <div className='heart'>
        <img className='heart-img' alt='heart' src={HeartLogo} />
        <p className='heart-message'>{props.msg}</p>
      </div>
    )
  }

export default Heart;