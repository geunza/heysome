import React, { useState } from "react";
const SignUp = ({ styles }) => {
  const [step, setStep] = useState(0);
  const submitSignUp = (e) => {
    e.preventDefault();
  };
  const data = [
    {
      id: 0,
      title: "개인정보 수집 및 이용동의(필수)",
      subtitle: "",
      isRequired: true,
    },
    {
      id: 1,
      title: "E-MAIL 및 SMS 광고성 정보 수신동의(선택)",
      subtitle: "다양한 프로모션 소식 및 신규 매장 정보를 보내드립니다.",
      isRequired: false,
    },
  ];

  const [checkItems, setCheckItems] = useState([]);
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      //단일선택시 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      //단일해제시 배열에 해제
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭시 모든 데이터 배열로 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제시
      setCheckItems([]);
    }
  };
  return (
    <>
      <div id={styles.SignUp}>
        <h2 className={styles.title}>
          <span>환영합니다!</span>
        </h2>
        <form onSubmit={submitSignUp}>
          <fieldset className="step0">
            <p className="chkAll">
              <input
                type="checkbox"
                name="chkAll"
                id="chkAll"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={checkItems.length === data.length ? true : false}
              />
              <label htmlFor="chkAll">
                <span>약관 전체동의</span>
              </label>
            </p>
            <ul className={styles.chkList}>
              {data.map((data) => {
                return (
                  <li key={data.id} className={styles.chkItem}>
                    <input
                      type="checkbox"
                      name={`select-${data.id}`}
                      id={`select-${data.id}`}
                      onChange={(e) =>
                        handleSingleCheck(e.target.checked, data.id)
                      }
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(data.id) ? true : false}
                    />
                    <label htmlFor={`select-${data.id}`}>
                      <span>{data.title}</span>
                      {data.subtitle.length > 0 ? (
                        <p className={styles.desc}>{data.subtitle}</p>
                      ) : null}
                    </label>
                    <button type="button" className={styles.more}>
                      MORE
                    </button>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SignUp;
