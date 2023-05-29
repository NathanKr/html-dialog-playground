import { useRef } from "react";

const DialogModelSimple = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <dialog ref={dialogRef}>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
      <p>
        <button onClick={() => dialogRef.current!.showModal()}>
          Show the dialog
        </button>
      </p>
    </div>
  );
};

export default DialogModelSimple;
