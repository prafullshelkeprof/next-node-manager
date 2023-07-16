import { useState } from "react";
import { NODES, type TNODES } from "../../Node/NodeConfig";
import Button from "../../Button/Button";

const NodeDetails = () => {
  const [addNewNode, setAddNewNode] = useState<boolean>(false);
  const [nodeTypeVal, setNodeTypeVal] = useState<TNODES>();

  const getNodeTypesOptions = () => {
    let returnVal = [];
    let key: TNODES;
    for (key in NODES) {
      returnVal.push(
        <option value={key} key={Math.random()}>
          {NODES[key]}
        </option>
      );
    }
    return returnVal;
  };
  const onNewNodeCreation = () => {
    // add a new node
  }
  return (
    <div>
      {addNewNode && (
        <div>
          <form onSubmit={onNewNodeCreation}>
            <div>
              <label>
                Add New Node Name:
                <input className="ml-2" name="newNodeName" required />
              </label>
            </div>
            <div>
              <label>
                Select New Node type:
                <select
                  required
                  className="ml-2"
                  name="newNodeType"
                  value={nodeTypeVal}
                  onChange={(e) => {
                    setNodeTypeVal(e.currentTarget.value as TNODES);
                    e.preventDefault();
                  }}
                >
                  {getNodeTypesOptions()}
                </select>
              </label>
            </div>
            {nodeTypeVal === NODES.dev && (
              <>
                <span>Add Programming language: </span>
                <input name="preferredLang" multiple required></input>
              </>
            )}
            {nodeTypeVal === NODES.manager && (
              <>
                <span>Department Name: </span>
                <input name="departmentName" required multiple></input>
              </>
            )}
            <div className="my-2">
              <Button className="mr-2" type="submit">Add</Button>
              <Button
                disabled={!addNewNode}
                onClick={() => {
                  setAddNewNode(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
      <Button
        className="mr-2 my-2"
        onClick={() => {
          setAddNewNode(true);
        }}
      >
        Create New Node
      </Button>
    </div>
  );
};
export default NodeDetails;
