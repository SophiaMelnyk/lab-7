import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0,
      film1Color: "white",
      film2Color: "white",
      film3Color: "white",
    };
  }

  changeStyle = (elementId, selector) => {
    const { clickCounter } = this.state;
    if (clickCounter % 2 === 0) {
      this.setState((prevState) => ({
        [elementId]: prevState[elementId] === "lightblue" ? "white" : "lightblue",
      }));
    } else {
      this.setState((prevState) => ({
        [selector]: prevState[selector] === "lightcoral" ? "white" : "lightcoral",
      }));
    }
    this.setState({ clickCounter: clickCounter + 1 });
  };

  render() {
    const { film1Color, film2Color, film3Color } = this.state;

    return (
      <div>
        <p id="birth-info">
          Дата та місце народження: 2 липня, 2005 року, с. Антонівка, Вараський район, Рівненська область
        </p>
        <p id="education-info">
          Освіта: Антонівський ліцей, с. Антонівка, Вараський район, Рівненська область;
          <br />
          НТУУ "КПІ", м. Київ
        </p>

        <h3 id="hobbies">Хоббі:</h3>
        <ul>
          <li>Малювання</li>
          <li>Читання</li>
          <li>Спорт</li>
          <li>Готування</li>
        </ul>

        <h3>Улюблені фільми:</h3>
        <ol>
          <li id="film1" style={{ backgroundColor: film1Color }}> "Ла Ла Ленд", 2016</li>
          <li id="film2" style={{ backgroundColor: film2Color }}> "Anyone But You", 2023</li>
          <li id="film3" style={{ backgroundColor: film3Color }}> "Dead Poets Society", 1989</li>
          <li id="film4"> "The Devil Wears Prada", 2006</li>
        </ol>

        <h3>Улюблене місто:</h3>
        <p>
          Львів — це одне з найстаріших та найкрасивіших міст України, відоме своєю багатою історією, архітектурою і
          культурою. Заснований у середині XIII століття, Львів є справжнім музеєм під відкритим небом. Його вузькі
          середньовічні вулиці, чарівні площі та старовинні будівлі створюють неповторну атмосферу.
          <br />
          Однією з головних визначних пам'яток міста є площа Ринок — серце старого міста, оточене будинками, кожен з
          яких має свою історію. Тут знаходиться і знаменита Львівська ратуша, з якої відкривається захоплюючий вид на
          все місто. Архітектура Львова — це суміш готичного, ренесансного, барокового і сецесійного стилів, що робить
          його унікальним серед інших міст України.
          <br />
          Львів також відомий як культурна столиця країни. Місто багате на музеї, театри, арт-галереї та численні
          кав'ярні. Не дарма його називають "містом кави", адже тут можна знайти кав'ярні на кожному кроці, а традиція
          львівської кави тягнеться ще з австрійських часів.
          <br />
          Окрім культурної спадщини, Львів пропонує чудові природні місця для відпочинку, такі як Личаківський парк,
          Шевченківський гай та Стрийський парк. Місто ідеально підходить для прогулянок та відкриття нових цікавих
          місць.
        </p>

        <button onClick={() => this.changeStyle("film1Color", "film2Color")}>
          Змінити колір (метод getElementById())
        </button>
        <button onClick={() => this.changeStyle("film2Color", "film3Color")}>
          Змінити колір (метод querySelector())
        </button>
      </div>
    );
  }
}

export default Content;