import React from 'react';
import NavLogo from 'assets/images/logon.jpg';

function Logo() {
  return (
    <div>
      <img src={NavLogo} alt="EDUTECH" loading="lazy" height={100} />
    </div>
  );
}

export default Logo;
