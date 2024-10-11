import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../common/header-simple';

// ----------------------------------------------------------------------

export default function CompactLayout({ children, noHeader = false }) {
  return (
    <>
      {
        !noHeader && <Header />
      }
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3cpath d='M-148.79 4.79 a153.58 153.58 0 1 0 307.16 0 a153.58 153.58 0 1 0 -307.16 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-103.83 -40.17 a63.66 63.66 0 1 0 127.32 0 a63.66 63.66 0 1 0 -127.32 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-227.38 83.38 a310.76 310.76 0 1 0 621.52 0 a310.76 310.76 0 1 0 -621.52 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1954.388%2c490.38C2049.155%2c488.382%2c2148.457%2c471.651%2c2201.123%2c392.841C2259.397%2c305.639%2c2266.283%2c191.402%2c2215.512%2c99.629C2163.19%2c5.051%2c2062.382%2c-57.604%2c1954.388%2c-53.157C1852.721%2c-48.97%2c1779.158%2c31.725%2c1728.035%2c119.703C1676.588%2c208.239%2c1635.582%2c316.248%2c1688.948%2c403.64C1740.943%2c488.788%2c1854.642%2c492.483%2c1954.388%2c490.38' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1901.466%2c449.172C1987.104%2c449.374%2c2058.968%2c387.072%2c2096.808%2c310.247C2130.582%2c241.677%2c2110.153%2c165.165%2c2074.707%2c97.445C2035.591%2c22.713%2c1985.811%2c-63.846%2c1901.466%2c-62.962C1817.839%2c-62.085%2c1773.012%2c26.825%2c1734.403%2c101.012C1699.764%2c167.571%2c1675.252%2c241.682%2c1707.713%2c309.33C1744.645%2c386.296%2c1816.098%2c448.971%2c1901.466%2c449.172' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1518.47 41.52 a227.05 227.05 0 1 0 454.1 0 a227.05 227.05 0 1 0 -454.1 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M149.704%2c1201.42C218.645%2c1201.338%2c284.032%2c1170.791%2c321.025%2c1112.616C361%2c1049.751%2c375.869%2c969.15%2c338.315%2c904.809C301.004%2c840.885%2c223.433%2c812.585%2c149.704%2c819.097C85.711%2c824.749%2c43.596%2c878.264%2c11.146%2c933.708C-21.773%2c989.954%2c-52.283%2c1055.148%2c-22.327%2c1113.026C9.434%2c1174.393%2c80.605%2c1201.502%2c149.704%2c1201.42' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M206.892%2c1289.514C292.163%2c1293.384%2c382.817%2c1270.978%2c427.764%2c1198.412C474.688%2c1122.655%2c462.312%2c1026.322%2c417.689%2c949.188C373.139%2c872.181%2c295.841%2c818.328%2c206.892%2c816.621C115%2c814.858%2c23.971%2c859.26%2c-18.398%2c940.821C-58.22%2c1017.479%2c-28.664%2c1107.268%2c18.215%2c1179.825C60.528%2c1245.316%2c129.001%2c1285.979%2c206.892%2c1289.514' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M160.007%2c1203.084C224.715%2c1202.85%2c284.994%2c1170.869%2c318.574%2c1115.556C353.503%2c1058.022%2c357.295%2c987.667%2c327.394%2c927.366C293.601%2c859.216%2c235.972%2c799.734%2c160.007%2c795.779C77.972%2c791.508%2c-3.805%2c834.745%2c-40.561%2c908.209C-74.499%2c976.042%2c-43.219%2c1053.995%2c-0.561%2c1116.711C36.073%2c1170.571%2c94.869%2c1203.32%2c160.007%2c1203.084' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1579.8 844.2 a104.4 104.4 0 1 0 208.8 0 a104.4 104.4 0 1 0 -208.8 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1621.54 802.47 a20.93 20.93 0 1 0 41.86 0 a20.93 20.93 0 1 0 -41.86 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1467.04 956.96 a329.92 329.92 0 1 0 659.84 0 a329.92 329.92 0 1 0 -659.84 0z' fill='rgba(26%2c 86%2c 151%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`
        }}
      >


        <Container component="main" >
          <Stack
            sx={{
              py: 12,
              m: 'auto',
              maxWidth: '75vw',
              minHeight: '100vh',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

CompactLayout.propTypes = {
  children: PropTypes.node,
  noHeader: PropTypes.bool,
};
