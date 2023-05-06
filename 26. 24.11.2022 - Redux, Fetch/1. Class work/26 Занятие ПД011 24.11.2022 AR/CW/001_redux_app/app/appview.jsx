const React = require("react");
const connect = require("react-redux").connect;
const actions = require("./actions.jsx");
  
// Компонент PhoneForm используется для добавления нового объекта.
class PhoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.phoneInput = React.createRef();
  }
  
  onClick() {
    if (this.phoneInput.current.value !== "") {
 
      const itemText = this.phoneInput.current.value;
      this.phoneInput.current.value ="";
      return this.props.addPhone(itemText);
    }
  }
  
  render() {
    return <div className="input-group my-5">
            <input className="form-control" ref={this.phoneInput} placeholder="Смартфон для добавления..." />
            <button className="btn btn-success" onClick = {this.onClick.bind(this)}>Добавить</button>
        </div>
  }
} // class PhoneForm
  

// PhoneItem представляет отдельный элемент в списке  
class PhoneItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
                <div className="d-flex justify-content-between px-3 pb-3">
                    <b>{this.props.text}</b>
                    <button className="btn btn-warning"
                            onClick={() => this.props.deletePhone(this.props.text)}>
                        Удалить
                    </button>
                </div>
            </div>
  }
} // class PhoneItem
  
// компонент PhonesList содержит список объектов из массива phones  
class PhonesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ul className="list-group my-5">
        {this.props.phones.map(item =>
          <li className="list-group-item">
              <PhoneItem key={item}
                    text={item}
                    deletePhone={this.props.deletePhone}/>
          </li>
        )}
      </ul>
  }
} // class PhonesList
  
  
// Корневым компонентом является AppView, в который помещаются все
// остальные компоненты. Вобщем здесь идет в основном логика передачи
// данных между компонентами через объект props. В частности, чтобы
// передать все данные из props компонента AppView в компонент PhonesList,
// используется выражение {...this.props}.
class AppView extends React.Component {
  
    render() {
        return <div className="col-6 offset-1">
            <h4>Смартфоны</h4>
            <PhoneForm addPhone={this.props.addPhone}/>
            <PhonesList {...this.props} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    phones: state.get("phones")
  };
}

// связь всех частей - состояния, свойств и отображения
module.exports = connect(mapStateToProps, actions)(AppView);