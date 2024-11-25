import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  msg: string;
}

function ErrorMessage({ msg }: ErrorMessageProps) {
  return (
    <div className={css.error}>
      Error occured: &quot;{msg}&quot; 🙄. Please try again later 😉
    </div>
  );
}

export default ErrorMessage;
