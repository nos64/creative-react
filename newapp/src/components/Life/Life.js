import React from "react";

export default class Life extends React.Component {
  constructor(props) { //Запускается только при создании (инициализации) компонента
    console.clear();
    console.log('constructor');
    console.log(props);
    super();
    this.state = {
      s1 : 0
    }
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1 : val});
  }
 // Статический метод вызывается перед рендерингом компонента
  static getDerivedStateFromProps(props, state) {
    console.log('get derived')
    return null;
    // return ({s1 : props.arg})
  }
// Запускается один раз при отрисовке после монтирования компонента
  componentDidMount() {
    console.log('componentDidMount')
  }
  //Компонент был обновлен 
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  //Dspsdftncz gthtl elfktybtv rjvgjytynf
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  //При обновлении state перезапустился только render и компонент перерисовался
  render() {
    console.log('render1');
    return (
      <>
        {console.log('render2')}
        <div>
          <button onClick = {this.buttonHandler}>Push</button>
        </div>
        <div>
          {this.state.s1}
        </div>
      </>
    )
  }
}

