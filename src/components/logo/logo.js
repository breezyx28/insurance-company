let Logo = ({ width, height, style, white }) => {
  return (
    <div>
      <svg
        id="Component_1_1"
        data-name="Component 1 – 1"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? '414'}
        height={height ?? '390'}
        className={style ?? ''}
        viewBox="0 0 414 390">
        <path
          id="Rectangle_1"
          data-name="Rectangle 1"
          d="M50,0H364a50,50,0,0,1,50,50v70a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V50A50,50,0,0,1,50,0Z"
          fill={white ?? '#fd7a53'}
        />
        <rect
          id="Rectangle_2"
          data-name="Rectangle 2"
          width="414"
          height="120"
          transform="translate(0 135)"
          fill={white ?? '#3ebeb0'}
        />
        <path
          id="Rectangle_3"
          data-name="Rectangle 3"
          d="M0,0H200a0,0,0,0,1,0,0V70a50,50,0,0,1-50,50H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
          transform="translate(214 270)"
          fill={white ?? '#fed10a'}
        />
        <path
          id="Rectangle_4"
          data-name="Rectangle 4"
          d="M0,0H200a0,0,0,0,1,0,0V120a0,0,0,0,1,0,0H50A50,50,0,0,1,0,70V0A0,0,0,0,1,0,0Z"
          transform="translate(0 270)"
          fill={white ?? '#00a9e5'}
        />
      </svg>
    </div>
  );
};

export default Logo;
