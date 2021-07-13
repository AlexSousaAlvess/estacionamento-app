import React from 'react';

import Container from '@material-ui/core/Container';

interface Props {
  children: {};
}

const ContainerUI = (props: Props) => {
  const {children} = props;
  return (
    <>
      <Container maxWidth="sm">
        {children}
      </Container>
    </>
  );
}

export default ContainerUI;