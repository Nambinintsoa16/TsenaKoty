
import './LoginHtml.css';

interface ContainerProps { }

const LoginHtml: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Tsena koty</strong>
      <div className='input-cont'>
         <label htmlFor="user">Code client</label>
        <input type="text" id ="user" className='use input'/>
      </div>
      <div className='input-cont'>
         <label htmlFor="user">Mot de passe</label>
         <input type="password" id="pass" className='pass input'/>
      </div>
      <div className='input-cont'>
      <button className='login-button'>Se connecter</button>
      </div>
    </div>
  );
};

export default LoginHtml;
