import { useState } from "react";
import Button from "../../Button/Button";
import { NODES } from "../../Node/NodeConfig";

interface INodeDetails {
  nodeId?: string;
  onSuccess?: () => void;
}

const NodeDetails = (props: INodeDetails) => {
  const { nodeId, onSuccess } = props;
  const [addNewNode, setAddNewNode] = useState<boolean>(false);
  const [nodeTypeVal, setNodeTypeVal] = useState<string>(NODES.dev);
  const [newNodeName, setNewNodeName] = useState<string>("");
  const [preferredLang, setPreferredLang] = useState<string>("");
  const [departmentName, setDepartmentName] = useState<string>("");

  const getNodeTypesOptions = () => {
    return Object.entries(NODES).map(([key, value]) => (
      <option value={key} key={key} disabled={value === NODES.root}>
        {value}
      </option>
    ));
  };

  const onNewNodeCreation = async (e: React.FormEvent<HTMLFormElement>) => {
    const requestBody = {
      name: newNodeName,
      nodeType: nodeTypeVal,
      preferredLang: nodeTypeVal === NODES.dev ? [preferredLang] : undefined,
      departmentName:
        nodeTypeVal === NODES.manager ? [departmentName] : undefined,
    };

    try {
      const response = await fetch(
        `http://localhost:8000/add_new_node?parent_id=${nodeId}`,
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();
      alert(data?.message);

      if (onSuccess) {
        onSuccess();
      }
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
          setAddNewNode(!addNewNode);
        }}
      >
        Add Child Node
      </Button>
      {addNewNode && (
        <div>
          <form onSubmit={onNewNodeCreation}>
            <div>
              <label>
                Add New Node Name:
                <input
                  className="ml-2"
                  name="newNodeName"
                  required
                  value={newNodeName}
                  onChange={(e) => setNewNodeName(e.target.value)}
                />
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
                  onChange={(e) => setNodeTypeVal(e.target.value)}
                >
                  {getNodeTypesOptions()}
                </select>
              </label>
            </div>
            {nodeTypeVal === NODES.dev && (
              <>
                <span>Add Programming language: </span>
                <input
                  name="preferredLang"
                  required
                  value={preferredLang}
                  onChange={(e) => setPreferredLang(e.target.value)}
                ></input>
              </>
            )}
            {nodeTypeVal === NODES.manager && (
              <>
                <span>Department Name: </span>
                <input
                  name="departmentName"
                  required
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                ></input>
              </>
            )}
            <div className="my-2">
              <Button className="mr-2" type="submit">
                Add
              </Button>
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
    </div>
  );
};

export default NodeDetails;
