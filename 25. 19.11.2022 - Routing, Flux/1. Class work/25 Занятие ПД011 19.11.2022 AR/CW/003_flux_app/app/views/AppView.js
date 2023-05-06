import React from "react";

// Класс AppView представляет компонент верхнего уровня, в котором выводится список.
// Каждый элемент списка представлен отдельным компонентом Phone.
// Отдельные компоненты также можно было бы поместить в отдельные файлы,
// но для простоты разместим их в одном файле.

class AppView extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItem: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onInputChange(e){
        this.setState({newItem:e.target.value});
    }

    onClick(e){
        if(this.state.newItem){
            this.props.onAddItem(this.state.newItem);
            this.setState({newItem:" "});
        }
    }

    render(){
        let remove = this.props.onRemoveItem;

        return <div>
            <input type="text" value={this.state.newItem} onChange={this.onInputChange} />
            <button onClick={this.onClick}>Добавить</button>
            <h2>Список смартфонов</h2>
            <ul>
                {
                    this.props.phones.map((item) => <li><Phone key={item} text={item} onRemove={remove} /></li>)
                }
            </ul>
        </div>;
    }
}

class Phone extends React.Component{

    constructor(props){
        super(props);
        this.state = {text: props.text};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onRemove(this.state.text);
    }

    render(){
        return <div>
            <p>
                <b>{this.state.text}</b> &nbsp;&nbsp;
                <button onClick={this.onClick}>Удалить</button>
            </p>
        </div>;
    }
}

export default AppView;