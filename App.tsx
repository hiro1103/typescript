import { ChangeEvent, useState, FC } from "react";
import styled from "styled-components";

export const App: FC = () => {
  // テキストボックスstate
  const [text, setText] = useState<string>("")
  //メモ一覧state
  const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容をstateに設定
  const onCangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  //[追加]ボタン押下時
  const onClickAdd = () => {
    //state変更を正常に検知させるため新たなる配列を生成
    const newMemo = [...memos];
    //テキストボックスの入力内容をメモ配列に追加
    newMemo.push(text);
    setMemos(newMemo);

    // テキストボックスを空に
    setText("");
  };

  //[削除]ボタン押下時（何番目が押されたかを引数で受け取る）
  const onClickDelete = (index: number) => {
    //state変更を正常に検知させるため新たなる配列を用意
    const newMemos = [...memos];
    //メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);

  };

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onCangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  )
}
const SButton = styled.button`
margin-left:16px;
`;

const SContainer = styled.div`
border:solid 1px #ccc;
padding: 16px;
margin:8px:
`;

const SMemoWrapper = styled.div`
display:flex;
align-items:center;
`;

