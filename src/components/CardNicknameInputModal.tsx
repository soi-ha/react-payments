import React, { ChangeEvent, SetStateAction } from 'react';

import { CardNumber, InputHook } from '../type';
import Card from './Card';
import './CardNicknameInputModal.css';

type CardNicknameInputModalProps = {
  cardType: string;
  isRequesting: boolean;
  isFailed: boolean;
  isModalOpen: boolean;
  cardNumber: InputHook<CardNumber>;
  cardExpire: InputHook<string>;
  cardOwner: InputHook<string>;
  securityCode: InputHook<string>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleNickname: React.Dispatch<SetStateAction<string>>;
  submitData: (e: React.FormEvent) => void;
};

const CardNicknameInputModal = ({
  closeModal,
  cardType,
  isRequesting,
  isModalOpen,
  isFailed,
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  handleNickname,
  submitData,
}: CardNicknameInputModalProps) => {
  const modalMainMessage = () => {
    if (isRequesting) {
      return <div className="nickname-box-requesting-font">카드를 등록 중입니다!</div>;
    } else if (isFailed) {
      return <div className="failure-text">카드 등록에 실패했어요 😭 다시 시도해주세요!</div>;
    }
    return <div className="nickname-box-main-font">거의 다 왔어요!</div>;
  };

  return isModalOpen ? (
    <>
      <div
        className="input-nickname-box-backdrop"
        onClick={() => {
          closeModal(false);
        }}
      ></div>
      <div
        className="input-nickname-box"
        role="dialog"
        aria-label="카드 타입을 선택할 수 있는 모달"
      >
        {modalMainMessage()}
        <div className="card-box">
          <Card
            cardType={cardType}
            cardNumber={cardNumber.value}
            fadeCard={true}
            classname={isRequesting ? 'adding-card' : isFailed ? 'add-card-failure' : ''}
            cardOwner={cardOwner.value}
            expired={cardExpire.value}
            securityCode={securityCode.value}
          />
        </div>
        <form onSubmit={submitData}>
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleNickname(e.target.value);
            }}
            className="nickname-input"
            placeholder="카드 닉네임을 입력해주세요!"
            readOnly={isRequesting}
            autoFocus
            type="text"
            maxLength={10}
          />
          {isRequesting ?? (
            <button className="card-submit-button" type="submit">
              확인
            </button>
          )}
        </form>
      </div>
    </>
  ) : (
    <></>
  );
};

export default CardNicknameInputModal;
