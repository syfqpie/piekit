import { ButtonHTMLAttributes } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';

export declare const Button: React.FC<ButtonProps>;

export declare type ButtonProps = TestComponentMixin & ButtonHTMLAttributes<HTMLButtonElement> & {
    alignment?: 'left' | 'center' | 'right';
    appearance?: 'solid' | 'outline';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'success' | 'error';
    full?: boolean;
};

export declare const Card: React.FC<CardProps>;

export declare type CardProps = TestComponentWithChildrenMixin & HTMLAttributes<HTMLDivElement>;

export declare const FormInput: React.FC<FormInputProps>;

export declare type FormInputProps = TestComponentMixin & InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    hasError?: boolean;
    errorMessages?: string[];
};

declare type TestComponentMixin = {
    testId?: string;
};

declare type TestComponentWithChildrenMixin = TestComponentMixin & PropsWithChildren;

export { }
