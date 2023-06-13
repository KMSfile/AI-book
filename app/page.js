'use client'
import './globals.css'
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);


export default function Rendombook() {
  const [kotitle, setKotitle] = useState("AI가 만드는 소설책!");
  const [entitle, setEntitle] = useState("Rendom Book");
  const [story, setStory] = useState()
  const [cover, setCover] = useState()
  const [loading, setLoading] = useState('이미지 로딩중..');

  const generateChat = async () => {
    setLoading('스토리 로딩중....')
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: "소설 작성해줘\n한글 제목: \n영어 제목: \n내용: \n위의 양식으로 작성해줘 내용은 한국어로 작성해줘"}],
    });
    const content = completion.data.choices[0].message['content']

    const start1 = content.indexOf(": ") + 2;
    const end1 = content.indexOf("\n", start1);
    const ko = content.slice(start1, end1);
    setKotitle(ko);
    console.log(ko);

    const start2 = content.indexOf("영어 제목: ") + 7;
    const end2 = content.indexOf("\n", start2);
    const en = content.slice(start2, end2);
    setEntitle(en)
    console.log(en)

    const start3 = content.indexOf("내용: ") + 4;
    const end3 = content.length;
    const st = content.slice(start3, end3);
    setStory(st)  
    console.log(st)
  };
  
  useEffect(()=>{
    const generateImage = async () => {
      setLoading("이미지 로딩중..");
      const completion = await openai.createImage({
        prompt: entitle,
        n: 1,
        size: "512x512"
      });
      const image = completion.data.data[0].url;
      setCover(image);
      console.log(image);
    };
    generateImage();
  },[entitle]);

  useEffect(() => {
    setLoading("로딩완료!");
  }, [cover]);

  return (
    <div className="container">
      <div className='divbutton'>
       <button onClick={ generateChat } className="button">생 성 하 기</button>
      </div>

      <div className="box1">
        <h3>표지</h3>
        <h2>{ kotitle }</h2>
        <h3>{ entitle }</h3>
        <img className='img' alt="cover" src={ cover }/>
        <h3>{ loading }</h3>
      </div>

      <div className="box2">
        <div className='divstory'>
        <h3>내용</h3>
         <h4>{ story }</h4>
        </div>
      </div>
    </div>
  )
}
