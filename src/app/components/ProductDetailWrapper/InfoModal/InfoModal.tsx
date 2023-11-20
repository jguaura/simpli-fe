import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../../Shared/Shadcn/BaseDialog/BaseDialog';
import InfoModalContent from './InfoModalForm/InfoModalForm';

function InfoModal() {
  return (
    <Dialog>
      <DialogTrigger>Get more info</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            To provide you with details about the <strong>Name</strong>, please
            share your contact information with us.
          </DialogDescription>
        </DialogHeader>
        <InfoModalContent />
      </DialogContent>
    </Dialog>
  );
}

export default InfoModal;
