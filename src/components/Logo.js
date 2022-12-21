import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import logo from '../assets/img/hello-ca-logo.svg'

const Logo = () => {
  return (
    <Link
      href='/'
      underline='none'
      title='Go to Home'
    >
      <Box
        component='img'
        src={`${logo}`}
        alt='Hello CA - Get CA advice on call'
        loading='lazy'
        width='230px'
        sx={{
          mb: 1
        }}
      />
    </Link>
  )
}

export default Logo