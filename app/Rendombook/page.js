'use client'
import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);


export default function Rendombook() {
  const [kotitle, setKotitle] = useState("");
  const [entitle, setEntitle] = useState("");
  const [story, setStory] = useState()
  const [cover, setCover] = useState()
  const [loading, setLoading] = useState();

  const generateChat = async () => {
    setLoading('로딩중....')
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
      <div>
        
        <h1 className="title-sub">랜덤 책 생성</h1>

        <div className="field">
          <h2>버튼을 눌러 랜덤 책 생성</h2>
          <h3>{ loading }</h3>
          <button onClick={ generateChat } className="button">생성하기</button>
          <div>
            <h3>{ kotitle }</h3>
            <h3>{ entitle }</h3>
            <img src={ cover }/>
            <h4>{ story }</h4>
          </div>
        </div>
  
      </div>
    )
  }