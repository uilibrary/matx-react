import useSettings from 'app/hooks/useSettings';

const MatxLogo = ({ className }) => {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <svg
      width="24px"
      height="24px"
      className={className}
      viewBox="0 0 240 239"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="logo"
          transform="translate(120.500000, 98.000000) rotate(-270.000000) translate(-120.500000, -98.000000) translate(-21.000000, -35.000000)"
        >
          <g
            id="Group"
            transform="translate(141.500000, 133.000000) rotate(90.000000) translate(-141.500000, -133.000000) translate(9.000000, -8.000000)"
          >
            <g
              id="Path-4-Copy"
              transform="translate(132.242532, 149.243361) rotate(-135.000000) translate(-132.242532, -149.243361) translate(38.742532, 55.743361)"
            >
              <g id="path-1-link" fill="#000000">
                <polygon
                  id="path-1"
                  points="136.269985 0.8695976 186.615824 50.367072 186.615824 186.98041 50.7100649 186.98041 0.4346189 136.704964"
                ></polygon>
              </g>
              <g id="path-1-link" fill={theme.palette.primary.light}>
                <polygon
                  id="path-1"
                  points="136.269985 0.8695976 186.615824 50.367072 186.615824 186.98041 50.7100649 186.98041 0.4346189 136.704964"
                ></polygon>
              </g>
            </g>
            <polygon
              id="Path-3"
              fill={theme.palette.primary.light}
              points="13 238.415212 13 0 249.898437 238.415212"
            ></polygon>
            <polygon
              id="Path-4"
              fill={theme.palette.primary.main}
              points="252.486992 0 252.486992 238.799226 13 238.799226"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MatxLogo;
