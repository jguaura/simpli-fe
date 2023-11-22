import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/app/components/UI/BaseSheet/BaseSheet';
import { MdDehaze } from 'react-icons/md';
import NavbarSheetContent from './NavbarSheetContent/NavbarSheetContent';

function NavbarSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <MdDehaze size='25' />
        </button>
      </SheetTrigger>
      <SheetContent>
        <NavbarSheetContent />
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSheet;
