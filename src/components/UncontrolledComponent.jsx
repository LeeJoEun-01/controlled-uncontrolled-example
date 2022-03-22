import React from "react";

class UncontrolledComponents extends React.Component {
  // input을 가르키는 참조값 저장하는 방법 (1.참조값 생성)
  inputRef = React.createRef();
  
  render() {
    console.log("initial render", this.inputRef);
    return (
    <div>
      <input ref={this.inputRef} />
      <button onClick={this.click}>전송</button>
    </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값 (value) 를 꺼내서 전송한다.
    // const input = document.querySelector("#my-input");
    // console.log(input.value);  // real DOM에 직접적으로 변주를 가하거나 읽어내는 것을 지양한다 => 그래서 Ref(래퍼런스 사용!!!)

    console.log(this.inputRef.current.value)
  };
}

export default UncontrolledComponents;