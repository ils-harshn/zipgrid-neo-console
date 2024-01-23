import ReactDOM from "react-dom";
import "./Modals.scss";
import OutsideClickHandler from "react-outside-click-handler";
import {
  ModalHeaderType,
  ModalWrapperType,
  SettingsModalType,
} from "./Modals.types";
import { CrossSvg } from "../../assets/svgs";
import Button from "../Buttons";
import { useSelector } from "react-redux";
import { useAuthLogoutMutation } from "../../api/auth/queryHooks";
import webTokenStorer from "../../webStorer";
import { useNavigate } from "react-router-dom";
import routes from "../../router/routes";
import Select from "../Selects/Selects";
import { useState } from "react";

const ModalWrapper: React.FC<ModalWrapperType> = ({
  isOpen,
  className = "",
  children,
  onClickOutside,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`modal-overlay ${className}`}>
      <OutsideClickHandler onOutsideClick={onClickOutside}>
        <div className="modal">{children}</div>
      </OutsideClickHandler>
    </div>,
    document.body
  );
};

const ModalHeader: React.FC<ModalHeaderType> = ({ title, onClickClose }) => {
  return (
    <div className="modal-header">
      <div className="modal-header-title">{title}</div>
      <div className="modal-cross-button" onClick={onClickClose}>
        <CrossSvg />
      </div>
    </div>
  );
};

const ModalSeperator: React.FC = () => <div className="modal-seperator"></div>;

const ChangeCommunity = () => {
  const [loading, setLoading] = useState(false);
  const user_data = useSelector(
    (reducer: any) => reducer.dataForAuthLoginReducer
  );

  const [selectedCommunity, changeSelectedCommunity] = useState({
    label: user_data.default_community.community_name,
    value: user_data.default_community.community_id,
  });

  const [blocks, setBlocks] = useState(
    user_data.all_community_details.find(
      (item: any) => item.community_id === selectedCommunity.value
    ).blocks
  );

  const [selectedBlock, setSelectedBlock] = useState<any>({
    label: `${user_data.default_community.blocks.block_name} - ${user_data.default_community.blocks.flat_no}`,
    value: user_data.default_community.blocks.houseUniqueId,
  });

  const handleSubmit = () => {
    setLoading(true);
    webTokenStorer.changeCommunity(
      selectedCommunity.value,
      selectedBlock.value
    );
    window.location.reload();
  };

  return (
    <>
      <div className="change-communtiy-button">
        <h4>Change Community</h4>
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Wait" : "Save"}
        </Button>
      </div>
      <div className="default-community-select">
        <div className="title">Select Community</div>
        <div className="selector">
          <Select
            placeholder="Select Society"
            options={user_data.all_community_details.map((item: any) => ({
              label: item.community_name,
              value: item.community_id,
            }))}
            defaultSelected={{
              label: user_data.default_community.community_name,
              value: user_data.default_community.community_id,
            }}
            onSelect={(data: any) => {
              let newBlocks = user_data.all_community_details.find(
                (item: any) => item.community_id === data.value
              ).blocks;
              changeSelectedCommunity(data);
              setBlocks(newBlocks);

              if (data.value === user_data.default_community.community_id) {
                setSelectedBlock({
                  label: `${user_data.default_community.blocks.block_name} - ${user_data.default_community.blocks.flat_no}`,
                  value: user_data.default_community.blocks.houseUniqueId,
                });
              } else {
                setSelectedBlock({
                  label: `${newBlocks?.[0].block_name} - ${newBlocks?.[0].flat_no}`,
                  value: newBlocks?.[0].houseUniqueId,
                });
              }
            }}
          />
        </div>
      </div>
      <div className="default-block-select">
        <div className="title">Select Block</div>
        <div className="selector">
          <Select
            key={blocks?.[0].houseUniqueId}
            placeholder="Select Block"
            options={blocks.map((item: any) => ({
              label: `${item.block_name} - ${item.flat_no}`,
              value: item.houseUniqueId,
            }))}
            defaultSelected={selectedBlock}
            onSelect={(data: any) => {
              setSelectedBlock(data);
            }}
          />
        </div>
      </div>
    </>
  );
};

const LogoutUser: React.FC = () => {
  const navigate = useNavigate();

  const user_data = useSelector(
    (reducer: any) => reducer.dataForAuthLoginReducer
  );

  const { mutate, isLoading } = useAuthLogoutMutation({
    onSuccess: () => {
      webTokenStorer.removeToken();
      navigate(routes.LOGIN);
    },
    onError: () => {
      alert("Someting went wrong, press ok to reload page");
      window.location.reload();
    },
  });

  return (
    <>
      <div className="logout-from-community">
        {user_data.default_community.community_name}
      </div>
      <div className="logout-button-container">
        <Button
          textcase="none-text-case"
          onClick={() => mutate()}
          disabled={isLoading}
          varient="secondary"
        >
          {isLoading ? "Wait.." : "Logout"}
        </Button>
      </div>
    </>
  );
};

export const SettingsModal: React.FC<SettingsModalType> = ({
  isOpen,
  onClickOutside,
  onClickClose,
}) => {
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        className="settings-modal-overlay"
        onClickOutside={onClickOutside}
      >
        <ModalHeader onClickClose={onClickClose} title="Settings" />
        <ModalSeperator />
        <div className="change-community">
          <ChangeCommunity />
        </div>
        <ModalSeperator />
        <div className="logout">
          <LogoutUser />
        </div>
      </ModalWrapper>
    </>
  );
};
