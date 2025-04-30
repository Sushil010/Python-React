import Loader from 'react-loader-spinner';
import React from 'react'

const Loadercomp = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  )
}

export default Loadercomp