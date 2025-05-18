const Button = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;

