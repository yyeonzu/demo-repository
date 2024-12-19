"use client";

import { useState, useEffect, useRef } from 'react';
import ChatBotMessage from './ChatBotMessage';
import ChatInput from './ChatInput';
import ButtonOption from '@/components/ButtonOption';
import ClientMessage from '@/app/chatting/ClientMessage';
import Spinner from '@/components/Spinner';
import Card from '@/app/chatting/Card';
import Header from '@/components/Header';

const cardReplies = [
  {
    title: '스타벅스',
    description: '아이스아메리카노 Tall 1잔 무료',
    buttonText: '자세히 보기',
  },
  {
    title: '메가MGC커피',
    description: '모든 음료 10% 할인',
    buttonText: '자세히 보기',
  },
]



export default function ChattingPage() {
  const options = ['요금제 추천', '나의 혜택', '요플랜', '가장 핫한 요금제', '전체 요금제'];

  const [clientMessage, setClientMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [botReplies, setBotReplies] = useState<
    { title: string; description: string; buttonText: string }[]
  >([]);
  const [botRepliesFaq, setBotRepliesFaq] = useState<
    { title: string; description: string; buttonText: string }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [botReplies]);

  const handleCardButtonClick = (title: string) => {
    alert(`"${title}"의 자세한 정보를 확인합니다.`);
  };

  const handleButtonOptionClick = (option: string) => {
    setTimeout(() => {
      setBotRepliesFaq([{ title: option, description: `${option}에 대한 혜택입니다.`, buttonText: '자세히 보기' }]);
    }, 500);
  };

    const handleSendMessage = (message: string) => {
      setClientMessage(message);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsWaiting(true);
        setBotReplies(cardReplies);
      }, 2000);
    };
    return (
      <>
        <div className="flex flex-col h-screen bg-purple-100 overflow-auto">
          <Header logoSrc="/images/yoplan.png" altText="로고" />
          <div className="flex-grow flex-col w-full p-4 space-y-4 overflow-y-auto overflow-x-hidden">
            <ChatBotMessage message="무엇을 도와드릴까요?" />
            <div className="flex flex-wrap w-full items-center justify-center gap-2">
              {options.map((option) => (
                <ButtonOption key={option} label={option} onClick={() => handleButtonOptionClick(option)} />
              ))}
            </div>
            {botRepliesFaq.map((reply, index) => (
              <Card
                key={index}
                title={reply.title}
                description={reply.description}
                buttonText={reply.buttonText}
                onButtonClick={() => handleCardButtonClick(reply.title)}
              />
            ))}
            {clientMessage && <ClientMessage message={clientMessage} />}
            {isLoading && <Spinner />}
            {isWaiting && <ChatBotMessage message="카페에서 사용 가능한 혜택은 다음과 같습니다." />}
            <div className="flex flex-wrap w-full items-center justify-start gap-2">
              {botReplies.map((reply, index) => (
                <Card
                  key={index}
                  title={reply.title}
                  description={reply.description}
                  buttonText={reply.buttonText}
                  onButtonClick={() => handleCardButtonClick(reply.title)}
                />
              ))}
            </div>
            <div ref={messagesEndRef} />
          </div>
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </>
    );
}
