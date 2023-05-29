import { useRef } from "react";

const DialogNonModel = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <dialog ref={dialogRef}>
      <p>put here what ever you like</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
      <p>
        <button onClick={() => dialogRef.current!.show()}>
          Show the dialog
        </button>
      </p>
    </div>
  );
};

export default DialogNonModel;
