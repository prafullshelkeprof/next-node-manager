import { useState } from "react";
import ReactModal from "react-modal";
import { NODES, type NodeShape } from "../Node/NodeConfig";
import Button from "../Button/Button";
import SelectNodeType from "./SelectNodeType/SelectNodeType";
import ChangeParent from "./ChangeParent/ChangeParent";

interface INodeDetails {
  selectedNode: NodeShape;
  onClose?: () => void;
  isRoot: boolean;
}

ReactModal.setAppElement("#node-manager-container");

const NodeDetails = (props: INodeDetails) => {
  const { onClose, selectedNode, isRoot } = props;
  const {
    name,
    nodeType,
    departmentName,
    preferredLang,
    id,
    nodeHeight,
    parentId,
    parentName,
  } = selectedNode || {};
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
          {departmentName?.map((currentName, index) => (
            <span className="mr-2" key={index}>
              {currentName}
            </span>
          ))}
        </div>
      );
    } else if (nodeType === NODES.dev) {
      return (
        <div>
          <span>Programming Language: </span>
          {preferredLang?.map((currentLang, index) => (
            <span className="mr-2" key={index}>
              {currentLang}
            </span>
          ))}
        </div>
      );
    }
    return null;
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
          <h2 className="font-bold">Node Name: {name}</h2>
          <Button onClick={closeModal}>close</Button>
        </div>
        <h3>Node Id: {id}</h3>
        <p>Node type: {nodeType}</p>
        <p>Node height: {nodeHeight}</p>
        {!isRoot && <p>Parent Node: {parentName}</p>}
        {!isRoot && <p>Parent Node Id: {parentId}</p>}
        {getCurrentNodeFrag()}
        <SelectNodeType nodeId={id} onSuccess={closeModal} />
        {!isRoot && <ChangeParent nodeId={id} onSuccess={closeModal} />}
      </ReactModal>
    </div>
  );
};

export default NodeDetails;
