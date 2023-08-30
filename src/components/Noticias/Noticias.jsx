import React, { useState, useEffect } from "react";
import axios from "axios";
import { News } from "../data/Data";
import Back from "../Header_Footer/Back";
import img from "../images/Noticias.jpg";
import "./Noticias.css";

const NewsCard = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicNews, setTopicNews] = useState([]);
  const [loadedNews, setLoadedNews] = useState([]);
  const [newsBatchSize, setNewsBatchSize] = useState(10);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);

  const handleCardClick = async (topic, index) => {
    setSelectedTopic(topic);
    setSelectedNewsIndex(index);

    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: topic.name,
          apiKey: "68d52a7624bf4e89a737f69db51c8039",
        },
      });

      setTopicNews(response.data.articles);
    } catch (error) {
      console.error("Error al cargar las noticias", error);
    }
  };

  const handleShowMoreClick = () => {
    const nextBatch = topicNews.slice(loadedNews.length, loadedNews.length + newsBatchSize);
    setLoadedNews(prevLoadedNews => [...prevLoadedNews, ...nextBatch]);
  };

  useEffect(() => {
    if (topicNews.length <= newsBatchSize) {
      setLoadedNews(topicNews);
    } else {
      setLoadedNews(topicNews.slice(0, newsBatchSize));
    }
  }, [topicNews, newsBatchSize]);

  return (
    <>
      <section className='news-section mb'>
        <Back name='Chismesito guiño guiño*' title='Noticias' cover={img} />
        <div className='container recent'></div>
      </section>
      <div className='container'>
        <div className='news-title'>
            <h2>Click en el contenido que desea ver</h2>
          </div>
          <div className='news-content grid5 mtop'>
            {News.map((items, index) => (
              <div
                className={`news-box ${selectedTopic === items ? 'selected-topic' : ''}`}
                key={index}
                onClick={() => handleCardClick(items)}
              >
                <img src={items.cover} alt='' className='news-image' />
                <h4>{items.name}</h4>
              </div>
            ))}
          </div>
      </div>

      {selectedTopic && (
        <div className='container'>
          <div className='news-title'>
            <h2>Noticias relacionadas con:  {selectedTopic.name}</h2>
          </div>
          <div className='news-content grid5'>
            {loadedNews.map((newsItem, index) => (
              <div
                className={`news-box ${selectedTopic.name.toLowerCase()} ${selectedNewsIndex === index ? 'selected' : ''} ${loadedNews.includes(newsItem) ? 'bordered-news' : ''}`}
                key={index}
                onClick={() => handleCardClick(newsItem, index)}
              >
                <img src={newsItem.urlToImage} alt='' className='news-image' />
                <h4>{newsItem.title}</h4>
              </div>
            ))}
          </div>

          {loadedNews.length < topicNews.length && (
            <div className='text-center'>
              <button className='btn btn-primary ver-mas-btn' onClick={handleShowMoreClick}>
                Ver más
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NewsCard;
