import { useState } from 'react';
import { CardListPage } from './pages/CardListPage';
import { AddCardPage } from './pages/AddCardPages';
import { PAGE } from './constants';

export default function App() {
  const [route, setRoute] = useState(PAGE.CARD_LIST);
  const [cardList, setCardList] = useState([]);
  const addCardInfoToList = (cardInfo) => setCardList((prevList) => [...prevList, cardInfo]);

  return (
    <div className="App">
      {route === PAGE.CARD_LIST ? (
        <CardListPage cardList={cardList} setRoute={setRoute} />
      ) : (
        <AddCardPage addCardInfoToList={addCardInfoToList} route={route} setRoute={setRoute} />
      )}
    </div>
  );
}
