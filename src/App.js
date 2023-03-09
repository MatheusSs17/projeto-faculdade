import './App.css';
import logo from "./zup.png"

function App() {
  return (
    <div className="App">
      <section>
        <div className='slogan'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='form-box'>
          <div className='form-value'>
            <form action=''>
              <h2>LOGIN</h2>
              <div className='inputbox'>
                <ion-icon name="mail-outline"></ion-icon>
                <input type={'email'} required></input>
                <label>Email</label>
              </div>
              <div className='inputbox'>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type={'password'} required></input>
                <label>Password</label>
              </div>
              <div className='forget'>
                <label><input type={'checkbox'}>
                </input>Remember Me</label>
                <a href='teste'>Forget Password</a>
              </div>
              <button>Log in</button>
              <div className='register'>
                <p>Don't have a account <a href='teste'>Register</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
