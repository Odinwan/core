import { createState } from '@core/RXContextCore/useContextSubscriber';

const [useCRUDIsOpen] = createState<boolean>(false);

const useCRUDUserModal = () => {
  return {
    useCRUDIsOpen,
  };
};

export default useCRUDUserModal;
