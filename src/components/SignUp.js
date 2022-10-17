import React, { useState, useEffect } from "react";
const SignUp = ({ styles }) => {
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
  const [step, setStep] = useState(0);
  const [checkItems, setCheckItems] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPW1, setUserPW1] = useState("");
  const [userPW2, setUserPW2] = useState("");
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      //단일선택시 배열에 추가
      setCheckItems((prev) => [...prev, id].sort((a, b) => a - b));
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
      idArray.sort((a, b) => a - b);
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제시
      setCheckItems([]);
    }
  };
  const submitSignUp = (e) => {
    e.preventDefault();
    if (step == 0) {
      requiredCheck(data, checkItems)
        ? setStep(1)
        : alert("필수항목 체크를 해주세요.");
    } else if (step == 1) {
      alert("핸드폰 인증을 해주세요.");
    } else if (step == 2) {
      alert("회원가입 전송");
    }
  };
  const requiredCheck = (arr1, arr2) => {
    let required = [];
    arr1.forEach((v) => {
      v.isRequired && required.push(v.id);
    });
    const newArr = required.filter((x) => arr2.includes(x));
    const result = required.every((v, i) => {
      return v == newArr[i];
    });
    return result;
  };
  const iptChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name == "email") {
      setUserEmail(value);
    } else if (name == "pw1") {
      setUserPW1(value);
    } else if (name == "pw2") {
      setUserPW2(value);
    }
  };
  const authPhone = () => {
    alert("핸드폰 인증");
    setStep(2);
  };
  return (
    <>
      <div id={styles.SignUp}>
        <h2 className={styles.title}>
          <span>{step == 0 ? "환영합니다!" : "회원가입"}</span>
        </h2>
        <form onSubmit={submitSignUp}>
          <fieldset className="step0">
            {step == 0 ? (
              <>
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
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  value={userEmail}
                  onChange={iptChange}
                  placeholder="이메일"
                />
                <input
                  type="password"
                  name="pw1"
                  value={userPW1}
                  onChange={iptChange}
                  placeholder="비밀번호입력"
                />
                <input
                  type="password"
                  name="pw2"
                  value={userPW2}
                  onChange={iptChange}
                  placeholder="비밀번호확인"
                />
                <button
                  type="button"
                  onClick={authPhone}
                  className={styles.btnAuth}
                >
                  휴대폰인증
                </button>
              </>
            )}
            <button type="submit" className={styles.btnSubmit}>
              {step == 0 ? "다음" : "완료"}
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SignUp;
