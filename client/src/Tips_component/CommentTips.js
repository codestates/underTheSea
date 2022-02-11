import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const CommentForm = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  display: column;
  margin-bottom: 2px;
  font-family: "Kfont";
  /* border: 1px solid red; */
  justify-content: center;

  .comment {
    font-size: 1.35rem;
    margin-bottom: 40px;
    font-weight: bold;
    padding-left: 1%;
  }

  .writer {
    width: 80%;
    display: column;
    /* flex-direction: column; */
    margin-bottom: 15px;
  }
`;

const SmallCommentForm = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 94%;
  display: flex;
  align-items: center;
  margin: 30px 0 0 30px;
  border-bottom: 1px solid #cccccc;

  .deleteBtn {
    position: relative;
    right: 2%;
    margin-top: 4%;
  }
`;

const Comment = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  padding: 0;
  margin-top: 2px;
`;

const CommentWriter = styled.div`
  font-weight: 900;
  font-size: 1.1rem;
  width: 90%;
  height: 30%;
  /* border: 1px solid red; */
  /* margin-bottom: 20px; */
  font-family: "Kfont";
  display: flex;
  padding-top: 0.5%;
  padding-left: 1%;
  position: relative;
  /* right: 1%; */
`;

const CommentContent = styled.div`
  width: 90%;
  height: 20%;
  font-size: 1rem;
  /* border: 1px solid black; */
  margin-top: 0.5px;
  margin-bottom: 18px;
  padding-left: 1%;
  font-family: "Kfont";
`;

const CommnetDate = styled.div`
  width: 90%;
  height: 20%;
  font-size: 0.8rem;
  padding-left: 1%;
  color: #808080;
  /* border: 1px solid black; */
  margin-top: 0.5px;
`;

const WriterIcon = styled.div`
  width: 10%;
  height: 30%;
  position: relative;
  /* right: 1%; */

  .userImg {
    width: 100%;
    height: 100%;
  }
`;

const CommentInputContainer = styled.form`
  position: relative;
  width: 94%;
  height: 95%;
  /* pading: 10px */
  border: 1px solid #a7d9ff;
  border-radius: 4px;
  margin: 4% 5% 4%;
  display: column;
  justify-content: center;
  align-items: center;

  .Greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5% 0 5%;
  }

  .commentGreeting {
  }
`;
const AddCommentForm = styled.div`
  font-weight: 900;
  width: 90%;
  height: 30%;
  margin: 2% 0 1% 8%;
  font-size: 1.1rem;
  /* border: 1px solid red; */
`;
const CommentInput = styled.input`
  width: 85%;
  height: 20px;
  margin: 3% 0 1% 7%;
  border: none;
  outline: none;
  border-bottom: 1px solid #a7d9ff;
  font-size: 1.1rem;
  padding: 0 0 1% 1%;

  /* border: 1px solid red; */
`;

const AddcommentBtn = styled.button`
  position: relative;
  bottom: 8px;
  right: 2%;
  width: 65px;
  height: 25px;
  /* color: #108dee; */
  font-size: 1.1rem;
  border-radius: 4px;
  margin: 2% 0 1% 88%;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  :hover {
    filter: brightness(95%);
  }
`;

function CommentTips({
  comment,
  userName,
  handleUploadComment,
  handleDeleteComment,
}) {
  const [newComment, setNewComment] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const state = useSelector((state) => state.authReducer);
  const { isLogin } = state;

  // 댓글 작성
  const handleInputComment = (e) => {
    setNewComment({
      content: e.target.value,
    });
  };

  // 댓글 수정
  // const editComment = () => {
  //   setIsEdit(true);
  // };

  // 댓글 업로드 버튼
  const Upload = () => {
    handleUploadComment(newComment);
  };

  // 댓글 삭제 버튼
  const Delete = (e) => {
    // console.log(e.target.id);
    handleDeleteComment(e.target.id);
  };

  return (
    <>
      <CommentForm>
        <div className="comment">댓글</div>
        {comment.length === 0 ? (
          <></>
        ) : (
          comment.map((el, idx) => {
            return (
              <SmallCommentForm key={idx}>
                <Comment>
                  <WriterIcon>
                    <img className="userImg" src="/유저2.png" alt=""></img>
                  </WriterIcon>
                  <div className="writer">
                    <CommentWriter>{el.comment_user_name}</CommentWriter>
                    <CommentContent>{el.comment_content}</CommentContent>
                    <CommnetDate>
                      {el.updated_at.split("T")[0]}&nbsp;
                      {el.updated_at.split("T")[1].split(".")[0]}
                    </CommnetDate>
                  </div>
                </Comment>
                {el.isWriter ? (
                  <>
                    {/* <CommentDeleteBtn value={el.comment_id} onClick={Delete}> */}
                    <FontAwesomeIcon
                      className="deleteBtn"
                      id={el.comment_id}
                      onClick={Delete}
                      size="1x"
                      icon={faTimesCircle}
                      style={{ cursor: "pointer", color: "gray" }}
                    />
                    {/* </CommentDeleteBtn> */}
                  </>
                ) : (
                  <></>
                )}
              </SmallCommentForm>
            );
          })
        )}
      </CommentForm>
      <CommentInputContainer>
        {isLogin ? (
          <>
            <AddCommentForm>{userName}</AddCommentForm>
            <CommentInput
              type="text"
              placeholder="입력"
              onChange={handleInputComment}
            ></CommentInput>
            <AddcommentBtn onClick={Upload}>등록</AddcommentBtn>
          </>
        ) : (
          <div className="Greeting">
            <div className="commentGreeting">로그인 시 댓글이 가능합니다. </div>
          </div>
        )}
      </CommentInputContainer>
    </>
  );
}
export default memo(CommentTips);
