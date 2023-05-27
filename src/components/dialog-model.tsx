import { useRef } from "react";

const DialogModel = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);
  const selectElRef = useRef<HTMLSelectElement>(null);
  const outputBoxRef = useRef<HTMLOutputElement>(null);

  const handleDialogClose = () => {
    outputBoxRef.current!.value =
      dialogRef.current!.returnValue === "default"
        ? "No return value."
        : `ReturnValue: ${dialogRef.current!.returnValue}.`; // Have to check for "default" rather
  };

  const handleConfirmButtonClose = (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault(); // We don't want to submit this fake form
    dialogRef.current!.close(selectElRef.current!.value); // Have to send the select box value here.
  };

  return (
    <div>
      <dialog onClose={handleDialogClose} ref={dialogRef}>
        <form>
          <p>
            <label>
              Favorite color:
              <select
                ref={selectElRef}
                onChange={() => {
                  confirmBtnRef.current!.value = selectElRef.current!.value;
                }}
              >
                <option value="default">Choose…</option>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
              </select>
            </label>
          </p>
          <div>
            <button value="cancel" formMethod="dialog">
              Cancel
            </button>
            <button
              ref={confirmBtnRef}
              onClick={handleConfirmButtonClose}
              value="default"
            >
              Confirm
            </button>
          </div>
        </form>
      </dialog>
      <p>
        <button onClick={() => dialogRef.current!.showModal()}>
          Show the dialog
        </button>
      </p>
      <output ref={outputBoxRef}></output>
    </div>
  );
};

export default DialogModel;
