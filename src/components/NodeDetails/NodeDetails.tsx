import { useState } from "react";
import ReactModal from "react-modal";
import { NODES, type NodeShape } from "../Node/NodeConfig";
import Button from "../Button/Button";
import SelectNodeType from "./SelectNodeType/SelectNodeType";

interface INodeDetails {
  selectedNode: NodeShape;
  onClose?: () => void;
}
ReactModal.setAppElement("#node-manager-container");
const NodeDetails = (props: INodeDetails) => {
  const {
    onClose,
    selectedNode: { name, nodeType, departmentName, preferredLang, id, nodeHeight, parentId, parentName } = {},
  } = props;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
  const closeModal = () => {
    setModalIsOpen(false);
    onClose?.();
  };
  const getCurrentNodeFrag = () => {
    if (nodeType === NODES.manager) {
      return (
        <div>
          <span>Department Name: </span>
          {departmentName?.map((currentName, index) => {
            return <span className="mr-2" key={index}>{currentName}</span>;
          })}
        </div>
      );
    } else if (nodeType === NODES.dev) {
      return (
        <div>
          <span>Programming Language: </span>
          {preferredLang?.map((currentLang, index) => {
            return <span className="mr-2" key={index}>{currentLang}</span>;
          })}
        </div>
      );
    }
    return <></>;
  };

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Node Modal"
        className="text-gray-950 w-1/2 m-auto bg-lime-50 p-12"
      >
        <div className="flex justify-between">
          <h2>Node Name: {name}</h2>
          <Button onClick={closeModal}>close</Button>
        </div>
        <h3>Node Id: {id}</h3>
        <p>Node type: {nodeType}</p>
        <p>Node height: {nodeHeight}</p>
        <p>Parent Node: {parentName}</p>
        <p>Parent Node Id: {parentId}</p>
        {getCurrentNodeFrag()}
        <SelectNodeType />
      </ReactModal>
    </div>
  );
};
export default NodeDetails;
