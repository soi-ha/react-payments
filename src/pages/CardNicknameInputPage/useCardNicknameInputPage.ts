import { FormEventHandler } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useInput from '../../utils/hooks/useInput';
import { useCardsContext } from '../../domain/context/CardsContext';

const useCardNicknameInputPage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const { cards, modifyCardNickname } = useCardsContext();
  const [nickname, handleNicknameChange] = useInput('');
  const card = cards.find((card) => card.id === cardId);

  const handleNicknameSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (nickname === '') {
      navigate(`/waiting/${cardId}`);
      return;
    }

    if (cardId) {
      modifyCardNickname(cardId, nickname);
      navigate(`/waiting/${cardId}`);
    }
  };

  return {
    nickname,
    card,
    handleNicknameSubmit,
    handleNicknameChange,
  };
};

export default useCardNicknameInputPage;