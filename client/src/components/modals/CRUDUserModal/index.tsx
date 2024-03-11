import { Drawer } from '@mui/material';
import React from 'react';

import useCRUDUserModal from './useCRUDUserModal';

const CRUDUserModal = () => {
  const [isOpen, setIsOpen] = useCRUDUserModal().useCRUDIsOpen().useState();

  return (
    <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
      Модалка
    </Drawer>
  );
};

export default CRUDUserModal;
