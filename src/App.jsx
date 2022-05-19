// import logo from './logo.svg';

import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <img src={ironhackLogo} alt='Ironhack Logo' />
          <img src={menuTop} alt='Menu' />
        </nav>
      </header>
      <body>
        <div classname='hero'>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use
            <br /> the most popular frontend library,
            <br /> and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>

        <main>
          <div className='features'>
            <div className='feature'>
              <img src={icon1} alt='icon1' />
              <h4>Declarative</h4>
              <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div className='feature'>
              <img src={icon2} alt='icon2' />
              <h4>Components</h4>
              <p>Build encapsulated components that manage their state.</p>
            </div>

            <div className='feature'>
              <img src={icon3} alt='icon3' />
              <h4>Single-Way</h4>
              <p>A set of immutable values are passed to the components.</p>
            </div>

            <div className='feature'>
              <img src={icon4} alt='icon4' />
              <h4>JSX</h4>
              <p>Statically-typed, desgined to run on modern browsers.</p>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
