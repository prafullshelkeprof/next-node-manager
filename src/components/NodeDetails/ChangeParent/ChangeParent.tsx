import { useState } from "react";
import Button from "../../Button/Button";

interface IChangeParent {
  nodeId?: string;
  onSuccess?: () => void;
}

const ChangeParent = (props: IChangeParent) => {
  const { nodeId, onSuccess } = props;
  const [changeParent, setChangeParent] = useState<boolean>(false);
  const [newParentId, setNewParentId] = useState<string>("");

  const onParentChange = async (e: React.FormEvent<HTMLFormElement>) => {

    try {
      const response = await fetch(`http://localhost:8000/change_parent/${nodeId}`, {
        method: "POST",
        body: JSON.stringify({
          new_parent_id: newParentId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();
      onSuccess?.();
      alert(data?.message);
    } catch (err) {
      e.preventDefault();
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <Button
        className="mr-2 my-2"
        onClick={() => {
          setChangeParent(!changeParent);
        }}
      >
        Change Parent Node
      </Button>
      {changeParent && (
        <div>
          <form onSubmit={onParentChange}>
            <label>
              <span>Please add new parent Id: </span>
              <input name="newParentId" value={newParentId} onChange={(e) => setNewParentId(e.target.value)} />
            </label>
            <div className="my-2">
              <Button className="mr-2" type="submit">
                Change
              </Button>
              <Button
                disabled={!changeParent}
                onClick={() => {
                  setChangeParent(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChangeParent;
