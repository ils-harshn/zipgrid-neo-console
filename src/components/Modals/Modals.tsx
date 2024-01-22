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

const ModalSeperator = () => <div className="modal-seperator"></div>;

export const SettingsModal: React.FC<SettingsModalType> = ({
  isOpen,
  onClickOutside,
  onClickClose,
}) => {
  const navigate = useNavigate();
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

  const user_data = useSelector(
    (reducer: any) => reducer.dataForAuthLoginReducer
  );
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        className="settings-modal-overlay"
        onClickOutside={onClickOutside}
      >
        <ModalHeader onClickClose={onClickClose} title="Settings" />
        <ModalSeperator />
        <div className="logout">
          <div className="logout-from-community">
            {user_data.default_community.community_name}
          </div>
          <div className="logout-button-container">
            <Button
              textcase="none-text-case"
              onClick={() => mutate()}
              disabled={isLoading}
            >
              {isLoading ? "Wait.." : "Logout"}
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};
