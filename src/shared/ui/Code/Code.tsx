import { memo, useCallback } from "react";

import cls from './Code.module.scss';

import CopyIcon from '@/shared/assets/icons/copy.svg'
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button onClick={copy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
