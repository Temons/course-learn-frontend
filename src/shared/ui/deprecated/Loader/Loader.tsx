import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

/**
 * Old, use a new Component from redesigned folder
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames('lds-grid', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
