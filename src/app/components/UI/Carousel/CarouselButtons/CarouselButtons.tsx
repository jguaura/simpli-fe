'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export function DotButton({ ...props }: DotButtonProps) {
  const { selected, onClick } = props;

  return <button className={`h-2 w-2 rounded-full bg-grey-400 ${selected && 'bg-grey-800'}`} type="button" onClick={onClick} />;
}

interface PrevNextButtonProps {
  enabled: boolean;
  onClick: () => void;
}

export function PrevButton({ ...props }: PrevNextButtonProps) {
  const { enabled, onClick } = props;

  return (
    <button className="disabled:opacity-40 absolute left-2.5 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center" onClick={onClick} disabled={!enabled}>
      <MdKeyboardArrowLeft />
    </button>
  );
}

export function NextButton({ ...props }: PrevNextButtonProps) {
  const { enabled, onClick } = props;

  return (
    <button className="disabled:opacity-40 absolute right-2.5 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center" onClick={onClick} disabled={!enabled}>
      <MdKeyboardArrowRight />
    </button>
  );
}
