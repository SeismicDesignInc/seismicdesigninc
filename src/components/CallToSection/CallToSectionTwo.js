import Link from 'next/link';
import React from 'react';

const CallToSectionTwo = ({
  className = '',
  btnClassName = 'btn-style-two',
  headerTitle
}) => {
  return (
    <section className={`call-to-section-two ${className}`}>
      <h2 className='text-center m-0 p-2'>{headerTitle}</h2>
    </section>
  );
};

export default CallToSectionTwo;
