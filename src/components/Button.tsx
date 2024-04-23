import { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    primary?: boolean;
}
function Button({ children, primary, ...rest }: ButtonProps) {
    const btnClass = classNames(rest.className,'inline-flex items-center px-8 py-1.5',{
        'border border-slate-900 bg-slate-900 text-white transition-all hover:bg-transparent hover:text-slate-900': primary
    })
    return <button {...rest} className={btnClass} type='button'>{children}</button>
}

export default Button;