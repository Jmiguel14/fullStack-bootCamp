export const Button = ({children, onHandleClick, id}) => (
    <button id={id} onClick={onHandleClick}>{children}</button>
)